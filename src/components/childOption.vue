<template>
    <div class="childOption-top">

        <el-row :gutter="20">
            <el-col :span="8">
                <h3>子容器</h3>
                <div class="childOption">
                    <div class="block">
                        <span class="demonstration">子容器数量</span>
                        <el-slider v-model="childOption.itemCount" :min="1" :max="20"></el-slider>
                    </div>

                    <div class="block">
                        <span class="demonstration">子容器宽度类型</span>
                        <el-select v-model="childOption.widthType">
                            <el-option v-for="(item, index) in widthType" :label="item.name" :value="item.value"
                                       :key="index"></el-option>
                        </el-select>
                    </div>
                    <div class="block" v-show="['value','percent'].indexOf(childOption.widthType) > -1">
                        <span class="demonstration">子容器宽度</span>
                        <el-slider v-model="childOption.itemWidth" :min="1" :max="200" ></el-slider>
                    </div>

                    <div class="block">
                        <span class="demonstration">子容器高度类型</span>
                        <el-select v-model="childOption.heightType">
                            <el-option v-for="(item, index) in heightType" :label="item.name" :value="item.value"
                                       :key="index"></el-option>
                        </el-select>
                    </div>
                    <div class="block" v-show="['value','percent'].indexOf(childOption.heightType) > -1">
                        <span class="demonstration">子容器高度</span>
                        <el-slider v-model="childOption.itemHeight" :min="1" :max="200" ></el-slider>
                    </div>
                    <div class="block">
                        <span class="demonstration">margin</span>
                        <el-slider v-model="childOption.margin" :min="-100" :max="100"></el-slider>{{childOption.margin}}
                    </div>
                    <div class="block">
                        <span class="demonstration">padding</span>
                        <span class="selecter">
                             <el-slider v-model="childOption.padding" :min="-100" :max="100" ></el-slider>
                        </span>
                        <span class="value"> {{childOption.padding}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="16">
                <h3>子容器配置</h3>
                <div class="child-options-wrap">
                    <div v-for="(item, index) in itemLists" :key="index" class="child-options-item">
                        <div class="block">
                            <span class="demonstration">子容器: {{ index }}</span>
                            <div></div>
                        </div>
<!--                        <div class="block">-->
<!--                            <span class="demonstration">order</span>-->
<!--                            <el-slider v-model="item.order" :min="-10" :max="10"></el-slider>-->
<!--                        </div>-->
                        <div class="block">
                            <span class="demonstration">flex</span>
                            <el-slider v-model="item.flex" :min="0" :max="10"></el-slider>
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
    import vuexOptions from '@/mixins/vuexOptions.js'
	export default {
		mixins:[vuexOptions],
		props: {
			msg: String
		},
		data() {
			return {
				widthType: [
					{
						value: 'percent',
                        name:'百分比'
					},{
						value: 'value',
                        name:'数值'
					},{
						value: 'flex',
                        name:'flex'
					},
                ],
                heightType: [
					{
						value: 'percent',
                        name:'百分比'
					},{
						value: 'value',
                        name:'数值'
					},{
						value: 'flex',
                        name:'flex'
					},
                ],
			}
		},
		computed:{
		}
	}
</script>

<style lang="less">
    .childOption-top{
        border: 1px solid  #ddd;
        border-radius: 20px;
        padding: 2px;
        line-height: 38px;
        .childOption{
            .block{
                width: 100%;
                display: flex;
                text-align: right;

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
        .child-options-wrap{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .child-options-item{
                border: 1px solid  #2c3e50;
                border-radius: 5px;
                padding: 0 2px;
                margin: 0 1px;
                width: 170px;

                .block{
                    width: 100%;
                    display: flex;
                    text-align: right;

                    &>:nth-child(1){
                        width: 80px;
                        margin-right: 5px;
                    }
                    &>:nth-child(2){
                        flex: 1;
                    }
                    &>:nth-child(3){

                    }
                }
            }
        }
    }

</style>
