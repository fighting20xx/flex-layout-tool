<template>
    <div class="container">

        <el-row :gutter="20">
            <el-col :span="8">
                <h1>子容器</h1>
                <div>
                    <div class="block">
                        <span class="demonstration">子容器数量</span>
                        <el-slider v-model="childOption.itemCount" :min="1" :max="10"></el-slider>
                    </div>
                    <div class="block">
                        <span class="demonstration">子容器宽度</span>
                        <el-slider v-model="childOption.itemWidth" :min="10" :max="100" ></el-slider>
                    </div>
                </div>
            </el-col>
            <el-col :span="16">
                <h1>子容器配置</h1>
                <div class="item">
                    <div v-for="(item, index) in itemLists" :key="index">
                        <div class="block">
                            <span class="demonstration">子容器: {{ index }}</span>
                            <div></div>
                        </div>
                        <div class="block">
                            <span class="demonstration">order</span>
                            <el-slider v-model="item.order" :min="-10" :max="10"></el-slider>
                        </div>
                        <div class="block">
                            <span class="demonstration">flex-grow</span>
                            <el-slider v-model="item.flexGrow" :min="0" :max="10"></el-slider>
                        </div>
                        <div class="block">
                            <span class="demonstration">flex-shrink</span>
                            <el-slider v-model="item.flexShrink" :min="0" :max="10"></el-slider>
                        </div>
                        <div class="block">
                            <span class="demonstration">flex-basis</span>
                            <el-input placeholder="请输入内容" v-model="item.flexBasis"></el-input>
                        </div>
                        <div class="block">
                            <span class="demonstration">align-self</span>
                            <el-select v-model="item.alignSelf">
                                <el-option :label="'auto'" :value="'auto'"></el-option>
                                <el-option :label="'flex-start'" :value="'flex-start'"></el-option>
                                <el-option :label="'flex-end'" :value="'flex-end'"></el-option>
                                <el-option :label="'center'" :value="'center'"></el-option>
                                <el-option :label="'baseline'" :value="'baseline'"></el-option>
                                <el-option :label="'stretch'" :value="'stretch'"></el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>




    </div>
</template>

<script>
	export default {
		props: {
			msg: String
		},
		data() {
			return {

			}
		},
		computed:{
			childOption:{
				get:function () {
					return this.$store.state.childOption
				},
				set:function (v) {
					this.$store.commit('setChildOptionn',v);
				},
			},
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
