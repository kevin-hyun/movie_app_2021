(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(15),i=s.n(r),c=s(6),o=s.n(c),l=s(16),m=s(17),d=s(18),j=s(21),u=s(20),v=s(19),b=s.n(v),h=s(0);var p=function(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:" movie__title",style:{backgroundColor:"rgba(39,238,245,0.7)"},children:s}),Object(h.jsx)("h5",{className:" movie__year",children:t}),Object(h.jsxs)("ul",{className:"genres",children:[r.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:e},t)})),Object(h.jsx)("p",{className:" movie__summary",children:a})]})]})]})},g=(s(46),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"loading"})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return console.log(e),Object(h.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component)),_=g;i.a.render(Object(h.jsx)(_,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.cbbdc7cb.chunk.js.map