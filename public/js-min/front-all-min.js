var f=!0,h=!1;function i(){return function(){}}var j,m,x,y;$(document).ready(function(){j=new z;"undefined"==typeof console&&(console={log:i()});"undefined"==typeof window.console.debug&&(console.debug=console.log);var a;a:{a=window.location.search.substring(1).split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if("debug"==d[0]){a=encodeURI(d[1]);break a}}a=h}"true"!==a&&(window.console.log=i(),window.console.debug=i())});function C(){}
function z(){function a(){$("nav ul li").removeClass("active").css("border-color",s);$("nav ul li a").css("color",n)}var c,d,o,e,g,p,t,q,r,u,v,s,n,w,A,B,k=this;this.s=function(){e=$("header");g=$("#feedback-bar");p=$("#page");q=$("#dialog-confirm");r=$("#dialog-alert");$("form.jr:eq(0)");Modernizr.borderradius&&(Modernizr.boxshadow&&Modernizr.csstransitions&&Modernizr.opacity)&&this.n();$("article.page").each(function(){var b,l="",a;a=$(this).attr("id");b=$(this).attr("data-display")?$(this).attr("data-display"):
a;l=$(this).attr("data-title")?$(this).attr("data-title"):a;a=$(this).attr("data-ext-link")?$(this).attr("data-ext-link"):"#"+a;$('<li class="ui-corner-tl ui-corner-tr"><a href="'+a+'" title="'+l+'" >'+b+"</a></li>").appendTo($("nav ul"))});var l;u=$("#feedback-bar").css("background-color");v=$("header").css("border-top-color");s=$("header").css("background-color");$("body").removeClass("ui-widget-content");$("nav").addClass("ui-state-default");$("nav").css("color");n=$("nav").css("background-color");
$("nav").addClass("ui-state-hover");w=$("nav").css("background-color");$("nav").addClass("ui-state-active");A=$("nav").css("background-color");$("nav").removeClass();$("#page, #form-controls").css("background-image","none");$("#page, #component").css("color",u);$("#survey-info").css("color",v);l=$("body").addClass("ui-widget-shadow").css("background-color");$("body").css("background-color",l).removeClass("ui-widget-shadow");l=$("#page-content").addClass("ui-widget-overlay").css("background-color");
$("#page-content, #overlay").css("background-color",l).removeClass("ui-widget-overlay");$(".page a, .page a:link, .page a:visited").css("color",n).hover(function(){$(this).css("color",w)},function(){$(this).css("color",n)}).mousedown(function(){$(this).css("color",A)}).mouseup(function(){$(this).css("color",n)});$(".tabs-nohdr .ui-tabs-panel").css("background-color","#FEEEBD");a();$("button#save-form").button({icons:{primary:"ui-icon-disk"}}).click(i());$("button#reset-form").button({icons:{primary:"ui-icon-refresh"}}).click(function(){resetForm()});
$("button#delete-form").button({icons:{primary:"ui-icon-trash"}}).click(i());$("button#launch-form").button({icons:{primary:"ui-icon-arrowthick-1-e"}}).click(function(){j.alert("In the future this button will launch the form in Rapaide.survey (now it just triggers validation of the whole form).","Not functional");$("form.jr").trigger("beforesave")});$("#form-controls button").l();$("#feedback-bar-close").button({icons:{primary:"ui-icon-closethick"},text:h}).click(function(b){b.preventDefault();k.h()});
$("#page-close").button({icons:{primary:"ui-icon-closethick"},text:h}).click(function(b){b.preventDefault();k.g()});$("#feedback-bar-close, #page-close").removeClass().addClass("custom-button ui-widget-header ui-corner-all");$('a[href^="#"]:not(nav ul li a)').click(function(b){console.log("captured click to internal link that is not in nav");var a=$(this).attr("href");"#"!==a&&(b.preventDefault(),$('nav li a[href="'+a+'"]').click())});$('nav ul li a[href^="#"]').click(function(b){b.preventDefault();
b=$(this).attr("href").substr(1);k.m(b);$(this).closest("li").addClass("active").css("border-color",v);$(this).css("color",u)}).hover(function(){$("nav ul li:not(.active)").css("border-color",s);$(this).closest("li:not(.active)").css("border-color",u).find("a").css("color",w)},function(){$("nav ul li:not(.active)").css("border-color",s).find("a").css("color",n)});$(window).on("onlinestatuschange",function(b,a){k.p(a)});$(document).on("edit","form.jr",function(){B(f)});$("header #status-connection").click(function(b){k.o($(this).attr("title"));
b.stopPropagation()});$("#settings input").change(C);$("#records-saved li:not(.no-click)").on("click","li",function(b){b.preventDefault()}).on("mouseenter","li",function(){$(this).addClass("ui-state-hover");$(this).mousedown(function(){$(this).addClass("ui-state-active")})}).on("mouseleave","li",function(){$(this).removeClass("ui-state-hover")});$("button#records-force-upload").button({icons:{z:"ui-icon-arrowthick-1-n"}}).click(i()).hover(function(){$("#records-force-upload-info").show()},function(){$("#records-force-upload-info").hide()});
$("button#records-export").button({icons:{primary:"ui-icon-suitcase"}}).click(i()).hover(function(){$("#records-export-info").show()},function(){$("#records-export-info").hide()});$("#export-excel").button({icons:{primary:"ui-icon-suitcase"}});$(window).resize(function(){$("#container").css("top",$("header").outerHeight());$("body:not(.no-scroll) #container").height($(window).height()-$("header").outerHeight()-$("#form-controls.bottom").outerHeight());var b=$("nav").offset().left,a=$("#logo").offset().left+
$("#logo").outerWidth();b<a?$("#logo").css("visibility","hidden"):$("#logo").css("visibility","visible")});$("footer").detach().appendTo("#container")};this.B=function(){$(window).trigger("resize");t=$("<pages></pages>");$("article.page").detach().appendTo(t).css("display","block")};this.n=function(){var a={"fancy-visuals":f},b;for(b in a);};this.t=function(){return c};this.u=function(){return d};this.m=function(a){d&&this.g();d=f;a&&(p.find("#page-content").prepend(m(a)),"records"===a&&x());y();
$("#overlay").show();setTimeout(function(){$("#overlay, header").bind("click.pageEvents",function(){$("#page-close").trigger("click")})},50);$(window).bind("resize.pageEvents",function(){y()})};this.g=function(){d=h;p.find(".page").detach();y();a();$("#overlay").hide();$("#overlay, header").unbind(".pageEvents");$(window).unbind(".pageEvents")};this.o=function(a){var b;b=b?1E3*b:1E4;clearTimeout(o);o=setTimeout(function(){k.h()},b);c=f;1<g.find("p").length&&g.find("p:eq(1)").remove();if(g.find("p").html()!==
a||0===g.find("p").length)b=$("<p></p>"),b.text(a),g.prepend(b);y()};this.h=function(){c=h;g.find("p").remove();y()};this.alert=function(a,b){var c,b=b||"Alert";c=function(){r.dialog("destroy");r.find("#dialog-alert-msg").text("")};r.find("#dialog-alert-msg").text(a).f();r.dialog({title:b,modal:f,resizable:h,buttons:{Ok:c},beforeClose:c})};this.confirm=function(a,b,c){var d,g,e,c=c||"Are you sure?",b="undefined"==typeof b?{d:"Confirm",c:"Cancel"}:b;b.d=b.d||"Confirm";b.c=b.c||"Cancel";b.k=b.k||i();
b.j=b.j||i();d=b.k;g=b.j;e=function(){q.dialog("destroy");q.find("#dialog-confirm-msg").text("")};q.find("#dialog-confirm-msg").text(a||"Please confirm action").f();q.dialog({title:c,resizable:h,modal:f,buttons:[{text:b.d,click:function(){d.call();e.call()}},{text:b.c,click:function(){g.call();e.call()}}],beforeClose:e})};this.p=function(a){console.log("updating online status in menu bar to:");console.log(a);a?$("header #status-connection").removeClass().addClass("ui-icon ui-icon-signal-diag").attr("title",
"It appears there is currently an Internet connection available."):$("header #status-connection").removeClass().addClass("ui-icon ui-icon-cancel").attr("title","It appears there is currently no Internet connection")};B=function(a){a?$("header #status-editing").removeClass().addClass("ui-icon ui-icon-pencil").attr("title","Form is being edited."):$("header #status-editing").removeClass().attr("title","")};y=function(){var a,b;c?(a=e.outerHeight(),b=d?e.outerHeight()+g.outerHeight():e.outerHeight()+
g.outerHeight()-p.outerHeight()):(a=e.outerHeight()-g.outerHeight(),b=d?e.outerHeight():e.outerHeight()-p.outerHeight());g.css("top",a);p.css("top",b)};m=function(a){d=t.find('article[id="'+a+'"]').clone(f);switch(a){case "records":k.q(d)}return d};x=function(){var a=$("#records-saved-pane"),b=$("#records-saved ol");a.css("overflow","hidden");var c=b.height()-a.height();if(0<c){var d=c/b.height(),d=Math.round((1-d)*a.height()),d=d-d%2;$("#records .column.middle").html('<div id="slider-wrap" class="ui-corner-all"><div id="slider-vertical"></div></div>');
$("#slider-wrap").height(a.outerHeight());$("#slider-vertical").slider({orientation:"vertical",A:"max",min:0,max:100,value:100,C:function(a,d){var e=-((100-d.value)*c/100);console.log("new topValue:"+e);b.css({top:e})}});$("#slider-wrap").css("margin-top",$("#records-saved h3").outerHeight(f));$(".ui-slider-handle").css({height:d,"margin-bottom":-0.5*d});a=$("#slider-vertical").height();d=a-d;a=0.5*(a-d);$(".ui-slider").css({height:d,"margin-top":a});$(".ui-slider-range").css({top:-a});$("#slider-wrap").click(function(){$("#slider-vertical").slider("value",
0);b.css({top:-c})});$("#records-saved-pane,#slider-wrap").mousewheel(function(a,d){var e=$("#slider-vertical").slider("value"),e=e+5*d;$("#slider-vertical").slider("value",e);e=-((100-e)*c/100);0<e&&(e=0);Math.abs(e)>c&&(e=-1*c);b.css({top:e});a.preventDefault()})}};this.q=function(a){a||(a=t.find('article[id="records"]'));a.find("#records-saved ol").children().remove();a.find("#records-draft-qty").text(0);a.find("#records-final-qty").text(0)}}var D=jQuery;
D.fn.l=function(){var a=0;this.each(function(){D(this).width()>a&&(a=D(this).width())}).each(function(){D(this).width(a)})};D.fn.reverse=[].reverse;
D.fn.e=function(a){a=D.extend({i:"!@#$%^&*()+=[]\\';,/{}|\":<>?~`.- ",a:"",b:""},a);this.each(function(){a.v&&(a.a+="ABCDEFGHIJKLMNOPQRSTUVWXYZ");a.r&&(a.a+="abcdefghijklmnopqrstuvwxyz");for(var c=a.b.split(""),d=0;d<c.length;d++)-1!=a.i.indexOf(c[d])&&(c[d]="\\"+c[d]);a.b=c.join("|");var o=a.i+a.a,o=o.replace(RegExp(a.b,"gi"),"");D(this).keypress(function(a){var c;c=a.charCode?String.fromCharCode(a.charCode):String.fromCharCode(a.which);o.indexOf(c)!=-1&&a.preventDefault();a.ctrlKey&&c=="v"&&a.preventDefault()});
D(this).bind("contextmenu",function(){return h})})};D.fn.w=function(a){var c="abcdefghijklmnopqrstuvwxyz",c=c+c.toUpperCase(),a=D.extend({a:c},a);return this.each(function(){D(this).e(a)})};D.fn.alpha=function(a){a=D.extend({a:"1234567890"},a);return this.each(function(){D(this).e(a)})};
D.fn.f=function(){var a;a||(a=1);var c=this.contents().filter(function(){return 3==this.nodeType}).first(),d=c.text();a=d.split(" ",a).join(" ");c.length&&(c[0].nodeValue=d.slice(a.length),c.before('<span class="capitalize">'+a+"</span>"))};