(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{506:function(t,e,n){"use strict";n.r(e);n(220),n(15),n(65);var u={name:"CountUp",props:{startVal:{type:Number,default:0},endVal:{type:Number,require:!0},decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},delay:{type:Number,default:0}},data:function(){return{counter:null}},mounted:function(){this.init()},beforeDestroy:function(){this.counter.reset(),this.counter=null},methods:{init:function(){var t=this;n.e(27).then(n.bind(null,497)).then((function(e){t.$nextTick((function(){t.counter=new e.CountUp(t.$refs.countUp,t.endVal,{startVal:t.startVal,decimalPlaces:t.decimalPlaces,duration:t.duration}),setTimeout((function(){t.counter.start()}),t.delay)}))}))}}},r=n(6),a=Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ClientOnly",[this._t("before"),this._v(" "),e("span",{ref:"countUp"})],2)],1)}),[],!1,null,null,null);e.default=a.exports}}]);