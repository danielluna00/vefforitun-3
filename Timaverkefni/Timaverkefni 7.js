Vue.component("cards",{
  props:["title","subtitle" , "image"],

template:`

<div class="cards">
  <div class="card-image">
    <figure class="image is-4by3">
      <img v-bind:src="image" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-96x96">
          <img src="panda.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-centered is-4">{{title}}</p>
        <p class="subtitle is-6">{{subtitle}}</p>
      </div>
    </div>

    <div class="content">
      <slot></slot> <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
`,
});
var app = new Vue({
	el : "#app",
})