<template>
    <div class="layout-top">
        <el-row :gutter="20">
            <el-col :span="8">
                <h3>父容器</h3>
                <fatherOption></fatherOption>
            </el-col>
            <el-col :span="16">
                <viewShow></viewShow>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <childOption></childOption>
            </el-col>
        </el-row>
<!--        <codeShow></codeShow>-->
    </div>
</template>

<script>


import viewShow from '@/components/viewShow.vue'
import fatherOption from '@/components/fatherOption.vue'
import childOption from '@/components/childOption.vue'
import codeShow from '@/components/codeShow.vue'

	export default {
		components: {
			viewShow,
			fatherOption,
			childOption,
			codeShow,
		},
		data() {
			return {

			}
		},
		computed: {},

		mounted() {
		},
		methods: {},
	}
</script>
<style lang="less">
    .layout-top {
        width: 100%;
        height: 100%;
        padding: 20px;
    }
</style>
