<template>
	<div>
		<div
			v-show="showMenu"
			class="popover"
			:style="{
				left: `${x}px`,
				top: `${y}px`
			}"
		>
			<span
				class="item"
				@mousedown.prevent="handleAction('highlight')"
			>
				Highlight
			</span>
		</div>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'SelectText',
	data () {
		return {
			x: 0,
			y: 0,
            showMenu:false,
			selectedText: ''
		}
	},
	computed: {
		highlightableEl () {
			return this.$slots.default[0].elm
		}
	},
	mounted () {
		window.addEventListener('mouseup', this.onMouseup)
	},

	beforeDestroy () {
		window.removeEventListener('mouseup', this.onMouseup)
	},

	methods: {
		onMouseup () {
			const selection = window.getSelection()
			const selectionRange = selection.getRangeAt(0)

			// Get the x, y, and width of the selection
			const { x, y, width } = selectionRange.getBoundingClientRect()

			// If width === 0 (i.e. no selection)
			// Then, hide the menu
			if (!width) {
				this.showMenu = false
				return
			}

			// Finally, if the selection is valid,
			// set the position of the menu element,
			// set selectedText to content of the selection
			// then, show the menu
			this.x = x + (width / 2)
			this.y = y + window.scrollY - 10
			this.selectedText = selection.toString();
            if(/^([A-Za-z0-9]{1,})$/.test(this.selectedText)){
                this.showMenu = true;
                return
            }
            this.showMenu = false;
			
		},
		handleAction (action) {
			this.$emit(action, this.selectedText);
		}
	},
}
</script>

<style>
.popover {
	height: 30px;
	padding: 5px 10px;
	background: #333;
	border-radius: 3px;
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(-50%, -100%);
	transition: 0.2s all;
	display: flex;
	justify-content: center;
	align-items: center;
	/* opacity */
	opacity: 0.9;
}

.popover:after {
	content: '';
	position: absolute;
	left: 50%;
	bottom: -5px;
	transform: translateX(-50%);
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #333;
}

.item {
	/* text (or icon) color before hovering */
	color: #FFF;
	cursor: pointer;
}

.item:hover {
	/* text (or icon) hover color */
	color: #ff69b4;
}

.item + .item {
	margin-left: 10px;
}
</style>