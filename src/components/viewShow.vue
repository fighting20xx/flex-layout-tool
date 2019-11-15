<template>
    <div class="viewShow-container">
        <transition-group class="grid-content" name="list-complete" tag="div" :style="{
                    display: 'flex',
                    flexDirection: fatherOption.flexDirection,
                    flexWrap: fatherOption.flexWrap,
                    justifyContent: fatherOption.justifyContent,
                    alignItems: fatherOption.alignItems,
                    alignContent: fatherOption.alignContent,
                    margin:fatherOption.margin+'px',
                    padding:fatherOption.padding+'px',
                }">
            <div v-for="(item, index) in itemLists" :key="index" :style="{
                        width: childOption.width + '%',
                        alignSelf: item.alignSelf,
                        flexBasis: item.flexBasis,
                        flexGrow: item.flexGrow,
                        flexShrink: item.flexShrink,
                        order: item.order
                    }" v-text="'子容器: ' + index"></div>
        </transition-group>
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


            & > div {
                height: 100px;
                border: .1px dotted blue;
                background: #fff;
                text-align: center;
            }
        }
    }

</style>
