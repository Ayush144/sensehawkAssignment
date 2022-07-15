import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editPost:null,
    runningBlogId: 4321,
    blogHTML:"write the article titile here",
    blogTitle:"",
    blogPhotoName:"",
    blogPhotoFileURL:null,
    blogPhotoPreview:null,
    profileId: "Praneeth",
    sampleBlogCards:[
      {blogId: 1, blogAuthor:"Praneeth", blogTitle:"SenseHawk Wins Both Business and Innovation Excellence Solar Future Awards 2021", blogCoverPhoto:"https://play-lh.googleusercontent.com/ryC9ZV344h47CptgVz0YBQKxZtMRsZdUCVx_TsCZ76fyY7_9jb2djc8y3DH_w8ornB0", blogDate:"May 10, 2022", blogHTML: "“SenseHawk has sophisticated technology, strong global traction and a leadership team with deep experience in the solar industry. We are excited to back an industry-leading AI-first SaaS company which brings about step-function increases in performance, productivity and cost efficiencies for their customers,” said Anirudh Singh, Managing Director at Alpha Wave Incubation.", blogCoverPhotoName:"sensehawk.jpg"},
      {blogId: 2, blogAuthor:"Praneeth", blogTitle:"List Of 30 Cleantech Startups Working Towards Making India’s Future Sustainable", blogCoverPhoto:"https://inc42.com/wp-content/uploads/2022/04/cleantech-ft-1.jpg", blogDate:"May 12, 2022", blogHTML:"We are passionate about solar energy and believe that it is the only viable solution to climate change today. Our goal is to help solar companies streamline processes and use automation to enhance the productivity of their teams. We set out on this journey in 2018 and have helped 100+ customers in 20 countries adopt new technology to manage their sites and assets. Starting with drones in development, construction and operations, our software tools have been expanding to make site work simpler and more efficient.", blogCoverPhotoName:"tech.jpg"},
      {blogId: 3, blogAuthor:"Praneeth", blogTitle:"Bill on accused's biometrics to lend tech edge: Experts", blogCoverPhoto:"https://static.toiimg.com/thumb/msid-90528248,imgsize-87414,width-400,resizemode-4/90528248.jpg", blogDate:"May 13, 2022", blogHTML:"NEW DELHI: Even as opposition parties have raised privacy and fundamental rights concerns over the Criminal Procedure (Identification) Bill, 2022 that seeks to authorise law enforcement agencies to collect iris and retina scans and even biological samples, with some exceptions, from convicts and arrested persons, the law enforcement agencies are enthused with the move to finally replace a 100-year-old, antiquated law with a modern legislation that keeps pace with the technological advancements that have come to define criminal acts and their probe.", blogCoverPhotoName:"biometric.jpg"},
      {blogId: 4, blogAuthor:"Praneeth", blogTitle:"How 'software-over-hardware' will determine future car purchase decisions", blogCoverPhoto:"https://static.toiimg.com/thumb/msid-91151939,imgsize-1074007,width-400,resizemode-4/91151939.jpg", blogDate:"May 14, 2022", blogHTML:"Automobiles are no longer just a mode of transport. As technology makes our cars smarter, it has also changed their relationship with us and their surroundings. OEMs and car manufacturers are in a race to make future vehicles connected, autonomous, sharing and electric (CASE). And digital innovation will be the driving force behind the development of future-ready vehicles. Chinese OEM  believes that as the industry moves forward, intelligent functions integrated within vehicle driving systems and cockpits will become the key differentiators for cars. Customers will more likely base their purchase decision on the intelligence levels of their vehicles.", blogCoverPhotoName:"Automobile.jpg"},
    ],
    userBlogCards:[],
    favoriteBlogWords: new Map([
        ["Sense", [1, 2]],
        ["Hawk", [2]],
        ["new", [3]]
      ])
  },
  mutations: {
    newBlogPost(state, payload){
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload){
      state.blogTitle = payload;
    },
    fileNameChange(state, payload){
      state.blogPhotoName = payload;
    },
    addPost(state, payload){
      state.userBlogCards.push(payload);
    },
    deleteSamplePost(state, payload){    
      state.sampleBlogCards = state.sampleBlogCards.filter((post) =>{
        return post.blogId !== payload;
      });
    },
    deleteUserPost(state, payload){
      state.userBlogCards = state.userBlogCards.filter((post) =>{
        return post.blogId !== payload;
      });
    },
    setBlogState(state, payload){
      state.blogTitle = payload.blogTitle;
      state.blogHTML = payload.blogHTML;
      state.blogPhotoFileURL = payload.blogCoverPhoto;
      state.blogPhotoName = payload.blogCoverPhotoName;
    },
    increaseRunningBlogId(state){
      state.runningBlogId += 1;
      console.log(state.runningBlogId); 
    },
    createFileURL(state, payload){
      state.blogPhotoFileURL=  payload;
    },
    toggleEditPost(state, payload){
      state.editPost = payload;
    },
    addFavoriteBlogWords(state, payload){
      if(!state.favoriteBlogWords){
        state.favoriteBlogWords = new Map();
      }
      if(state.favoriteBlogWords.has(payload.word)){
        state.favoriteBlogWords.get(payload.word).push(payload.blogId);
      }else{
        state.favoriteBlogWords.set(payload.word, [payload.blogId]);
      }
      console.log(state.favoriteBlogWords);
    },
    coverPhotoChange(state, payload){
      state.sampleBlogCards.filter((post) =>{
        if(post.blogId === payload.blogId){
          post.blogTitle = payload.blogTitle;
          post.blogHTML = payload.blogHTML;
          post.blogCoverPhoto = payload.blogCoverPhoto;
          post.blogCoverPhotoName = payload.blogCoverPhotoName;
        }
      });
      state.userBlogCards.filter((post) =>{
        if(post.blogId === payload.blogId){
          post.blogTitle = payload.blogTitle;
          post.blogHTML = payload.blogHTML;
          post.blogCoverPhoto = payload.blogCoverPhoto;
          post.blogCoverPhotoName = payload.blogCoverPhotoName;
        }
      });
    },
    ChangeTitleContent(state, payload){
      state.sampleBlogCards.filter((post) =>{
        
        if(post.blogId === payload.blogId){
          post.blogTitle = payload.blogTitle;
          post.blogHTML = payload.blogHTML;
        }
      });
      state.userBlogCards.filter((post) =>{
        if(post.blogId === payload.blogId){
          post.blogTitle = payload.blogTitle;
          post.blogHTML = payload.blogHTML;
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
