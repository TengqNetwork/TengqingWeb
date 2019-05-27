// JavaScript Document
Vue.component('tabs',{ template:'\
    <div class="tabs">\
        <div class="tabs-bar">\
            <div\
                :class="tabCls(item)"\
                v-for="(item,index) in navList"\
                @click="handleChange(index)">{{ item.label }} \
                <span v-if="isShown(item)" @click="deleteTab(index,event)">×</span>\
            </div>\
        </div>\
        <div class="tabs-content">\
            <slot></slot>\
        </div>\
    </div>',
	props:{ 
		value:{ 
			type:[String,Number]
			},
		},
	data:function(){
		return {
			currentValue:this.value, navList:[] 
			}
		},
	methods:{
		tabCls:function(item){
			return [ 'tabs-tab',
				{ 'tabs-tab-active':item.name === this.currentValue }
					];
			},
	getTabs:function(){
		return this.$children.filter(function(item){ 
			return item.$options.name === 'pane'; 
			}); 
			},
	updateNav:function(){
		this.navList = []; 
		var _this = this; 
		this.getTabs().forEach(function(pane,index){
			 _this.navList.push({
				 label:pane.label, name:pane.name || index, closable:pane.closable 
				 }); 
			if(!pane.name){
				pane.name = index; 
				}
			if(index === 0){ 
				if(!_this.currentValue){
					_this.currentValue = pane.name || index; 
					} 
				} 
				});
		this.updateStatus();
		},
	updateStatus: function(){ 
		var tabs = this.getTabs(); 
		var _this = this; 
		tabs.forEach(function(tab){ 
		return tab.show = tab.name === _this.currentValue; 
			}) 
		},
	handleChange:function(index){ 
		var nav = this.navList[index]; 
		var name = nav.name; 
		this.currentValue = name; 
		this.$emit('input',name); 
		this.$emit('on-click',name); 
		},
	deleteTab:function(index,event){
		 //添加关闭功能，即是将navList中对应的元素删除即可。 
		 //存在一个问题，当关闭了所有的tab后，tab-content中依然会显示内容 
		 //那么，我们不能仅仅只删除navList中对应的元素，还应该将pane中对应的内容也隐藏 
		 //可以通过改变currentValue的值来实现 
		 if(this.navList[index].name === this.currentValue){ 
		 	if(index > 0){ 
				this.currentValue = this.navList[index - 1].name; this.navList.splice(index,1); 
				event.stopPropagation();//阻止冒泡，避免触发handleChange(index)方法 
				}
			else{ 
				this.navList.splice(index,1); 
				event.stopPropagation(); 
				if(this.navList.length > 0){ 
					this.currentValue = this.navList[0].name; 
					}
				else{
					this.currentValue = '';
					}
				}
			} 
			else{
				this.navList.splice(index,1); event.stopPropagation();//阻止冒泡，避免触发handleChange(index)方法 
				if(this.navList.length === 0){ 
					this.currentValue = ''; 
					} 
				} 
			}, 
	isShown:function(item){
		console.log(item.closable); 
		var flag = item.closable == 'true'; 
		console.log("-------------------------"); 
		console.log(flag); 
		return flag; 
			} 
		}, 
	watch:{
		value:function(val){ 
			this.currentValue = val;
			}, 
		currentValue:function(){ 
			this.updateStatus(); 
			} 
		} 
});