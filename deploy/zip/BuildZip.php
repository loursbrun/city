<?php

class BuildZip {

    /**
     * init
     */
    public function init() {
        error_reporting(E_ALL | E_STRICT);
        ini_set('display_errors', 'On');
        ini_set("memory_limit", "512M");
        date_default_timezone_set("Europe/Paris");
    }

    public function rglob($pattern = '*', $path = '', $flags = 0) {
        $paths = glob($path . '*', GLOB_MARK | GLOB_ONLYDIR | GLOB_NOSORT);
        $files = glob($path . $pattern, $flags);
        foreach ($paths as $path) {
            $files = array_merge($files, $this->rglob($pattern, $path, $flags));
        }
        return $files;
    }

    public function logDeploy($deployInfo, $tmpPath, $logName) {
        if ($deployInfo != "") {
            $decode = json_decode($deployInfo);
            file_put_contents($tmpPath . DS . $logName, print_r($decode, true));
            return $decode;
        } else {
            return "";
            //exit();
        }
    }

    public function createTmpDirectory($tmpPath) {
        umask(0);
        if (!is_dir($tmpPath)) {
            mkdir($tmpPath, 0777);
        }
        @chmod($tmpPath, 0777);
    }

    public function clearTmpDirectory($tmpPath) {
        $glob = $this->rglob('*.*', $tmpPath . DS);
        foreach ($glob as $k => $v) {
            @unlink($v);
        }
    }

    public function printR($data) {
        echo '<pre>';
        print_r($data);
        echo '</pre>';
        exit();
    }

    public function projectName() {
        if(file_exists('../readme.txt')){
            $name = file_get_contents('../readme.txt');
            $name = explode('###############', $name);
            $name = trim($name[count($name) - 1]);
        } else {
            $name = dirname(dirname((__FILE__)));
            $name = explode(DS, $name);
            $name = $name[count($name) - 1];
        }
        return $name;
    }

    public function zipName() {
        $name = $this->projectName();
        //$name = strtoupper($name);
        $name = date("Ymd")."_".$name;
        return $name;
    }

    public function camelize($scored) {
        return implode('', array_map('ucfirst', array_map('strtolower', explode('_', $scored))));
    }

    public function build($files, $tmpPath, $zipName) {
        //http://www.thewebdevelopmentblog.com/2009/08/script-zip-files-using-php-without-the-php-zip-function-php-zip-class/
        include("zip_min.inc");
        $zipfile = new zipfile();

        foreach ($files as $key => $value) {
            $fileonserver = $value;
            $filename = $value;
            $zipfile->addFile(file_get_contents($fileonserver), $filename);
        }
        // Force download the zip
        //header("Content-type: application/octet-stream");
        //header("Content-disposition: attachment; filename=test.zip");
        //SAVE ZIP TO FILE
        $contents = $zipfile->file();
        file_put_contents($tmpPath . DS . $zipName, $contents);
    }

    public function timeoffset() {
        if(strpos($_SERVER['DOCUMENT_ROOT'], "home/bigbosss/www") !== false)
        {
            return 3600 * 5 + 30 * 60;
        }
        return 0;
    }

}

?>
