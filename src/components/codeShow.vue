<template>
    <div class="codeShow-top">
        <div>
                <h3>父容器CSS:</h3>
                <pre v-html="fatherCodeText">     </pre>
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

            fatherCodeText:function () {
				let self = this;
				let positionIndex  = 0;
				let str ='';
				str += splitCode(positionIndex,'.flex-contenter{')
				str += splitCode(positionIndex+1,'display: flex;')

				if(this.isShowflexDirection){
					str += splitCode(positionIndex+1,`flex-direction: ${self.fatherOption.flexDirection };`)
				}
				if(this.isShowflexWrap){
					str += splitCode(positionIndex+1,`flex-wrap: ${self.fatherOption.flexWrap };`)
				}
				if(this.isShowjustifyContent){
					str += splitCode(positionIndex+1,`justify-content: ${self.fatherOption.justifyContent };`)
				}
				if(this.isShowalignItems){
					str += splitCode(positionIndex+1,`align-items: ${self.fatherOption.alignItems };`)
				}
				if(this.isShowalignContent){
					str += splitCode(positionIndex+1,`align-content:  ${self.fatherOption.alignContent };`)
				}
				if(this.isShowmargin){
					str += splitCode(positionIndex+1,`margin: ${self.fatherOption.margin }px;`)
				}
				if(this.isShowpading){
					str += splitCode(positionIndex+1,`padding: ${self.fatherOption.padding }px;`)
				}



				str += self.childrenCodeText;
				str += splitCode(positionIndex,'}');
                return str
			},

            childrenCodeText:function () {
				let self = this;
				let positionIndex  = 1;
				let str ='';
				str += splitCode(positionIndex,'');
				str += splitCode(positionIndex,'.item-common{');
				switch (self.childOption.widthType) {
					case "flex":
						str += splitCode(positionIndex+1,'flex: 1;');
						break;
					case "percent":
						str += splitCode(positionIndex+1,`width: ${self.childOption.itemWidth }%;`);
						break;
					case "value":
						str += splitCode(positionIndex+1,`width: ${self.childOption.itemWidth }px;`);
						break;
					default:
						1===1;
				}
				switch (self.childOption.heightType) {
					case "flex":
						str += splitCode(positionIndex+1,'flex: 1;');
						break;
					case "percent":
						str += splitCode(positionIndex+1,`height: ${self.childOption.itemHeight }%;`);
						break;
					case "value":
						str += splitCode(positionIndex+1,`height: ${self.childOption.itemHeight }px;`);
						break;
					default:
						1===1;
				}



				if(this.isShowflexDirection){
					str += splitCode(positionIndex+1,`flex-direction: ${self.fatherOption.flexDirection };`)
				}
				if(this.isShowflexWrap){
					str += splitCode(positionIndex+1,`flex-wrap: ${self.fatherOption.flexWrap };`)
				}
				if(this.isShowjustifyContent){
					str += splitCode(positionIndex+1,`justify-content: ${self.fatherOption.justifyContent };`)
				}
				if(this.isShowalignItems){
					str += splitCode(positionIndex+1,`align-items: ${self.fatherOption.alignItems };`)
				}
				if(this.isShowalignContent){
					str += splitCode(positionIndex+1,`align-content:  ${self.fatherOption.alignContent };`)
				}
				if(this.isShowmargin){
					str += splitCode(positionIndex+1,`margin: ${self.fatherOption.margin }px;`)
				}
				if(this.isShowpading){
					str += splitCode(positionIndex+1,`padding: ${self.fatherOption.padding }px;`)
				}

				str += splitCode(positionIndex,'}');
				str += splitCode(positionIndex,'');

				this.itemLists.forEach(function (item,index) {
					str += splitCode(positionIndex,`.item-${index}{`);

					if(self.isShowChildMargin){
						str += splitCode(positionIndex+1,`margin: ${self.childOption.margin };`)
					}
					if(self.isShowChildPadding){
						str += splitCode(positionIndex+1,`padding: ${self.childOption.padding };`)
					}
					str += splitCode(positionIndex+1,`margin: ${self.fatherOption.margin };`);
				// .item-{{ index }} {
				// 		align-self: {{ item.alignSelf }};
				// 		flex: {{ item.flexGrow }} {{ item.flexShrink }} {{ item.flexBasis }};
				// 		order: {{ item.order }};



						str += splitCode(positionIndex,'}');
				});

				return str
			}
        }
	}

	function splitCode(postion = 0,str) {
        let s = '';
        for(var i=0 ;i<postion;i++){
			s += '   '
        }
		s = s + str +'\r\n';
        return  s;
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
