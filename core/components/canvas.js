

// +-----------------------------------------------------------------------------------------------+
// | CLASS: Canvas                                                                                 |
// +-----------------------------------------------------------------------------------------------+

function Canvas()
{
    // attributes: ---------------------------------------------------------------------------------
    
    this.componentName = "Canvas";
    
    this.sceneID = "scene";
    this.charsID = "chars";
    this.foregID = "foreg";
    
    this.scene; // canvas for background
	this.chars; // canvas for dynamic objects and characters
	this.foreg; // canvas for foreground
	
    // Init: ---------------------------------------------------------------------------------------
	
	this.Init = function()
	{
        this.scene = document.getElementById(this.sceneID).getContext('2d');
        this.chars = document.getElementById(this.charsID).getContext('2d');
        this.foreg = document.getElementById(this.foregID).getContext('2d');
        
        this.PaintTiles(1, this.scene);
        this.PaintTiles(2, this.scene);
        this.PaintTiles(3, this.scene);
        this.PaintTiles(4, this.foreg);
        this.PaintTiles(5, this.foreg);
        
        if (_core.GetComponent("GameCore").debug) this.PaintDebug();
	}
	
    // Resize: -------------------------------------------------------------------------------------
    
    this.ResizeCanvas = function(widthInPixels, heightInPixels)
    {
        $("canvas#"+this.sceneID).attr(
        {
            width:  widthInPixels,
            height: heightInPixels
        });
        
        $("canvas#"+this.charsID).attr(
        {
            width:  widthInPixels,
            height: heightInPixels
        });
        
        $("canvas#"+this.foregID).attr(
        {
            width:  widthInPixels,
            height: heightInPixels
        });
    }
	
    // Clean: --------------------------------------------------------------------------------------
	
	this.Clean = function(cleanCanvas)
	{
	   cleanCanvas.clearRect(0, 0, cleanCanvas.canvas.width, cleanCanvas.canvas.height);
    }
    
    // Paint: --------------------------------------------------------------------------------------
    
    this.Paint = function()
    { 
        // update camera position:
        this.UpdateBackground();
        
        // paint player:
        this.Clean(this.chars);
        this.PaintPlayer();
    }
    
    // paint tiles: --------------------------------------------------------------------------------
    
    this.PaintTiles = function(layerNumber, canvasTarget)
    {
        var nTileWidth  = _core.map.GetComponent("Map").tilesWidth;
        var nTileHeight = _core.map.GetComponent("Map").tilesHeight;
        
        var nMapWidth = _core.map.GetComponent("Map").widthInPixels;
        
        var aLayers = _core.map.GetComponent("Map").tileData.layers;
        var aLayersLen = aLayers.length;
        
        var nImageCols = _core.map.GetComponent("Map").tileSrc.width  / nTileWidth;
        var nImageRows = _core.map.GetComponent("Map").tileSrc.height / nTileHeight;
        
		var oCurrentLayer = aLayers[layerNumber].data;
		var oCurrentLayerLen = oCurrentLayer.length;
 
		var nAxisX = 0;
		var nAxisY = 0;
		
		var tileimage = _core.map.GetComponent("Map").tileSrc;
        
		for (var nDataCount = 0; nDataCount < oCurrentLayerLen; nDataCount++) 
		{
			var nTileId = oCurrentLayer[nDataCount];
			var nSourceX = Math.floor(nTileId % nImageCols) - 1;
 
			if (nSourceX != -1)
			{
				nSourceX *= nTileWidth;
				var nSourceY = Math.floor(nTileId / nImageCols);
				nSourceY *= nTileHeight;
                
                canvasTarget.drawImage
                (
                    tileimage, nSourceX, nSourceY, 
				    nTileWidth, nTileHeight, 
				    nAxisX, nAxisY, 
				    nTileWidth, nTileHeight
				);
			}
            
			nAxisX += nTileWidth;
			
			if (nAxisX == nMapWidth)
			{
				nAxisX = 0;
				nAxisY += nTileHeight;
			}
		}
    }
    
    // paint debug: --------------------------------------------------------------------------------
    
    this.PaintDebug = function()
    {
        var nTileWidth  = _core.map.GetComponent("Map").tilesWidth;
        var nTileHeight = _core.map.GetComponent("Map").tilesHeight;
        
        var nMapWidth = _core.map.GetComponent("Map").widthInPixels;
        
        var aLayers = _core.map.GetComponent("Map").tileData.layers;
        var aLayersLen = aLayers.length;
        
        var nImageCols = _core.map.GetComponent("Map").tileSrc.width  / nTileWidth;
        var nImageRows = _core.map.GetComponent("Map").tileSrc.height / nTileHeight;
        
		var oCurrentLayer = aLayers[0].data;
		var oCurrentLayerLen = oCurrentLayer.length;
 
		var nAxisX = 0;
		var nAxisY = 0;
		
		var tileimage = _core.map.GetComponent("Map").tileSrc;
        
		for (var nDataCount = 0; nDataCount < oCurrentLayerLen; nDataCount++) 
		{
			var nTileId = oCurrentLayer[nDataCount];
			var nSourceX = Math.floor(nTileId % nImageCols) - 1;
 
			if (nSourceX != -1)
			{
				nSourceX *= nTileWidth;
				var nSourceY = Math.floor(nTileId / nImageCols);
				nSourceY *= nTileHeight;
                
                this.scene.globalAlpha = 0.2;
                this.scene.fillStyle = "#FF0000";
                this.scene.fillRect(nAxisX, nAxisY, nTileWidth, nTileHeight);
                this.scene.globalAlpha = 1.0;
			}
            
			nAxisX += nTileWidth;
			
			if (nAxisX == nMapWidth)
			{
				nAxisX = 0;
				nAxisY += nTileHeight;
			}
		}
    }
	
    // paint background: ---------------------------------------------------------------------------
    
    this.UpdateBackground = function()
    {
        posX = _core.camera.GetComponent("Camera").positionXinPixels;
        posY = _core.camera.GetComponent("Camera").positionYinPixels;
        
        $("canvas#"+this.sceneID).css({ top: posY, left: posX });
        $("canvas#"+this.charsID).css({ top: posY, left: posX });
        $("canvas#"+this.foregID).css({ top: posY, left: posX });
    }
	
	// paint player: -------------------------------------------------------------------------------
	
	this.PaintPlayer = function()
	{
        var tilesWidth  = _core.map.GetComponent("Map").tilesWidth;
        var tilesHeight = _core.map.GetComponent("Map").tilesHeight;
        
        var posX = _core.player.GetComponent("Renderer").renderPosX * tilesWidth;
        var posY = (_core.player.GetComponent("Renderer").renderPosY-1) * tilesHeight;
        
        var width  = tilesWidth;
        var height = tilesHeight * 2;
        
        if (_core.player.HasComponent("Transform") && _core.player.HasComponent("Renderer"))
        {
            // DEBUG data:
            var sourceX = 0;
            var sourceY = 0;
            var image = new Image();
            image.src = "resources/charsets/charset_marti.png";
            
            this.chars.drawImage(image, sourceX, sourceY, width, height, posX, posY, width, height)
        }
	}
}

