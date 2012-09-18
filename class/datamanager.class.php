
<?php

// +-----------------------------------------------------------------------------------------------+
// | CLASS: DataManager                                                                            |
// +-----------------------------------------------------------------------------------------------+

class DataManager
{
    // ATTRIBUTES: ---------------------------------------------------------------------------------
    
    // paths: --------------------------------------------------------------------------------------
    
    private $origin  = "";
    
    private $mapPath  = "data/maps/";
    private $tilePath = "resources/tilesets/";
    private $charPath = "resources/charsets/";
    
    // CONSTRUCTOR: --------------------------------------------------------------------------------
    
    public function DataManager($origin) { $this->origin = $origin; }
    
    // GETTERS: ------------------------------------------------------------------------------------
    
    public function LoadMapJSON($map)   { return file_get_contents($this->origin.$this->mapPath.$map); }
    public function GetTileSourcePath() { return $this->origin.$this->tilePath; }
}

?>