<?php
ini_set("display_errors", "Off");
date_default_timezone_set("Europe/Paris");

$url = $_GET['url'];
$post = $_POST;
$requestData = file_get_contents('php://input');
if (!$post && $requestData) {
    $post = $requestData;
    $content_type = "application/json";
}

$clean = isset($_GET['clean']) ? true : false;

if (strpos($url, "http") !== 0)
    exit;

$cacheFolder = "tmp/";
if (!is_dir($cacheFolder)) {
    umask(0000);
    mkdir($cacheFolder, 0777);
}
$key = md5($url . serialize($post));
$file = $cacheFolder . $key;
if (is_file($file) && !$clean) {
    $contents = unserialize(file_get_contents($file));
    $headers = $contents->headers;
    $content = $contents->body;
} else {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_REFERER, 'http://eu.louisvuitton.com/eng-e1/travel/visionaries');
    //curl_setopt($ch, CURLOPT_PROXY, "localhost");
    //curl_setopt($ch, CURLOPT_PROXYPORT, "8888");
    curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt');
    curl_setopt($ch, CURLOPT_COOKIEFILE, 'cookie.txt');
    if ($post) {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        if (isset($content_type)) {
            $headers = array();
            $headers[] = 'Content-type: application/json;charset=UTF-8';
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_HEADER, 0);
        }
    }
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_VERBOSE, 1);
    curl_setopt($ch, CURLOPT_HEADER, 1);
    $response = curl_exec($ch);

    if (!curl_errno($ch)) {
        $curl_error = $response;
    } else {
        $curl_error = 'Curl error: ' . curl_error($ch);
    }
    curl_close($ch);

    $parts = explode("\r\n\r\nHTTP/", $response);
    $parts = (count($parts) > 1 ? 'HTTP/' : '') . array_pop($parts);
    list($headers, $content) = explode("\r\n\r\n", $parts, 2);

    $std = new stdClass();
    $std->headers = $headers;
    $std->body = $content;

    $contents = serialize($std);
    file_put_contents($file, $contents);
}

if (preg_match("/Content-Type: ([a-zA-Z]*\/[a-zA-Z]*)/", $headers, $matches)) {
    header('Content-Type: ' . $matches[1]);
}
if (preg_match("/(HTTP\/[0-9.]* .*)/", $headers, $matches)) {
    header($matches[1]);
}

$parse = dirname($url);
$content = preg_replace("/(url\(\"*'*)\./", "$1" . $parse . '/.', $content);

//ne pas charger le taglib
$content = str_replace('//tags.tiqcdn.com/', 'proxy.php?url=http://tags.tiqcdn.com/', $content);
$content = str_replace('+jsFolder+"/taglib.js"','',$content);

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

$http_root_path = BASE_URL;
foreach ($tabUrl as $key => $value) {
    $content = str_ireplace($value, $proxyUrl . $value, $content);
}
$content = str_ireplace($secure_server_url_https, $proxyUrl . $secure_server_url_http, $content);
$content = str_ireplace("a.louisvuitton.com", "eu.louisvuitton.com", $content);
$content = preg_replace('/(.*)animation.js(.*)/', '', $content);
$content = str_ireplace($proxyUrl . $proxyUrl, $proxyUrl, $content);
$content = str_ireplace("ajaxsecure", "ajax", $content);
$content = str_replace("visionaries", "", $content);


echo $content;

