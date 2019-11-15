/**
 * Created by Seven on 2019/11/15.
 * project: flex-layout-tool
 * email: fighting20xx@126.com
 */

const vuexOptionsMixin ={
	computed:{
		childOption:{
			get:function () {
				return this.$store.state.childOption
			},
			set:function (v) {
				this.$store.commit('setChildOptionn',v);
			},
		},
		fatherOption:{
			get:function () {
				return this.$store.state.fatherOption
			},
			set:function (v) {
				this.$store.commit('setFatherOption',v);
			},
		},
		itemLists:{
			get:function () {
				return this.$store.state.itemLists
			},
			set:function (v) {
				this.$store.commit('itemLists',v);
			},
		},
	}
};
export default vuexOptionsMixin
