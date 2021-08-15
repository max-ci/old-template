function is_touch_device(){return!!("ontouchstart"in window)}function is_ie(){return-1!=navigator.appVersion.indexOf("MSIE")?!0:!1}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}!function($){$.fn.dzsparallaxer=function(o){var defaults={settings_mode:"scroll",mode_scroll:"normal",easing:"easeIn",animation_duration:"20",direction:"normal",js_breakout:"off",breakout_fix:"off",settings_movexaftermouse:"off",settings_makeFunctional:!1};if("undefined"==typeof o&&"undefined"!=typeof $(this).attr("data-options")&&""!=$(this).attr("data-options")){var aux=$(this).attr("data-options");aux="var aux_opts = "+aux,eval(aux),o=aux_opts}o=$.extend(defaults,o),Math.easeIn=function(t,i,e,a){return-e*(t/=a)*(t-2)+i},Math.easeOutQuad=function(t,i,e,a){return t/=a,-e*t*(t-2)+i},Math.easeInOutSine=function(t,i,e,a){return-e/2*(Math.cos(Math.PI*t/a)-1)+i},this.each(function(){function init(){if(1==o.settings_makeFunctional){var t=!1,i=document.URL,e=i.indexOf("://")+3,a=i.indexOf("/",e),n=i.substring(e,a);if(n.indexOf("l")>-1&&n.indexOf("c")>-1&&n.indexOf("o")>-1&&n.indexOf("l")>-1&&n.indexOf("a")>-1&&n.indexOf("h")>-1&&(t=!0),n.indexOf("d")>-1&&n.indexOf("i")>-1&&n.indexOf("g")>-1&&n.indexOf("d")>-1&&n.indexOf("z")>-1&&n.indexOf("s")>-1&&(t=!0),n.indexOf("o")>-1&&n.indexOf("z")>-1&&n.indexOf("e")>-1&&n.indexOf("h")>-1&&n.indexOf("t")>-1&&(t=!0),n.indexOf("e")>-1&&n.indexOf("v")>-1&&n.indexOf("n")>-1&&n.indexOf("a")>-1&&n.indexOf("t")>-1&&(t=!0),0==t)return}if(_theTarget=cthis.find(".dzsparallaxer--target").eq(0),cthis.find(".dzsparallaxer--blackoverlay").length>0&&(_blackOverlay=cthis.find(".dzsparallaxer--blackoverlay").eq(0)),cthis.find(".dzsparallaxer--fadeouttarget").length>0&&(_fadeouttarget=cthis.find(".dzsparallaxer--fadeouttarget").eq(0)),cthis.hasClass("wait-readyall")||setTimeout(function(){duration_viy=Number(o.animation_duration)},300),ch=cthis.height(),"on"==o.settings_movexaftermouse&&(cw=cthis.width()),_theTarget&&(th=_theTarget.height(),"on"==o.settings_movexaftermouse&&(tw=_theTarget.width())),initialheight=ch,"2"==o.breakout_fix&&console.info(cthis.prev()),cthis.find(".dzsprxseparator--bigcurvedline").length>0&&cthis.find(".dzsprxseparator--bigcurvedline").append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="#FFFFFF" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>'),cthis.find(".dzsprxseparator--2triangles").length>0&&cthis.find(".dzsprxseparator--2triangles").append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="#FFFFFF" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>'),cthis.find(".dzsprxseparator--triangle").length>0&&cthis.find(".dzsprxseparator--triangle").append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="#FFFFFF" points="2200,100 0,100 0,0 2200,100 "/></svg>'),cthis.find(".divimage").length>0||cthis.find("img").length>0){var s=cthis.children(".divimage, img").eq(0);s.attr("data-src")?(lazyloading_setsource=s.attr("data-src"),$(window).bind("scroll",handle_scroll),handle_scroll()):init_start()}else init_start()}function init_start(){if(!started){if(started=!0,$(window).bind("resize",handle_resize),handle_resize(),cthis.hasClass("wait-readyall")&&setTimeout(function(){handle_scroll()},700),setTimeout(function(){cthis.addClass("dzsprx-readyall"),handle_scroll(),cthis.hasClass("wait-readyall")&&(duration_viy=Number(o.animation_duration))},1e3),cthis.find("*[data-parallaxanimation]").length>0&&cthis.find("*[data-parallaxanimation]").each(function(){var _t=$(this);if(_t.attr("data-parallaxanimation")){null==animator_objects_arr&&(animator_objects_arr=[]),animator_objects_arr.push(_t);var aux=_t.attr("data-parallaxanimation");aux="window.aux_opts2 = "+aux;try{eval(aux)}catch(err){console.info(err),window.aux_opts2=null}if(window.aux_opts2){for(i=0;i<window.aux_opts2.length;i++)0==isNaN(Number(window.aux_opts2[i].initial))&&(window.aux_opts2[i].initial=Number(window.aux_opts2[i].initial)),0==isNaN(Number(window.aux_opts2[i].mid))&&(window.aux_opts2[i].mid=Number(window.aux_opts2[i].mid)),0==isNaN(Number(window.aux_opts2[i]["final"]))&&(window.aux_opts2[i]["final"]=Number(window.aux_opts2[i]["final"]));_t.data("parallax_options",window.aux_opts2)}}}),cthis.hasClass("simple-parallax")?_theTarget.wrap('<div class="simple-parallax-inner"></div>'):handle_frame(),setTimeout(function(){},1500),cthis.hasClass("use-loading")){if(cthis.find(".divimage").length>0||cthis.children("img").length>0){if(cthis.find(".divimage").length>0){lazyloading_setsource&&cthis.find(".divimage").eq(0).css("background-image","url("+lazyloading_setsource+")");var _loadTarget_src=String(cthis.find(".divimage").eq(0).css("background-image")).split('"')[1];void 0==_loadTarget_src&&(_loadTarget_src=String(cthis.find(".divimage").eq(0).css("background-image")).split("url(")[1],_loadTarget_src=String(_loadTarget_src).split(")")[0]);var _loadTarget=new Image;_loadTarget.onload=function(t){cthis.addClass("loaded")},_loadTarget.src=_loadTarget_src}}else cthis.addClass("loaded");setTimeout(function(){cthis.addClass("loaded"),calculate_dims()},1e4)}cthis.get(0).api_set_update_func=function(t){api_outer_update_func=t},"scroll"==o.settings_mode&&($(window).unbind("scroll",handle_scroll),$(window).bind("scroll",handle_scroll),handle_scroll(),setTimeout(handle_scroll,1e3),document.addEventListener("touchmove",handle_mousemove,!1)),("mouse_body"==o.settings_mode||"on"==o.settings_movexaftermouse)&&$(document).bind("mousemove",handle_mousemove)}}function handle_resize(){cw=cthis.width(),wh=$(window).height(),ww=$(window).width(),started!==!1&&(760>cw?cthis.addClass("under-760"):cthis.removeClass("under-760"),int_calculate_dims&&clearTimeout(int_calculate_dims),int_calculate_dims=setTimeout(calculate_dims,700),"on"==o.js_breakout&&(cthis.css("width",ww+"px"),cthis.css("margin-left","0"),cthis.offset().left>0&&cthis.css("margin-left","-"+cthis.offset().left+"px")))}function calculate_dims(){ch=cthis.height(),th=_theTarget.height(),wh=$(window).height(),0==cthis.hasClass("allbody")&&0==cthis.hasClass("dzsparallaxer---window-height")&&(initialheight>=th&&th>0?(cthis.height(th),ch=cthis.height(),is_ie()&&version_ie()<=10?_theTarget.css("top","0"):_theTarget.css("transform","translate3d(0,0px,0)"),_blackOverlay&&_blackOverlay.css("opacity","0")):cthis.height(initialheight)),_theTarget.attr("data-forcewidth_ratio")&&(_theTarget.width(Number(_theTarget.attr("data-forcewidth_ratio"))*_theTarget.height()),_theTarget.width()<cthis.width()&&_theTarget.width(cthis.width()))}function handle_mousemove(t){if("mouse_body"==o.settings_mode){st=t.pageY;var i=0;if(0==th)return;i=st/wh*(ch-th),bo_o=st/ch,i>0&&(i=0),ch-th>i&&(i=ch-th),bo_o>1&&(bo_o=1),0>bo_o&&(bo_o=0),finish_viy=i}if("on"==o.settings_movexaftermouse){var e=t.pageX,a=0;a=e/ww*(cw-tw),a>0&&(a=0),cw-tw>a&&(a=cw-tw),finish_vix=a}}function handle_scroll(t){if(st=$(window).scrollTop(),vi_y=0,started===!1&&(wh=$(window).height(),st+wh>=cthis.offset().top&&init_start()),0!=th&&started!==!1&&"scroll"==o.settings_mode){"fromtop"==o.mode_scroll&&(vi_y=st/ch*(ch-th),"reverse"==o.direction&&(vi_y=(1-st/ch)*(ch-th))),cthis_ot=cthis.offset().top;var e=(st-(cthis_ot-wh))/(cthis_ot+ch-(cthis_ot-wh));if(e>1&&(e=1),0>e&&(e=0),animator_objects_arr)for(i=0;i<animator_objects_arr.length;i++){var a=animator_objects_arr[i],n=a.data("parallax_options");if(n)for(j=0;j<n.length;j++)if(.5>=e){var s=2*e,r=2*e-1;0>r&&(r=-r);var d=r*n[j].initial+s*n[j].mid,l=n[j].value;l=l.replace("{{val}}",d),a.css(n[j].property,l)}else{var s=2*(e-.5),r=s-1;0>r&&(r=-r);var d=r*n[j].mid+s*n[j]["final"],l=n[j].value;l=l.replace("{{val}}",d),a.css(n[j].property,l)}}if("normal"==o.mode_scroll&&(vi_y=e*(ch-th),"reverse"==o.direction&&(vi_y=(1-e)*(ch-th)),cthis.hasClass("debug-target")&&console.info(o.mode_scroll,st,cthis_ot,wh,ch,cthis_ot+ch,e)),_fadeouttarget){var h=Math.abs((st-cthis_ot)/cthis.outerHeight()-1);h>1&&(h=1),0>h&&(h=0),_fadeouttarget.css("opacity",h)}bo_o=st/ch,vi_y>0&&(vi_y=0),ch-th>vi_y&&(vi_y=ch-th),bo_o>1&&(bo_o=1),0>bo_o&&(bo_o=0),finish_viy=vi_y,finish_bo=bo_o,0===duration_viy&&(target_viy=finish_viy,is_ie()&&version_ie()<=10?_theTarget.css("top",""+target_viy+"px"):_theTarget.css("transform","translate3d(0,"+target_viy+"px,0)")),time=0}}function handle_frame(){return isNaN(target_viy)&&(target_viy=0),0===duration_viy?(requestAnimFrame(handle_frame),!1):(begin_viy=target_viy,change_viy=finish_viy-begin_viy,begin_bo=target_bo,change_bo=finish_bo-begin_bo,"easeIn"==o.easing&&(target_viy=Number(Math.easeIn(1,begin_viy,change_viy,duration_viy).toFixed(5)),target_bo=Number(Math.easeIn(1,begin_bo,change_bo,duration_viy).toFixed(5))),"easeOutQuad"==o.easing&&(target_viy=Math.easeOutQuad(1,begin_viy,change_viy,duration_viy),target_bo=Math.easeOutQuad(1,begin_bo,change_bo,duration_viy)),"easeInOutSine"==o.easing&&(target_viy=Math.easeInOutSine(1,begin_viy,change_viy,duration_viy),target_bo=Math.easeInOutSine(1,begin_bo,change_bo,duration_viy)),target_vix=0,"on"==o.settings_movexaftermouse&&(begin_vix=target_vix,change_vix=finish_vix-begin_vix,target_vix=Math.easeIn(1,begin_vix,change_vix,duration_viy)),is_ie()&&version_ie()<=10?_theTarget.css("top",""+target_viy+"px"):_theTarget.css("transform","translate3d("+target_vix+"px,"+target_viy+"px,0)"),_blackOverlay&&_blackOverlay.css("opacity",target_bo),api_outer_update_func&&api_outer_update_func(target_viy),void requestAnimFrame(handle_frame))}var cthis=$(this),_theTarget=null,_blackOverlay=null,_fadeouttarget=null,nritems=0,tobeloaded=0,i=0,tw=0,th=0,ch=0,tw=0,cw=0,ww=0,wh=0,initialheight=0,int_calculate_dims=0,duration_viy=0,target_viy=0,target_vix=0,target_bo=0,begin_viy=0,begin_vix=0,begin_bo=0,finish_viy=0,finish_vix=0,finish_bo=0,change_viy=0,change_vix=0,change_bo=0,api_outer_update_func=null,st=0,vi_y=0,bo_o=0,cthis_ot=0,lazyloading_setsource="",started=!1,animator_objects_arr=null;init()})},window.dzsprx_init=function(t,i){if("undefined"!=typeof i&&"undefined"!=typeof i.init_each&&1==i.init_each){var a=0;for(e in i)a++;1==a&&(i=void 0),$(t).each(function(){var t=$(this);t.dzsparallaxer(i)})}else $(t).dzsparallaxer(i)}}(jQuery),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),jQuery(document).ready(function($){$(".dzsparallaxer---window-height").each(function(){function t(){var t=$(window).height();i.height(t)}var i=$(this);$(window).bind("resize",t),t()}),dzsprx_init(".dzsparallaxer.auto-init",{init_each:!0})});