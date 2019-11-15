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


		/**
		 * 父容器，是否显示属性值
		 * */
		isShowflexDirection:function () {
			return 'row' !== this.fatherOption.flexDirection;
		},
		isShowflexWrap:function () {
			return 'nowrap' !== this.fatherOption.flexWrap;
		},
		isShowjustifyContent:function () {
			return 'flex-start' !== this.fatherOption.justifyContent;
		},
		isShowalignItems:function () {
			return 'stretch' !== this.fatherOption.alignItems;
		},
		isShowalignContent:function () {
			return 'stretch' !== this.fatherOption.alignContent;
		},
		isShowmargin:function () {
			return  this.fatherOption.margin !== 0;
		},
		isShowpading:function () {
			return   this.fatherOption.padding !==0;
		},


		/**
		 * 子项目，是否显示属性值
		 * */
		isShowChildMargin:function () {
			return this.childOption.margin >0;
		},
		isShowChildPadding:function () {
			return this.childOption.padding >0;
		},
	}
};
export default vuexOptionsMixin
