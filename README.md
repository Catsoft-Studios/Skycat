SKYCAT ENGINE
=============

This code was created for demonstration purposes only and may not be sold nor used without the author's permission. Please, feel free to contact us at [catsoft-studios@gmail.com][2]
We do not take any responsibilities of the injuries it may cause. The current stage of the product is not even in Alpha testing.

![skycat](https://raw.github.com/Catsoft-Studios/Skycat/master/readme/skycat.png)

Information
-----------

Skycat Engine is an HTML5 game engine designed and meant to be used to create games for web
browsers. It can also be compiled to be executed in Adobe Air or other applications that support
Javascript, HTML and CSS.

Skycat Engine is being designed to be flexible and easy to use, but the game type target is to 
be used as an old-school RPG engine.

All credit to Martí-Joan Nogué Coll - Catsoft-Studios 2011.
More information about the code can be found at

[catsoft-studios.com][1]

If you have any questions drop us a line by making use of the contact page.

Installation and usage
----------------------

Simply drag and place all files in a web server folder. Then open it with a browser.

How Skycat Engine works
-----------------------

Every object of Skycat Engine is an instance of the class GameObject, which defines the name 
of an object and references the rest of the instances that compound an object.

Some of the most important classes are:

* GameObject: Base Game class. Provides methods to access the rest of the objects.
* GameCore: The main class. Every frame the GameCore calls all necessary methods to update the game state. References almost all objects of the scene.
* Camera: Stores information about the aspect of the viewport and where it is located relative to the map.
* Map: Stores information about the tilesets used and also the dimensions of the navigation terrain.
* Clock: Responsible for everything related to timing. From keeping frames at a certain rate to managing sprite's animations.
* Input: Responsible of converting input to events.
* Canvas: Provides drawing methods and delegates whether an object is painted in an upper or lower layer.
* Transform: Handles map positioning.
* Renderer: All objects that have an instance of this class will be rendered with its defined properties.
* ... and more

To access to an instance of a class (for example, the map) you should first check whether the
map instance exists or not and then access it:

	/* get the width of the map */
 	var width = -1;
 	if (_core.map.HasComponent("Map")) 
 	{
     	width = _core.map.GetComponent("Map").width;
	}

The tilesets
------------

Even though we use a very flexible and customizable software to generate the maps and pack the 
compounded maps, we have defined some rules to make the importation of the maps easier to
implement.

Maps can be created using the open source tool Tileditor [mapeditor.org][3].

The tileset will have 7 and only 7 layers:

	+------------------+------------------------------------------------------------------------------+
	| NUM: LAYER NAME  | DESCRIPTION                                                                  |
	+------------------+------------------------------------------------------------------------------+
	| 0: Collision     | Marked with nothing when the player can pass through and with any value if   |
	|                  | the player cannot cross it.                                                  |
	+------------------+------------------------------------------------------------------------------+
	| 1: Background1   | Tiles of the background (behind the player). They will be static because     |
	|                  | they will only be rendered one time.                                         |
	+------------------+------------------------------------------------------------------------------+
	| 2: Background2   | Tiles of the background (behind the player). They will be static because     |
	|                  | they will only be rendered one time.                                         |
	+------------------+------------------------------------------------------------------------------+
	| 3: Background3   | Tiles of the background (behind the player). They will be static because     |
	|                  | they will only be rendered one time.                                         |
	+------------------+------------------------------------------------------------------------------+
	| 4: Charsets      | The player, enemies and every movable object will be rendered here.          |
	+------------------+------------------------------------------------------------------------------+
	| 5: Foreground1   | The same as background but here will only be rendered objects that should    |
	|                  | be displayed over the rest of the objects.                                   |
	+------------------+------------------------------------------------------------------------------+
	| 6: Foreground2   | The same as background but here will only be rendered objects that should    |
	|                  | be displayed over the rest of the objects.                                   |
	+------------------+------------------------------------------------------------------------------+

`IMPORTANT` A tileset is packed in a JSON file where the name of the image [is the name of the 
tile and its location inside the resources folder]


Things that still need to be done
---------------------------------

* `CONVERSATION SYSTEM`: Allow safe talking (pausing game) and binary (or multiple) choices for the
  player. This is one of the main pilars of the game, and should be done as fast as possible.
* `COMBAT SYSTEM`: This is one of the other pilars of the game. Combat, well balanced and as 
  tactical as possible, keeping decent action and easy tweaking and flexibility.
* `ENEMY COMBAT`: Allow enemies to combat you, die, and reespawn after a certain amount of time.
  There should also be able to stay in idle and move around with some predefined patterns.
* `NPC SYSTEM``: Create none playable characters easily. Maybe defining a few sprite-sheet
  positions. NPCs should also react to game events, like if the player kills certain people.
  Maybe we should leave this feature. The player should just be able to kill in field zone.
* `SPELLS SYSTEM`: Being able to cast spells in field.
* `EXPERIENCE SYSTEM`:
* `SAVE SYSTEM`: Being able to save game data. It would be cool if the data could be exported and
  auto-loaded from Dropbox. Nice!

Known issues and bugs
---------------------

`(2-8-2012)` Tiled Software: Little issue: the .json file does not detect objects from the
most right, so a blank column is needed to prevent making objects appear as invisible.

Corrected bugs
--------------

`(3-8-2012)` When next to a blocked way from left while pressing left direction, if below is not
blocked, then if the user presses down, the player will walk through the last blocked way.


[1]: http://catsoft-studios.com
[2]: mailto:catsoft.studios@gmail.com
[3]: http://mapeditor.org