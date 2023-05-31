$(document).ready(function() {
    $("body").removeClass("preloader");
    // Contact input effect ===================== // 
    $(".js-form-item").on("click", function() {
        $(this).addClass('form-item--input-filled');
    });
    $(".form-item__input").on("blur", function() {
        if ($(this).val() === '') {
            $(this).parent('.js-form-item').removeClass('form-item--input-filled');
        }
    });
    // Menu effect ===================== // 
    $(".menu-item").on('mouseenter', function() {
        $(".menu-item").find('a').not($(this).find('a')).css('opacity', '1')
    }).on('mouseleave', function() {
        $(".menu-item").find('a').css('opacity', '1');
    });

    $("li.menu-item").on('mouseenter', function() {
        $(this).find('a').css('opacity', '1');
        //$(".menu-item").find('a').not($(this).find('a')).css('opacity','0.5')
    }).on('mouseleave', function() {
        $("li.menu-item").not(".active").find('a').css('opacity', '1');
    });
    $('ul.navbar-nav').find('li.menu-item').each(function() {
        if ($(this).hasClass("active")) {
            $(this).find('a').css('opacity', '1');
        } else {
            $(this).find('a').css('opacity', '1');
        }
    });
    // Header Sticky ===================== // 
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
    // On Scroll Splitting ===================== // 
    Splitting();

    ScrollOut({
        threshold: 0.2,
        once: true
    });
    // Blog Slider ===================== // 
    $('.blog_inner_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Social Feed Slider ===================== // 
    $('.socialfeed_inner_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.socialfeed_inner_text_arrow_left',
        nextArrow: '.socialfeed_inner_text_arrow_right',
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Work Banner Slider ===================== // 
    $('.work_block_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '15rem',
        // autoplaySpeed: 1000,
        // speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0rem'
            }
        }]
    });
    // Our Work Slider ===================== // 
    $('.our_work_inner_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.work_arrow_left',
        nextArrow: '.work_arrow_right',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 1000,
                    speed: 600,
                }
            }
        ]
    });
    // Paroller Effect ===================== // 
    $('.paroller_effect_2').paroller({
        factorXs: 0.1,
        factorSm: 0.1,
        factorMd: -0.4,
        factorLg: -0.5,
        factorXl: -0.6,
        factor: -0.4,
        type: 'foreground',
        direction: 'horizontal'
    });
    $('.paroller_effect_1').paroller({
        factorXs: -0.1,
        factorSm: -0.1,
        factorMd: 0.4,
        factorLg: 0.5,
        factorXl: 0.6,
        factor: 0.4,
        type: 'foreground',
        direction: 'horizontal'
    });
    var offsetHeight = document.getElementById('footer').offsetHeight;
    $('body').css('padding-bottom', offsetHeight);

    var menubcg = document.getElementById('navbar-toggle');

    // Mobile Menu ===================== //
    document.getElementById('navbar-toggle').onclick = function() {
        MenuIcon.reversed() ? MenuIcon.play() : MenuIcon.reverse();
        HoverMenuIcon.kill();
    };

    var span1 = document.querySelector('.navbar-toggle .icon-bar:nth-child(2)');
    var span2 = document.querySelector('.navbar-toggle .icon-bar:nth-child(3)');
    var span3 = document.querySelector('.navbar-toggle .icon-bar:nth-child(4)');
    var removeActive = document.getElementById('navbar-middle');

    var MenuIcon = new TimelineMax({ paused: true, reversed: true });
    MenuIcon
        .to(span1, 1, { x: 2, width: '40px', rotation: 45, transformOrigin: '8px 50%', ease: Elastic.easeInOut.config(0.1, 0.1) }, span1)
        .to(span3, 1, { x: 2, width: '40px', rotation: -45, transformOrigin: '8px 50%', ease: Elastic.easeInOut.config(0.1, 0.1) }, span1)
        .to(span2, 1, { x: 50, ease: Elastic.easeInOut.config(0.1, 0.1) }, span1);

    var spanOne = document.querySelector('.navbar-toggle .icon-bar:nth-child(2)');
    var spanThree = document.querySelector('.navbar-toggle .icon-bar:nth-child(4)');

    var HoverMenuIcon = new TimelineMax({ paused: true, reversed: true });
    HoverMenuIcon
        .to(spanOne, .2, { width: 40, ease: Power1.easeOut }, 'spanOne')
        .to(spanThree, .2, { width: 40, ease: Power1.easeOut }, 'spanOne');

    // Breckpoint 991 ===================== // 
    if (parseInt($(window).width()) < 991) {
        $('.usps_block_inner >ul').slick({
            dots: false,
            infinite: true,
            arrows: false,
            // autoplay: true,
            // autoplaySpeed: 1000,
            // speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('<div class="logo_mobile"><a href="#"><img src="img/logo.png" alt=""/></a></div>').appendTo(".navbar ");
        // Dropdown Click ===================== // 
        $(".dropdownmenu .dropdown_btn").on("click", function() {
            $(this).parent(".dropdownmenu").find(".megamenu").slideToggle();
        });
        $(".navbar-toggle").on("click", function() {
            $("body").find(".megamenu").slideUp();
        });
        // Menu effect ===================== // 
        $(".menu-item").on('mouseenter', function() {
            $(".menu-item").find('a').not($(this).find('a')).css('opacity', '0.1')
        }).on('mouseleave', function() {
            $(".menu-item").find('a').css('opacity', '1');
        });

        $("li.menu-item").on('mouseenter', function() {
            $(this).find('a').css('opacity', '1');
            //$(".menu-item").find('a').not($(this).find('a')).css('opacity','0.5')
        }).on('mouseleave', function() {
            $("li.menu-item").not(".active").find('a').css('opacity', '0.1');
        });
        $('ul.navbar-nav').find('li.menu-item').each(function() {
            if ($(this).hasClass("active")) {
                $(this).find('a').css('opacity', '1');
            } else {
                $(this).find('a').css('opacity', '0.1');
            }
        });
    }
    // Video Popup ===================== // 
    $(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });
    // Banner Effect ===================== // 
    var $body = $('body'),
        $panel = $('.banner_inner_text'),
        $pContent = $('.banner_inner_text h2, .banner_inner_text p, .banner_inner_text h3'),
        $img = $('.banner_inner_text figure');

    function initTilt() {
        TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

        $body.mousemove(function(e) {
            tilt(e.pageX, e.pageY)
        });
    };

    function tilt(cx, cy) {
        var sxPos = (cx / $body.width() * 100 - 50) * 2;
        var syPos = (cy / $body.height() * 100 - 50) * 2;
        TweenMax.to($pContent, 2, {
            rotationY: -0.03 * sxPos,
            rotationX: 0.03 * syPos,
            transformPerspective: 500,
            transformOrigin: "center center -400",
            ease: Expo.easeOut
        });
        TweenMax.to($img, 2, {
            rotationY: -0.03 * sxPos,
            rotationX: 0.03 * syPos,
            transformPerspective: 500,
            transformOrigin: "center center -200",
            ease: Expo.easeOut
        });
    }
    $body.mouseleave(function() {
        tilt($body.width() / 2, $body.height() / 2);
    })
    initTilt();
    console.clear();
    // Auto Animation //
    let loops = gsap.utils.toArray('.text-single').map((line, i) => {
        const links = line.querySelectorAll(".js-text"),
            tl = horizontalLoop(links, {
                repeat: -1,
                speed: 1 + i * 0.5,
                draggable: true,
                reversed: false,
                paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px"))
            });
        links.forEach(link => {
            link.addEventListener("mouseenter", () => gsap.to(tl, { timeScale: 0, overwrite: true }));
            link.addEventListener("mouseleave", () => gsap.to(tl, { timeScale: i ? -1 : 1, overwrite: true }));
        });
    });

    let currentScroll = 0;
    let scrollDirection = 1;

    window.addEventListener("scroll", () => {
        let direction = (window.pageYOffset > currentScroll) ? 1 : -1;
        if (direction !== scrollDirection) {
            loops.forEach(tl => gsap.to(tl, { timeScale: direction, overwrite: true }));
            scrollDirection = direction;
        }
        currentScroll = window.pageYOffset;
    });


    /*
    This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.
    
    Features:
     - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
     - When each item animates to the left or right enough, it will loop back to the other side
     - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
     - The returned timeline will have the following methods added to it:
       - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
       - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
       - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
       - current() - returns the current index (if an animation is in-progress, it reflects the final index)
       - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
     */
    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
            populateWidths = () => items.forEach((el, i) => {
                widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
            }),
            getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0),
            totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        populateWidths();
        gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
            xPercent: i => xPercents[i]
        });
        gsap.set(items, { x: 0 });
        totalWidth = getTotalWidth();
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }

        function toIndex(index, vars) {
            vars = vars || {};
            (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
                vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(time, vars);
        }
        tl.next = vars => toIndex(curIndex + 1, vars);
        tl.previous = vars => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.updateIndex = () => curIndex = Math.round(tl.progress() * (items.length - 1));
        tl.times = times;
        tl.progress(1, true).progress(0, true); // pre-render for performance
        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }
        if (config.draggable && typeof(Draggable) === "function") {
            let proxy = document.createElement("div"),
                wrap = gsap.utils.wrap(0, 1),
                ratio, startProgress, draggable, dragSnap, roundFactor,
                align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
                syncIndex = () => tl.updateIndex();
            typeof(InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
            draggable = Draggable.create(proxy, {
                trigger: items[0].parentNode,
                type: "x",
                onPress() {
                    startProgress = tl.progress();
                    tl.progress(0);
                    populateWidths();
                    totalWidth = getTotalWidth();
                    ratio = 1 / totalWidth;
                    dragSnap = totalWidth / items.length;
                    roundFactor = Math.pow(10, ((dragSnap + "").split(".")[1] || "").length);
                    tl.progress(startProgress);
                },
                onDrag: align,
                onThrowUpdate: align,
                inertia: true,
                snap: value => {
                    let n = Math.round(parseFloat(value) / dragSnap) * dragSnap * roundFactor;
                    return (n - n % 1) / roundFactor;
                },
                onRelease: syncIndex,
                onThrowComplete: () => gsap.set(proxy, { x: 0 }) && syncIndex()
            })[0];
        }

        return tl;
    }
    // // Custom Scrollbar ===================== // 
     (function($) {
        $(window).on("load", function() {
            $("body").mCustomScrollbar({
                 theme: "minimal"
             });
        });
     })(jQuery);

    var typeWriterElement = document.getElementById('typewriter');

    // The TextArray: 
    var textArray = ["नमस्ते !", "مرحبا !", "Hola !", "こんにちは !"];
    
    // You can also do this by transfering it through a data-attribute
    // var textArray = typeWriterElement.getAttribute('data-array');
    
    
    // function to generate the backspace effect 
    function delWriter(text, i, cb) {
        if (i >= 0 ) {
            typeWriterElement.innerHTML = text.substring(0, i--);
            // generate a random Number to emulate backspace hitting.
             var rndBack = 10 + Math.random() * 100;
            setTimeout(function() {
                delWriter(text, i, cb);
            },rndBack); 
        } else if (typeof cb == 'function') {
            setTimeout(cb,1000);
        }
    };
    
    // function to generate the keyhitting effect
    function typeWriter(text, i, cb) {
        if ( i < text.length+1 ) {
            typeWriterElement.innerHTML = text.substring(0, i++);
            // generate a random Number to emulate Typing on the Keyboard.
            var rndTyping = 250 - Math.random() * 100;
            setTimeout( function () { 
                typeWriter(text, i++, cb)
            },rndTyping);
        } else if (i === text.length+1) {
            setTimeout( function () {
                delWriter(text, i, cb)
            },1000);
        }
    };
    
    // the main writer function
    function StartWriter(i) {
        if (typeof textArray[i] == "undefined") {
            setTimeout( function () {
                StartWriter(0)
            },1000);
        } else if(i < textArray[i].length+1) {
            typeWriter(textArray[i], 0, function () {
                StartWriter(i+1);
            });
        }  
    };
    // wait one second then start the typewriter
    setTimeout( function () {
        StartWriter(0);
    },1000);

});
