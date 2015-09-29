<?php
class DataVo {

    public function __construct($data=null) {
        if (isset($data)) {
            if (is_array($data)) {
                $this->fromOracle($data);
            } else {
                $this->fromObject($data);
            }
        }
    }

    public function fromObject($data) {
        $arr = array();
        foreach ($data as $key => $value) {
            $arr[$key] = $value;
        }
        $this->fromOracle($arr);
    }

    public function toOracle() {
        $arr = array();
        foreach ($this as $key => $value) {
            if ($key == "_explicitType" || strpos($key, "_") === 0)
                continue;
            
            if (isset($this->$key) && ($value == 0 || !empty($value))) {
                $upperKey = strtoupper($key);
                $arr[$upperKey] = $value;
            }
        }
        return $arr;
    }

    public function fromOracle($data) {
        $t = $this;
        foreach ($data as $key => $value) {
            $_lowerKey = strtolower($key);
            if (property_exists($this, $_lowerKey))
                $t->$_lowerKey = $value;
        }
    }
    
    public function export()
    {
        return $this;
    }

}

?>
