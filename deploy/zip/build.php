<?php
include("BuildZip.php");
include("BeanstalkVo.php");
//SET VARIABLE
$deployInfo = file_get_contents('php://input');
$tmpPath = "tmp";
$deployPath = "deploy";
$logName = "log_" . date("Y-m-d") . '.log';
$zipName = "archive.zip";
$bpath = "../";
define('DS', DIRECTORY_SEPARATOR);

//START PROCESS
$bzip = new BuildZip();
$bzip->init();
$zipName = $bzip->zipName().".zip";

//CREATE TMP DIRECTORY
$bzip->createTmpDirectory($tmpPath);

//CLEAR TMP DIRECTORY
$bzip->clearTmpDirectory($tmpPath);

//LOG DEPLOY INFO IF EXIST
$deploy = $bzip->logDeploy($deployInfo, $tmpPath, $logName);
if ($deploy != ""){
    $bVo = new BeanstalkVo($deploy);
    $zipName = $bzip->zipName().'_'.$bVo->revision.".zip";
}


//[category]_[subcategory]_[project_name]_[season].zip
//LIST DEPLOY FILES
$srcFile = "anim.html";
$copyFile = $bzip->projectName().".html";
//remove old html
foreach(glob('../deploy/*.html') as $value)
	@unlink($value);


//$bzip->printR(array($srcFile,$copyFile));
copy($srcFile, $bpath . $deployPath.DS.$copyFile);
//$tabFiles = array($bpath . $deployPath.DS.$copyFile);
$tabFiles = array();
$tabFiles = array_merge($tabFiles, $bzip->rglob('*.*', $bpath . $deployPath));
/*echo '<pre>';
print_r($zipName);
print_r($tabFiles);
echo '</pre>';*/

//CoMe_Louis_Vuitton_TechnicalCase

//$bzip->printR($bzip->zipName());
//$bzip->printR($tabFiles);
//BUILD ZIP
$bzip->build($tabFiles, $tmpPath, $zipName);
?>
