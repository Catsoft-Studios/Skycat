
<?php
    
    // Load data: ----------------------------------------------------------------------------------
    
    include_once($_url."class/datamanager.class.php");
    $DataManager = new DataManager($_url);
    	   
    // get loaded data: ----------------------------------------------------------------------------
    
    // default camera size (not applied)
    $cameraWidth  = 800;
    $cameraHeight = 600;
    
    // player's position (applied)
    $playerPosX = 3;
    $playerPosY = 6;
    
    // map name and path to be loaded (applied)
    $tileData = $DataManager->LoadMapJSON("MAP001.json");
    $tilePath = $DataManager->GetTileSourcePath();
    
    // apply loaded data: --------------------------------------------------------------------------
    
    echo "<script type=\"text/javascript\">";
        
        // initialize data structures:
        echo "InitData();\n";
        
        // set player settings:
        echo "_core.player.GetComponent('Transform').positionX = $playerPosX;\n";
        echo "_core.player.GetComponent('Transform').positionY = $playerPosY;\n";
        echo "_core.player.GetComponent('Renderer').renderPosX = $playerPosX;\n";
        echo "_core.player.GetComponent('Renderer').renderPosY = $playerPosY;\n";
        
        // set tileset data:
        echo "_core.map.GetComponent('Map').tileData = $tileData;\n";
        echo "_core.map.GetComponent('Map').tilePath = '$tilePath';\n";
        echo "_core.map.GetComponent('Map').BuildMap();\n";
        
        echo "_core.camera.GetComponent('Camera').viewportWidth  = $(window).width();";
        echo "_core.camera.GetComponent('Camera').viewportHeight = $(window).height();";
        echo "$('div#scenewrapper').width($(window).width());";
        echo "$('div#scenewrapper').height($(window).height());";
        
    echo "</script>";
    
?>