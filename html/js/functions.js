!function(s){s.fn.superfish=function(i){var a=s.fn.superfish,e=a.c,n=s(['<span class="',e.arrowClass,'">&#43;</span>'].join("")),o=function(){var i=s(this),a=r(i);clearTimeout(a.sfTimer),i.showSuperfishUl().siblings().hideSuperfishUl()},t=function(){var i=s(this),e=r(i),n=a.op;clearTimeout(e.sfTimer),e.sfTimer=setTimeout(function(){n.retainPath=s.inArray(i[0],n.$path)>-1,i.hideSuperfishUl(),n.$path.length&&i.parents(["li.",n.hoverClass].join("")).length<1&&o.call(n.$path)},n.delay)},r=function(s){var i=s.parents(["ul.",e.menuClass,":first"].join(""))[0];return a.op=a.o[i.serial],i},l=function(s){s.addClass(e.anchorClass).append(n.clone())};return this.each(function(){var n=this.serial=a.o.length,r=s.extend({},a.defaults,i);r.$path=s("li."+r.pathClass,this).slice(0,r.pathLevels).each(function(){s(this).addClass([r.hoverClass,e.bcClass].join(" ")).filter("li:has(ul)").removeClass(r.pathClass)}),a.o[n]=a.op=r,s("li:has(ul)",this)[s.fn.hoverIntent&&!r.disableHI?"hoverIntent":"hover"](o,t).each(function(){r.autoArrows&&l(s(">a:first-child",this))}).not("."+e.bcClass).hideSuperfishUl();var h=s("a",this);h.each(function(s){var i=h.eq(s).parents("li");h.eq(s).focus(function(){o.call(i)}).blur(function(){t.call(i)})}),r.onInit.call(this)}).each(function(){var i=[e.menuClass];!a.op.dropShadows||s.browser.msie&&s.browser.version<7||i.push(e.shadowClass),s(this).addClass(i.join(" "))})};var i=s.fn.superfish;i.o=[],i.op={},i.IE7fix=function(){var a=i.op;s.browser.msie&&s.browser.version>6&&a.dropShadows&&void 0!=a.animation.opacity&&this.toggleClass(i.c.shadowClass+"-off")},i.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"},i.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:!0,dropShadows:!0,disableHI:!1,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}},s.fn.extend({hideSuperfishUl:function(){var a=i.op,e=a.retainPath===!0?a.$path:"";a.retainPath=!1;var n=s(["li.",a.hoverClass].join(""),this).add(this).not(e).removeClass(a.hoverClass).find(">ul").hide().css("visibility","hidden");return a.onHide.call(n),this},showSuperfishUl:function(){var s=i.op,a=(i.c.shadowClass+"-off",this.addClass(s.hoverClass).find(">ul:hidden").css("visibility","visible"));return i.IE7fix.call(a),s.onBeforeShow.call(a),a.animate(s.animation,s.speed,function(){i.IE7fix.call(a),s.onShow.call(a)}),this}})}(jQuery),jQuery(document).ready(function(s){s().superfish&&s("#primary-nav ul.sf-menu").superfish({delay:200,animation:{opacity:"show",height:"show"},speed:"fast",dropShadows:!1,disableHI:!1}),s(function(){s("#primary-nav-mobile .menu-toggle").click(function(){return s("#primary-nav-mobile ul").slideToggle("slow",function(){}),!1})}),s(".st_faq .entry-content").hide(),s(".st_faq .entry-title").click(function(){return s(this).toggleClass("active").next().slideToggle("slow"),!1});var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};String.prototype.escapeHTML=function(){return String(this).replace(/[&<>"'\/]/g,function(s){return i[s]})},s("a[href='"+window.location.hash.escapeHTML()+"']").parent(".st_faq .entry-title").click()});
//# sourceMappingURL=maps/functions.js.map