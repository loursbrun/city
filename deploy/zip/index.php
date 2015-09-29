<?php
include("Analyze.php");
include("BuildZip.php");
//START PROCESS
$bzip = new BuildZip();
$tmpPath = "tmp";
$files = $bzip->rglob('*.*', $tmpPath);
$zipFile = isset($files[0])?$files[0]:"";
$zipHttpPath = str_replace("\\", "/", $zipFile);
$zipName = explode("/", $zipHttpPath);
$zipName = isset($zipName[1])?$zipName[1]:"";;

$deployPath = "deploy";
$bpath = "../";
$tabFiles = array();
$tabFiles = array_merge($tabFiles, $bzip->rglob('*.*', $bpath . $deployPath));
$analyze = new Analyze();
$filter = $analyze->init($tabFiles);
/*
  echo '<pre>';
  print_r($filter);
  echo '</pre>';*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>zip</title>
        <style type="text/css">
            body {
                margin: 5;
                padding: 0;
                background-color: #FFFFFF;
                font:normal 0.625em Tahoma, Arial, Helvetica, sans-serif;
            }
            a {
                color:#000;
                text-decoration:none
            }
            a:hover {
                text-decoration:underline;
            }
        </style>
    </head>
    <body>

        <h1>LV package</h1>

        <p>
            <strong>Package</strong> : <a href="<?php echo $zipHttpPath; ?>"><?php echo $zipName; ?> (<?php echo round(filesize($zipFile) / 1024, 0); ?> Kb) - <?php echo date("F d Y H:i:s", filemtime($zipFile) - $bzip->timeoffset()); ?></a>
            <br />
            <strong>TagLib</strong> : <a href="../taglib.js">taglib.js</a>
        </p>

        <h3>Package infos</h3>
        Nb de fichiers : <?php echo $filter['total']; ?><br/>
        Poids : <?php echo $filter['size']; ?> Kb<br/>

        <?php
        foreach ($filter['file'] as $key => $value) {
            ?>
            <h4>File type : <?php echo strtoupper($key); ?> </h4>
            Nb de fichiers : <?php echo $value['total']; ?><br/>
            Poids : <?php echo $value['size']; ?> Kb<br/>

<ul>
        <?php
        foreach ($value['file'] as $keyf => $valuef) {
            $desc = ' ('.$valuef['weight'].' kb)';
            if($key == 'image')
            {
                $desc .= ' ['.$valuef['size'][0].'px /'.$valuef['size'][1].' px]';
            }
            if($key == 'json')
            {
                //$desc .= $valuef['valid'] === true ? ' (valid)':' (INVALID = '.$valuef['valid'].')';
                $desc .= $valuef['valid'] === true ? ' (valid)':' (INVALID)';
            }
            ?>
            <li><a href="<?php echo $valuef['file']; ?>" target="_blank"><?php echo str_replace('../deploy/','',$valuef['file']).$desc; ?></a></li>

        <?php
        }
            ?>
</ul>

        <?php
           /*echo '<pre>';
            print_r($value['file']);
            echo '</pre>';*/
        }
        ?>
        <?php
        /*echo '<pre>';
        print_r($filter);
        echo '</pre>';
*/
        ?>

    </body>
</html>
