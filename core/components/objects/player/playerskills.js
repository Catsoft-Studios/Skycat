
// +-----------------------------------------------------------------------------------------------+
// | CLASS: PlayerController                                                                       |
// +-----------------------------------------------------------------------------------------------+

function PlayerSkills()
{
    // attributes: ---------------------------------------------------------------------------------
	
	this.componentName = "PlayerSkills";
	
	this.isActive = true;
	this.activeSkill = "null";
	
	this.showBattleMenu = false;
    
    // getters: ------------------------------------------------------------------------------------
    
    // setters: ------------------------------------------------------------------------------------
    
    this.ChangeSkill = function(newSkill)
    {
        this.activeSkill = newSkill;
        $("div#console3").html(this.activeSkill);
    }
    
    this.ToggleBattleMenu = function()
    {
        if (this.showBattleMenu)
        {
            // hide battle menu:
            ResumeTime();
            _core.view.GetComponent("View").HideBattleMenu();
            this.showBattleMenu = false;
        }
        else
        {
            // display battle menu:
            StopTime();
            $("div#timefreeze").show();
            $("div#battle_menu").show();
            this.showBattleMenu = true;
        }
    }
}