<?php

class Analyze {

    protected static $_messages = array(
        JSON_ERROR_NONE => 'No error has occurred',
        JSON_ERROR_DEPTH => 'The maximum stack depth has been exceeded',
        JSON_ERROR_STATE_MISMATCH => 'Invalid or malformed JSON',
        JSON_ERROR_CTRL_CHAR => 'Control character error, possibly incorrectly encoded',
        JSON_ERROR_SYNTAX => 'Syntax error',
        JSON_ERROR_UTF8 => 'Malformed UTF-8 characters, possibly incorrectly encoded'
    );

    public function init($tabFiles) {

        $file_filter = array('total'=>0,'size'=>0,'file'=>array());
        foreach ($tabFiles as $key => $value) {
            $type = $this->getType($value);
            if(!isset($file_filter['file'][$type])){
                $file_filter['file'][$type] = array('total'=>0,'size'=>0,'file'=>array());
            }
            $tmp = array('file'=>$value ,'weight'=>$this->size ( $value ));
            if($type == 'image'){
                $tmp['size'] = getimagesize($value);
            }
            if($type == 'json'){
                $tmp['valid'] = Analyze::jsonValid($value);
            }
            $file_filter['file'][$type]['file'][] = $tmp;
            $file_filter['file'][$type]['size'] += $this->size ( $value );
            $file_filter['file'][$type]['total']++;
            //
            $file_filter['size'] += $this->size ( $value );
            $file_filter['total']++;
        }


        if(isset($file_filter['file']['image']) && is_array($file_filter['file']['image']['file']))
        {
            usort($file_filter['file']['image']['file'], array(__CLASS__, "weight"));
/*
            echo '<pre>';
            print_r($file_filter['file']['image']['file']);
            echo '</pre>';

            exit();*/
        }
        /*
        echo '<pre>';
        print_r($file_filter);
        echo '</pre>';

        exit();
        */
        return $file_filter;
    }

    public static function jsonValid($path, $assoc = false) {
        $result = json_decode(file_get_contents($path), $assoc);

        if($result) {
            return true;
        }
        return false;
        //return Analyze::$_messages[json_last_error()];//PHP 5.3 only
    }

    private function size($file)
    {
        return round(filesize($file) / 1024, 2);
    }

    /**
     * classe par weight
     * @param number $a
     * @param number $b
     */
    public static function weight($a, $b) {
        return ($a['weight'] < $b['weight']);
    }

    private function getType($file) {
        $font = array('ttf','otf','eot','woff');
        $svg = array('svg');
        $image = array('jpg','png');
        $html = array('html');
        $json = array('json');
        $js = array('js');
        $css = array('css');

        $all_type = array(
            'image'=>$image,
            'svg'=>$svg,
            'font'=>$font,
            'html'=>$html,
            'js'=>$js,
            'json'=>$json,
            'css'=>$css
        );

        $type = 'other';
        foreach ($all_type as $key => $value) {
            foreach ($value as $keyt => $valuet) {
                if(strpos($file,'.'.$valuet)){
                    $type = $key;
                    if(strpos($file,'fonts')){
                        $type = 'font';
                    }
                }
            }
        }

        return $type;
    }

}

?>
