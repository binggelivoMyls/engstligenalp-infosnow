/**
 * reset functions
 */
(function() {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * full nav toggle
     */
    on('click', '.get-menu-btn', function(e) {
        select('#fullnav').classList.toggle('open')
        select('body').classList.toggle('menu_active')
    })

    on('click', '#popover', function(e) {
        document.querySelector('.popover_modal').classList.toggle('activ')
    })
    on('click', '.close_popup', function(e) {
        document.querySelector('.popover_modal').classList.toggle('activ')
    })


    

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Highlights slider
     */
    new Swiper('.highlights-slider', {
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
        loop: false,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: false
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: false
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
    });

    /**
     * Bildslider slider
     */
    new Swiper('.bildslider', {
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
        loop: false,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
        },
    });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
            startEvent: 'load',
            disableMutationObserver: false,
        });
        AOS.refresh(true); 
    });


    /**
     * magic scroll
     */

    skrollr.init({});

    /**
     * Initiate Bildergalerie lightbox 
     */
    const BildergalerieLightbox = GLightbox({
        selector: '.enlarge'
    });

    /**
     * Initiate bildslider lightbox 
     */
    const bildslider_Lightbox = GLightbox({
        selector: '.enlarge2'
    });


    /**
     * Initiate video lightbox 
     */
    const videoLightbox = GLightbox({
        selector: '.video'
    });



    /**
     * Kontakt form
     */
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })



    /**
     * date picker
     */

    const elems = document.querySelectorAll('.datepicker_input');
    for (const elem of elems) {
      const datepicker = new Datepicker(elem, {
        'format': 'dd.mm.yyyy',
        'language': 'de',
        'autohide': true,
      });
    }


    /* image hover effect */
    //document.getElementsByTagName("link")[8].href = "assets/css/style.css?" + new Date().getTime();


    function canvas_effect(){
        document.querySelectorAll('.grid__item-img canvas').forEach(e => e.parentNode.removeChild(e));
        Array.from(document.querySelectorAll('.grid__item-img')).forEach((el) => {

            const imgs = Array.from(el.querySelectorAll('img'));
            const height = imgs[0].offsetHeight;

            el.style.height = height +'px';

            new hoverEffect({
                parent: el,
                intensity: el.dataset.intensity || undefined,
                speedIn: el.dataset.speedin || undefined,
                speedOut: el.dataset.speedout || undefined,
                easing: el.dataset.easing || undefined,
                hover: el.dataset.hover || undefined,
                image1: imgs[0].getAttribute('src'),
                image2: imgs[1].getAttribute('src'),
                displacementImage: el.dataset.displacement
            });
        });
    }


    window.addEventListener('resize', function(event) {
        canvas_effect()
    }, true);


    window.addEventListener("load", function() {
       canvas_effect();
    });




})();

