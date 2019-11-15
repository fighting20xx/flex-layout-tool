<template>
    <div class="container">
        <el-row>
            <el-col :span="24">
                <h1>父容器CSS:</h1>
                <pre>
.items {
    display: flex;
    flex-direction: {{ flexDirection }};
    flex-wrap: {{ flexWrap }};
    justify-content: {{ justifyContent }};
    align-items: {{ alignItems }};
    align-content: {{ alignContent }};
}
                </pre>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <h1>子容器CSS:</h1>
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
				flexDirection: 'row',
				flexWrap: 'nowrap',
				justifyContent: 'flex-start',
				alignItems: 'stretch',
				alignContent: 'stretch',
				options1: [
					{
						value: 'row'
					}, {
						value: 'row-reverse'
					}, {
						value: 'column'
					}, {
						value: 'column-reverse'
					}
				],
				options2: [
					{
						value: 'nowrap'
					}, {
						value: 'wrap'
					}, {
						value: 'wrap-reverse'
					}],
				options3: [
					{
						value: 'flex-start'
					}, {
						value: 'flex-end'
					}, {
						value: 'center'
					}, {
						value: 'space-between'
					}, {
						value: 'space-around'
					}],
				options4: [
					{
						value: 'stretch'
					}, {
						value: 'flex-start'
					}, {
						value: 'flex-end'
					}, {
						value: 'center'
					}, {
						value: 'baseline'
					}],
				options5: [
					{
						value: 'stretch'
					}, {
						value: 'flex-start'
					}, {
						value: 'flex-end'
					}, {
						value: 'center'
					}, {
						value: 'space-between'
					}, {
						value: 'space-around'
					}
				],
			}
		}
	}
</script>

<style lang="less">

</style>
