import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist:[],
 
  },
  mutations: {
   
    addcart(state,payload){
      let product =state.cartlist.find(function(item){
        return item.iid===payload.iid
      })
     
      if(product){
        product.count +=1
      }else{
        payload.count=1
        payload.checked=true
        state.cartlist.push(payload)
      }
     
    }
  //   addcart(state,payload){
  //     state.cartlist.push(payload)
  //   }
   },
  actions: {
  
  },
  modules: {
  },
  getters:{

  }
})
