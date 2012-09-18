
// +-----------------------------------------------------------------------------------------------+
// | CLASS: Input                                                                                  |
// +-----------------------------------------------------------------------------------------------+

function Input()
{
	// attributes: ---------------------------------------------------------------------------------
	
	this.componentName = "Input";
	
	this.rawAxisX = 0;
	this.rawAxisY = 0;
	
	this.button1 = false;
	this.button2 = false;
	this.button3 = false;
	
	this.mouseX = 0;
	this.mouseY = 0;
	
	/**
	 * For some reason this does not work :-(
	 * for the moment we'll keep the values
	 * to remind which values are related to keys.
	 * 
	 * this.keyW     = 87;
	 * this.keyS     = 83;
	 * this.keyA     = 65;
	 * this.keyD     = 68;
	 * this.keySpace = 32;
	 * this.keyEnter = 13;
	 * this.keyTab   = 9;
	 * this.keyShift = 16;
     * this.keyCtrl  = 17;
     * this.keyAlt   = 18;
     */
}

// +-----------------------------------------------------------------------------------------------+
// | EVENT: Key listener                                                                           |
// +-----------------------------------------------------------------------------------------------+

$(document).ready( function()
{
	$(document).keydown( function(event)
	{
		switch (event.keyCode)
		{
    		case 87 : // (w)
                _core.input.GetComponent("Input").rawAxisY = -1;
    			break;
    		case 83 : // (s)
                _core.input.GetComponent("Input").rawAxisY =  1;
    			break;
		}
		
		switch (event.keyCode)
		{
    		case 65 : // (a)
                _core.input.GetComponent("Input").rawAxisX = -1;
    			break;
    		case 68 : // (d)
    			_core.input.GetComponent("Input").rawAxisX =  1;
    			break;
		}
	});
	
	$(document).keyup( function(event)
	{
		switch (event.keyCode)
		{
    		case 87 : // (w)
    			 _core.input.GetComponent("Input").rawAxisY = 0;
    			break;
    		case 83 : // (s)
    			 _core.input.GetComponent("Input").rawAxisY = 0;
    			break;
		}
		
		switch (event.keyCode)
		{
    		case 65 : // (a)
    			 _core.input.GetComponent("Input").rawAxisX = 0;
    			break;
    		case 68 : // (d)
    			 _core.input.GetComponent("Input").rawAxisX = 0;
    			break;
		}
		
		switch (event.keyCode)
		{
            case 32 :
                _core.player.GetComponent("PlayerSkills").ToggleBattleMenu();
                break;
		}
	});
	
	$(document).click( function(e)
    {
        // TODO: Everything -_-()
        // mouse position is located at e.pageX and e.pageY
	});
	
	$("div.battle_item").click( function()
	{
	   $("div.battle_active").removeClass("battle_active");
	   $(this).addClass("battle_active");
	   var skillID = $(this).attr("id");
	   _core.player.GetComponent("PlayerSkills").ChangeSkill(skillID);
	});
});