webpackJsonp([0,1],{E5uo:function(t,n){},bcDO:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={name:"particles",data:function(){return{}},methods:{canvasInit:function(t){var n=this;t=t||{};var e=this.$refs.canvasBox,i=this.$refs.canvasWrap,o={element:e,points:[],config:{vx:t.vx||4,vy:t.vy||4,height:t.height||2,width:t.width||2,count:t.count||200,color:t.color||"121, 162, 185",stroke:t.stroke||"130, 255, 255",dist:t.dist||6e3,e_dist:t.e_dist||2e4,max_con:10}};if(!o.element.getContext("2d"))return null;o.context=o.element.getContext("2d"),this.canvasSize(o.element),window.addEventListener("resize",function(){n.canvasSize(o.element)}),i.addEventListener("mousemove",function(t){var n=t||window.event;o.mouse={x:n.clientX,y:n.clientY}}),i.addEventListener("mouseleave",function(){o.mouse=void 0}),setInterval(function(){n.drawPoint(o)},40)},canvasSize:function(t){var n=this.$refs.canvasBox.style.width-0,e=this.$refs.canvasBox.style.height-0;t.width=n||window.innerWeight||document.documentElement.clientWidth||document.body.clientWidth,t.height=e||window.innerWeight||document.documentElement.clientHeight||document.body.clientHeight},drawPoint:function(t){var n=t.context,e=void 0;n.clearRect(0,0,t.element.width,t.element.height),n.beginPath(),n.fillStyle="rgb("+t.config.color+")";for(var i=0,o=t.config.count;i<o;i++)e=t.points.length!==t.config.count?{x:Math.floor(Math.random()*t.element.width),y:Math.floor(Math.random()*t.element.height),vx:t.config.vx/2-Math.random()*t.config.vx,vy:t.config.vy/2-Math.random()*t.config.vy}:this.borderPoint(t.points[i],t),n.fillRect(e.x-t.config.width/2,e.y-t.config.height/2,t.config.width,t.config.height),t.points[i]=e;this.drawLine(n,t,t.mouse),n.closePath()},borderPoint:function(t,n){var e=t;return t.x<=0||t.x>=n.element.width?(e.vx=-e.vx,e.x+=e.vx):t.y<=0||t.y>=n.element.height?(e.vy=-e.vy,e.y+=e.vy):e={x:e.x+e.vx,y:e.y+e.vy,vx:e.vx,vy:e.vy},e},drawLine:function(t,n,e){var i=void 0;t=t||n.context;for(var o=0,s=n.config.count;o<s;o++){n.points[o].max_con=0;for(var a=0;a<s;a++)o!==a&&(i=Math.round(n.points[o].x-n.points[a].x)*Math.round(n.points[o].x-n.points[a].x)+Math.round(n.points[o].y-n.points[a].y)*Math.round(n.points[o].y-n.points[a].y))<=n.config.dist&&n.points[o].max_con<n.config.max_con&&(n.points[o].max_con++,t.lineWidth=.5-i/n.config.dist,t.strokeStyle="rgba("+n.config.stroke+","+(1-i/n.config.dist)+")",t.beginPath(),t.moveTo(n.points[o].x,n.points[o].y),t.lineTo(n.points[a].x,n.points[a].y),t.stroke());e&&((i=Math.round(n.points[o].x-e.x)*Math.round(n.points[o].x-e.x)+Math.round(n.points[o].y-e.y)*Math.round(n.points[o].y-e.y))>n.config.dist&&i<=n.config.e_dist&&(n.points[o].x=n.points[o].x+(e.x-n.points[o].x)/20,n.points[o].y=n.points[o].y+(e.y-n.points[o].y)/20),i<=n.config.e_dist&&(t.lineWidth=1,t.strokeStyle="rgba("+n.config.stroke+","+(1-i/n.config.e_dist)+")",t.beginPath(),t.moveTo(n.points[o].x,n.points[o].y),t.lineTo(e.x,e.y),t.stroke()))}}},mounted:function(){this.canvasInit()}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"canvasWrap",staticClass:"particles"},[n("canvas",{ref:"canvasBox",staticClass:"canvasBox"})])},staticRenderFns:[]};var s=e("VU/8")(i,o,!1,function(t){e("vGr5")},"data-v-9139e1b6",null);n.default=s.exports},vGr5:function(t,n){},zvXm:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={name:"homePage",components:{Particles:e("bcDO").default},data:function(){return{}}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"homePage"},[n("ul",{staticClass:"scrollBox"},[n("li",[n("particles")],1)])])},staticRenderFns:[]};var s=e("VU/8")(i,o,!1,function(t){e("E5uo")},"data-v-5dc0f0d4",null);n.default=s.exports}});
//# sourceMappingURL=0.133f07be961ea663248b.js.map