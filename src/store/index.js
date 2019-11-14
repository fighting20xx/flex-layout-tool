import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		fatherOption: {
			flexDirection: 'row',
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			alignContent: 'stretch',
			margin:0,
			padding:0,
		},
		childOption: {
			itemCount: 3,
			itemWidth: 30,
			flexDirection: 'row',
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			alignContent: 'stretch',
		},
	},
	mutations: {
		setFatherOption(state,option){
			state.fatherOption = option
		},
		setChildOptionn(state,option){
			state.childOption = option
		},
	},
	actions: {},
	modules: {}
})
