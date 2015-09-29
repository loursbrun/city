<?php
ini_set('display_errors', 'On');
$name = "";
if (file_exists('readme.txt')) {
    $readme = file_get_contents('readme.txt');
    if(preg_match("/FolderName:(.*)/", $readme, $matches))
        $name = $matches[1];
    if(empty($name))
    {
        $name = explode('###############', $readme);
        $name = trim($name[count($name) - 1]);
        $name = strtolower(preg_replace('/^(.*?)_(.*?)_/', '', $name));
    }
} else {
   exit('Erreur : Fichier readme indefinit'."\n");
}

$base_url = "http://org-static-prp.louisvuitton.com/content/dam/lv/online/animation/Convergence/Collections/".$name.".html/jcr:content/i18n/";
$file = "/data/localized.json";
$pathData = "/data/";
$pathStyles = "/styles/";
$fileStyles = "main.css";
$tabLang = array("deu_DE", "eng_AU", "eng_CA", "eng_GB", "eng_HK", "eng_US", "esp_ES", "fra_CA", "fra_FR", "ita_IT", "jpn_JP", "kor_KR", "por_BR", "rus_RU", "zhs_CN", "zht_HK", "zht_TW");

$folder = "../dev/cside/web/front/i18n/";
if(!is_dir($folder))
{
    umask(0000);
    mkdir($folder, 0777);
}

function loadFile($url)
{
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, "Vuitton:lmFnR56Pto");
    //curl_setopt($ch, CURLOPT_PROXY, "localhost");
    //curl_setopt($ch, CURLOPT_PROXYPORT, "8888");
    //curl_setopt($ch, CURLOPT_VERBOSE, 1);
    $response = curl_exec($ch);

    if (!curl_errno($ch)) {
        $curl_error = $response;
    } else {
        $curl_error = 'Curl error: ' . curl_error($ch);
    }
    curl_close($ch);

    return $response;
}

foreach($tabLang as $key=>$value)
{
    //locale
    $content = loadFile($base_url.$value.$file);
    $exportFolder = $folder.$value.$pathData;
    if(!is_dir($exportFolder))
    {
        umask(0000);
        mkdir($exportFolder, 0777, true);
    }
    file_put_contents($folder.$value.$file, $content);

    $content = loadFile($base_url.$value.$pathStyles.$fileStyles);
    $exportFolder = $folder.$value.$pathStyles;
    if(!is_dir($exportFolder))
    {
        umask(0000);
        mkdir($exportFolder, 0777, true);
    }
    file_put_contents($folder.$value.$pathStyles.$fileStyles, $content);
}