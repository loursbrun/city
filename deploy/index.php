<?php

$clean = isset($_GET['clean']) ? true : false;

$name = "";
if (file_exists('readme.txt')) {
    $readme = file_get_contents('readme.txt');
    if (preg_match("/FolderName:(.*)/", $readme, $matches))
        $name = $matches[1];
    if (empty($name)) {
        $name = explode('###############', $readme);
        $name = trim($name[count($name) - 1]);
        $name = strtolower(preg_replace('/^(.*?)_(.*?)_/', '', $name));
    }
} else {
    exit('Erreur : Fichier readme indefinit' . "\n");
}

$plang = isset($_GET['lang']) ? $_GET['lang'] : "eng_E1";

$animationName = $name;
$animationNameTiret = "visionaries";

$tabUrl = array(
    'http://org-static-prp.louisvuitton.com',
    'http://org-www4-prp.louisvuitton.com',
    'http://a.louisvuitton.com',
    'http://eu.louisvuitton.com/ajax',
    'http://contents.louisvuitton.com',
    'https://secure.louisvuitton.com'
);
$secure_server_url_https = 'https://secure.louisvuitton.com';
$secure_server_url_http = 'http://eu.louisvuitton.com';
$code_lang = "eng_E1";
$codelanglower = 'eng-e1';
$animFolder = 'deploy/';

if ($clean)
    $proxyUrl = "proxy.php?clean=1&url=";
else
    $proxyUrl = "proxy.php?url=";


$baseScriptPath = rtrim(dirname($_SERVER['SCRIPT_FILENAME']), '/') . '/';

//url automatique
$tmpPath = "/" . trim(str_replace($_SERVER['DOCUMENT_ROOT'], '', $baseScriptPath), '/');
if ($tmpPath == "/") {
    $tmpPath = "";
}
define('DIR_PATH', !empty($tmpPath) ? $tmpPath : "");
define('SITE_ROOT', $baseScriptPath);
$protocol = (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == 'on') ? 'https' : 'http';
define('PROTOCOL', $protocol);
define('BASE_URL', PROTOCOL . '://' . trim($_SERVER['HTTP_HOST'] . DIR_PATH, '/') . '/');
$pageUrl = BASE_URL . $proxyUrl . "http://eu.louisvuitton.com/" . $codelanglower . "/travel/" . $animationNameTiret;
$ch = curl_init($pageUrl);
curl_setopt($ch, CURLOPT_REFERER, 'http://eu.louisvuitton.com/eng-e1/travel/visionaries');
curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt');
curl_setopt($ch, CURLOPT_COOKIEFILE, 'cookie.txt');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$content = curl_exec($ch);

//$content = file_get_contents($pageUrl);

$http_root_path = BASE_URL;
foreach ($tabUrl as $key => $value) {
    $content = str_ireplace($value, $proxyUrl . $value, $content);
}
$content = str_ireplace("ajaxsecure", "ajax", $content);
$content = str_ireplace($secure_server_url_https, $proxyUrl . $secure_server_url_http, $content);
$content = str_ireplace("a.louisvuitton.com", "eu.louisvuitton.com", $content);
$content = preg_replace('/(.*)animation.js(.*)/', '', $content);
$content = str_ireplace($proxyUrl . $proxyUrl, $proxyUrl, $content);
?>
<?php echo $content; ?>
<script type="text/javascript">
    if (typeof loadingVideos == "undefined") var loadingVideos = function(){};
</script>
<script type="text/javascript" src="taglib.js"></script>

<style>
    @font-face {
        font-family: 'LouisVuitton-N-Demi';
        src: url('//d2whgtudg2hrtn.cloudfront.net/AB792099-C77B-C51B-0B00-1156FDD0A0C1.it.fwoff.v1.sEn+FRA.h1.o0?Expires=1400533084&Signature=ctOIBQEG16uIJ6nUwkTYJepafWyYRp2Opf1VpksgxCHPWqm9~IlKaMpfFzgibPBvG~78BIzFKAeYKc4nLqXPXwpC6~4G7i5038lsKXn4y3QcgOMPavxZUAhB9OYFq43wQRpnytcYq93ENdt9PLlVEwpJxHF~gVt8Ogov~rUvBis_&Key-Pair-Id=APKAIRPJ6HGXMNBFEG4A&Project=D727BB9B-72B7-4A17-955A-9C785A3534BE&Trans=C053479C-8E50-4FC2-82B4-E88FB0F579D9') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'LouisVuitton-N';
        src: url('//d2whgtudg2hrtn.cloudfront.net/185FA3C0-0D32-22FA-1407-6E8579FD7FC1.it.fwoff.v1.sEn+FRA.h1.o0?Expires=1400533084&Signature=ov6ikf532S0TV6Lstx5njL3PWU9X4Y~i~5~6S~rm6789ByRcRNaRngTUMlu~17Lby47cMd3mWBTMGMnix1ooQJmLNNRFC5nrY3Z98yEH5eSGmip1w2hhUd9mDenso1ZVA~nR~0Vs8jtsmKGepd-d82KjS--JyNIFxAeb29Oivqg_&Key-Pair-Id=APKAIRPJ6HGXMNBFEG4A&Project=D727BB9B-72B7-4A17-955A-9C785A3534BE&Trans=C053479C-8E50-4FC2-82B4-E88FB0F579D9') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'LouisVuitton-N-Light';
        src: url('//d2whgtudg2hrtn.cloudfront.net/6D1EA205-0E85-4FA5-BB46-A579BD2AEE5F.it.fwoff.v1.sEn+FRA.h1.o0?Expires=1400533084&Signature=Q8npwmOfc7d6UADJRdeGI3JoRuEXCjV76aBdMHEWzdzIDMBIApIa8umFvWmI9Gk2Y1gO5pSWkyptHJMCPHPVqeK~hN8aSLqtnE98PxMw8~rOO52cFD2UlbNmWvwxMr7hEff35CvUIzweLqQvsoQFPasidNpe7RMSIT31hGt3eYs_&Key-Pair-Id=APKAIRPJ6HGXMNBFEG4A&Project=D727BB9B-72B7-4A17-955A-9C785A3534BE&Trans=C053479C-8E50-4FC2-82B4-E88FB0F579D9') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'GaramondPremrPro-LtDisp';
        src: url('//d2whgtudg2hrtn.cloudfront.net/9B5AEFAA-F0CD-E848-8EB5-595474B29614.it.fwoff.v13.sEn+FRA.h1.o0?Expires=1400537272&Signature=PTTiY-HBFnyZldQ0qTfi13ThuABYYi4uPALmeQCR05yb0ZgnhGoa7t6vcZvP283Huk8mriijC12wBEL7xHKSHT9j57zWZ6v-RlPU4Y~hkXrvbDkmhEnVslt0jV5UW6jXcggR4BiptonfdS3dJOprfpy0t6Mv3fPvusLaT94KJFY_&Key-Pair-Id=APKAIRPJ6HGXMNBFEG4A&Project=D727BB9B-72B7-4A17-955A-9C785A3534BE&Trans=C053479C-8E50-4FC2-82B4-E88FB0F579D9') format('woff');
        font-weight: normal;
        font-style: normal;
    }
