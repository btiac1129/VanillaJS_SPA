(()=>{"use strict";let e=null;class t{state;props;$el;$store;constructor(e,t){this.$el=e,this.props=t,this.setup(),this.useStore(),this.setEvent(),this.render()}setup(){}useStore(){var t;this.$store=(t=>{const r=Object.keys(t).reduce(((e,t)=>(e[t]=new Set,e)),{});return new Proxy(t,{get:(t,s)=>(e&&r[s].add(e),t[s]),set:(e,t,s)=>(e[t]===s||JSON.stringify(e[t])===JSON.stringify(s)||(e[t]=s,r[t].forEach((e=>e()))),!0)})})(this.initState()),e=(e=>{let t=-1;return()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)}})(t=()=>{this.render(),this.setEvent(),this.mounted()}),t(),e=null}setState(e){this.$state={...this.$state,...e},this.render()}initState(){return{}}template(){return""}render(){this.$el.innerHTML=this.template(),this.mounted()}setEvent(){}mounted(){}addEvent(e,t,r){const s=[...this.$el.querySelectorAll(t)];this.$el.addEventListener(e,(e=>{if(n=e.target,!s.includes(n)&&!n.closest(t))return!1;var n;r(e)}))}}class r extends t{template(){return'<div>\n    <a href="#signup">signup</a>\n    <a href="#login">login</a>\n    <a href="#dksldks">detail</a>\n    </div>'}}class s extends t{template(){return"<div>Footer</div>"}}new class extends t{template(){return'\n      <header id="header"></header>\n      <main id="content"></main>\n      <footer id="footer"></footer>\n      '}mounted(){const e=this.$el.querySelector("#header"),t=this.$el.querySelector("#footer");new r(e,{}),new s(t,{})}}(document.querySelector("#root"))})();