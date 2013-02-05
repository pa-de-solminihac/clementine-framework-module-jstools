/*	ColorBox v1.3.7 - a full featured, light-weight, customizable lightbox based on jQuery 1.3 */
(function(c){function o(b,d){d=d==="x"?n.width():n.height();return typeof b==="string"?Math.round(b.match(/%/)?d/100*parseInt(b,10):parseInt(b,10)):b}function K(b){b=c.isFunction(b)?b.call(h):b;return a.photo||b.match(/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i)}function Y(){for(var b in a)if(c.isFunction(a[b])&&b.substring(0,2)!=="on")a[b]=a[b].call(h);a.rel=a.rel||h.rel||"nofollow";a.href=a.href||c(h).attr("href");a.title=a.title||h.title}function Z(b){h=b;a=c.extend({},c(h).data(s)); Y();if(a.rel!=="nofollow"){j=c(".cboxElement").filter(function(){return(c(this).data(s).rel||this.rel)===a.rel});g=j.index(h);if(g<0){j=j.add(h);g=j.length-1}}else{j=c(h);g=0}if(!q){A=q=l;L=h;try{L.blur()}catch(d){}c.event.trigger(ba);a.onOpen&&a.onOpen.call(h);r.css({opacity:parseFloat(a.opacity),cursor:a.overlayClose?"pointer":"auto"}).show();a.w=o(a.initialWidth,"x");a.h=o(a.initialHeight,"y");e.position(0);M&&n.bind("resize.cboxIE6 scroll.cboxIE6",function(){r.css({width:n.width(),height:n.height(), top:n.scrollTop(),left:n.scrollLeft()})}).trigger("scroll.cboxIE6")}N.add(E).add(F).add(t).add(O).hide();P.html(a.close).show();e.slideshow();e.load()}var s="colorbox",l=true,e,B=c.browser.msie&&!c.support.opacity,M=B&&c.browser.version<7,ba="cbox_open",I="cbox_load",Q="cbox_complete",r,k,x,p,R,S,T,U,j,n,m,J,G,O,N,t,F,E,P,y,z,u,v,h,L,g,a,q,A,$={transition:"elastic",speed:350,width:false,height:false,innerWidth:false,innerHeight:false,initialWidth:"400",initialHeight:"400",maxWidth:false,maxHeight:false, scalePhotos:l,scrolling:l,inline:false,html:false,iframe:false,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:l,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,overlayClose:l,loop:l,slideshow:false,slideshowAuto:l,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,escKey:l,arrowKey:l};e=c.fn.colorbox=c.colorbox=function(b,d){var f= this;if(f.selector&&!f.length)return f;b=b||{};if(d)b.onComplete=d;if(!f.length||f.selector===undefined){f=c("<a/>");b.open=l}f.each(function(){c(this).data(s,c.extend({},c(this).data(s)||$,b)).addClass("cboxElement")});b.open&&Z(f[0]);return f};e.init=function(){function b(d){return c('<div id="cbox'+d+'"/>')}n=c(window);k=c('<div id="colorbox"/>');r=b("Overlay").hide();x=b("Wrapper");p=b("Content").append(m=b("LoadedContent").css({width:0,height:0}),G=b("LoadingOverlay").add(b("LoadingGraphic")), O=b("Title"),N=b("Current"),F=b("Next"),E=b("Previous"),t=b("Slideshow"),P=b("Close"));x.append(c("<div/>").append(b("TopLeft"),R=b("TopCenter"),b("TopRight")),c("<div/>").append(S=b("MiddleLeft"),p,T=b("MiddleRight")),c("<div/>").append(b("BottomLeft"),U=b("BottomCenter"),b("BottomRight"))).children().children().css({"float":"left"});J=c("<div id='cboxLoadingBay' style='position:absolute; width:9999px;'/>");c("body").prepend(r,k.append(x,J));if(B){k.addClass("cboxIE");M&&r.css("position","absolute")}p.children().hover(function(){c(this).addClass("hover")}, function(){c(this).removeClass("hover")}).addClass("hover");y=R.height()+U.height()+p.outerHeight(l)-p.height();z=S.width()+T.width()+p.outerWidth(l)-p.width();u=m.outerHeight(l);v=m.outerWidth(l);k.css({"padding-bottom":y,"padding-right":z}).hide();F.click(e.next);E.click(e.prev);P.click(e.close);p.children().removeClass("hover");c(".cboxElement").live("click",function(d){if(d.button!==0&&typeof d.button!=="undefined"||d.ctrlKey||d.shiftKey||d.altKey)return l;else{Z(this);return false}});r.click(function(){a.overlayClose&& e.close()});c(document).bind("keydown",function(d){if(q&&a.escKey&&d.keyCode===27){d.preventDefault();e.close()}if(q&&a.arrowKey&&!A&&j.length>1)if(d.keyCode===37&&(g>0||a.loop)){d.preventDefault();E.click()}else if(d.keyCode===39&&(g<j.length-1||a.loop)){d.preventDefault();F.click()}})};e.remove=function(){k.add(r).remove();c(".cboxElement").removeData(s).removeClass("cboxElement")};e.position=function(b,d){function f(C){R[0].style.width=U[0].style.width=p[0].style.width=C.style.width;G[0].style.height= G[1].style.height=p[0].style.height=S[0].style.height=T[0].style.height=C.style.height}var i,w=Math.max(n.height()-a.h-u-y,0)/2+n.scrollTop(),H=Math.max(n.width()-a.w-v-z,0)/2+n.scrollLeft();i=k.width()===a.w+v&&k.height()===a.h+u?0:b;x[0].style.width=x[0].style.height="9999px";k.dequeue().animate({width:a.w+v,height:a.h+u,top:w,left:H},{duration:i,complete:function(){f(this);A=false;x[0].style.width=a.w+v+z+"px";x[0].style.height=a.h+u+y+"px";d&&d()},step:function(){f(this)}})};e.resize=function(b){if(q){b= b||{};if(b.width)a.w=o(b.width,"x")-v-z;if(b.innerWidth)a.w=o(b.innerWidth,"x");m.css({width:a.w});if(b.height)a.h=o(b.height,"y")-u-y;if(b.innerHeight)a.h=o(b.innerHeight,"y");if(!b.innerHeight&&!b.height){b=m.wrapInner("<div style='overflow:auto'></div>").children();a.h=b.height();b.replaceWith(b.children())}m.css({height:a.h});e.position(a.transition==="none"?0:a.speed)}};e.prep=function(b){function d(w){var H,C,V,W,D=j.length,X=a.loop;e.position(w,function(){function aa(){B&&k[0].style.removeAttribute("filter")} if(q){B&&f&&m.fadeIn(100);if(a.iframe)c("<iframe frameborder=0"+(a.scrolling?"":" scrolling='no'")+(B?" allowtransparency='true'":"")+"/>").appendTo(m).attr({src:a.href,id:"cboxIframe",name:(new Date).getTime()});m.show();O.show().html(a.title);if(D>1){N.html(a.current.replace(/\{current\}/,g+1).replace(/\{total\}/,D)).show();F[X||g<D-1?"show":"hide"]().html(a.next);E[X||g>0?"show":"hide"]().html(a.previous);H=g>0?j[g-1]:j[D-1];V=g<D-1?j[g+1]:j[0];if(a.slideshow){t.show();g===D-1&&!X&&k.is(".cboxSlideshow_on")&& t.click()}if(a.preloading){W=c(V).data(s).href||V.href;C=c(H).data(s).href||H.href;if(K(W))c("<img/>")[0].src=W;if(K(C))c("<img/>")[0].src=C}}G.hide();a.transition==="fade"?k.fadeTo(i,1,function(){aa()}):aa();n.bind("resize.cbox",function(){e.position(0)});c.event.trigger(Q);a.onComplete&&a.onComplete.call(h)}})}if(q){var f,i=a.transition==="none"?0:a.speed;n.unbind("resize.cbox");m.remove();m=c('<div id="cboxLoadedContent"/>').html(b);m.hide().appendTo(J).css({width:function(){a.w=a.w||m.width(); a.w=a.mw&&a.mw<a.w?a.mw:a.w;return a.w}(),overflow:a.scrolling?"auto":"hidden"}).css({height:function(){a.h=a.h||m.height();a.h=a.mh&&a.mh<a.h?a.mh:a.h;return a.h}()}).prependTo(p);c("#cboxPhoto").css({cssFloat:"none"});M&&c("select:not(#colorbox select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("cbox_cleanup",function(){this.style.visibility="inherit"});a.transition==="fade"?k.fadeTo(i,0,function(){d(0)}):d(i)}};e.load=function(){var b,d,f,i=e.prep; A=l;h=j[g];a=c.extend({},c(h).data(s));Y();c.event.trigger(I);a.onLoad&&a.onLoad.call(h);a.h=a.height?o(a.height,"y")-u-y:a.innerHeight?o(a.innerHeight,"y"):false;a.w=a.width?o(a.width,"x")-v-z:a.innerWidth?o(a.innerWidth,"x"):false;a.mw=a.w;a.mh=a.h;if(a.maxWidth){a.mw=o(a.maxWidth,"x")-v-z;a.mw=a.w&&a.w<a.mw?a.w:a.mw}if(a.maxHeight){a.mh=o(a.maxHeight,"y")-u-y;a.mh=a.h&&a.h<a.mh?a.h:a.mh}b=a.href;G.show();if(a.inline){c('<div id="cboxInlineTemp"/>').hide().insertBefore(c(b)[0]).bind(I+" cbox_cleanup", function(){c(this).replaceWith(m.children())});i(c(b))}else if(a.iframe)i(" ");else if(a.html)i(a.html);else if(K(b)){d=new Image;d.onload=function(){var w;d.onload=null;d.id="cboxPhoto";c(d).css({margin:"auto",border:"none",display:"block",cssFloat:"left"});if(a.scalePhotos){f=function(){d.height-=d.height*w;d.width-=d.width*w};if(a.mw&&d.width>a.mw){w=(d.width-a.mw)/d.width;f()}if(a.mh&&d.height>a.mh){w=(d.height-a.mh)/d.height;f()}}if(a.h)d.style.marginTop=Math.max(a.h-d.height,0)/2+"px";i(d); j.length>1&&c(d).css({cursor:"pointer"}).click(e.next);if(B)d.style.msInterpolationMode="bicubic"};d.src=b}else c("<div>Request unsuccessful.</div>").appendTo(J).load(b,function(){i(this)})};e.next=function(){if(!A){g=g<j.length-1?g+1:0;e.load()}};e.prev=function(){if(!A){g=g>0?g-1:j.length-1;e.load()}};e.slideshow=function(){function b(){t.text(a.slideshowStop).bind(Q,function(){f=setTimeout(e.next,a.slideshowSpeed)}).bind(I,function(){clearTimeout(f)}).one("click",function(){d()});k.removeClass(i+ "off").addClass(i+"on")}var d,f,i="cboxSlideshow_";t.bind("cbox_closed",function(){t.unbind();clearTimeout(f);k.removeClass(i+"off "+i+"on")});d=function(){clearTimeout(f);t.text(a.slideshowStart).unbind(Q+" "+I).one("click",function(){b();f=setTimeout(e.next,a.slideshowSpeed)});k.removeClass(i+"on").addClass(i+"off")};if(a.slideshow&&j.length>1)a.slideshowAuto?b():d()};e.close=function(){if(q){q=false;c.event.trigger("cbox_cleanup");a.onCleanup&&a.onCleanup.call(h);n.unbind(".cbox .cboxIE6");k.add(r).stop().fadeTo("fast", 0,function(){c("#colorbox iframe").attr("src","about:blank");m.remove();k.add(r).css({opacity:1,cursor:"auto"}).hide();try{L.focus()}catch(b){}setTimeout(function(){c.event.trigger("cbox_closed");a.onClosed&&a.onClosed.call(h)},1)})}};e.element=function(){return c(h)};e.settings=$;c(e.init)})(jQuery);
