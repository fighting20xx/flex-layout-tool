<template>
    <div class="container">
        <el-form label-width="220px">
            <el-form-item label="flex-direction">
                <el-select v-model="fatherOption.flexDirection">
                    <el-option v-for="(item, index) in options1" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="flex-wrap">
                <el-select v-model="fatherOption.flexWrap">
                    <el-option v-for="(item, index) in options2" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="justify-content">
                <el-select v-model="fatherOption.justifyContent">
                    <el-option v-for="(item, index) in options3" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="align-items">
                <el-select v-model="fatherOption.alignItems">
                    <el-option v-for="(item, index) in options4" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="align-content">
                <el-select v-model="fatherOption.alignContent">
                    <el-option v-for="(item, index) in options5" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
        </el-form>

        <div class="father-other-option">
            <div class="block">
                <span class="demonstration">margin</span>
                <el-slider v-model="fatherOption.margin" :min="-100" :max="100"></el-slider>{{fatherOption.margin}}
            </div>
            <div class="block">
                <span class="demonstration">padding</span>
                <el-slider v-model="fatherOption.padding" :min="-100" :max="100" ></el-slider>{{fatherOption.padding}}
            </div>
        </div>
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
		},
        computed:{

        }
	}
</script>

<style lang="less">
.father-other-option{
    .block{
        width: 100%;
        display: flex;
        text-align: right;
        line-height: 38px;
        &>:nth-child(1){
            width: 120px;
            margin-right: 5px;

        }
        &>:nth-child(2){
            flex: 1;
        }
        &>:nth-child(3){

        }
    }
}
</style>
