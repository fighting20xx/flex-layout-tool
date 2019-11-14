<template>
    <div class="layout-top">
        <el-row :gutter="20">
            <el-col :span="8">
                <h1>父容器</h1>
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
        <codeShow></codeShow>
    </div>
</template>

<script>

import container from '@/components/container.vue'
import viewShow from '@/components/viewShow.vue'
import fatherOption from '@/components/fatherOption.vue'
import childOption from '@/components/childOption.vue'
import codeShow from '@/components/codeShow.vue'

	export default {
		components: {
			container,
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
        margin-top: 60px;
        .block {
            display: flex;
            align-items: center;

            .demonstration {
                width: 220px;
            }

            .el-slider {
                flex: auto;
            }
        }

        .item {
            .block {
                margin-bottom: 10px;

                .demonstration {
                    width: 100px;
                }
            }
        }
    }


    .item {
        display: flex;
        flex-wrap: wrap;

        & > div {
            border: 1px solid blue;
            border-radius: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            padding: 10px;
            width: 18%;
            flex: none;
        }
    }

    /*.list-complete-item {*/
    /*    transition: all 1s;*/
    /*    margin-right: 10px;*/
    /*}*/

    /*.list-complete-enter,*/
    /*.list-complete-leave-active {*/
    /*    opacity: 0;*/
    /*    transform: translateY(30px);*/
    /*}*/

    /*.list-complete-leave-active {*/
    /*    position: absolute;*/
    /*}*/
</style>
