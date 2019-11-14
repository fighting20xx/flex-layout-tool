<template>
    <div class="container">
        <el-form label-width="220px">
            <el-form-item label="flex-direction">
                <el-select v-model="flexDirection">
                    <el-option v-for="(item, index) in options1" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="flex-wrap">
                <el-select v-model="flexWrap">
                    <el-option v-for="(item, index) in options2" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="justify-content">
                <el-select v-model="justifyContent">
                    <el-option v-for="(item, index) in options3" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="align-items">
                <el-select v-model="alignItems">
                    <el-option v-for="(item, index) in options4" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="align-content">
                <el-select v-model="alignContent">
                    <el-option v-for="(item, index) in options5" :label="item.value" :value="item.value"
                               :key="index"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
	export default {
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
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
