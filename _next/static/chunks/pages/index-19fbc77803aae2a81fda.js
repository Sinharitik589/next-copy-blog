_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("YFqc"),c=n.n(a),u=r.a.createElement;t.default=function(){return u("div",null,"Hello World."," ",u(c.a,{href:"/about",as:"/next-copy-blog/about"},u("a",null,"About")),u("button",{onClick:function(){console.log("Hello")}},"Click me"))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a,c=r(n("q1tI")),u=n("elyg"),f=(n("g/15"),n("nOHt")),i=new Map,l=window.IntersectionObserver,s={};var p=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,o){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),s[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=c.default.useState(),r=o(n,2),a=r[0],i=r[1],v=(0,f.useRouter)(),h=v&&v.pathname||"/",w=c.default.useMemo((function(){var t=(0,u.resolveHref)(h,e.href);return{href:t,as:e.as?(0,u.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),y=w.href,g=w.as;c.default.useEffect((function(){if(t&&l&&a&&a.tagName&&(0,u.isLocalURL)(y)&&!s[y+"%"+g])return p(a,(function(){d(v,y,g)}))}),[t,a,y,g,v]);var E=e.children,_=e.replace,b=e.shallow,m=e.scroll;"string"===typeof E&&(E=c.default.createElement("a",null,E));var R=c.Children.only(E),N={ref:function(e){e&&i(e),R&&"object"===typeof R&&R.ref&&("function"===typeof R.ref?R.ref(e):"object"===typeof R.ref&&(R.ref.current=e))},onClick:function(e){R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,y,g,_,b,m)}};return t&&(N.onMouseEnter=function(e){(0,u.isLocalURL)(y)&&(R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),d(v,y,g,{priority:!0}))}),!e.passHref&&("a"!==R.type||"href"in R.props)||(N.href=(0,u.addBasePath)(g)),c.default.cloneElement(R,N)};t.default=v},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);