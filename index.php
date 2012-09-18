<?php session_start(); ?>

<!-- origin variable -->
<?php $_url = ""; ?>
<script type="text/javascript">var _url = "";</script>

<!DOCTYPE html>

<html>
<head>
	
	<meta charset="utf-8" />
	<html lang="en">
	<title>Skycat Engine</title>
	
	<?php 
		
		include_once($_url."class/includes.class.php"); 
		Includes::IncludeLibraryCSS($_url."css");
		Includes::IncludeLibraryMANUALCORE($_url."manualcore");
		Includes::IncludeLibraryCORE($_url."core");
		
	?>
	
</head>
<body class="body">
	
	<!-- game scene -->
	<div id="scenewrapper" class="scenewrapper">
	   <canvas id="scene" class="canvas canvas1"></canvas>
	   <canvas id="chars" class="canvas canvas2"></canvas>
	   <canvas id="foreg" class="canvas canvas3"></canvas>
    </div>
    
    <!-- bubble example 
    <div class="bubble"><span class="bubble">Marti:</span> Good morning! This is a text sample</div> -->
    
    <!-- battle hud -->
    <div class="battle_hud">
        <div class="hp">
            100/100 <span class="bubble">HP</span>
            <div class="bar"><div class="hp_bar"></div></div>
        </div>
        <div class="at">
            50/50 <span class="bubble">Action</span>
            <div class="bar"><div class="at_bar"></div></div>
            
        </div> 
    </div>
    
    <!-- battle menu -->
    <div class="battle_menu" id="battle_menu">
        Offensive
        <div class="battle_item battle_active" id="attack">Attack</div>
        Black magic
        <div class="battle_item" id="electro">Electro</div>
        <div class="battle_item" id="piro">Piro</div>
        White magic
        <div class="battle_item" id="heal">Heal</div>
        <div class="battle_item" id="lazarus">Lazarus</div>
        <br>
        <div class="battle_item" id="item">Item</div>
        <div class="battle_item" id="portal">Portal</div>
    </div>
    
    <div class="battle_timefreeze" id="timefreeze"></div>
	
	<!-- debug elements -->
	<div class="console-fps gp" id="fps">FPS</div>
	<div class="console console1 gp"     id="console1">Console Log 1</div>
	<div class="console console2 gp"     id="console2">Console Log 2</div>
	<div class="console console3 gp"     id="console3">Console Log 3</div>
	
	<!-- include this file at the end of all tags -->
	<?php include($_url."includes/datamanager.php"); ?>
	
</body>
</html>