<template>
    <div class="viewShow-container">
        <div class="grid-content" name="list-complete" tag="div" :style="{
                    display: 'flex',
                    flexDirection: fatherOption.flexDirection,
                    flexWrap: fatherOption.flexWrap,
                    justifyContent: fatherOption.justifyContent,
                    alignItems: fatherOption.alignItems,
                    alignContent: fatherOption.alignContent,
                    margin:fatherOption.margin+'px',
                    padding:fatherOption.padding+'px',
                }">
            <div class="grid-item" v-for="(item, index) in itemLists" :key="index" :style="itemStyle(item)" >
                <div class="grid-item-inner">{{'子容器'+index}}</div>
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

			}
		},
		watch: {
			'childOption.itemCount':function(val, oldVal) {
				if (val > oldVal) {
					const addNum = val - oldVal
					for (let i = 0; i < addNum; i++) {
						this.itemLists.push({
							flex:1,
							width:30,
							percent:33,
							order: 0,
							flexGrow: 0,
							flexShrink: 1,
							flexBasis: 'auto',
							alignSelf: 'auto'
						})
					}
				} else {
					const subNum = oldVal - val;
					this.itemLists.splice(val, subNum)
				}
			}
		},
		computed:{


		},
        methods: {
            itemStyle:function (item) {
                let self = this;
               let style = {
				   width: self.childOption.width + '%',
				   margin: self.childOption.margin + 'px',
				   padding: self.childOption.padding + 'px',
				   alignSelf: item.alignSelf,
				   flexBasis: item.flexBasis,
				   flexGrow: item.flexGrow,
				   flexShrink: item.flexShrink,
				   order: item.order
			   };
               switch (self.childOption.widthType) {
               	    case "flex":
                        style.flex = item.flex;
                        break;
                    case "percent":
                        style.width = self.childOption.itemWidth+'%';
                        break;
                   case "value":
					   style.width = self.childOption.itemWidth+'px';
                        break;
                   default:
                   	    1===1;
			   }
			   switch (self.childOption.heightType) {
               	    case "flex":
                        style.flex = item.flex;
                        break;
                    case "percent":
                        style.height = self.childOption.itemHeight+'%';
                        break;
                   case "value":
					   style.height = self.childOption.itemHeight+'px';
                        break;
                   default:
                   	    1===1;
			   }


            	return style
			}
		}

	}
</script>

<style lang="less">
    .viewShow-container{
        height: 500px;
        display: flex;
        background-color: #2c3e50;
        .grid-content {
            flex: 1;
            background: #ccc;
            /*border: .1px  solid #f00;*/


            .grid-item {
                border: .1px solid blue;
                background: #aaa;
                text-align: left;
                .grid-item-inner{
                    border: .1px dotted blue;
                    background-color: #fff;
                    height: 100%;
                }
            }
        }
    }

</style>
