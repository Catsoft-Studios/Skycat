
// +-----------------------------------------------------------------------------------------------+
// | CLASS: PlayerController                                                                       |
// +-----------------------------------------------------------------------------------------------+

function PlayerController()
{
    // attributes: ---------------------------------------------------------------------------------
	
	this.componentName = "PlayerController";
	
	this.isActive = true;
	
	this.maxHealth = 100;
	this.health    = 100;
	
	this.maxMana = 100;
	this.mana    = 100;
	
	this.speed = 0.3;
	
	this.moveX = 0;
	this.moveY = 0;
	
    // update: -------------------------------------------------------------------------------------
    
    this.Update = function()
    {
        if (!this.isActive)
        {
            this.moveX = 0;
            this.moveY = 0;
        }
        
        if (this.moveX != 0)
        {
            var movementX = this.moveX * (_core.map.GetComponent("Map").tilesWidth * _core.clock.GetComponent("Clock").deltaTime * this.speed);
            _core.player.GetComponent("Renderer").renderPosX += movementX;
            
            if (this.moveX == 1 && _core.player.GetComponent("Renderer").renderPosX > _core.player.GetComponent("Transform").positionX) 
            {
                _core.player.GetComponent("Renderer").renderPosX = _core.player.GetComponent("Transform").positionX;
                this.moveX = 0;
            }
            
            if (this.moveX == -1 && _core.player.GetComponent("Renderer").renderPosX < _core.player.GetComponent("Transform").positionX) 
            {
                _core.player.GetComponent("Renderer").renderPosX = _core.player.GetComponent("Transform").positionX;
                this.moveX = 0;
            }
        }
        
        if (this.moveY != 0)
        {
            var movementY = this.moveY * (_core.map.GetComponent("Map").tilesHeight * _core.clock.GetComponent("Clock").deltaTime * this.speed);
            _core.player.GetComponent("Renderer").renderPosY += movementY;
            
            if (this.moveY == 1 && _core.player.GetComponent("Renderer").renderPosY > _core.player.GetComponent("Transform").positionY) 
            {
                _core.player.GetComponent("Renderer").renderPosY = _core.player.GetComponent("Transform").positionY;
                this.moveY = 0;
            }
            
            if (this.moveY == -1 && _core.player.GetComponent("Renderer").renderPosY < _core.player.GetComponent("Transform").positionY) 
            {
                _core.player.GetComponent("Renderer").renderPosY = _core.player.GetComponent("Transform").positionY;
                this.moveY = 0;
            }
        }
        
        if (this.isActive && this.moveX == 0 && this.moveY == 0)
        {
            var inputX = _core.input.GetComponent("Input").rawAxisX;
            var inputY = _core.input.GetComponent("Input").rawAxisY;
            
            if (inputX != 0) inputY = 0;
            
            var moveToX = _core.player.GetComponent("Transform").positionX + inputX;
            var moveToY = _core.player.GetComponent("Transform").positionY + inputY;
            
            if (_core.map.GetComponent("Map").CanMove(moveToX, moveToY))
            {            
                if (inputX != 0)
                {
                    _core.player.GetComponent("Transform").positionX += inputX;
                    
                    this.moveX = inputX;
                    this.moveY = 0;
                }
                else if (inputY != 0)
                {
                    _core.player.GetComponent("Transform").positionY += inputY;
                    
                    this.moveX = 0;
                    this.moveY = inputY;
                }
                else
                {
                    this.moveX = 0;
                    this.moveY = 0;
                }
            }
            
            var playerPosition = "Player X: "+_core.player.GetComponent("Renderer").renderPosX+"<br>";
            playerPosition    += "Player Y: "+_core.player.GetComponent("Renderer").renderPosY;
            $("div#console1").html(playerPosition);
        }
    }
    
    // getters: ------------------------------------------------------------------------------------
    
    // setters: ------------------------------------------------------------------------------------
}