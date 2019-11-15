<template>
    <div class="codeShow-top">
        <div>
                <h3>父容器CSS:</h3>
                <pre class="code-show-pre">
.items {
    display: flex;
    <span v-show="isShowflexDirection">flex-direction: {{ fatherOption.flexDirection }};</span>
    <span v-show="isShowflexWrap">flex-wrap: {{ fatherOption.flexWrap }};</span>
    <span v-show="isShowjustifyContent">justify-content: {{ fatherOption.justifyContent }};</span>
    <span v-show="isShowalignItems">align-items: {{ fatherOption.alignItems }};</span>
    <span v-show="isShowalignContent">align-content: {{ fatherOption.alignContent }};</span>
    <span v-show="isShowmargin">align-content: {{ fatherOption.alignContent }};</span>
    <span v-show="isShowpading">align-content: {{ fatherOption.alignContent }};</span>

 };

                </pre>
        </div>
        <el-row>
            <el-col :span="24">
                <h3>子容器CSS:</h3>
                <pre v-for="(item, index) in itemLists" :key="index">
.item-{{ index }} {
    align-self: {{ item.alignSelf }};
    flex: {{ item.flexGrow }} {{ item.flexShrink }} {{ item.flexBasis }};
    order: {{ item.order }};
}
                </pre>
            </el-col>
        </el-row>
    </div>
</template>

<script>
	import vuexOptions from '@/mixins/vuexOptions.js'
	export default {
		mixins:[vuexOptions],
		props: {
			msg: String
		},
		data() {
			return {

			}
		},
        computed:{
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
                return  this.fatherOption.margin >0;
			},
            isShowpading:function () {
                return   this.fatherOption.padding > 0;
			},
        }
	}
</script>

<style lang="less">
.codeShow-top{
    text-align: left;
    .code-show-pre{
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .not-show-code{
        white-space:normal;
    }
}
</style>
