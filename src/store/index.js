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
			widthType: 'flex',

			flexDirection: 'row',
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			alignContent: 'stretch',
		},
		itemLists:[
			{
				flex:1,
				width:30,
				percent:33,
				order: 0,
				flexGrow: 0,
				flexShrink: 1,
				flexBasis: 'auto',
				alignSelf: 'auto'
			}, {
				flex:1,
				width:30,
				percent:33,
				order: 0,
				flexGrow: 0,
				flexShrink: 1,
				flexBasis: 'auto',
				alignSelf: 'auto'
			}, {
				flex:1,
				width:30,
				percent:33,
				order: 0,
				flexGrow: 0,
				flexShrink: 1,
				flexBasis: 'auto',
				alignSelf: 'auto'
			}
		],
	},
	mutations: {
		setFatherOption(state,option){
			state.fatherOption = option
		},
		setChildOptionn(state,option){
			state.childOption = option
		},
		setItemLists(state,option){
			state.itemLists = option
		},
	},
	actions: {},
	modules: {}
})
