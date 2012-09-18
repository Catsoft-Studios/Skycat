
<?php

// +-----------------------------------------------------------------------------------------------+
// | INNER CLASS: MapData                                                                          |
// +-----------------------------------------------------------------------------------------------+

class MapData
{
    public $cellType = 0;
    
    public $tileLayer1x = 0;
    public $tileLayer1y = 0;
    
    public $tileLayer2x = 0;
    public $tileLayer2y = 0;
    
    public $depthLayer1 = 0;
    public $depthLayer2 = 0;
    
    public function MapData($type)
    {
        $this->cellType = $type;
    }
}

// +-----------------------------------------------------------------------------------------------+
// | CLASS: DataManager                                                                            |
// +-----------------------------------------------------------------------------------------------+

class DataManager
{
    // ATTRIBUTES: ---------------------------------------------------------------------------------
    
    // paths: --------------------------------------------------------------------------------------
    
    private $origin  = "";
    
    private $mapPath  = "data/maps/";
    private $tilePath = "resources/tiles/";
    
    // map: ----------------------------------------------------------------------------------------
    
    private $mapWidth;  // in tiles
    private $mapHeight; // in tiles
    private $tileSize;
    private $mapSrc;
    private $map;
    
    // CONSTRUCTOR: --------------------------------------------------------------------------------
    
    public function DataManager($origin)
    {
        $this->origin = $origin;
    }
    
    // GETTERS: ------------------------------------------------------------------------------------
    
    public function LoadMap($map)
    {
        $reader = fopen($this->origin.$this->mapPath.$map, "r") or exit("Cannot open file: ".$map);
        
        while ($line = fgets($reader)) { if (trim($line) == "DATA") break; }
        
        // read width, height and tile size info:
        $mapinfo = fscanf($reader, "%d %d %d");
        list ($this->mapWidth, $this->mapHeight, $this->tileSize) = $mapinfo;
        
        // read block info:
        $this->map = array(array());
        
        for ($i = 0; $i < $this->mapHeight; $i++)
        {
            $line = fgets($reader);
            for ($j = 0; $j < $this->mapWidth; $j++)
            {
                $tile = $line[$j];
                switch ($tile)
                {
                    case '.' : $this->map[$i][$j] = new MapData(0); break;
                    case 'X' : $this->map[$i][$j] = new MapData(1); break;
                    default  : exit("WTF: Invalid map tile format: '".$tile."'");
                }
            }
        }
        
        // read cell info:
        for ($i = 0; $i < $this->mapHeight; $i++)
        {
            for ($j = 0; $j < $this->mapWidth; $j++)
            {
                $mapinfo = fscanf($reader, "%d %d %d %d %d %d");
                list ($layer1x, $layer1y, $layer1depth, $layer2x, $layer2y, $layer2depth) = $mapinfo;
                
                $this->map[$i][$j]->tileLayer1x = $layer1x;
                $this->map[$i][$j]->tileLayer1y = $layer1y;
                $this->map[$i][$j]->tileLayer2x = $layer2x;
                $this->map[$i][$j]->tileLayer2y = $layer2y;
                $this->map[$i][$j]->depthLayer1 = $layer1depth;
                $this->map[$i][$j]->depthLayer2 = $layer2depth;
            }
        }
        
        // read tiled image source 1:
        $mapinfo = fscanf($reader, "%s");
        list ($this->mapSrc) = $mapinfo;
        
        fclose($reader);
    }
    
    // GETTERS: ------------------------------------------------------------------------------------
    
    // map: ----------------------------------------------------------------------------------------
    
    public function GetMapWidth()   { return $this->mapWidth;  }
    public function GetMapHeight()  { return $this->mapHeight; }
    public function GetTileSize()   { return $this->tileSize;  }
    public function GetTileset()    { return $this->origin.$this->tilePath.$this->mapSrc; }
    
    public function GetMapCellType($i, $j)        { return $this->map[$i][$j]->cellType;    }
    public function GetMapTileLayer1X($i, $j)     { return $this->map[$i][$j]->tileLayer1x; }
    public function GetMapTileLayer1Y($i, $j)     { return $this->map[$i][$j]->tileLayer1y; }
    public function GetMapTileLayer2X($i, $j)     { return $this->map[$i][$j]->tileLayer2x; }
    public function GetMapTileLayer2Y($i, $j)     { return $this->map[$i][$j]->tileLayer2y; }
    public function GetMapTileLayer1Depth($i, $j) { return $this->map[$i][$j]->depthLayer1; }
    public function GetMapTileLayer2Depth($i, $j) { return $this->map[$i][$j]->depthLayer2; }
}

?>