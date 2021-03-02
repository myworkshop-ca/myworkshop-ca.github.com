(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{356:function(t,e,n){"use strict";n.r(e);n(25);var r={name:"CategoryFilter",props:{categories:{type:Array,default:[{name:"movies",counts:20},{name:"sports",counts:120}]}},data:function(){return{selectedCats:[""]}},methods:{}},o=n(5),c=n(32),l=n.n(c),h=n(380),v=n(368),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("h3",{staticClass:"mb-2"},[t._v("Filter by categories")]),t._l(t.categories,(function(e,r){return n("v-chip",{key:e.name,staticClass:"ma-1",attrs:{color:"primary"},on:{click:function(n){return t.$emit("category-select",e)}}},[t._v(t._s(e.name)+" ("+t._s(e.counts)+")")])}))],2)}),[],!1,null,null,null),d=component.exports;l()(component,{VChip:h.a,VContainer:v.a});var f={name:"CategorySelected",props:{categories:{type:Array,default:[]}},data:function(){return{}},methods:{}},m=n(375),x=n(341),y=Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.categories.length>0?n("v-row",[n("v-col",[n("strong",[t._v("Showing channels under categories: ")]),t._l(t.categories,(function(e,r){return n("v-chip",{key:r,attrs:{color:"success",close:""},on:{"click:close":function(n){return t.$emit("remove-selected-cat",e)}}},[t._v(t._s(e))])}))],2)],1):t._e()}),[],!1,null,null,null),_=y.exports;l()(y,{VChip:h.a,VCol:m.a,VRow:x.a});var C={name:"ChannelCard",props:{channel:{type:Object,default:{id:"1234sdis12",tvg_name:"channel name"}}},data:function(){return{}}},k=n(466),w=n(342),O=Object(o.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"pa-1",attrs:{nocolor:"#1F7087",color:"#385F73",dark:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("div",[e("v-card-title",{staticClass:"headline"},[this._v(this._s(this.channel.tvg_name))])],1),e("store-base-async-img",{attrs:{imageId:this.channel.id,width:"150px","max-width":"150px"}})],1)])}),[],!1,null,null,null),P=O.exports;l()(O,{VCard:k.a,VCardTitle:w.d});var j={name:"ChannelSearch",props:{},data:function(){return{query:null}},methods:{handleClickAppend:function(){var t="*:*";null!==this.query&&this.query.length>0&&(t=this.query),this.$emit("search-channel",t)}}},$=n(501),S=Object(o.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-text-field",{attrs:{outlined:"",id:"input-number",autocomplete:"off",label:"Search channels",clearable:"","append-icon":"mdi-magnify"},on:{"click:clear":function(e){return t.$emit("search-channel","*:*")},"click:append":t.handleClickAppend,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleClickAppend(e)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)}),[],!1,null,null,null),z=S.exports;l()(S,{VContainer:v.a,VTextField:$.a});var V={name:"SectionChannelsList",components:{"category-filter":d,"category-selected":_,"channel-card":P,"channel-search":z},data:function(){return{channels:null,queryStr:"*:*",categories:[],selectedCats:[],currentPage:1,perPage:12,totalPages:0,totalVisible:7}},methods:{getInitialChannels:function(){this.queryChannels(0)},queryChannels:function(t){var e=this,n={query:e.queryStr,start:t,rows:e.perPage};e.selectedCats.length>0&&(n.cats=e.selectedCats),e.$axios.get("/channel",{params:n}).then((function(t){e.channels=t.data.docs,e.categories=t.data.cats,e.totalHits=t.data.numFound,e.totalPages=Math.ceil(e.totalHits/e.perPage)}))},flipPage:function(){this.queryChannels((this.currentPage-1)*this.perPage)},handleCategorySelect:function(t){this.selectedCats.push(t.name),this.currentPage=1,this.queryChannels(0)},handleRemoveSelectedCat:function(t){this.selectedCats=this.selectedCats.filter((function(e){return e!==t})),this.currentPage=1,this.queryChannels(0)},handleSearchChannel:function(t){this.queryStr=t,this.currentPage=1,this.queryChannels(0)},channelLogo:function(t){this.$axios.get("/channel/".concat(t,"/logo")).then((function(t){return t.data}))}},computed:{paginationSummary:function(){var t=(this.currentPage-1)*this.perPage+1,e=this.currentPage===this.totalPages?this.totalHits:this.currentPage*this.perPage;return"".concat(t," - ").concat(e," of ").concat(this.totalHits," Channels")}},beforeMount:function(){this.getInitialChannels()}},I=n(329),L=n(509),B=n(129),E=n(459),A=Object(o.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("store-base-section",{attrs:{id:"channelslist"}},[n("store-base-section-heading",{attrs:{title:"Channels list",space:"1"}}),n("v-container",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"3"}},[n("channel-search",{on:{"search-channel":t.handleSearchChannel}}),n("category-filter",{attrs:{categories:t.categories},on:{"category-select":t.handleCategorySelect}})],1),n("v-col",{attrs:{cols:"9"}},[n("category-selected",{attrs:{categories:t.selectedCats},on:{"remove-selected-cat":t.handleRemoveSelectedCat}}),n("v-row",[n("v-col",{staticClass:"pa-0"},[n("v-btn",{attrs:{text:"",color:"primary",large:""}},[t._v(t._s(t.paginationSummary))])],1),n("v-spacer"),n("v-col",{staticClass:"pa-0"},[t.channels?n("v-pagination",{attrs:{length:t.totalPages,"total-visible":t.totalVisible,circle:""},on:{input:t.flipPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1)],1),n("v-row",[t._l(t.channels,(function(e,r){return[n("v-col",{key:e.id},[n("channel-card",{attrs:{channel:e}})],1),(r+1)%2==0?n("v-responsive",{key:"width-"+r,attrs:{width:"100%"}}):t._e()]}))],2),t.channels?n("v-pagination",{attrs:{length:t.totalPages,"total-visible":"10"},on:{input:t.flipPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1)],1)],1)],1)}),[],!1,null,null,null);e.default=A.exports;l()(A,{VBtn:I.a,VCol:m.a,VContainer:v.a,VPagination:L.a,VResponsive:B.a,VRow:x.a,VSpacer:E.a})},366:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("197fcea4",content,!0,{sourceMap:!1})},367:function(t,e,n){(e=n(23)(!1)).push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=e},380:function(t,e,n){"use strict";n(20),n(8),n(6),n(4),n(12);var r=n(13),o=n(2),c=(n(366),n(31)),l=n(136),h=n(326),v=n(48),d=n(138),f=n(40),m=n(135),x=n(105),y=n(88),_=n(10);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,y.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(r.a)(e,2),o=n[0],c=n[1];t.$attrs.hasOwnProperty(o)&&Object(_.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,data),e)}})},381:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("7f6d4ad6",content,!0,{sourceMap:!1})},382:function(t,e,n){(e=n(23)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=e},459:function(t,e,n){"use strict";n(343);var r=n(3);e.a=Object(r.g)("spacer","div","v-spacer")},509:function(t,e,n){"use strict";n(20),n(8),n(6),n(12),n(14),n(15),n(4);var r=n(137),o=n(2),c=(n(21),n(381),n(326)),l=n(350),h=n(48),v=n(463),d=n(40),f=n(31);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(f.a)(h.a,Object(v.a)({onVisible:["init"]}),d.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),c=this.length-o+1+n;if(this.value>o&&this.value<c){var l=this.value-o+2,h=this.value+o-2-n;return[1,"..."].concat(Object(r.a)(this.range(l,h)),["...",this.length])}if(this.value===o){var v=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,v)),["...",this.length])}if(this.value===c){var d=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(d,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r,label){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button","aria-label":label},on:n?{}:{click:r}},[t(c.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);