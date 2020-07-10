import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    equipName: '',
    configInfo: {
      equipVal: '',
      equipInfo: [],
      medioVal: '' ,
      blockData: [],
      medioInfo: []
    }
  },
  mutations: {
    saveEquipval(state,val){
      state.configInfo.equipVal = val;
    },
    saveEquipInfo(state,val){
      state.configInfo.equipInfo = val;
    },
    saveMedioval(state,val){
      state.configInfo.medioVal = val;
    },
    saveBlockData(state,val){
      state.configInfo.blockData = val;
    },
    saveMedioInfo(state,val){
      state.configInfo.medioInfo = val;
    }
  },
  actions: {
    
  },
  modules: {

  }
})
