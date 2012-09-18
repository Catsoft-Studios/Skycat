

// +-----------------------------------------------------------------------------------------------+
// | CLASS: View                                                                                   |
// +-----------------------------------------------------------------------------------------------+

function View()
{
    // attributes: ---------------------------------------------------------------------------------
    
    this.componentName = "View";
    
    this.btimeID = "timefreeze";
    this.bmenuID = "battle_menu";
	
    // Init: ---------------------------------------------------------------------------------------
	
	this.Init = function()
	{
        
	}
	
    // Battle menu: --------------------------------------------------------------------------------
    
    this.ShowBattleMenu = function()
    {
        $("div#timefreeze").show();
        $("div#battle_menu").show();
    }
    
    this.HideBattleMenu = function()
    {
        $("div#timefreeze").hide();
        $("div#battle_menu").hide();
    }
}

