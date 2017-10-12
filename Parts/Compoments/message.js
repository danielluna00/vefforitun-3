Vue.component("message",{
	props:["title"],
	data:function(){
		return{
			isinvisible:true
		};
	},
	template: `
<article v-show="isinvisible" class="message">
	<div class="message-header">
    	<p>{{title}}</p>
    	<button @click="hideMessage" class="delete" aria-label="delete">x</button>
  	</div>
  		<div class="message-body">
    <slot></slot>
  	</div>
</article>
	`,
	methods:{
		hideMessage:function(){
		this.isinvisible = false;
		}
	}
});
var app = new Vue({
	el : "#app",

})