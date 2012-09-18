
// +-----------------------------------------------------------------------------------------------+
// | CLASS: GameCore                                                                               |
// +-----------------------------------------------------------------------------------------------+

function GameCore()
{
    // attributes: ---------------------------------------------------------------------------------
    
    this.componentName = "GameCore";
    
	this.map    = new GameObject();
	this.player = new GameObject();
	this.input  = new GameObject();
	this.clock  = new GameObject();
	this.canvas = new GameObject();
	this.camera = new GameObject();
	this.view   = new GameObject();
	
	this.debug = false;
	
    // Update: -------------------------------------------------------------------------------------
    
    this.Update = function()
    {
        // update all objects like camera, player, enemies, npcs, ...
        _core.player.GetComponent("PlayerController").Update();
        _core.camera.GetComponent("Camera").Update();
    }
	
}

