
// +-----------------------------------------------------------------------------------------------+
// | CLASS: Clock                                                                                  |
// +-----------------------------------------------------------------------------------------------+

function Clock()
{
    // attributes: ---------------------------------------------------------------------------------
	
	this.componentName = "Clock";
	
	this.isActive = true;
	
	this.time    = new Date;
	this.oldTime = new Date;
	
	this.fps = 0.0;
	this.deltaTime = 0.0;
	
	// methods: ---------------------------------------------------------------------------------------
    
    this.UpdateFPS = function()
    {
        this.time = new Date;
        this.fps = 1000/(this.time - this.oldTime);
        this.deltaTime = 1/this.fps;
        this.oldTime = this.time;
    }
}