</style>

<script type="text/javascript">
    var http_root_path = '<?php echo $http_root_path; ?>';
</script>

<script type="text/javascript">

    if (window.location.href.indexOf('localhost') >= 0 || window.location.href.indexOf('192.') >= 0) {
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
    }

    var isLoaded = false;
    var anim = '';
    function specificLoadingEvent() {
        if (isLoaded) {
            //console.log('[BOOTSTRAP] ALREADY LOADED. anim : ' + (anim != '') + " append : " + ($(".animation_container").length != 0));
            if (anim && $(".animation_container").length == 0) {
                displayAnimation(anim);
            }
            return;
        }
        isLoaded = true;
        getFallback('{"isFallback" : false}');
    }
    function specificResizeEvent() {
        setContentSize();
    }
    function getFallback(c) {
        var b = $.parseJSON(c);
        var a = $("#animationContent").attr("data-chunk");
        fireEvent("animationFallback", {
            isFallback: b.isFallback
        });
        $(".content").attr("data-scrollable", b.isFallback);
        setContentSize();
        anim += '<meta name="animation" content="<?php echo $animationName; ?>">';
        anim += '<script type="text/javascript">';
        anim += 'DigitalServices.initEnv({';
        anim += '"context": "touch",';
        anim += '"animationResourcePath": "",';
        anim += '"domainName" : CONFIGURATION.AJAX_DOMAIN,';
        anim += '"secureDomainName" : CONFIGURATION.SECURE_AJAX_DOMAIN,';
        anim += '"serviceLocation": "/rest/bean/vuitton/commerce/services",';
        anim += '"lang": "<?php echo $plang; ?>"';
        anim += '});';
        anim += '</scr' + 'ipt>';
        anim += '<script type="text/javascript">';
        anim += 'var BACK_BUTTON = {};';
        anim += 'BACK_BUTTON.isTarget = false;';
        anim += 'BACK_BUTTON.target = "";';
        anim += 'BACK_BUTTON.url = "/mobile/<?php echo $code_lang; ?>/home";';
        anim += '</scr' + 'ipt>';
        anim += '<div onClick="redirectBackButton();" id="back-btn" class=" tagClick functional-link">';
        anim += 'Back';
        anim += '</div>';

        anim += '<div class="animation_container">';
        anim += '<div id="app"></div>';
        anim += '</div>';
        anim += '<script type="text/javascript">';
        anim += 'DigitalServices.initAnimEnv("' + http_root_path + 'deploy", "standalone");';
        anim += '</scr' + 'ipt>';
        anim += '<link rel="stylesheet" href="<?php echo $animFolder; ?>i18n/<?php echo $plang; ?>/styles/main.css"/>';
        anim += '<script data-main="<?php echo $animFolder; ?>scripts/main" src="<?php echo $animFolder; ?>scripts/vendors/require.js">';
        anim += '</scr' + 'ipt>';
        //
        displayAnimation(anim);
    }
    function displayAnimation(b) {
        //console.log('[BOOTSTRAP] display anim');
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
        return ($('meta[property="og:image"]').attr("content"))
    }

    function loadCommerceHeaders() {
    }
</script>

<script>
    setTimeout(specificLoadingEvent, 5000);
</script>

<script type="text/javascript">
    $(document).ready(function () {
        //var backBt = $('<div/>').attr('id', 'back-btn').addClass('tagClick').addClass('functional-link').attr('onclick', 'window.history.back();').html(' BACK');
        //$('#animationContent').prepend(backBt);
        setTimeout(specificLoadingEvent, 100);
    })
</script>