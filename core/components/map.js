
// +-----------------------------------------------------------------------------------------------+
// | CLASS: Map                                                                                    |
// +-----------------------------------------------------------------------------------------------+

function Map()
{
    // attributes: ---------------------------------------------------------------------------------
    
	this.componentName = "Map";
	
	this.width  = 25; // in tiles
	this.height = 20; // in tiles
	
	this.widthInPixels  = 800; // in pixels
	this.heightInPixels = 640; // in pixels
	
	this.tilesWidth  = 32; // 1 tile = pixels
	this.tilesHeight = 32; // 1 tile = pixels
	
	this.tileData; // json container
	this.tilePath; // path to source folder
	this.tileSrc;  // image source
    
    // initializer: --------------------------------------------------------------------------------
    
    this.BuildMap = function()
    {
        // preload map image:
        this.tileSrc = new Image();
        this.tileSrc.src = this.tilePath+this.tileData.tilesets[0].image;
        
        this.ResizeMapInTiles(this.tileData.width, this.tileData.height);
    }
    
    // getters: ------------------------------------------------------------------------------------
    
    this.CanMove = function(i,j)
    {
        if (i < 0 || j < 0) return false;
        if (i >= this.width || j >= this.height) return false;
        
        var index = (j * this.width) + i;
        if (this.tileData.layers[0].data[index] == 0) return true;
        
        return false;
    }
    
    // setters: ------------------------------------------------------------------------------------
    
    this.ResizeMapInTiles = function(w, h)
    {
        this.width  = w;
        this.height = h;
        
        this.widthInPixels  = w * this.tilesWidth;
        this.heightInPixels = h * this.tilesHeight;
        
        _core.canvas.GetComponent("Canvas").ResizeCanvas(this.widthInPixels, this.heightInPixels);
    }
    
    this.ResizeMapInPixels = function(w, h)
    {
        this.width  = w / this.tilesWidth;
        this.height = h / this.tilesHeight;
        
        this.widthInPixels  = w;
        this.heightInPixels = h;
        
        _core.canvas.GetComponent("Canvas").ResizeCanvas(this.widthInPixels, this.heightInPixels);
    }
}