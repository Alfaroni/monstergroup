/*! MenuSpy v1.3.0 (Jan 31 2018) - http://leocs.me/menuspy/ - Copyright (c) 2018 Leonardo Santos; MIT License */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.MenuSpy=e()}(this,function(){"use strict";var t=function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);return t},e=function(t){var e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},s=function(){return window.pageYOffset||document.documentElement.scrollTop},n=function(t,e){if(t.classList)t.classList.add(e);else{var s=t.className.split(" ");-1===s.indexOf(e)&&s.push(e),t.className=s.join(" ")}},i=function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},o=function(t,e){var s=null;return function(){var n=arguments,i=this;s||(s=setTimeout(function(){return s=0,t.apply(i,n)},e))}},l=function(e,n){var i=this;if(e){this.element="string"==typeof e?document.querySelector(e):e,this.options=t({menuItemSelector:'a[href^="#"]',activeClass:"active",threshold:15,enableLocationHash:!0,hashTimeout:600,callback:null},n),this.assignValues(),this.debouncedAssignValuesFn=o(function(){return i.assignValues()}),window.addEventListener("resize",this.debouncedAssignValuesFn),this.debouncedHashFn=o(function(){var t=i.lastInViewElm?"#"+i.lastInViewElm.id:"#";if(history.replaceState)history.replaceState(null,null,t);else{var e=s();window.location.hash=t,window.scrollTo(0,e)}},this.options.hashTimeout),this.cacheItems(),this.scrollFn()}};return l.prototype.assignValues=function(){this.currScrollTop=0,this.lastInViewElm=null,this.menuHeight=this.element.offsetHeight+this.options.threshold,this.menuItems=[].slice.call(this.element.querySelectorAll(this.options.menuItemSelector)),this.raf=null},l.prototype.cacheItems=function(){this.scrollItems=this.menuItems.map(function(t){var s=t.dataset.target?document.querySelector(t.dataset.target):document.getElementById(t.hash.slice(1));return!!s&&{elm:t,target:s,offset:Math.floor(e(s).top)}}),this.scrollItems=this.scrollItems.filter(Boolean).sort(function(t,e){return t.offset-e.offset})},l.prototype.tick=function(){var t=this.currScrollTop+this.menuHeight,e=this.scrollItems.filter(function(e){return e.offset<t});this.activateItem(e.pop())},l.prototype.activateItem=function(t){var e=this,s=this.options,o=s.activeClass,l=s.callback;if(!t)return this.scrollItems.forEach(function(t){return i(t.elm.parentNode,o)}),this.lastInViewElm=null,void(this.options.enableLocationHash&&this.debouncedHashFn());this.lastInViewElm!==t.target&&(this.lastInViewElm=t.target,this.scrollItems.forEach(function(s){i(s.elm.parentNode,o),s.target===t.target&&(n(s.elm.parentNode,o),"function"==typeof l&&l.call(e,s),e.options.enableLocationHash&&e.debouncedHashFn())}))},l.prototype.scrollFn=function(){var t=s();this.currScrollTop!==t&&(this.currScrollTop=t,this.tick()),this.raf=window.requestAnimationFrame(this.scrollFn.bind(this))},l.prototype.destroy=function(){this.raf&&window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.debouncedAssignValuesFn)},l});

