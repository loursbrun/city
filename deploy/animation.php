<script type="text/javascript">
    var http_root_path = '<?php echo $http_root_path; ?>';
</script>
<script type="text/javascript">

    function specificLoadingEvent() {
        if (typeof(DONT_CALL_FALLBACK) != "undefined" && DONT_CALL_FALLBACK) {
            getFallback('{"isFallback" : false}')
        } else {
            getAjax(false, "animation/animationContent.jsp", getFallback)
        }
    }
    function specificResizeEvent() {
        setContentSize()
    }
    function getFallback(c) {
        var b = $.parseJSON(c);
        var a = $("#animationContent").attr("data-chunk");
        $(".content").attr("data-scrollable", b.isFallback);
        setContentSize();
        if (b.isFallback) {
            getAjax(false, "animation/fallback.jsp", displayAnimation, {
                seoU: a
            })
        } else {
            var anim = '';
            anim += '<meta name="animation" content="<?php echo $animationName; ?>">';
            anim += '<script type="text/javascript">';
            anim += 'DigitalServices.initEnv({';
            anim += '"context": "touch",';
            anim += '"animationResourcePath": "",';
            anim += '"domainName" : CONFIGURATION.AJAX_DOMAIN,';
            anim += '"secureDomainName" : CONFIGURATION.SECURE_AJAX_DOMAIN,';
            anim += '"serviceLocation": "/rest/bean/vuitton/commerce/services",';
            anim += '"lang": "<?php echo $code_lang; ?>"';
            anim += '});';
            anim += '</scr' + 'ipt>';
            anim += '<script type="text/javascript">';
            anim += 'var BACK_BUTTON = {};';
            anim += 'BACK_BUTTON.isTarget = false;';
            anim += 'BACK_BUTTON.target = "";';
            anim += 'BACK_BUTTON.url = "/mobile/<?php echo $code_lang; ?>/home";';
            anim += '</scr' + 'ipt>';
            //anim +='<div onClick="redirectBackButton();" id="back-btn" class=" tagClick functional-link">';
            //anim +='Back';
            //anim +='</div>';

            anim += '<div class="animation_container">';
            anim += '<div id="app"></div>';
            anim += '</div>';
            anim += '<script type="text/javascript">';
            anim += 'DigitalServices.initAnimEnv("' + http_root_path + 'deploy", "standalone");';
            anim += '</scr' + 'ipt>';
            anim += '<link rel="stylesheet" href="<?php echo $animFolder; ?>i18n/<?php echo $code_lang; ?>/styles/main.css"/>';
            anim += '<script data-main="<?php echo $animFolder; ?>scripts/main" src="<?php echo $animFolder; ?>scripts/vendors/require.js">';
            anim += '</scr' + 'ipt>';
            //
            displayAnimation(anim);
        }
    }
    function displayAnimation(b) {
        var a = htmlDecode(b);
        $("#animationContent").append(b);
        registerEvent("endImagesLoad", fallBackInitSlideshow);
        loadingImgs();
        loadingVideos();
        setContentSize();
        //getUrlBitly();
        shareListener()
    }
    var animationSlideshow;
    function fallBackInitSlideshow() {
        var a = $(".slideshow");
        if (animationSlideshow && a.length == 0) {
            return
        }
        animationSlideshows = [];
        var b = new SlideshowOption();
        b.navigMode = "thumbsAndBullets";
        b.heightMode = "parent";
        a.each(function (c, d) {
            var e = new Slideshow();
            e.initSlideshow("#" + $(d).attr("id"), b);
            animationSlideshows.push(e)
        })
    }
    function retrieveImageData() {
        return($('meta[property="og:image"]').attr("content"))
    }

    function loadCommerceHeaders() {
    }
</script>