!function(e){}(jQuery),!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,i=e.documentElement,s=i.firstElementChild||i.firstChild,n=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",n.style.background="none",n.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(n,s),t=42===a.offsetWidth,i.removeChild(n),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){E(!0)}var i={};e.respond=i,i.update=function(){};var s=[],n=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(i){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var i=n();i&&(i.open("GET",e,!0),i.onreadystatechange=function(){4!==i.readyState||200!==i.status&&304!==i.status||t(i.responseText)},4!==i.readyState&&i.send(null))},r=function(e){return e.replace(i.regex.minmaxwh,"").match(i.regex.other)};if(i.ajax=a,i.queue=s,i.unsupportedmq=r,i.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},i.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!i.mediaQueriesSupported){var o,l,d,c=e.document,u=c.documentElement,m=[],h=[],f=[],p={},g=30,v=c.getElementsByTagName("head")[0]||u,x=c.getElementsByTagName("base")[0],y=v.getElementsByTagName("link"),w=function(){var e,t=c.createElement("div"),i=c.body,s=u.style.fontSize,n=i&&i.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",i||(i=a=c.createElement("body"),i.style.background="none"),u.style.fontSize="100%",i.style.fontSize="100%",i.appendChild(t),a&&u.insertBefore(i,u.firstChild),e=t.offsetWidth,a?u.removeChild(i):i.removeChild(t),u.style.fontSize=s,n&&(i.style.fontSize=n),e=d=parseFloat(e)},E=function(t){var i="clientWidth",s=u[i],n="CSS1Compat"===c.compatMode&&s||c.body[i]||s,a={},r=y[y.length-1],p=(new Date).getTime();if(t&&o&&g>p-o)return e.clearTimeout(l),void(l=e.setTimeout(E,g));o=p;for(var x in m)if(m.hasOwnProperty(x)){var S=m[x],b=S.minw,C=S.maxw,k=null===b,T=null===C,z="em";b&&(b=parseFloat(b)*(b.indexOf(z)>-1?d||w():1)),C&&(C=parseFloat(C)*(C.indexOf(z)>-1?d||w():1)),S.hasquery&&(k&&T||!(k||n>=b)||!(T||C>=n))||(a[S.media]||(a[S.media]=[]),a[S.media].push(h[S.rules]))}for(var $ in f)f.hasOwnProperty($)&&f[$]&&f[$].parentNode===v&&v.removeChild(f[$]);f.length=0;for(var F in a)if(a.hasOwnProperty(F)){var L=c.createElement("style"),R=a[F].join("\n");L.type="text/css",L.media=F,v.insertBefore(L,r.nextSibling),L.styleSheet?L.styleSheet.cssText=R:L.appendChild(c.createTextNode(R)),f.push(L)}},S=function(e,t,s){var n=e.replace(i.regex.comments,"").replace(i.regex.keyframes,"").match(i.regex.media),a=n&&n.length||0;t=t.substring(0,t.lastIndexOf("/"));var o=function(e){return e.replace(i.regex.urls,"$1"+t+"$2$3")},l=!a&&s;t.length&&(t+="/"),l&&(a=1);for(var d=0;a>d;d++){var c,u,f,p;l?(c=s,h.push(o(e))):(c=n[d].match(i.regex.findStyles)&&RegExp.$1,h.push(RegExp.$2&&o(RegExp.$2))),f=c.split(","),p=f.length;for(var g=0;p>g;g++)u=f[g],r(u)||m.push({media:u.split("(")[0].match(i.regex.only)&&RegExp.$2||"all",rules:h.length-1,hasquery:u.indexOf("(")>-1,minw:u.match(i.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:u.match(i.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},b=function(){if(s.length){var t=s.shift();a(t.href,function(i){S(i,t.href,t.media),p[t.href]=!0,e.setTimeout(function(){b()},0)})}},C=function(){for(var t=0;t<y.length;t++){var i=y[t],n=i.href,a=i.media,r=i.rel&&"stylesheet"===i.rel.toLowerCase();n&&r&&!p[n]&&(i.styleSheet&&i.styleSheet.rawCssText?(S(i.styleSheet.rawCssText,n,a),p[n]=!0):(!/^([a-zA-Z:]*\/\/)/.test(n)&&!x||n.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===n.substring(0,2)&&(n=e.location.protocol+n),s.push({href:n,media:a})))}b()};C(),i.update=C,i.getEmValue=w,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e){e.fn.dkanFormsHide=function(){this.each(function(){e(this).addClass("compact-form-wrapper");var t=e(this).find(".description").addClass("compact-form-description"),i=e(this).find("input");if(t.click(function(){i.focus()}),""==e(i).html())var i=e(this).find("textarea");if(null==e(i).html())var i=e(this).find("input");i.addClass("compact-form-input"),i.blur(function(){""===i.val()&&t.fadeIn("fast")}),i.keyup(function(){""!=i.val()&&t.hide()}),""!=i.val()&&t.css("display","none")})},e.fn.dkanFormsAutoDeluxeHide=function(){this.each(function(){e(this).addClass("compact-form-wrapper");var t=e(this).find(".description").addClass("compact-form-description"),i=e(this).find("#autocomplete-deluxe-input");t.click(function(){i.focus()}),i.focus(function(){t.hide()}),null!=e("#autocomplete-deluxe-item").html()&&t.css("display","none"),""!=e(this).find("input").val()&&t.css("display","none")})},Drupal.behaviors.dkanSite={attach:function(t,i){var s="#views-exposed-form-dataset-page,#block-dkan-sitewide-dkan-sitewide-search-bar,#views-exposed-form-groups-search-entity-view-1,#views-exposed-form-user-profile-search-entity-view-1";e(s,t).dkanFormsHide();var n=".field-name-field-tags";e(n,t).dkanFormsAutoDeluxeHide(),e(".filter-help.form-group p").append(' | <a href="#" class="text-help-toggle">'+Drupal.t("Toggle text format")+"</a>"),e(".filter-guidelines-processed").hide(),e(".text-help-toggle").click(function(t){t.preventDefault(),e(".form-type-select").toggle(),e(".filter-guidelines-processed").toggle()})}}}(jQuery),window.svgeezy=function(){return{init:function(e,t){this.avoid=e||!1,this.filetype=t||"png",this.svgSupport=this.supportsSvg(),this.svgSupport||(this.images=document.getElementsByTagName("img"),this.imgL=this.images.length,this.fallbacks())},fallbacks:function(){for(;this.imgL--;)if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var e=this.images[this.imgL].getAttribute("src");if(null===e)continue;if("svg"==this.getFileExt(e)){var t=e.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",t)}}},getFileExt:function(e){var t=e.split(".").pop();return t.indexOf("?")!==-1&&(t=t.split("?")[0]),t},hasClass:function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51Ym9vdF9yYWRpeC5zY3JpcHQuanMiLCJyZXNwb25kLm1pbi5qcyIsInNpdGV3aWRlLmpzIiwic3ZnZWV6eS5taW4uanMiXSwibmFtZXMiOlsiJCIsImpRdWVyeSIsImEiLCJtYXRjaE1lZGlhIiwiYiIsImMiLCJkb2N1bWVudEVsZW1lbnQiLCJkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmaXJzdENoaWxkIiwiZSIsImNyZWF0ZUVsZW1lbnQiLCJmIiwiaWQiLCJzdHlsZSIsImNzc1RleHQiLCJiYWNrZ3JvdW5kIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJpbnNlcnRCZWZvcmUiLCJvZmZzZXRXaWR0aCIsInJlbW92ZUNoaWxkIiwibWF0Y2hlcyIsIm1lZGlhIiwiZG9jdW1lbnQiLCJ0aGlzIiwidiIsInJlc3BvbmQiLCJ1cGRhdGUiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJnIiwicmVwbGFjZSIsInJlZ2V4IiwibWlubWF4d2giLCJtYXRjaCIsIm90aGVyIiwiYWpheCIsInF1ZXVlIiwidW5zdXBwb3J0ZWRtcSIsImtleWZyYW1lcyIsImNvbW1lbnRzIiwidXJscyIsImZpbmRTdHlsZXMiLCJvbmx5IiwibWludyIsIm1heHciLCJtZWRpYVF1ZXJpZXNTdXBwb3J0ZWQiLCJoIiwiaSIsImoiLCJrIiwibCIsIm0iLCJuIiwibyIsInAiLCJxIiwiciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicyIsInQiLCJ1IiwiYm9keSIsImZvbnRTaXplIiwicGFyc2VGbG9hdCIsImNvbXBhdE1vZGUiLCJsZW5ndGgiLCJEYXRlIiwiZ2V0VGltZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJoYXNPd25Qcm9wZXJ0eSIsInciLCJ4IiwieSIsInoiLCJBIiwiQiIsImluZGV4T2YiLCJoYXNxdWVyeSIsInB1c2giLCJydWxlcyIsIkMiLCJwYXJlbnROb2RlIiwiRCIsIkUiLCJGIiwiam9pbiIsInR5cGUiLCJuZXh0U2libGluZyIsInN0eWxlU2hlZXQiLCJjcmVhdGVUZXh0Tm9kZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiUmVnRXhwIiwiJDEiLCIkMiIsInNwbGl0Iiwic2hpZnQiLCJocmVmIiwicmVsIiwidG9Mb3dlckNhc2UiLCJyYXdDc3NUZXh0IiwidGVzdCIsImxvY2F0aW9uIiwiaG9zdCIsInByb3RvY29sIiwiZ2V0RW1WYWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImZuIiwiZGthbkZvcm1zSGlkZSIsImVhY2giLCJhZGRDbGFzcyIsImRlc2MiLCJmaW5kIiwiaW5wdXQiLCJjbGljayIsImZvY3VzIiwiaHRtbCIsImJsdXIiLCJ2YWwiLCJmYWRlSW4iLCJrZXl1cCIsImhpZGUiLCJjc3MiLCJka2FuRm9ybXNBdXRvRGVsdXhlSGlkZSIsIkRydXBhbCIsImJlaGF2aW9ycyIsImRrYW5TaXRlIiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwiZWxlbWVudHMiLCJhdXRvRGVsdXhlRWxlbWVudHMiLCJhcHBlbmQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsIndpbmRvdyIsInN2Z2VlenkiLCJpbml0IiwiYXZvaWQiLCJmaWxldHlwZSIsInN2Z1N1cHBvcnQiLCJzdXBwb3J0c1N2ZyIsImltYWdlcyIsImltZ0wiLCJmYWxsYmFja3MiLCJoYXNDbGFzcyIsImdldEF0dHJpYnV0ZSIsImdldEZpbGVFeHQiLCJzZXRBdHRyaWJ1dGUiLCJwb3AiLCJjbGFzc05hbWUiLCJpbXBsZW1lbnRhdGlvbiIsImhhc0ZlYXR1cmUiXSwibWFwcGluZ3MiOiJDQUlBLFNBQUFBLEtBRUFDLFNDREEsU0FBQUMsR0FBQSxZQUFBQSxHQUFBQyxXQUFBRCxFQUFBQyxZQUFBLFNBQUFELEdBQUEsR0FBQUUsR0FBQUMsRUFBQUgsRUFBQUksZ0JBQUFDLEVBQUFGLEVBQUFHLG1C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QSxPQUFBLElBQUFiLEtBQUE0SCxTQUFBNUgsTUFBQStILE9BQUEvSCxLQUFBZ0ksTUFBQUssYUFBQSxNQUFBdkcsTUFBQXNHLFdBQUEsU0FBQTFGLEdBQUEsR0FBQVosR0FBQVksRUFBQXFDLE1BQUEsS0FBQXVELEtBQUEsT0FBQXhHLEdBQUE4QixRQUFBLFlBQUE5QixFQUFBQSxFQUFBaUQsTUFBQSxLQUFBLElBQUFqRCxHQUFBb0csU0FBQSxTQUFBeEYsRUFBQVosR0FBQSxPQUFBLElBQUFZLEVBQUE2RixVQUFBLEtBQUEzRSxRQUFBLElBQUE5QixFQUFBLFNBQUFnRyxZQUFBLFdBQUEsTUFBQS9ILFVBQUF5SSxlQUFBQyxXQUFBLDJDQUFBIiwiZmlsZSI6Im51Ym9vdF9yYWRpeC5zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBDdXN0b20gc2NyaXB0cyBmb3IgdGhlbWUuXG4gKi9cbihmdW5jdGlvbiAoJCkge1xuICAvLyBjb2RlIGhlcmVcbn0pKGpRdWVyeSk7XG4iLCIvKiEgUmVzcG9uZC5qcyB2MS40LjI6IG1pbi9tYXgtd2lkdGggbWVkaWEgcXVlcnkgcG9seWZpbGxcbiAqIENvcHlyaWdodCAyMDE0IFNjb3R0IEplaGxcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICogaHR0cDovL2oubXAvcmVzcG9uZGpzICovXG5cbiFmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjthLm1hdGNoTWVkaWE9YS5tYXRjaE1lZGlhfHxmdW5jdGlvbihhKXt2YXIgYixjPWEuZG9jdW1lbnRFbGVtZW50LGQ9Yy5maXJzdEVsZW1lbnRDaGlsZHx8Yy5maXJzdENoaWxkLGU9YS5jcmVhdGVFbGVtZW50KFwiYm9keVwiKSxmPWEuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZi5pZD1cIm1xLXRlc3QtMVwiLGYuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO3RvcDotMTAwZW1cIixlLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCIsZS5hcHBlbmRDaGlsZChmKSxmdW5jdGlvbihhKXtyZXR1cm4gZi5pbm5lckhUTUw9JyZzaHk7PHN0eWxlIG1lZGlhPVwiJythKydcIj4gI21xLXRlc3QtMSB7IHdpZHRoOiA0MnB4OyB9PC9zdHlsZT4nLGMuaW5zZXJ0QmVmb3JlKGUsZCksYj00Mj09PWYub2Zmc2V0V2lkdGgsYy5yZW1vdmVDaGlsZChlKSx7bWF0Y2hlczpiLG1lZGlhOmF9fX0oYS5kb2N1bWVudCl9KHRoaXMpLGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoKXt2KCEwKX12YXIgYz17fTthLnJlc3BvbmQ9YyxjLnVwZGF0ZT1mdW5jdGlvbigpe307dmFyIGQ9W10sZT1mdW5jdGlvbigpe3ZhciBiPSExO3RyeXtiPW5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGMpe2I9bmV3IGEuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfXJldHVybiBmdW5jdGlvbigpe3JldHVybiBifX0oKSxmPWZ1bmN0aW9uKGEsYil7dmFyIGM9ZSgpO2MmJihjLm9wZW4oXCJHRVRcIixhLCEwKSxjLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQhPT1jLnJlYWR5U3RhdGV8fDIwMCE9PWMuc3RhdHVzJiYzMDQhPT1jLnN0YXR1c3x8YihjLnJlc3BvbnNlVGV4dCl9LDQhPT1jLnJlYWR5U3RhdGUmJmMuc2VuZChudWxsKSl9LGc9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShjLnJlZ2V4Lm1pbm1heHdoLFwiXCIpLm1hdGNoKGMucmVnZXgub3RoZXIpfTtpZihjLmFqYXg9ZixjLnF1ZXVlPWQsYy51bnN1cHBvcnRlZG1xPWcsYy5yZWdleD17bWVkaWE6L0BtZWRpYVteXFx7XStcXHsoW15cXHtcXH1dKlxce1teXFx9XFx7XSpcXH0pKy9naSxrZXlmcmFtZXM6L0AoPzpcXC0oPzpvfG1venx3ZWJraXQpXFwtKT9rZXlmcmFtZXNbXlxce10rXFx7KD86W15cXHtcXH1dKlxce1teXFx9XFx7XSpcXH0pK1teXFx9XSpcXH0vZ2ksY29tbWVudHM6L1xcL1xcKlteKl0qXFwqKyhbXi9dW14qXSpcXCorKSpcXC8vZ2ksdXJsczovKHVybFxcKClbJ1wiXT8oW15cXC9cXCknXCJdW146XFwpJ1wiXSspWydcIl0/KFxcKSkvZyxmaW5kU3R5bGVzOi9AbWVkaWEgKihbXlxce10rKVxceyhbXFxTXFxzXSs/KSQvLG9ubHk6Lyhvbmx5XFxzKyk/KFthLXpBLVpdKylcXHM/LyxtaW53Oi9cXChcXHMqbWluXFwtd2lkdGhcXHMqOlxccyooXFxzKlswLTlcXC5dKykocHh8ZW0pXFxzKlxcKS8sbWF4dzovXFwoXFxzKm1heFxcLXdpZHRoXFxzKjpcXHMqKFxccypbMC05XFwuXSspKHB4fGVtKVxccypcXCkvLG1pbm1heHdoOi9cXChcXHMqbShpbnxheClcXC0oaGVpZ2h0fHdpZHRoKVxccyo6XFxzKihcXHMqWzAtOVxcLl0rKShweHxlbSlcXHMqXFwpL2dpLG90aGVyOi9cXChbXlxcKV0qXFwpL2d9LGMubWVkaWFRdWVyaWVzU3VwcG9ydGVkPWEubWF0Y2hNZWRpYSYmbnVsbCE9PWEubWF0Y2hNZWRpYShcIm9ubHkgYWxsXCIpJiZhLm1hdGNoTWVkaWEoXCJvbmx5IGFsbFwiKS5tYXRjaGVzLCFjLm1lZGlhUXVlcmllc1N1cHBvcnRlZCl7dmFyIGgsaSxqLGs9YS5kb2N1bWVudCxsPWsuZG9jdW1lbnRFbGVtZW50LG09W10sbj1bXSxvPVtdLHA9e30scT0zMCxyPWsuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxsLHM9ay5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJhc2VcIilbMF0sdD1yLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKSx1PWZ1bmN0aW9uKCl7dmFyIGEsYj1rLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz1rLmJvZHksZD1sLnN0eWxlLmZvbnRTaXplLGU9YyYmYy5zdHlsZS5mb250U2l6ZSxmPSExO3JldHVybiBiLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6MWVtO3dpZHRoOjFlbVwiLGN8fChjPWY9ay5jcmVhdGVFbGVtZW50KFwiYm9keVwiKSxjLnN0eWxlLmJhY2tncm91bmQ9XCJub25lXCIpLGwuc3R5bGUuZm9udFNpemU9XCIxMDAlXCIsYy5zdHlsZS5mb250U2l6ZT1cIjEwMCVcIixjLmFwcGVuZENoaWxkKGIpLGYmJmwuaW5zZXJ0QmVmb3JlKGMsbC5maXJzdENoaWxkKSxhPWIub2Zmc2V0V2lkdGgsZj9sLnJlbW92ZUNoaWxkKGMpOmMucmVtb3ZlQ2hpbGQoYiksbC5zdHlsZS5mb250U2l6ZT1kLGUmJihjLnN0eWxlLmZvbnRTaXplPWUpLGE9aj1wYXJzZUZsb2F0KGEpfSx2PWZ1bmN0aW9uKGIpe3ZhciBjPVwiY2xpZW50V2lkdGhcIixkPWxbY10sZT1cIkNTUzFDb21wYXRcIj09PWsuY29tcGF0TW9kZSYmZHx8ay5ib2R5W2NdfHxkLGY9e30sZz10W3QubGVuZ3RoLTFdLHA9KG5ldyBEYXRlKS5nZXRUaW1lKCk7aWYoYiYmaCYmcT5wLWgpcmV0dXJuIGEuY2xlYXJUaW1lb3V0KGkpLGk9YS5zZXRUaW1lb3V0KHYscSksdm9pZCAwO2g9cDtmb3IodmFyIHMgaW4gbSlpZihtLmhhc093blByb3BlcnR5KHMpKXt2YXIgdz1tW3NdLHg9dy5taW53LHk9dy5tYXh3LHo9bnVsbD09PXgsQT1udWxsPT09eSxCPVwiZW1cIjt4JiYoeD1wYXJzZUZsb2F0KHgpKih4LmluZGV4T2YoQik+LTE/anx8dSgpOjEpKSx5JiYoeT1wYXJzZUZsb2F0KHkpKih5LmluZGV4T2YoQik+LTE/anx8dSgpOjEpKSx3Lmhhc3F1ZXJ5JiYoeiYmQXx8ISh6fHxlPj14KXx8IShBfHx5Pj1lKSl8fChmW3cubWVkaWFdfHwoZlt3Lm1lZGlhXT1bXSksZlt3Lm1lZGlhXS5wdXNoKG5bdy5ydWxlc10pKX1mb3IodmFyIEMgaW4gbylvLmhhc093blByb3BlcnR5KEMpJiZvW0NdJiZvW0NdLnBhcmVudE5vZGU9PT1yJiZyLnJlbW92ZUNoaWxkKG9bQ10pO28ubGVuZ3RoPTA7Zm9yKHZhciBEIGluIGYpaWYoZi5oYXNPd25Qcm9wZXJ0eShEKSl7dmFyIEU9ay5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksRj1mW0RdLmpvaW4oXCJcXG5cIik7RS50eXBlPVwidGV4dC9jc3NcIixFLm1lZGlhPUQsci5pbnNlcnRCZWZvcmUoRSxnLm5leHRTaWJsaW5nKSxFLnN0eWxlU2hlZXQ/RS5zdHlsZVNoZWV0LmNzc1RleHQ9RjpFLmFwcGVuZENoaWxkKGsuY3JlYXRlVGV4dE5vZGUoRikpLG8ucHVzaChFKX19LHc9ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWEucmVwbGFjZShjLnJlZ2V4LmNvbW1lbnRzLFwiXCIpLnJlcGxhY2UoYy5yZWdleC5rZXlmcmFtZXMsXCJcIikubWF0Y2goYy5yZWdleC5tZWRpYSksZj1lJiZlLmxlbmd0aHx8MDtiPWIuc3Vic3RyaW5nKDAsYi5sYXN0SW5kZXhPZihcIi9cIikpO3ZhciBoPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoYy5yZWdleC51cmxzLFwiJDFcIitiK1wiJDIkM1wiKX0saT0hZiYmZDtiLmxlbmd0aCYmKGIrPVwiL1wiKSxpJiYoZj0xKTtmb3IodmFyIGo9MDtmPmo7aisrKXt2YXIgayxsLG8scDtpPyhrPWQsbi5wdXNoKGgoYSkpKTooaz1lW2pdLm1hdGNoKGMucmVnZXguZmluZFN0eWxlcykmJlJlZ0V4cC4kMSxuLnB1c2goUmVnRXhwLiQyJiZoKFJlZ0V4cC4kMikpKSxvPWsuc3BsaXQoXCIsXCIpLHA9by5sZW5ndGg7Zm9yKHZhciBxPTA7cD5xO3ErKylsPW9bcV0sZyhsKXx8bS5wdXNoKHttZWRpYTpsLnNwbGl0KFwiKFwiKVswXS5tYXRjaChjLnJlZ2V4Lm9ubHkpJiZSZWdFeHAuJDJ8fFwiYWxsXCIscnVsZXM6bi5sZW5ndGgtMSxoYXNxdWVyeTpsLmluZGV4T2YoXCIoXCIpPi0xLG1pbnc6bC5tYXRjaChjLnJlZ2V4Lm1pbncpJiZwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrKFJlZ0V4cC4kMnx8XCJcIiksbWF4dzpsLm1hdGNoKGMucmVnZXgubWF4dykmJnBhcnNlRmxvYXQoUmVnRXhwLiQxKSsoUmVnRXhwLiQyfHxcIlwiKX0pfXYoKX0seD1mdW5jdGlvbigpe2lmKGQubGVuZ3RoKXt2YXIgYj1kLnNoaWZ0KCk7ZihiLmhyZWYsZnVuY3Rpb24oYyl7dyhjLGIuaHJlZixiLm1lZGlhKSxwW2IuaHJlZl09ITAsYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eCgpfSwwKX0pfX0seT1mdW5jdGlvbigpe2Zvcih2YXIgYj0wO2I8dC5sZW5ndGg7YisrKXt2YXIgYz10W2JdLGU9Yy5ocmVmLGY9Yy5tZWRpYSxnPWMucmVsJiZcInN0eWxlc2hlZXRcIj09PWMucmVsLnRvTG93ZXJDYXNlKCk7ZSYmZyYmIXBbZV0mJihjLnN0eWxlU2hlZXQmJmMuc3R5bGVTaGVldC5yYXdDc3NUZXh0Pyh3KGMuc3R5bGVTaGVldC5yYXdDc3NUZXh0LGUsZikscFtlXT0hMCk6KCEvXihbYS16QS1aOl0qXFwvXFwvKS8udGVzdChlKSYmIXN8fGUucmVwbGFjZShSZWdFeHAuJDEsXCJcIikuc3BsaXQoXCIvXCIpWzBdPT09YS5sb2NhdGlvbi5ob3N0KSYmKFwiLy9cIj09PWUuc3Vic3RyaW5nKDAsMikmJihlPWEubG9jYXRpb24ucHJvdG9jb2wrZSksZC5wdXNoKHtocmVmOmUsbWVkaWE6Zn0pKSl9eCgpfTt5KCksYy51cGRhdGU9eSxjLmdldEVtVmFsdWU9dSxhLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsYiwhMSk6YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9ucmVzaXplXCIsYil9fSh0aGlzKTtcbiIsIi8qKlxuICogQGZpbGVcbiAqIEpTIGZvciBES0FOIHNpdGUuXG4gKi9cbihmdW5jdGlvbiAoJCkge1xuXG4gIC8qKlxuICAgKiBTaG93cyBhbmQgaGlkZXMgYSBkZXNjcmlwdGlvbiBmb3IgRHJ1cGFsIGZvcm0gZWxlbWVudHMuXG4gICAqL1xuICAkLmZuLmRrYW5Gb3Jtc0hpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NvbXBhY3QtZm9ybS13cmFwcGVyJyk7XG4gICAgICB2YXIgZGVzYyA9ICQodGhpcykuZmluZCgnLmRlc2NyaXB0aW9uJykuYWRkQ2xhc3MoJ2NvbXBhY3QtZm9ybS1kZXNjcmlwdGlvbicpO1xuICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpO1xuICAgICAgZGVzYy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9KTtcbiAgICAgIGlmICgkKGlucHV0KS5odG1sKCkgPT0gJycpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5maW5kKCd0ZXh0YXJlYScpO1xuICAgICAgfVxuICAgICAgaWYgKCQoaW5wdXQpLmh0bWwoKSA9PSBudWxsKSB7XG4gICAgICAgIHZhciBpbnB1dCA9ICQodGhpcykuZmluZCgnaW5wdXQnKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZENsYXNzKCdjb21wYWN0LWZvcm0taW5wdXQnKVxuICAgICAgaW5wdXQuYmx1cihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnB1dC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICBkZXNjLmZhZGVJbignZmFzdCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlucHV0LmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpICE9ICcnKSB7XG4gICAgICAgICAgZGVzYy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGlucHV0LnZhbCgpICE9ICcnKSB7XG4gICAgICAgIGRlc2MuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhbmQgaGlkZXMgYSBkZXNjcmlwdGlvbiBmb3IgQXV0b2NvbXBsZXRlIERlbHV4ZSBmb3JtIGVsZW1lbnRzLlxuICAgKi9cbiAgJC5mbi5ka2FuRm9ybXNBdXRvRGVsdXhlSGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY29tcGFjdC1mb3JtLXdyYXBwZXInKTtcbiAgICAgIHZhciBkZXNjID0gJCh0aGlzKS5maW5kKCcuZGVzY3JpcHRpb24nKS5hZGRDbGFzcygnY29tcGFjdC1mb3JtLWRlc2NyaXB0aW9uJyk7XG4gICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLmZpbmQoJyNhdXRvY29tcGxldGUtZGVsdXhlLWlucHV0Jyk7XG4gICAgICBkZXNjLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH0pO1xuICAgICAgaW5wdXQuZm9jdXMoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZXNjLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCQoJyNhdXRvY29tcGxldGUtZGVsdXhlLWl0ZW0nKS5odG1sKCkgIT0gbnVsbCkge1xuICAgICAgICBkZXNjLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9XG4gICAgICBpZiAoJCh0aGlzKS5maW5kKCdpbnB1dCcpLnZhbCgpICE9ICcnKSB7XG4gICAgICAgIGRlc2MuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIERydXBhbC5iZWhhdmlvcnMuZGthblNpdGUgPSB7XG4gICAgYXR0YWNoOiBmdW5jdGlvbiAoY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgIC8vIEF1dG9oaWRlIHNlbGVjdGVkIGVsZW1lbnRzLlxuICAgICAgdmFyIGVsZW1lbnRzID0gXCIjdmlld3MtZXhwb3NlZC1mb3JtLWRhdGFzZXQtcGFnZSwjYmxvY2stZGthbi1zaXRld2lkZS1ka2FuLXNpdGV3aWRlLXNlYXJjaC1iYXIsI3ZpZXdzLWV4cG9zZWQtZm9ybS1ncm91cHMtc2VhcmNoLWVudGl0eS12aWV3LTEsI3ZpZXdzLWV4cG9zZWQtZm9ybS11c2VyLXByb2ZpbGUtc2VhcmNoLWVudGl0eS12aWV3LTFcIjtcbiAgICAgICQoZWxlbWVudHMsIGNvbnRleHQpLmRrYW5Gb3Jtc0hpZGUoKTtcbiAgICAgIHZhciBhdXRvRGVsdXhlRWxlbWVudHMgPSBcIi5maWVsZC1uYW1lLWZpZWxkLXRhZ3NcIjtcbiAgICAgICQoYXV0b0RlbHV4ZUVsZW1lbnRzLCBjb250ZXh0KS5ka2FuRm9ybXNBdXRvRGVsdXhlSGlkZSgpO1xuXG4gICAgICAvLyBUb2dnbGUgYnV0dG9uIGZvciB0ZXh0LWZvcm1hdC5cbiAgICAgICQoJy5maWx0ZXItaGVscC5mb3JtLWdyb3VwIHAnKS5hcHBlbmQoJyB8ICcgKyAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtaGVscC10b2dnbGVcIj4nICsgRHJ1cGFsLnQoJ1RvZ2dsZSB0ZXh0IGZvcm1hdCcpICsgJzwvYT4nKTtcbiAgICAgIC8vJCgnLmZvcm0tdHlwZS1zZWxlY3QnKS5oaWRlKCk7XG4gICAgICAkKCcuZmlsdGVyLWd1aWRlbGluZXMtcHJvY2Vzc2VkJykuaGlkZSgpO1xuICAgICAgJCgnLnRleHQtaGVscC10b2dnbGUnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLmZvcm0tdHlwZS1zZWxlY3QnKS50b2dnbGUoKTtcbiAgICAgICAgJCgnLmZpbHRlci1ndWlkZWxpbmVzLXByb2Nlc3NlZCcpLnRvZ2dsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn0pKGpRdWVyeSk7XG4iLCIvKlxuICogU1ZHZWV6eS5qcyAxLjBcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMiwgQmVuIEhvd2RsZSBodHRwOi8vdHdvc3RlcG1lZGlhLmNvLnVrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgV1RGUEwgbGljZW5zZVxuICogaHR0cDovL3NhbS56b3kub3JnL3d0ZnBsL1xuICpcbiAqIERhdGU6IFN1biBBdWcgMjYgMjA6MzggMjAxMiBHTVRcbiAqL1xuLypcblx0Ly9jYWxsIGxpa2Ugc28sIHBhc3MgaW4gYSBjbGFzcyBuYW1lIHRoYXQgeW91IGRvbid0IHdhbnQgaXQgdG8gY2hlY2sgYW5kIGEgZmlsZXR5cGUgdG8gcmVwbGFjZSAuc3ZnIHdpdGhcblx0c3ZnZWV6eS5pbml0KCdub2NoZWNrJywgJ3BuZycpO1xuKi9cbndpbmRvdy5zdmdlZXp5PWZ1bmN0aW9uKCl7cmV0dXJue2luaXQ6ZnVuY3Rpb24odCxpKXt0aGlzLmF2b2lkPXR8fGZhbHNlO3RoaXMuZmlsZXR5cGU9aXx8XCJwbmdcIjt0aGlzLnN2Z1N1cHBvcnQ9dGhpcy5zdXBwb3J0c1N2ZygpO2lmKCF0aGlzLnN2Z1N1cHBvcnQpe3RoaXMuaW1hZ2VzPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpO3RoaXMuaW1nTD10aGlzLmltYWdlcy5sZW5ndGg7dGhpcy5mYWxsYmFja3MoKX19LGZhbGxiYWNrczpmdW5jdGlvbigpe3doaWxlKHRoaXMuaW1nTC0tKXtpZighdGhpcy5oYXNDbGFzcyh0aGlzLmltYWdlc1t0aGlzLmltZ0xdLHRoaXMuYXZvaWQpfHwhdGhpcy5hdm9pZCl7dmFyIHQ9dGhpcy5pbWFnZXNbdGhpcy5pbWdMXS5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7aWYodD09PW51bGwpe2NvbnRpbnVlfWlmKHRoaXMuZ2V0RmlsZUV4dCh0KT09XCJzdmdcIil7dmFyIGk9dC5yZXBsYWNlKFwiLnN2Z1wiLFwiLlwiK3RoaXMuZmlsZXR5cGUpO3RoaXMuaW1hZ2VzW3RoaXMuaW1nTF0uc2V0QXR0cmlidXRlKFwic3JjXCIsaSl9fX19LGdldEZpbGVFeHQ6ZnVuY3Rpb24odCl7dmFyIGk9dC5zcGxpdChcIi5cIikucG9wKCk7aWYoaS5pbmRleE9mKFwiP1wiKSE9PS0xKXtpPWkuc3BsaXQoXCI/XCIpWzBdfXJldHVybiBpfSxoYXNDbGFzczpmdW5jdGlvbih0LGkpe3JldHVybihcIiBcIit0LmNsYXNzTmFtZStcIiBcIikuaW5kZXhPZihcIiBcIitpK1wiIFwiKT4tMX0sc3VwcG9ydHNTdmc6ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcImh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjSW1hZ2VcIixcIjEuMVwiKX19fSgpOyJdfQ==
