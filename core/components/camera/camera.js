
// +-----------------------------------------------------------------------------------------------+
// | CLASS: Camera                                                                                 |
// +-----------------------------------------------------------------------------------------------+

function Camera()
{
    // attributes: ---------------------------------------------------------------------------------
    
    this.componentName = "Camera";
    
    //this.positionX = 0; // in tiles
    //this.positionY = 0; // in tiles
    
    this.positionXinPixels = 0; // in pixels
    this.positionYinPixels = 0; // in pixels
    
    this.viewportWidth  = 800;
    this.viewportHeight = 600;
	
    // Resize frustum: -----------------------------------------------------------------------------
    
    this.ResizeFrustum = function(w, h)
    {
        this.viewportWidth  = w;
        this.viewportHeight = h;
        
        $('div#scenewrapper').width(w);
        $('div#scenewrapper').height(h);
    }
	
    // Init: ---------------------------------------------------------------------------------------
	
	this.Init = function()
	{
	   // should reference the player and set it's position pointing him.
	   Update();
	}
	
    // Update: -------------------------------------------------------------------------------------
    
    this.Update = function()
    {
        // constantly place on top of player. Maybe with some exceptions like in Àcinematics?
        // I don't think that's reeeeeeeeeeally necessary. Just keep it simple ;-)
        
        var twidth  = _core.map.GetComponent("Map").tilesWidth;
        var theight = _core.map.GetComponent("Map").tilesHeight;
        
        var playerX = _core.player.GetComponent("Renderer").renderPosX;
        var playerY = _core.player.GetComponent("Renderer").renderPosY;
        
        var camMaxPosX = -_core.map.GetComponent("Map").widthInPixels  + this.viewportWidth;
        var camMaxPosY = -_core.map.GetComponent("Map").heightInPixels + this.viewportHeight;
        
        this.positionXinPixels = -(playerX * twidth)  + this.viewportWidth/2;
        this.positionYinPixels = -(playerY * theight) + this.viewportHeight/2;
        
        if (this.positionXinPixels > 0) this.positionXinPixels = 0;
        if (this.positionYinPixels > 0) this.positionYinPixels = 0;
        
        if (this.positionXinPixels < camMaxPosX) this.positionXinPixels = camMaxPosX;
        if (this.positionYinPixels < camMaxPosY) this.positionYinPixels = camMaxPosY;
        
        var cameraPosition = "Camera X: "+this.positionXinPixels+"<br>";
        cameraPosition    += "Camera Y: "+this.positionYinPixels;
        $("div#console2").html(cameraPosition);
    }
}

