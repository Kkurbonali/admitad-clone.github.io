!function(){"use strict";Element.prototype.ga_hasClass=function(e){return this.classList.contains(e)};var e={locationShow:"location-show",navShow:"nav-show",navItemShow:"nav-item-show",navElShow:"nav-el-show",blockHeader:"block-header",blockLocation:"block-location",blockLocationCurrent:"block-location-current",burger:"burger",hover:"hover-event",hoverItems:"header nav .menu-item-has-children, header .block-location, .chips-item",tagHeader:"header",btnString:"cmn-btn--string",chips:{item:"chips-item",box:"chips-box"},tabs:{swipe:"tabs-swipe",item:"tabs-item",body:"tabs-body",container:"tabs-container",nav:"tabs-nav",nav_bullet:"tabs-nav-bullet",nav_bullets:"tabs-nav-bullets",nav_btn:"tabs-nav-btn",label:"tabs-label"}};function t(e){"all"!==e&&(+$('[data-filter="'+e+'"]').attr("data-count")==+$(".app__press "+e).length?$(".app__press .app__btn.load").hide():$(".app__press .app__btn.load").show())}function i(e,t){e.length&&$(e).each((function(){$(this).removeClass(t.navItemShow),$(this).find("ul").slideUp(),$(this).find("li.".concat(t.navItemShow)).removeClass(t.navItemShow),$(this).find("a.".concat(t.navElShow)).removeClass(t.navElShow)}))}function s(){var t=e.tabs,i=$(".".concat(t.swipe)),s=i.find(".".concat(t.item)),a=i.find(".".concat(t.body)),n={allow_swipe:!1,index:0,opacity:1,start_pos_x:0,start_pos_y:0,x_pos:0,y_pos:0,range:0,start_time:0,direction:"",is_scroll:!1,is_swipe:!1};if(i.length&&a.length&&s.length){s.on("touchmove",(function(){n.index=+$(".".concat(t.item)).index(this)}));var o=function(){return-1!==event.type.search("touch")?event.touches[0]:event},l=function(){var e=o();if(n.end_time=Date.now(),n.x_pos=Math.ceil(e.clientX),n.x_pos<=0&&(n.x_pos=0),!n.is_scroll){var t=e.clientY;(t<n.start_pos_y-10||t>n.start_pos_y+10)&&(n.is_scroll=!0)}if(!n.is_scroll){if(n.range=Math.abs(Math.ceil(100*(n.start_pos_x-n.x_pos)/window.innerWidth)),n.opacity=(100-n.range)/130,s[n.index].style.opacity=n.opacity,n.range>=25)return n.allow_swipe=!0,!0;n.allow_swipe=!1}},r=function(){s[n.index].style.opacity=1,n.direction=n.start_pos_x<n.x_pos?"prev":"next",n.is_scroll||(n.allow_swipe||n.end_time>0&&n.end_time-n.start_time<300)&&$(s[n.index]).closest(".".concat(t.container)).find(".".concat(t.nav," .").concat(n.direction)).trigger("click"),n.is_scroll=!1,a[0].removeEventListener("touchmove",l),a[0].removeEventListener("touchend",r)};a[0].addEventListener("touchstart",(function(){var e=o();n.end_time=0,n.allow_swipe=!1,n.start_time=Date.now(),n.start_pos_x=Math.ceil(e.clientX),n.start_pos_y=Math.ceil(e.clientY),a[0].addEventListener("touchmove",l),a[0].addEventListener("touchend",r)}))}}function a(e,t,i){var s=new Date;s.setTime(s.getTime()+24*i*60*60*1e3);var a="expires="+s.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}function n(e){for(var t=e+"=",i=document.cookie.split(";"),s=0;s<i.length;s++){for(var a=i[s];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""}Element.prototype.cmn_hasClass=function(e){var t=this,i=!1;return Array.isArray(e)?e.forEach((function(e){t.classList.contains(e)&&(i=!0)})):i=this.classList.contains(e),i},Element.prototype.cmn_addClass=function(e){return this.classList.add(e)},Element.prototype.cmn_removeClass=function(e){return this.classList.remove(e)},Element.prototype.cmn_toggleClass=function(e){return this.classList.toggle(e)};var o=function(){$(".mod-17 .title").on("click",(function(){$(this).toggleClass("title--active"),$(this).parent().find(".text").toggle()})),$(".mod-15").each((function(e,t){$(t).find(".overtitle").append($(t).find(".title"))}))},l=function(){var e=".adv-form__form, .request-form",t=".mindbox-popup__form",i=".form-demo",s=".loader-form",o=".adv-form__submit-btn, .form-submit-btn",l=".mindbox-popup__submit-btn",r=".mindbox-trigger",c=".mindbox-popup",d=".form-input__error",p=".form-input__error-email",m=".form-name, .form-email, .form-message, .form-phone, .form-budget, .form-telegram, .form-company, .form-demo, .form-call, .form-role, .form-site, .form-last-name, .form-name",u=".request-demo",h=".request-demo__select",v=".request-demo__select-checkboxes",f=".request-demo__select-wrapper",_=".form-input__error-site",b=".form-input__error-telegram",g="loader-form--active",w="body--open-modal",C="mindbox-popup--visible",k="mindbox-popup--visible-success",x="form-input--danger",y="form-input__error--visible",S="request-demo__select-wrapper--active",P=$("[data-cookie]a.cmn-btn[data-cookie!='']");P&&P.on("click",(function(){a("request_demo_value",P.data().cookie,1)})),$(".request-demo").length&&n("request_demo_value")&&($(h).val(n("request_demo_value")),a("request_demo_value",0,0)),$(h).on("click",(function(){$(v).hide(),$(f).removeClass(S)})),$(".request-demo__select-over").on("click",(function(){var e=$(this).parent().parent().find(v),t=$(this).parent().parent().find(f);$(this).parent().hasClass(S)?(e.hide(),t.removeClass(S)):($(v).hide(),$(f).removeClass(S),e.show(),t.addClass(S))})),$(document).click((function(e){0===$(e.target).closest(v).length&&0===$(e.target).closest(f).length&&($(v).hide(),$(f).removeClass(S))})),$(".request-demo__select-checkboxes-option").on("click",(function(){var e=$(this).text(),t=$(this).parent().parent();t.find("select").val(e),t.removeClass(S),$(this).parent().hide()})),$(r).length&&($(r).on("click",(function(){$(c).addClass(C),$("body").addClass(w);var e=$(this).data("operation")||$(t).data("operation");E(e,t)})),$(document).click((function(e){0===$(e.target).closest(r+", .mindbox-popup__wrapper").length&&($("body").removeClass(w),$(c).removeClass(C),$(c).removeClass(k))})),$(".mindbox-popup__close-btn").on("click",(function(){$(c).removeClass(C),$(c).removeClass(k),$("body").removeClass(w)})),$(".mindbox-popup__checkbox-input").on("click",(function(){$(this).is(":checked")?$(l).attr("disabled",!1):$(l).attr("disabled",!0)}))),$(".adv-form__checkbox-input, .checkbox-input").on("click",(function(){$(this).is(":checked")?$(o).attr("disabled",!1):$(o).attr("disabled",!0)})),$(document).ready((function(){var t=$(e).data("operation")||"InstantPayoutSiteFormLead";E(t,e)}));var E=function(e,t){$(t).on("submit",(function(i){var a=$(this).find(m);if(L(a)){var n,o,l,d,p,h,v,f;i.preventDefault();var _=new URLSearchParams(window.location.search),b=null!==(n=$(this).data("owner"))&&void 0!==n?n:$(this).data("hubspot");if(b){var w,C,x,y,S,P,E,V,q,A,I,j,O=$(this).data("company"),N=$(this).data("dealstage");933202164===parseInt(b)?$.ajax({url:template.ajax_url,type:"POST",data:{action:"spot_request",nonce:template.nonce,data:{name:$(this).find(".form-name").val(),lastname:null!==(w=$(this).find(".form-last-name").val())&&void 0!==w?w:"",companyName:O,dealStage:N,owner:b,email:$(this).find(".form-email").val(),phone:$(this).find(".form-phone").val(),referer:null!==(C=$(u).data("referer"))&&void 0!==C?C:"",link_to_the_website:$(this).find(".form-site").val(),type_of_client:$(this).find(".customfield1").val(),job_title:$(this).find(".form-role").val(),description:$(this).find(".form-call").val(),utmcampaign:null!==(x=_.get("utm_campaign"))&&void 0!==x?x:"",utmsource:null!==(y=_.get("utm_source"))&&void 0!==y?y:"",utmmedium:null!==(S=_.get("utm_medium"))&&void 0!==S?S:"",utmcontent:null!==(P=_.get("utm_content"))&&void 0!==P?P:"",utmterm:null!==(E=_.get("utm_term"))&&void 0!==E?E:""}},success:function(e){}}):$.ajax({url:template.ajax_url,type:"POST",data:{action:"spot_request",nonce:template.nonce,data:{name:$(this).find(".form-name").val(),companyName:O,dealStage:N,email:$(this).find(".form-email").val(),phone:$(this).find(".form-phone").val(),domain:$(this).find(".form-email").val().split("@").pop(),description:$(this).find(".form-message").val(),created_url:window.location.href,utmcampaign:null!==(V=_.get("utm_campaign"))&&void 0!==V?V:"",utmsource:null!==(q=_.get("utm_source"))&&void 0!==q?q:"",utmmedium:null!==(A=_.get("utm_medium"))&&void 0!==A?A:"",utmcontent:null!==(I=_.get("utm_content"))&&void 0!==I?I:"",utmterm:null!==(j=_.get("utm_term"))&&void 0!==j?j:""}},success:function(e){}})}var W,T,M={customfield2:$(this).find(".form-phone").val(),customfield4:$(this).find(".form-message").val(),utmcampaign:null!==(o=_.get("utm_campaign"))&&void 0!==o?o:"",utmsource:null!==(l=_.get("utm_source"))&&void 0!==l?l:"",utmmedium:null!==(d=_.get("utm_medium"))&&void 0!==d?d:"",utmcontent:null!==(p=_.get("utm_content"))&&void 0!==p?p:"",utmterm:null!==(h=_.get("utm_term"))&&void 0!==h?h:""};"BloggeridlyaReklamodateley"===e&&(M.customfield1=$(this).find(".form-company").val(),M.customfield2=$(this).find(".form-telegram").val(),M.customfield3=$(this).find(".form-phone").val(),M.customfield4=$(this).find(".form-message").val(),M.customfield5=$(this).find(".form-site").val(),M.customfield6=$(this).find(".form-budget").val()),("AdmitadSiteAdvertiserLeadCOM"===e||"AdmitadSiteAdvertiserLeadRU"===e)&&(M.customfield1=$(this).find(".customfield1").val(),M.customfield2=$(this).find(".form-role").val(),M.customfield3=$(this).find(".form-site").val(),M.customfield4=$(this).find(".form-call").val(),M.customfield5=null!==(W=$(u).data("referer"))&&void 0!==W?W:"",M.customfield6=null!==(T=$(this).find(".form-phone").val())&&void 0!==T?T:""),$.ajax({url:template.ajax_url,type:"POST",data:{action:"form_request",nonce:template.nonce,endpoint:"Admitad",operation:e,data:{customer:{firstName:null!==(v=$(this).find(".form-name").val())&&void 0!==v?v:"",lastName:null!==(f=$(this).find(".form-last-name").val())&&void 0!==f?f:"",email:$(this).find(".form-email").val(),customFields:M}}},beforeSend:function(){$(t).find(s).addClass(g),$("body").addClass("body--open-modal")},success:function(){$(t).find(s).removeClass(g),$(r).length&&$(c).addClass(k),$("body").removeClass("body--open-modal"),$(".wrapper-form").remove(),$(".thank-form").show()}})}else i.preventDefault()}))};$(m).on("input",(function(){if("checkbox"===$(this).attr("type")&&this.classList.contains("form-demo")){var e=$(this).parent().parent().find(i),t=[];e.each((function(e,i){i.checked&&(t[e]=i)})),t=t.filter((function(e){return null!==e})),$("#demo").find(".request-demo__option").text("Select an option ("+t.length+")"),$(this).parent().parent().find(i).is(":checked")?($(i).parent().parent().next().hide(),$(i).parent().parent().parent().find(".request-demo__select").removeClass(x)):($(i).parent().parent().next().show(),$(i).parent().parent().parent().find(".request-demo__select").addClass(x))}$(this).val().trim()?($(this).removeClass(x),$(this).siblings(d).removeClass(y),"email"===$(this).attr("type")&&(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,10})?$/.test($(this).val())?($(this).removeClass(x),$(this).siblings(p).removeClass(y)):($(this).addClass(x),$(this).siblings(p).addClass(y))),"mindbox_popup_site"===$(this).attr("name")&&(V($(this).val())?($(this).removeClass(x),$(this).siblings(_).removeClass(y)):($(this).addClass(x),$(this).siblings(_).addClass(y))),"mindbox_popup_telegram"===$(this).attr("name")&&(q($(this).val())?($(this).removeClass(x),$(this).siblings(b).removeClass(y)):($(this).addClass(x),$(this).siblings(b).addClass(y)))):($(this).addClass(x),$(this).siblings(d).addClass(y),$(this).siblings(p).removeClass(y),$(this).siblings(_).removeClass(y),$(this).siblings(b).removeClass(y))}));var L=function(e){var t=!0,s=[];return $(e).each((function(e,i){i.checked&&i.classList.contains("form-demo")&&(s[e]=i),$(i).val().trim()?("email"===$(i).attr("type")&&(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,10})?$/.test($(this).val().trim())?($(i).removeClass(x),$(i).siblings(p).removeClass(y)):($(i).addClass(x),$(i).siblings(p).addClass(y),t=!1)),"mindbox_popup_site"===$(i).attr("name")&&(V($(this).val())?($(i).removeClass(x),$(i).siblings(_).removeClass(y)):($(i).addClass(x),$(i).siblings(_).addClass(y),t=!1)),"mindbox_popup_telegram"===$(i).attr("name")&&(q($(this).val())?($(i).removeClass(x),$(i).siblings(b).removeClass(y)):($(i).addClass(x),$(i).siblings(b).addClass(y),t=!1))):($(i).addClass(x),$(i).siblings(d).addClass(y),t=!1)})),$(i).length&&!$(i).is(":checked")&&($(i).parent().parent().next().show(),$(i).parent().parent().parent().find(".request-demo__select").addClass(x),t=!1),s=s.filter((function(e){return null!==e})),t},V=function(e){return new RegExp(/^((http|https):\/\/)?[a-zA-Zа-яА-Я0-9]+([\-\.]{1}[a-zA-Zа-яА-Я0-9]+)*\.[a-zA-Zа-яА-Я]{2,12}(:[0-9]{1,5})?(\/.*)?$/,"i").test(e)},q=function(e){return new RegExp(/^(?:|(https?:\/\/)?(|www)[.]?((t|telegram)\.me)\/)[a-zA-Z0-9_]{5,32}$/,"i").test(e)}},r=function(){var e="body--open-modal",t=function(e,t,i,s,o,l){var r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=1e3*parseInt($(t).data("timer"));!n(e)&&c&&($(t).length&&setTimeout((function(){$(t).addClass(o),$("html").addClass(l)}),c),r&&$(r).on("click",(function(){$(t).removeClass(o),$("html").removeClass(l),a(e,"true",365)})),$(document).click((function(s){$(t).hasClass(o)&&0===$(s.target).closest(i).length&&($(t).removeClass(o),$("html").removeClass(l),a(e,"true",365))})),$(s).on("click",(function(){$(t).removeClass(o),$("html").removeClass(l),a(e,"true",365)})))};t("popupTimer",".popup-timer",".popup-timer__wrapper",".popup-timer__close","popup-timer--visible",e),t("popupDocs",".popup-docs",".popup-docs__wrapper",".popup-docs__close","popup-docs--visible",e,".popup-docs__thank-button")},c=function(){var e=".popup-docs__form",t='input[name="popup-docs-radio-text"]',i='input[name="popup-docs-checkbox-text"]',s=".loader-form",a=".popup-docs__blocks-error",n=".popup-docs__block-text-error",o="popup-docs__block-checkbox--last",l="loader-form--active",r="popup-docs__blocks-error--visible",c="popup-docs__block-text-error--visible";$(".popup-docs__block-radio").on("click",(function(){$(this).is(".popup-docs__block-radio--last")&&$(this).is(":checked")?$(t).show():($(t).hide(),$(t).siblings(n).removeClass(c))})),$(".popup-docs__block-checkbox--last").on("click",(function(){$(this).is(":checked")?$(a).removeClass(r):$(this).parent().next(n).removeClass(c)})),$(i).on("input",(function(){$(this).val().trim()?$(this).siblings(n).removeClass(c):$(this).siblings(n).addClass(c)}));var d=function(e,t,i){$(e).on("input",(function(){$(this).val().trim()?$(this).siblings(t).removeClass(i):$(this).siblings(t).addClass(i)}))};d(t,n,c),d(t,n,c),$(".popup-docs__block-checkbox--last").on("click",(function(){$(this).prop("checked")?$(i).show():$(i).hide()})),$(".popup-docs__block-checkbox").on("click",(function(){$(this).hasClass(o)||$(".popup-docs__block-checkbox:checked").length&&$(a).removeClass(r)})),$(e).on("submit",(function(t){t.preventDefault();var i=!0,d=$(this).find(".popup-docs__block-radio:checked"),p=$(this).find('input[name="popup-docs-radio-text"]'),m=p.val().trim();"none"===$(this).find('input[name="popup-docs-radio-text"]').css("display")||m||($(p).siblings(n).addClass(c),i=!1);var u=d.hasClass("popup-docs__block-radio--last")?m:d.val(),h=$(this).find(".popup-docs__block-checkbox:checked");if(h.hasClass(o)){h.splice(-1);var v=$('input[name="popup-docs-checkbox-text"]');v.val().trim()?h.push($('input[name="popup-docs-checkbox-text"]')[0]):($(v).siblings(n).addClass(c),i=!1)}var f=[];h.each((function(e,t){f.push($(t).val())})),(f=f.filter((function(e){return null!==e}))).length||($(a).addClass(r),i=!1),i&&$.ajax({url:template.ajax_url,type:"POST",data:{action:"form_request",nonce:template.nonce,endpoint:"Admitad",operation:"SurveyPlAdmitadSitePopup",data:{customer:{email:Math.random()+"@plpopup.admitad",customFields:{customfield8:u,customfield9:f}}}},beforeSend:function(){$(s).addClass(l)},success:function(){$(s).removeClass(l),$(e).remove(),$(".popup-docs__thank").show()}})}))},d=function(){var e=".swiperCaseStudies";$(e).length&&new Swiper(e,{speed:1e3,pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{300:{slidesPerView:1},768:{slidesPerView:2},1025:{slidesPerView:3}}}),new Swiper(".mySwiperRight",{autoplay:{delay:1,disableOnInteraction:!1},loop:!0,speed:7e3,slidesPerView:"auto",breakpoints:{300:{slidesPerView:2},440:{slidesPerView:3},768:{slidesPerView:4},1025:{slidesPerView:5},1300:{slidesPerView:9}}}),new Swiper(".mySwiperLeft",{autoplay:{delay:1,disableOnInteraction:!1,reverseDirection:!0},loop:!0,speed:7e3,slidesPerView:"auto",breakpoints:{300:{slidesPerView:2},440:{slidesPerView:3},768:{slidesPerView:4},1025:{slidesPerView:5},1300:{slidesPerView:9}}}),new Swiper(".title-and-swiper__swiper",{slidesPerView:3,spaceBetween:40,pagination:{el:".title-and-swiper__swiper-pagination"},navigation:{prevEl:".title-and-swiper__swiper-button-prev",nextEl:".title-and-swiper__swiper-button-next"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1025:{slidesPerView:3}}}),$(document).ready((function(){var t=$(e).height()-20;$(".case-studies__item").css("height",t+"px")}))},p=function(){var e=0,t=$(".block__pricing-plans--item-head");t.length&&(t.each((function(t){if($(this).css("height",""),$(this).closest(".col").hasClass("col-popular")&&window.innerWidth<=1024)return!0;var i=parseInt($(this).outerHeight());i>e&&(e=i)})),e>0&&t.each((function(){if(window.innerWidth<=1024)$(this).css("height","");else{if($(this).closest(".col").hasClass("col-popular")&&window.innerWidth<=1024)return!0;$(this).css("height",e)}})))},m=function(){var e=$(".block__pricing-plans--switcher-item");e.length&&e.on("click",(function(){if(!$(this).hasClass("current")){var e=$(this).attr("data-id"),t=$(this).siblings(".current");t.removeClass("current"),$(this).addClass("current"),$(".block__pricing-plans--item").removeClass(t.attr("data-id")).addClass(e),p()}}))},u=function(){var e=$(".pricing__line"),t=$(".pricing__line--headline"),i=e.index(t);e.length&&t.length&&e.each((function(e){e>i&&(e-i)%2==0&&$(this).addClass("pricing__line--active"),$(this).hasClass("pricing__line--headline")&&(i=e)}))},h=function(){v(),$(window).on("resize",(function(){v()}))};function v(){var e=$(".block__head_text_image");if(e.length){var t=e.find(".block__btn").children();if(t.length>1){var i=0;t.each((function(){var e=$(this).outerWidth();window.innerWidth<=1024&&window.innerWidth>=768&&e>i&&(i=e)})),i=i>0?i:"",t.each((function(){$(this).css("width",i)}))}}}jQuery(document).ready((function(a){a(window).on("resize",(function(){m(),p()})),o(),s(),l(),r(),c(),d(),h(),m(),p(),u(),a((function(){new MutationObserver((function(t){t.forEach((function(t){var i=t.target;if("class"===t.attributeName&&a(i).hasClass(e.blockHeader)&&!a(i).hasClass(e.navShow)&&-1!==t.oldValue.indexOf(e.navShow)){var s=document.querySelectorAll("header nav > li.".concat(e.navItemShow));s.length&&a(s).each((function(){a(this).removeClass(e.navItemShow),a(this).find("li").removeClass(e.navItemShow),a(this).find("a").removeClass(e.navElShow),a(this).find("ul").slideUp()}))}}))})).observe(document.getElementsByClassName(e.blockHeader)[0],{attributes:!0,attributeFilter:["class"],attributeOldValue:!0})})),a(".".concat(e.tabs.label)).on("click",(function(){var t=a(this).attr("data-item"),i=a(this).closest(".".concat(e.tabs.container)),s=i.find(".".concat(e.tabs.body,' [data-item="').concat(t,'"]')),n=i.find(".".concat(e.tabs.nav_bullets,' [data-item="').concat(t,'"]'));s.length&&(s.hasClass("active")||(s.siblings().removeClass("active hover-event"),s.addClass("active"),a(this).addClass("active"),a(this).siblings().removeClass("active"),n.length&&(n.siblings().removeClass("active"),n.addClass("active"))))})),a(".".concat(e.tabs.nav)).length&&a(".".concat(e.tabs.nav_bullet,", .").concat(e.tabs.nav_btn)).on("click",(function(){var t=a(this),i=!1;if(t.hasClass("".concat(e.tabs.nav_bullet)))i=t;else{var s=t.parent().find(".".concat(e.tabs.nav_bullets," > span")),n=t.parent().find(".".concat(e.tabs.nav_bullets," .active"));t.hasClass("prev")?(i=n.prev()).length||(i=a(Array.prototype.pop.call(s))):t.hasClass("next")&&((i=n.next()).length||(i=a(s[0])))}if(i){var o=t.closest(".".concat(e.tabs.container)),l=o.find(".".concat(e.chips.box)),r=l.find('[data-item="'+i.attr("data-item")+'"]'),c=o.find('[data-item="'+i.attr("data-item")+'"]');c.siblings().removeClass("active hover-event"),c.addClass("active"),l[0].scrollLeft=r[0].offsetLeft-18}})),a(".menu-item-has-children a").on("click",(function(){if(window.innerWidth<=1279){if(!a(this).closest("header").length&&window.innerWidth>767)return;var t=a(this).siblings(".sub-menu"),s=a(this).parent(),n=!s.hasClass(e.navItemShow),o=s.siblings("li.".concat(e.navItemShow)),l=0;"NAV"===s.parent().prop("tagName")?(i(o,e),l=1):"UL"===s.parent().prop("tagName")&&i(o,e),s.toggleClass(e.navItemShow),a(this).toggleClass(e.navElShow),t.slideToggle(),n||1!==l||(s.find("li").removeClass(e.navItemShow),s.find("a").removeClass(e.navElShow),s.find("ul").slideUp())}})),a((function(){a('[data-action="grid-sort"] .app__sort--btn').on("click",(function(){var e=a(this).closest('[data-action="grid-sort"]'),t=a(this).attr("data-filter");if(e.length){var i=e.find('[data-items="grid-sort-box"] .grid-sort-item');i.length&&(i.each((function(e){"all"===t||a(this).hasClass(t)?a(this).show():a(this).hide()})),a(this).addClass("active"),a(this).siblings().removeClass("active"))}}));var e=[];if(a(".grid").length){var i=a(".grid").isotope({itemSelector:".app__col",layoutMode:"fitRows",masonry:{columnWidth:175,gutterWidth:20,isAnimated:!0,isFitWidth:!0}});a(".grid .app__col").each((function(t){e.push(+a(this).attr("data-id"))})),a(".app__sort--btn").on("click",(function(){a(".app__press .app__btn.load").hide();var s=a(this).closest(".app__sort").attr("data-type"),n=(a(this).attr("data-count"),a(this).attr("data-filter"));if("press"===s){var o=+a(".app__press").attr("data-limit");if(a(".app__press .app__btn.load").attr("data-term",n||"all"),n)if(0===a(".app__col"+n).length){var l={action:"ad_ajax_press",term:n,limit:o,ids:JSON.stringify(e),nonce:template.nonce,lang:template.lang};jQuery.post(template.ajax_url,l,(function(s){var n=JSON.parse(s);if(n.html){n.ids.forEach((function(t){return e.push(t)}));var o=a(n.html);i.append(o).isotope("appended",o),t(n.term)}+a(".app__press").attr("data-max")===e.length&&a(".app__btn.load").remove()}))}else t(n);else a(".app__press .app__col").length<+a(".app__press").attr("data-max")&&a(".app__press .app__btn.load").show()}a(this).addClass("active"),a(this).siblings().removeClass("active"),i.isotope({filter:n})})),a(".app__btn.load").on("click",(function(){var s={action:"ad_ajax_press",term:a(this).attr("data-term"),limit:a(this).attr("data-limit"),ids:JSON.stringify(e),nonce:template.nonce,lang:template.lang};jQuery.post(template.ajax_url,s,(function(s){var n=JSON.parse(s);if(n.html){n.ids.forEach((function(t){return e.push(t)}));var o=a(n.html);i.append(o).isotope("appended",o),t(n.term)}+a(".app__press").attr("data-max")===e.length&&a(".app__btn.load").remove()}))}))}}))}))}()