$(function(){

    var wow = new WOW({
        animateClass: 'animate__animated',
    });
    wow.init();
    
    var images = document.querySelectorAll('img.parallax');
    var instance = new simpleParallax(images, {
        scale: 1.5,
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });
    
    $('.input-field').focus(function() {
        $(this).addClass('focused');
    }).blur(function () {
        if($(this).val().length == 0) {
            $(this).removeClass('focused');
        }
    });
    
    function fraction(number){ 
        return ('0' + number).slice(-2);
    };
    const swiperHeadlines = new Swiper('.section--headline-swiper', {
        speed: 400,
        spaceBetween: 100,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                var total = this.slides.length;
                var current = this.realIndex + 1;
                $('.swiper-fraction .current').html(fraction(current));
                $('.swiper-fraction .total').html(fraction(total));
            },
            slideChange: function(){
                var current = this.realIndex + 1;
                $('.swiper-fraction .current').html(fraction(current));
            },
        },
    });
    var swiperProducts = new Swiper(".section--product-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
            rows: 3,
            fill: 'row'
        },
        spaceBetween: 64,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        }
    });
    
    var swiperClients = new Swiper(".section--client-swiper", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
            rows: 4,
            fill: 'row'
        },
        spaceBetween: 64,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            992: {
                slidesPerView: 6,
                slidesPerGroup: 6,
            },
        },
    });
    
    var swiperContact = new Swiper(".section--contact-swiper", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
    function getSwiper(){
        var swiperModal = new Swiper(".modal-swiper", {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    
    var $hHeader = $(".header").innerHeight(); 
    function getTab(){
        $("[data-tab-open]").on("click", function (e) {
            var ourId = $(this).attr("data-tab-open");
            $(this).parent().addClass("active").siblings().removeClass("active")
            if($('.section').find(this).length){
                $("html, body").stop().animate({ "scrollTop": $(this).closest(".section").offset().top - $hHeader }, 1000);
            }if($('.section--client').find(this).length){
                if(ourId == 'all') {
                    $(this).closest(".tab").find(".tab-content-item").addClass('swiper-slide').fadeIn();
                }else{
                    $(this).closest(".tab").find(".tab-content-item:not(#" + ourId + ")").removeClass('hidden swiper-slide').hide()
                    $(this).closest(".tab").find(".tab-content-item#" + ourId).addClass('swiper-slide').fadeIn()
                }
            }else{
                $(this).closest(".tab").find(">.tab-content >.tab-content-item:not(#" + ourId + ")").removeClass('hidden').hide()
                $(this).closest(".tab").find(">.tab-content >.tab-content-item#" + ourId).fadeIn()
            }
            e.preventDefault();
        });
    }
    getTab();
    
    //datatoggle
    $('[data-popup-open]').on('click', function(e) {
        var ourId = $(this).attr('data-popup-open');
        $(this).toggleClass('collapsed');
        $(".modal-item").addClass('hidden').find(".tab-content-item").hide()
        if ($(this).hasClass('collapsed')) {
            $('body').addClass('overflow-hidden').find(".modal").addClass('open').find(".modal-item#" + ourId).removeClass('hidden')
            .find(".tab-content-item:not('.hidden')").show()
            getTab(); getSwiper();
        } else {
            $('body').removeClass('overflow-hidden').find(".modal").removeClass('open')
        };
        e.preventDefault();
    });
    $('.modal-close').on('click', function(e) {
        $('[data-popup-open]').removeClass('collapsed')
        $('body').removeClass('overflow-hidden').find(".modal").removeClass('open')
        e.preventDefault();
    });
    
    
    //collapse
    $('.collapse.open').find('.collase-body').slideDown()
    $('.collapse-link').click(function (e) {
        e.preventDefault()
        $(this).closest('.collapse').siblings().removeClass("open");
        $(this).closest('.collapse').toggleClass('open');
        var $target = $(this).closest('.collapse').find('.collapse-body');
        $('.collapse-body').not($target).slideUp()
        $target.slideToggle()
    });
      
    
    //addfile
    $('#file-upload').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#file-upload')[0].files[0].name;
        $(this).prev('label').text(file);
    });

    $('[data-embed]').on('click', function(e) {
        var ourEmbed = $(this).attr('data-embed');
        $('.maps').attr('src', ourEmbed)
        e.preventDefault();
    });

    var elm = document.querySelector('.header');
    var ms = new MenuSpy(elm, {
        enableLocationHash: false,
        threshold: 20,
    });
    
    $('[data-toggle="menuspy"]').click(function (e) {
        $('html, body').stop().animate({ 'scrollTop': $(this.hash).offset().top - $hHeader }, 1000);
        $('.header-btn--menu.collapsed').trigger('click')
        e.preventDefault()
    });
});
