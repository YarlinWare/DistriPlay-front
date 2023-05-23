if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/superfish.js')
$.include('js/jquery.hoverIntent.minified.js')
$.include('js/tms-0.4.1.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/jquery.tools.min.js')
$.include('js/jquery.cycle.all.min.js')
$(function(){
	if($('.tweet').length)$.include('js/jquery.tweet.js');
	if($('.lightbox-image').length)$.include('js/jquery.prettyPhoto.js');
	if($('#form1').length)$.include('js/forms.js');
	// Main Slider
	$('.slider')._TMS({
		show:0,
		pauseOnHover:false,
		duration:1000,
		preset:'fade',
		pagination:true,
		pagNums:true,
		slideshow:7000,
		numStatus:false,
		banners:'fade',// fromLeft, fromRight, fromTop, fromBottom
		waitBannerAnimation:false})
		$('#pager').cycle({ 
			fx:      'scrollUp',
			timeout:  0,
			speed:    1000,
			pager: '.nav'
		});
		$('#pager1').cycle({ 
			fx:      'scrollUp',
			timeout:  0,
			speed:    1000,
			pager: '.nav'
		});
		$('#pager2').cycle({ 
			fx:      'scrollUp',
			timeout:  0,
			speed:    1000,
			pager: '.nav'
		});
		
		$('#pager4').cycle({ 
			fx:      'scrollUp',
			timeout:  0,
			speed:    1000,
			pager: '.nav'
		});
		// Tabs
	$(".tabs1 ul").tabs(".tabs1 .tab_content");
	$(".tabs2 ul").tabs(".tabs2 .tab_content");
	$(".tabs3 ul").tabs(".tabs3 .tab_content");
	
	$('.pager3').cycle({ 
			fx:      'fade',
			timeout:  0,
			speed:    1000,
			pager: '.nav1'
		});
		$('.pager5').cycle({ 
			fx:      'fade',
			timeout:  0,
			speed:    1000,
			pager: '.nav2'
		});
		$('.pager6').cycle({ 
			fx:      'fade',
			timeout:  0,
			speed:    1000,
			pager: '.nav3'
		});
		$('.pager7').cycle({ 
			fx:      'fade',
			timeout:  0,
			speed:    1000,
			pager: '.nav4'
		});
		$('.pager8').cycle({ 
			fx:      'fade',
			timeout:  0,
			speed:    1000,
			pager: '.nav5'
		});
		$('.pager9').cycle({ 
			fx:      'fade',
			timeout:  0,
			speed:    1000,
			pager: '.nav6'
		});
		$('.pager10').cycle({ 
			fx:      'fade',
			timeout:  0,
			speed:    1000,
			pager: '.nav7'
		});
});
