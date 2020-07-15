import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cc: {
      num:'',
      expmonth:'',
      expyear:''
    },
    name: {
      first:'',
      last:''
    }, 
    email:'',
    shippingAddress:null,
    billingAddress:null
  },
  mutations: {
    setAddress(state, payload) {
      if(payload.type === 'shipping') {
        state.shippingAddress = payload.address;
      } else if(payload.type === 'billing') {
        state.billingAddress = payload.address;
      } else throw new Error('Invalid address type');
    },
    setEmail(state, email) {
      state.email = email;
    },
    setName(state, name) {
      state.name.first = name.first;
      state.name.last = name.last;
    },
    setPaymentInfo(state, cc) {
      state.cc.num = cc.num;
      state.cc.expmonth = cc.expmonth;
      state.cc.expyear = cc.expyear;
    }
    
  },
  actions: {
  },
  getters: {
    cartDisplay(state) {
      return {
        name: state.name.first + ' ' + state.name.last,
        address: {
          shipping: state.shippingAddress,
          billing: state.billingAddress
        }, 
        cc: {
          num: '****',
          exp:state.cc.expmonth + '/' + state.cc.expyear
        }
      }
    }
  }
})
