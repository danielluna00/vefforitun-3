Vue.component("notification",{
	props:["title"],
	data:function() {
		return{
			isvisble:true
		};
	},
	template:`
	<article v-show="isvisible" class="message">
		<div class="header">
			<p>{{title}}</p>
			<button @click="eraseNotification" class="delete" aria-label="delete">X</button>
		</div>
		<div class="body">
		<slot></slot>
		</div>
	</article>	
	`,
	methods:{
		eraseNotification:function(){
			this.isvisible = false;
		}
	}
});
var app = new Vue({
	el : "#app",
})