(function(e){function t(t){for(var i,o,r=t[0],l=t[1],c=t[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},s={app:0},n=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0080":function(e,t,a){"use strict";var i=a("64c7"),s=a.n(i);s.a},"2b46":function(e,t,a){},"2f83":function(e,t,a){},"31da":function(e,t,a){"use strict";var i=a("76df"),s=a.n(i);s.a},"46d3":function(e,t,a){"use strict";var i=a("b7ac"),s=a.n(i);s.a},"47ba":function(e,t,a){},"49a0":function(e,t,a){"use strict";var i=a("668b"),s=a.n(i);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("MobileHeader",{staticClass:"desktop-hidden"}),a("DesktopHeader",{staticClass:"mobile-hidden"}),a("router-view")],1)},n=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"header"},[i("img",{staticClass:"header__logo",attrs:{src:a("ba46"),alt:"logo"},on:{click:e.goHome}}),e.searchFlag?i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],ref:"search",staticClass:"header__search_input",attrs:{type:"search",name:"",id:""},domProps:{value:e.searchInput},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.searchInput=t.target.value)}}}):i("span",{staticClass:"header__title"},[e._v(e._s(e.title))]),i("img",{staticClass:"header__search_icon",attrs:{src:a("66d7"),alt:"search"},on:{click:e.showSearch}})])},r=[],l=(a("ac1f"),a("841c"),a("498a"),new i["a"]),c={name:"MobileHeader",data:function(){return{searchFlag:!1,searchInput:"",title:""}},methods:{goHome:function(){this.$router.push({name:"Home"}).catch((function(){})),l.$emit("searchBy",{q:"",type:"",publishedAfter:"",order:"relevance"})},showSearch:function(){var e=this;if(this.searchInput=this.searchInput.trim(),this.searchFlag&&this.searchInput)this.search();else if(this.searchFlag=!this.searchFlag,this.searchFlag)var t=setTimeout((function(){e.$refs.search.focus(),clearTimeout(t)}),1)},search:function(){this.$router.push({name:"Home"}).catch((function(){})),this.$route.query.q!==this.searchInput&&(this.$router.push({query:Object.assign({},this.$route.query,{q:this.searchInput})}).catch((function(){})),l.$emit("searchBy",{q:this.searchInput}),this.title=this.searchInput),this.searchInput="",this.searchFlag=!1}},created:function(){var e=this;this.$route.query.q?this.title=this.$route.query.q:this.title="",l.$on("resetHeaderTitle",(function(){e.title="Youtube"}))}},d=c,u=(a("49a0"),a("2877")),p=Object(u["a"])(d,o,r,!1,null,"2a81fc93",null),h=p.exports,_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"header"},[i("div",{staticClass:"header__body"},[i("img",{staticClass:"header__body__logo",attrs:{src:a("e809"),alt:"logo"},on:{click:e.goHome}}),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],ref:"search",staticClass:"header__body__search_input",attrs:{type:"search",name:"",id:""},domProps:{value:e.searchInput},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.searchInput=t.target.value)}}}),i("button",{staticClass:"header__body__search_btn",attrs:{type:"submit"},on:{click:e.search}},[i("img",{staticClass:"header__body__search_btn__search_icon",attrs:{src:a("f2c6"),alt:"search"}})])])])])},m=[],v={name:"DesktopHeader",data:function(){return{searchInput:""}},methods:{goHome:function(){this.$router.push({name:"Home"}).catch((function(){})),l.$emit("searchBy",{q:"",type:"",publishedAfter:"",order:"relevance"})},search:function(){this.$router.push({name:"Home"}).catch((function(){})),this.$route.query.q!==this.searchInput&&(this.$router.push({query:Object.assign({},this.$route.query,{q:this.searchInput})}).catch((function(){})),l.$emit("searchBy",{q:this.searchInput}),this.title=this.searchInput),this.searchInput="",this.searchFlag=!1}}},f=v,g=(a("0080"),Object(u["a"])(f,_,m,!1,null,"bad7af18",null)),b=g.exports,y={name:"app",components:{MobileHeader:h,DesktopHeader:b}},k=y,w=(a("5c0b"),Object(u["a"])(k,s,n,!1,null,null,null)),I=w.exports,C=a("8c4f"),A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e.loading?[a("DesktopLoader",{staticClass:"mobile-hidden",attrs:{loading:e.desktopLoader,width:e.loaderWidth}}),a("MobileLoader",{staticClass:"desktop-hidden",attrs:{viewText:!0}})]:[a("MobileSubHeader",{staticClass:"desktop-hidden"}),a("DesktopSubHeader",{staticClass:"mobile-hidden",attrs:{totalResults:e.totalResults}}),e._l(e.mediaItems,(function(t,i){return["youtube#video"!==t.id.kind||"video"!==e.$route.query.type&&e.$route.query.type?e._e():[a("VideoMediaItem",{key:i,attrs:{item:t,statisticsInfo:e.videosResJson[t.id.videoId]}})],"youtube#playlist"!==t.id.kind||"playlist"!==e.$route.query.type&&e.$route.query.type?e._e():[a("PlaylistMediaItem",{key:i,attrs:{item:t,contentDetails:e.playlistsResJson[t.id.playlistId]}})],"youtube#channel"!==t.id.kind||"channel"!==e.$route.query.type&&e.$route.query.type?e._e():[a("ChannelMediaItem",{key:i,attrs:{item:t,statistics:e.channelsResJson[t.id.channelId]}})]]})),e.moreLoading?[a("DesktopLoader",{staticClass:"mobile-hidden",attrs:{loading:e.desktopLoader,width:e.loaderWidth}}),a("MobileLoader",{attrs:{viewText:!1}})]:[e.nextPageToken?a("div",{staticClass:"desktop-hidden mobile-load-more",on:{click:e.showMore}},[e._v("Show more items")]):e._e()]]],2)},S=[],D=(a("99af"),a("4de4"),a("a15b"),a("d81d"),a("13d5"),a("2909")),x=(a("96cf"),a("1da1")),L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sub-header"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"sub-header__select",attrs:{name:"type"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?a:a[0]},e.typeSearch]}},[a("option",{attrs:{value:""}},[e._v("All")]),a("option",{attrs:{value:"video"}},[e._v("Videos")]),a("option",{attrs:{value:"channel"}},[e._v("Channels")]),a("option",{attrs:{value:"playlist"}},[e._v("Playlists")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],staticClass:"sub-header__select",attrs:{name:"publishedAfter"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.time=t.target.multiple?a:a[0]},e.publishedAfterSearch]}},[a("option",{attrs:{value:""}},[e._v("Any Time")]),a("option",{attrs:{value:"today"}},[e._v("Today")]),a("option",{attrs:{value:"week"}},[e._v("This Week")]),a("option",{attrs:{value:"month"}},[e._v("This Month")]),a("option",{attrs:{value:"year"}},[e._v("This Year")])])])},$=[],q={name:"MobileSubHeader",data:function(){return{type:"",time:"",publishedAfter:""}},methods:{typeSearch:function(){this.$router.push({query:Object.assign({},this.$route.query,{type:this.type})}).catch((function(){})),l.$emit("searchBy",{type:this.type})},publishDateCalculate:function(){var e=new Date;"today"===this.time?(e.setDate(e.getDate()-1),this.publishedAfter=e.toISOString()):"week"===this.time?(e.setDate(e.getDate()-7),this.publishedAfter=e.toISOString()):"month"===this.time?(e.setDate(e.getDate()-30),this.publishedAfter=e.toISOString()):"year"===this.time?(e.setDate(e.getDate()-365),this.publishedAfter=e.toISOString()):this.publishedAfter=""},publishedAfterSearch:function(){this.publishDateCalculate(),this.$router.push({query:Object.assign({},this.$route.query,{publishedAfter:this.publishedAfter,time:this.time})}).catch((function(){})),l.$emit("searchBy",{publishedAfter:this.publishedAfter,time:this.time})}},created:function(){this.$route.query.type?this.type=this.$route.query.type:this.type="",this.$route.query.time?this.time=this.$route.query.time:this.time="",this.publishDateCalculate()}},P=q,F=(a("63f1"),Object(u["a"])(P,L,$,!1,null,"2133a3c1",null)),T=F.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sub-header"},[i("div",{staticClass:"sub-header__filter-header"},[i("div",{staticClass:"sub-header__filter-header__text"},[i("p",[e._v("About "+e._s(Number(e.totalResults).toLocaleString())+" Results")])]),i("div",{staticClass:"sub-header__filter-header__filter",on:{click:function(t){e.filter=!e.filter}}},[i("img",{staticClass:"sub-header__filter-header__filter__img",attrs:{src:a("5cae"),alt:"filter"}}),e._m(0)])]),i("div",{staticClass:"sub-header__filter-body",class:{"sub-header__filter-body__active":e.filter}},[i("div",{staticClass:"sub-header__filter-body__filter-options"},[i("p",{staticClass:"sub-header__filter-body__filter-options__header"},[e._v("UPLOAD DATE")]),i("ul",[i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"hour"===e.time}},[i("span",{on:{click:function(t){return e.publishedAfterSearch("hour")}}},[e._v("Last hour")]),i("span",{staticClass:"span active__span",on:{click:function(t){return e.publishedAfterSearch("")}}},[e._v("x")])]),i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"today"===e.time}},[i("span",{on:{click:function(t){return e.publishedAfterSearch("today")}}},[e._v("Today")]),i("span",{staticClass:"span active__span",on:{click:function(t){return e.publishedAfterSearch("")}}},[e._v("x")])]),i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"week"===e.time}},[i("span",{on:{click:function(t){return e.publishedAfterSearch("week")}}},[e._v("This week")]),i("span",{staticClass:"span active__span",on:{click:function(t){return e.publishedAfterSearch("")}}},[e._v("x")])]),i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"month"===e.time}},[i("span",{on:{click:function(t){return e.publishedAfterSearch("month")}}},[e._v("This month")]),i("span",{staticClass:"span active__span",on:{click:function(t){return e.publishedAfterSearch("")}}},[e._v("x")])])])]),i("div",{staticClass:"sub-header__filter-body__filter-options"},[i("p",{staticClass:"sub-header__filter-body__filter-options__header"},[e._v("TYPE")]),i("ul",[i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"video"===e.type}},[i("span",{on:{click:function(t){return e.typeSearch("video")}}},[e._v("Video")]),i("span",{staticClass:"span active__span",on:{click:function(t){return e.typeSearch("")}}},[e._v("x")])]),i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"channel"===e.type}},[i("span",{on:{click:function(t){return e.typeSearch("channel")}}},[e._v("Channel")]),i("span",{staticClass:"span active__span",on:{click:function(t){return e.typeSearch("")}}},[e._v("x")])]),i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"playlist"===e.type}},[i("span",{on:{click:function(t){return e.typeSearch("playlist")}}},[e._v("Playlist")]),i("span",{staticClass:"span active__span",on:{click:function(t){return e.typeSearch("")}}},[e._v("x")])])])]),i("div",{staticClass:"sub-header__filter-body__filter-options"},[i("p",{staticClass:"sub-header__filter-body__filter-options__header"},[e._v("SORT BY")]),i("ul",[i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"relevance"===e.order},on:{click:function(t){return e.orderBy("relevance")}}},[e._v("Relevance")]),i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"date"===e.order},on:{click:function(t){return e.orderBy("date")}}},[e._v("Upload date")]),i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"viewCount"===e.order},on:{click:function(t){return e.orderBy("viewCount")}}},[e._v("View count")]),i("li",{staticClass:"sub-header__filter-body__filter-options__li",class:{active:"rating"===e.order},on:{click:function(t){return e.orderBy("rating")}}},[e._v("Rating")])])])])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sub-header__filter-header__filter__text"},[a("p",[e._v("Filter")])])}],M=(a("a9e3"),a("1276"),{name:"MobileSubHeader",data:function(){return{publishedAfter:"",time:"",type:"",order:"relevance",filter:!1}},props:{totalResults:Number},methods:{typeSearch:function(e){e!==this.type&&(this.type=e,this.$router.push({query:Object.assign({},this.$route.query,{type:e})}).catch((function(){})),l.$emit("searchBy",{type:this.type}))},orderBy:function(e){e!==this.order&&(this.order=e,this.$router.push({query:Object.assign({},this.$route.query,{order:e})}).catch((function(){})),l.$emit("searchBy",{order:this.order}))},publishDateCalculate:function(e){var t=new Date;if("today"===e)t.setDate(t.getDate()-1),this.publishedAfter=t.toISOString();else if("week"===e)t.setDate(t.getDate()-7),this.publishedAfter=t.toISOString();else if("month"===e)t.setDate(t.getDate()-30),this.publishedAfter=t.toISOString();else if("hour"===e){var a=t.toISOString().split("T"),i=a[1].split(":");i[0]=+i[0]-1+"",a[1]=i.join(":"),this.publishedAfter=a.join("T")}else this.publishedAfter=""},publishedAfterSearch:function(e){e!==this.time&&(this.time=e,this.publishDateCalculate(e),this.$router.push({query:Object.assign({},this.$route.query,{publishedAfter:this.publishedAfter,time:e})}).catch((function(){})),l.$emit("searchBy",{publishedAfter:this.publishedAfter,time:e}))}},created:function(){this.$route.query.type?this.type=this.$route.query.type:this.type="",this.$route.query.time?this.time=this.$route.query.time:this.time="",this.$route.query.order?this.order=this.$route.query.order:this.order="relevance",this.publishDateCalculate()}}),B=M,R=(a("31da"),Object(u["a"])(B,O,j,!1,null,"71054ae5",null)),H=R.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item&&e.item.snippet.thumbnails.medium?a("div",{class:{"video-page-video-media-item":e.videoPageFlag,"video-media-item":!e.videoPageFlag},on:{click:function(t){e.$router.push({name:"Video",params:{id:e.item.id.videoId}}).catch((function(){}))}}},[a("div",{class:{"video-page-video-media-item__image-container":e.videoPageFlag,"video-media-item__image-container":!e.videoPageFlag}},[a("img",{class:{"video-page-video-media-item__image-container__img":e.videoPageFlag,"video-media-item__image-container__img":!e.videoPageFlag},attrs:{src:e.item.snippet.thumbnails.medium.url,alt:""}}),e.statisticsInfo?a("span",{class:{"video-page-video-media-item__image-container__span":e.videoPageFlag,"video-media-item__image-container__span":!e.videoPageFlag}},[e._v(e._s(e.getDuration(e.statisticsInfo.contentDetails.duration)))]):e._e()]),a("div",{class:{"video-page-video-media-item__body-container":e.videoPageFlag,"video-media-item__body-container":!e.videoPageFlag}},[a("p",{class:{"video-page-video-media-item__body-container__title":e.videoPageFlag,"video-media-item__body-container__title":!e.videoPageFlag},domProps:{innerHTML:e._s(e.item.snippet.title)}}),a("p",{class:{"video-page-video-media-item__body-container__channel-name":e.videoPageFlag,"video-media-item__body-container__channel-name":!e.videoPageFlag}},[e._v(e._s(e.item.snippet.channelTitle))]),a("span",{class:{"video-page-video-media-item__body-container__separator":e.videoPageFlag,"video-media-item__body-container__separator":!e.videoPageFlag}},[e._v("•")]),e.statisticsInfo?a("p",{class:{"video-page-video-media-item__body-container__views":e.videoPageFlag,"video-media-item__body-container__views":!e.videoPageFlag}},[e._v(e._s(Number(e.statisticsInfo.stats.viewCount).toLocaleString())+" views")]):e._e(),a("span",{class:{"video-page-video-media-item__body-container__separator":e.videoPageFlag,"video-media-item__body-container__separator":!e.videoPageFlag}},[e._v("•")]),a("p",{class:{"video-page-video-media-item__body-container__how-old":e.videoPageFlag,"video-media-item__body-container__how-old":!e.videoPageFlag}},[e._v(e._s(e.getHowOld(e.item.snippet.publishTime)))]),a("p",{class:{"video-page-video-media-item__body-container__description":e.videoPageFlag,"video-media-item__body-container__description":!e.videoPageFlag},domProps:{innerHTML:e._s(e.item.snippet.description)}})])]):e._e()},W=[],E=(a("c975"),a("5319"),{name:"VideoMediaItem",props:{item:Object,statisticsInfo:Object,videoPageFlag:Boolean},methods:{getDuration:function(e){return e=e.replace("PT",""),-1===e.indexOf("M")&&-1===e.indexOf("S")?e+="00M00S":-1===e.indexOf("S")&&(e+="00S"),e.replace("H",":").replace("M",":").replace("S","")},getHowOld:function(e){var t=new Date,a=new Date(e),i=864e5;a.setHours(0,0,0,0),t.setHours(0,0,0,0);var s=(+t-+a)/i,n=Math.floor(s/365),o=Math.floor(s%365/30),r=Math.floor(s%365%30),l=n>0?n+(1==n?" year, ":" years, "):"",c=o>0?o+(1==o?" month, ":" months, "):"",d=r>0?r+(1==r?" day":" days"):"";return l||(c||(d||"less than a day ago"))}}}),z=E,K=(a("46d3"),Object(u["a"])(z,V,W,!1,null,"25254a78",null)),N=K.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item&&e.item.snippet.thumbnails.medium?a("div",{staticClass:"channel-media-item",on:{click:function(t){e.$router.push({name:"Channel",params:{id:e.item.id.channelId}}).catch((function(){}))}}},[a("img",{staticClass:"channel-media-item__img",attrs:{src:e.item.snippet.thumbnails.medium.url,alt:""}}),a("div",{staticClass:"channel-media-item__body-container"},[a("p",{staticClass:"channel-media-item__body-container__title",domProps:{innerHTML:e._s(e.item.snippet.title)}}),e.statistics?a("p",{staticClass:"channel-media-item__body-container__video-count"},[e._v(e._s(Number(e.statistics.videoCount).toLocaleString())+" videos")]):e._e(),e.statistics?a("p",{staticClass:"channel-media-item__body-container__subscribers"},[e._v(e._s(Number(e.statistics.subscriberCount).toLocaleString())+" subscribers")]):e._e(),a("p",{staticClass:"channel-media-item__body-container__description",domProps:{innerHTML:e._s(e.item.snippet.description)}})])]):e._e()},U=[],Z={name:"ChannelMediaItem",props:{item:Object,statistics:Object}},Y=Z,Q=(a("c687"),Object(u["a"])(Y,J,U,!1,null,"6ca52062",null)),X=Q.exports,G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.item&&e.item.snippet.thumbnails.medium?i("div",{staticClass:"playlist-media-item",class:{"playlist-media-item-padding-channel-page":e.channelPageFlag},on:{click:function(t){e.$router.push({name:"Playlist",params:{id:e.item.id.playlistId}}).catch((function(){}))}}},[i("div",{staticClass:"playlist-media-item__image-container"},[i("img",{staticClass:"playlist-media-item__image-container__img",attrs:{src:e.item.snippet.thumbnails.medium.url,alt:""}}),e.contentDetails?i("div",{staticClass:"playlist-media-item__image-container__div"},[i("span",{staticClass:"playlist-media-item__image-container__div__span"},[e._v(e._s(Number(e.contentDetails.itemCount).toLocaleString()))]),i("img",{staticClass:"playlist-media-item__image-container__div__img",attrs:{src:a("7a9b"),alt:"count"}})]):e._e()]),i("div",{staticClass:"playlist-media-item__body-container"},[i("p",{staticClass:"playlist-media-item__body-container__title",domProps:{innerHTML:e._s(e.item.snippet.title)}}),i("p",{staticClass:"playlist-media-item__body-container__channel-name"},[e._v(e._s(e.item.snippet.channelTitle))]),i("p",{staticClass:"playlist-media-item__body-container__description",domProps:{innerHTML:e._s(e.item.snippet.description)}})])]):e._e()},ee=[],te={name:"PlaylistMediaItem",props:{item:Object,contentDetails:Object,channelPageFlag:Boolean}},ae=te,ie=(a("5cd9"),Object(u["a"])(ae,G,ee,!1,null,"6ab32e00",null)),se=ie.exports,ne=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{"loading-container":e.viewText,"loading-container-no-text":!e.viewText,"margin-top":!e.marginFLag,"padding-top":e.marginFLag}},[i("img",{class:{"loading-container__img":e.viewText,"loading-container-no-text__img":!e.viewText},attrs:{src:a("6e70"),alt:""}}),e.viewText?i("p",{staticClass:"loading-container__txt"},[e._v("Loading")]):e._e()])},oe=[],re={name:"MobileLoader",props:{viewText:Boolean,marginFLag:Boolean}},le=re,ce=(a("955f"),Object(u["a"])(le,ne,oe,!1,null,"6b15395c",null)),de=ce.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("div",{staticClass:"loader"},[a("div",{staticClass:"loader__body",style:"width:"+e.width+"%"})]):e._e()},pe=[],he={name:"DesktopLoader",props:{loading:Boolean,width:Number}},_e=he,me=(a("a0e4"),Object(u["a"])(_e,ue,pe,!1,null,"6e087ba5",null)),ve=me.exports,fe=a("bc3a"),ge=a.n(fe),be={name:"Home",components:{MobileSubHeader:T,DesktopSubHeader:H,VideoMediaItem:N,ChannelMediaItem:X,PlaylistMediaItem:se,MobileLoader:de,DesktopLoader:ve},data:function(){return{mediaItems:[],items:[],loading:!0,moreLoading:!1,nextPageToken:"",totalResults:-1,bottomOfWindowFlag:!1,lastScrollUpdate:0,getDataRunning:!1,videosResJson:{},playlistsResJson:{},channelsResJson:{},loaderWidth:0,desktopLoader:!0,loaderInterval:null}},methods:{desktopLoaderStart:function(){var e=this;this.desktopLoader=!0,this.loaderWidth=0;var t=!1;this.loaderInterval=setInterval((function(){t||e.loaderWidth++,100===e.loaderWidth&&(t=!0,setTimeout((function(){e.desktopLoader=!1,e.loaderWidth=0,setTimeout((function(){e.desktopLoader=!0,t=!1}),100)}),800))}),100)},getData:function(e){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function a(){var i,s,n,o,r,l,c,d,u,p,h,_,m,v,f,g,b,y;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.q,s=e.type,n=e.publishedAfter,o=e.order,r=e.pageToken,l=e.prevList,c=void 0===l?[]:l,t.getDataRunning=!0,t.items=[],c.length?t.moreLoading=!0:(t.loading=!0,t.mediaItems=[]),t.desktopLoaderStart(),d=["https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=20&key=".concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU")],i&&d.push("&q=".concat(i)),s&&d.push("&type=".concat(s)),n&&d.push("&publishedAfter=".concat(n)),o&&d.push("&order=".concat(o)),r&&d.push("&pageToken=".concat(r)),a.prev=11,a.next=14,ge.a.get(d.join(""));case 14:if(u=a.sent,t.items=u.data.items,t.nextPageToken=u.data.nextPageToken,t.totalResults=u.data.pageInfo.totalResults,t.mediaItems=[].concat(Object(D["a"])(c),Object(D["a"])(t.items)),p=t.items.filter((function(e){return"youtube#video"===e.id.kind})).map((function(e){return e.id.videoId})),h=t.items.filter((function(e){return"youtube#playlist"===e.id.kind})).map((function(e){return e.id.playlistId})),_=t.items.filter((function(e){return"youtube#channel"===e.id.kind})).map((function(e){return e.id.channelId})),!p.length){a.next=28;break}return m="https://www.googleapis.com/youtube/v3/videos?id=".concat(p.join(","),"&part=contentDetails,statistics&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),a.next=26,ge.a.get(m);case 26:v=a.sent,t.videosResJson=v.data.items.reduce((function(e,t){return e[t.id]={stats:t.statistics,contentDetails:t.contentDetails},e}),{});case 28:if(!h.length){a.next=34;break}return f="https://www.googleapis.com/youtube/v3/playlists?id=".concat(h.join(","),"&part=contentDetails&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),a.next=32,ge.a.get(f);case 32:g=a.sent,t.playlistsResJson=g.data.items.reduce((function(e,t){return e[t.id]=t.contentDetails,e}),{});case 34:if(!_.length){a.next=40;break}return b="https://www.googleapis.com/youtube/v3/channels?id=".concat(_.join(","),"&part=statistics&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),a.next=38,ge.a.get(b);case 38:y=a.sent,t.channelsResJson=y.data.items.reduce((function(e,t){return e[t.id]=t.statistics,e}),{});case 40:t.loading=!1,t.loaderWidth=100,clearInterval(t.loaderInterval),t.moreLoading=!1,t.getDataRunning=!1,a.next=51;break;case 47:a.prev=47,a.t0=a["catch"](11),alert("API KEY quota exceeded"),console.log(a.t0);case 51:case"end":return a.stop()}}),a,null,[[11,47]])})))()},showMore:function(){var e={q:this.$route.query.q,type:this.$route.query.type,publishedAfter:this.$route.query.publishedAfter,order:this.$route.query.order,pageToken:this.nextPageToken,prevList:JSON.parse(JSON.stringify(this.mediaItems))};this.getData(e)},scroll:function(){var e=this;window.onscroll=function(){var t=document.documentElement;if(t.scrollTop+t.clientHeight>=t.scrollHeight-20){var a=(new Date).getTime();if(a-e.lastScrollUpdate>3e3){e.lastScrollUpdate=a;var i={q:e.$route.query.q,type:e.$route.query.type,publishedAfter:e.$route.query.publishedAfter,order:e.$route.query.order,pageToken:e.nextPageToken,prevList:JSON.parse(JSON.stringify(e.mediaItems))};e.moreLoading=!0,e.getData(i)}}}}},mounted:function(){window.innerWidth>=768&&this.scroll()},created:function(){var e=this,t={q:this.$route.query.q,type:this.$route.query.type,publishedAfter:this.$route.query.publishedAfter,order:this.$route.query.order};this.getDataRunning||(this.getDataRunning=!0,this.getData(t)),l.$on("searchBy",(function(t){var a=t.q,i=t.type,s=t.publishedAfter,n=t.order,o=void 0===n?"relevance":n,r={q:e.$route.query.q,type:e.$route.query.type,publishedAfter:e.$route.query.publishedAfter,order:e.$route.query.order};a&&(r.q=a),i&&(r.type=i),s&&(r.publishedAfter=s),o&&(r.order=o),e.getDataRunning||(e.getDataRunning=!0,e.getData(r))}))}},ye=be,ke=(a("a5bb"),Object(u["a"])(ye,A,S,!1,null,"a8eecd84",null)),we=ke.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DesktopLoader",{staticClass:"mobile-hidden",attrs:{loading:e.desktopLoader,width:e.loaderWidth}}),a("div",{staticClass:"video-details-page"},[e.loading?[a("MobileLoader",{staticClass:"desktop-hidden",attrs:{viewText:!0}})]:[a("div",{staticClass:"video-details-page__video-container"},[a("iframe",{staticClass:"video-details-page__video-container__iframe",attrs:{src:e.videoLink}})]),a("div",{staticClass:"video-details-page__video-info"},[a("h1",{staticClass:"video-details-page__video-info__title"},[e._v(e._s(e.videoData.snippet.title))]),e.videoFLag?a("p",{staticClass:"video-details-page__video-info__sub-title"},[a("span",{staticClass:"video-details-page__video-info__sub-title__span"},[e.desktopFlag?e._e():a("span",[e._v(e._s(e.videoData.snippet.channelTitle))]),e._v(" "+e._s(Number(e.videoData.statistics.viewCount).toLocaleString())+" views ")])]):e._e()]),a("div",{staticClass:"video-details-page__video-sub-info"},[a("img",{staticClass:"video-details-page__video-sub-info__img",attrs:{src:e.videoData.snippet.thumbnails.default.url,alt:""}}),a("div",[a("p",{staticClass:"video-details-page__video-sub-info__title"},[e._v(e._s(e.videoData.snippet.channelTitle))]),a("p",{staticClass:"video-details-page__video-sub-info__info"},[e._v("Published on "+e._s(e.publishedAt(e.videoData.snippet.publishedAt)))])])]),a("div",{staticClass:"video-details-page__related-video-container"},[e.loading2?[a("MobileLoader",{attrs:{marginFLag:!0,viewText:!0}})]:[e._l(e.relatedVideos,(function(t,i){return[a("VideoMediaItem",{key:i,attrs:{item:t,statisticsInfo:e.videosResJson[t.id.videoId],videoPageFlag:e.desktopFlag}})]}))]],2)]],2)],1)},Ce=[],Ae=(a("b0c0"),{name:"VideoDetails",components:{MobileLoader:de,DesktopLoader:ve,VideoMediaItem:N},data:function(){return{id:"",videoLink:"",videoData:{},relatedVideos:[],videosResJson:{},loading:!0,loading2:!0,desktopFlag:!1,loaderWidth:0,desktopLoader:!0,loaderInterval:null,videoFLag:!0}},methods:{getVideoData:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a,i,s,n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,e.desktopLoader=!0,e.loaderWidth=0,a=!1,e.loaderInterval=setInterval((function(){a||e.loaderWidth++,100===e.loaderWidth&&(a=!0,setTimeout((function(){e.desktopLoader=!1,e.loaderWidth=0,setTimeout((function(){e.desktopLoader=!0,a=!1}),100)}),800))}),100),e.id=e.$route.params.id,e.videoLink="https://www.youtube.com/embed/".concat(e.id),i="https://www.googleapis.com/youtube/v3/videos?id=".concat(e.id,"&part=snippet,contentDetails,statistics&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),t.next=11,ge.a.get(i);case 11:return s=t.sent,s.data.items.length>0?e.videoData=s.data.items[0]:e.$router.push({path:"/"}).catch((function(){})),e.loading=!1,e.loaderWidth=100,e.desktopLoader=!1,clearInterval(e.loaderInterval),n=[],o="https://www.googleapis.com/youtube/v3/search?relatedToVideoId=".concat(e.id,"&part=snippet,id&maxResults=5&type=video&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),t.next=21,ge.a.get(o);case 21:return s=t.sent,e.relatedVideos=s.data.items,n=e.relatedVideos.filter((function(e){return"youtube#video"===e.id.kind})).map((function(e){return e.id.videoId})),r="https://www.googleapis.com/youtube/v3/videos?id=".concat(n.join(","),"&part=contentDetails,statistics&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),t.next=27,ge.a.get(r);case 27:s=t.sent,e.videosResJson=s.data.items.reduce((function(e,t){return e[t.id]={stats:t.statistics,contentDetails:t.contentDetails},e}),{}),e.loading2=!1,t.next=36;break;case 32:t.prev=32,t.t0=t["catch"](0),alert("API KEY quota exceeded"),console.log(t.t0);case 36:case"end":return t.stop()}}),t,null,[[0,32]])})))()},getPlaylistData:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a,i,s,n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,e.desktopLoader=!0,e.loaderWidth=0,a=!1,e.loaderInterval=setInterval((function(){a||e.loaderWidth++,100===e.loaderWidth&&(a=!0,setTimeout((function(){e.desktopLoader=!1,e.loaderWidth=0,setTimeout((function(){e.desktopLoader=!0,a=!1}),100)}),800))}),100),e.id=e.$route.params.id,e.videoLink="https://www.youtube.com/embed/videoseries?list=".concat(e.id),i="https://www.googleapis.com/youtube/v3/playlists?id=".concat(e.id,"&part=snippet,contentDetails&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),t.next=11,ge.a.get(i);case 11:return s=t.sent,s.data.items.length>0?e.videoData=s.data.items[0]:e.$router.push({path:"/"}).catch((function(){})),e.loading=!1,e.loaderWidth=100,e.desktopLoader=!1,clearInterval(e.loaderInterval),n=[],o="https://www.googleapis.com/youtube/v3/playlistItems?maxResults=50&part=snippet,id&playlistId=".concat(e.id,"&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),t.next=21,ge.a.get(o);case 21:return s=t.sent,e.relatedVideos=s.data.items,e.relatedVideos=e.relatedVideos.map((function(e){return e.id=e.snippet.resourceId,e})),n=e.relatedVideos.map((function(e){return e.id.videoId})),r="https://www.googleapis.com/youtube/v3/videos?id=".concat(n.join(","),"&part=contentDetails,statistics&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),t.next=28,ge.a.get(r);case 28:s=t.sent,e.videosResJson=s.data.items.reduce((function(e,t){return e[t.id]={stats:t.statistics,contentDetails:t.contentDetails},e}),{}),e.loading2=!1,t.next=37;break;case 33:t.prev=33,t.t0=t["catch"](0),alert("API KEY quota exceeded"),console.log(t.t0);case 37:case"end":return t.stop()}}),t,null,[[0,33]])})))()},publishedAt:function(e){return e=new Date(e).toDateString().split(" "),e[2]+" "+e[1]+" "+e[3]}},created:function(){window.innerWidth>=768&&(this.desktopFlag=!0),l.$emit("resetHeaderTitle"),"Video"===this.$route.name&&this.getVideoData(),"Playlist"===this.$route.name&&(this.getPlaylistData(),this.videoFLag=!1)},watch:{$route:function(){"Video"===this.$route.name&&this.getVideoData()}}}),Se=Ae,De=(a("b389"),Object(u["a"])(Se,Ie,Ce,!1,null,"74807f35",null)),xe=De.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DesktopLoader",{staticClass:"mobile-hidden",attrs:{loading:e.desktopLoader,width:e.loaderWidth}}),a("div",{staticClass:"channel-details-page"},[e.loading?[a("MobileLoader",{staticClass:"desktop-hidden",attrs:{viewText:!0}})]:[a("div",{staticClass:"channel-details-page__image-container"},[a("img",{staticClass:"channel-details-page__image-container__img",attrs:{src:e.bannerImage,alt:"banner"}})]),a("div",{staticClass:"channel-details-page__channel-info"},[a("img",{staticClass:"channel-details-page__channel-info__img",attrs:{src:e.channelData.snippet.thumbnails.default.url,alt:""}}),a("h1",{staticClass:"channel-details-page__channel-info__title"},[e._v(e._s(e.channelData.snippet.title))]),a("p",{staticClass:"channel-details-page__channel-info__sub-title"},[a("span",{staticClass:"channel-details-page__channel-info__sub-title__span"},[e._v(" "+e._s(Number(e.channelData.statistics.subscriberCount).toLocaleString())+" Subscribers ")])])]),a("div",{staticClass:"channel-details-page__related-channel-container"},[e.loading2?[a("MobileLoader",{attrs:{marginFLag:!0,viewText:!0}})]:[e._l(e.relatedPlaylists,(function(t,i){return[a("PlaylistMediaItem",{key:i,attrs:{item:t,contentDetails:t.contentDetails,channelPageFlag:e.desktopFlag}})]}))]],2)]],2)],1)},$e=[],qe={name:"ChannelDetails",components:{MobileLoader:de,DesktopLoader:ve,PlaylistMediaItem:se},data:function(){return{id:"",channelData:{},bannerImage:"",relatedPlaylists:[],loading:!0,loading2:!0,desktopFlag:!1,loaderWidth:0,desktopLoader:!0,loaderInterval:null}},methods:{getChannelData:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a,i,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,e.desktopLoader=!0,e.loaderWidth=0,a=!1,e.loaderInterval=setInterval((function(){a||e.loaderWidth++,100===e.loaderWidth&&(a=!0,setTimeout((function(){e.desktopLoader=!1,e.loaderWidth=0,setTimeout((function(){e.desktopLoader=!0,a=!1}),100)}),800))}),100),e.id=e.$route.params.id,i="https://www.googleapis.com/youtube/v3/channels?id=".concat(e.id,"&part=snippet,brandingSettings,statistics&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),t.next=10,ge.a.get(i);case 10:return s=t.sent,s.data.items.length>0?e.channelData=s.data.items[0]:e.$router.push({path:"/"}).catch((function(){})),e.loading=!1,e.loaderWidth=100,e.desktopLoader=!1,e.bannerImage=1==e.desktopFlag?e.channelData.brandingSettings.image.bannerImageUrl:e.channelData.brandingSettings.image.bannerMobileImageUrl,clearInterval(e.loaderInterval),n="https://www.googleapis.com/youtube/v3/playlists?maxResults=50&part=contentDetails,snippet,id&channelId=".concat(e.id,"&key=").concat("AIzaSyAFdVqSiZLBzjBpPa3aI1hkaDs-tKSMaeU"),t.next=20,ge.a.get(n);case 20:s=t.sent,e.relatedPlaylists=s.data.items.map((function(e){var t=e.id;return e.id={},e.id["playlistId"]=t,e})),e.loading2=!1,t.next=29;break;case 25:t.prev=25,t.t0=t["catch"](0),alert("API KEY quota exceeded"),console.log(t.t0);case 29:case"end":return t.stop()}}),t,null,[[0,25]])})))()}},created:function(){window.innerWidth>=768&&(this.desktopFlag=!0),l.$emit("resetHeaderTitle"),this.getChannelData()}},Pe=qe,Fe=(a("88f2"),Object(u["a"])(Pe,Le,$e,!1,null,"22b4db0c",null)),Te=Fe.exports;i["a"].use(C["a"]);var Oe=[{path:"/search",name:"Home",component:we},{path:"/video/:id",name:"Video",component:xe},{path:"/playlist/:id",name:"Playlist",component:xe},{path:"/channel/:id",name:"Channel",component:Te},{path:"*",redirect:{name:"Home"}}],je=new C["a"]({mode:"history",base:"/",routes:Oe,scrollBehavior:function(e,t,a){return a||{x:0,y:0}}}),Me=je;i["a"].config.productionTip=!1,new i["a"]({router:Me,render:function(e){return e(I)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var i=a("9c0c"),s=a.n(i);s.a},"5cae":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABs0lEQVRoge2Yy0rEMBhGj+LlCSyjCD6LoODbuHXps7h0696FgwyOulFhwMcQXY+LNkxMm6m5/UmHHiiFaZt8p7lMGhjZHCrgtTmqwLKegFlwIg8OgDdg2RwL4DCgPFWOKKZEDBlxkQp4bypV56Xxm083ExXRW2IBTLQA5jXXlhEVeab91vUAemvNHcsWFZkBL/ztOmaAqrln3Qz0EKmcqPi8yTnpWtYbH5Gu8WQba5NoSXvw7dupZj9vQgbpuv8jsZZQhM42XSsEcQmAKfUsFIJas5kz2chG8kh7EJZyTLsCb1lExJfUjrRy77g+kBnrC97uebCkWcQrS9dKNyfe66/Q74uYBGcpQSZahpwy0evOIZOsTkmZ5HVJyIi9sJQViXfhFBVm+8SNKZNNwhbARya7hC2Ii0wxEgofmeIkFLYdkb6jKAlFhbtICSvrTv67PRR907rvw2owjCKlkUrkLFG5Yuj7YbfAseW+6IM9NrvAJfBFHfQHuAb2jfuKF1EcATesAn8CF9r1wYgoToEPVsHvgBMGKAKwB1wB39Th1XlwIgqzuw1WRHFOvWt4nzvISEp+AVvHGNBBqML9AAAAAElFTkSuQmCC"},"5cd9":function(e,t,a){"use strict";var i=a("92c9"),s=a.n(i);s.a},"63f1":function(e,t,a){"use strict";var i=a("d55c"),s=a.n(i);s.a},"64c7":function(e,t,a){},"668b":function(e,t,a){},"66d7":function(e,t,a){e.exports=a.p+"img/icon-search.26a4dcf8.svg"},"6e70":function(e,t,a){e.exports=a.p+"img/loader.ef533b64.svg"},"76df":function(e,t,a){},"7a9b":function(e,t,a){e.exports=a.p+"img/playlist-count.af4efa19.svg"},"88f2":function(e,t,a){"use strict";var i=a("2f83"),s=a.n(i);s.a},"92c9":function(e,t,a){},"955f":function(e,t,a){"use strict";var i=a("2b46"),s=a.n(i);s.a},"9c0c":function(e,t,a){},a0e4:function(e,t,a){"use strict";var i=a("a947"),s=a.n(i);s.a},a37f:function(e,t,a){},a5bb:function(e,t,a){"use strict";var i=a("f4ea"),s=a.n(i);s.a},a947:function(e,t,a){},b389:function(e,t,a){"use strict";var i=a("a37f"),s=a.n(i);s.a},b7ac:function(e,t,a){},ba46:function(e,t,a){e.exports=a.p+"img/logo-youtube.58ed5da4.svg"},c687:function(e,t,a){"use strict";var i=a("47ba"),s=a.n(i);s.a},d55c:function(e,t,a){},e809:function(e,t,a){e.exports=a.p+"img/logo-youtube-desktop.1d9e9be6.svg"},f2c6:function(e,t,a){e.exports=a.p+"img/icon-search-black.338aed49.svg"},f4ea:function(e,t,a){}});
//# sourceMappingURL=app.c1f7744b.js.map