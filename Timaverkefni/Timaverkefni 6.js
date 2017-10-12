Vue.component("modal",{
	props:["title"],
	data:function(){
		return{
			visible:false
		};
	},
	template: `
	<div>
	<div v-show="visible" class="modal is-active">
	  <div class="modal-background" @click="hideMessage"></div>
	  <div class="modal-content">
	  <div class="box">
	  	<h1 class="title">{{title}}</h1>
	  	<p><slot></slot></p>
	  </div>
    <!-- Any other Bulma elements you want -->
 	 </div>
  	<button class="modal-close is-large" aria-label="close" @click="hideMessage"></button>
	</div>
	 <button @click="showMessage" class="button is_primary">Button</button>
	</div>
	`,
	methods:{
		showMessage:function(){
		this.visible = true
		},
		hideMessage:function(){
		this.visible = false
		}
	}
});
var app = new Vue({
	el : "#app",
})













