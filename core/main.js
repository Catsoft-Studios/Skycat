
// GLOBAL VARIABLES: -------------------------------------------------------------------------------

var _core;

var _game_loaded = false;

// INIT FUNCTION: ----------------------------------------------------------------------------------

function InitData()
{
    // create core:
	_core = new GameObject();
	_core.name = "GameCore";
	_core.AddComponent(new GameCore());
	
	// create map:
	_core.map = new GameObject();
	_core.map.name = "Map"
	_core.map.AddComponent(new Map())
	
	// create player:
	_core.player = new GameObject();
	_core.player.name = "Player";
	_core.player.AddComponent(new Transform());
	_core.player.AddComponent(new Renderer());
	_core.player.AddComponent(new PlayerController());
	_core.player.AddComponent(new PlayerSkills());
	
	// create input:
	_core.input = new GameObject();
	_core.input.AddComponent(new Input());
	
	// create clock:
	_core.clock = new GameObject();
	_core.clock.AddComponent(new Clock());
	
	// create camera:
	_core.camera = new GameObject();
	_core.camera.AddComponent(new Camera());
	
	// create canvas:
	_core.canvas = new GameObject();
	_core.canvas.AddComponent(new Canvas());
	
	// create view:
	_core.view = new GameObject();
	_core.view.AddComponent(new View());
	
	if (_core.GetComponent("GameCore").debug)
	{
	   $("div#console1").show();
	   $("div#console2").show();
	   $("div#console3").show();
	   $("div#fps").show();
	}
	
	// disable right-click:
    if (!_core.GetComponent("GameCore").debug) 
    {
        $(document).bind("contextmenu",function(e){e.preventDefault(); });
    }
        
}

// UPDATE FUNCTION: --------------------------------------------------------------------------------

function Update()
{
    _core.clock.GetComponent("Clock").UpdateFPS();
    _core.GetComponent("GameCore").Update();
    _core.canvas.GetComponent("Canvas").Paint();
    
	$("div#fps").html("FPS: "+_core.clock.GetComponent("Clock").fps);
	
	if (_core.clock.GetComponent("Clock").isActive) requestAnimFrame(Update);
}

function StartGame()
{
	requestAnimFrame(Update);
	_core.canvas.GetComponent("Canvas").Init();
}

function StopTime()
{
    _core.clock.GetComponent("Clock").isActive = false;
}

function ResumeTime()
{
    _core.clock.GetComponent("Clock").isActive = true;
    Update();
}

$(window).load( function()
{
    _game_loaded = true;
    StartGame();
});

// TIMING: -----------------------------------------------------------------------------------------

window.requestAnimFrame = (function()
{
    return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame   || 
    window.mozRequestAnimationFrame      || 
    window.oRequestAnimationFrame        || 
    window.msRequestAnimationFrame       || 
    function(callback, element){
        window.setTimeout(function()
        {
            callback(+new Date);
        }, 1000 / 60);
    };
})();

// RESIZE: -----------------------------------------------------------------------------------------

$(document).ready( function()
{
    $(window).resize( function()
    {
        var w = $(window).width();
        var h = $(window).height();
        _core.camera.GetComponent("Camera").ResizeFrustum(w,h);
    });
});