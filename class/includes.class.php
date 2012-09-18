
<?php

class Includes
{
	// INCLUDE CSS: ----------------------------------------------------------------------------------
	
	public static function IncludeLibraryCSS($path)
	{
		if ($reader = opendir($path))
		{
			while ($file = readdir($reader))
			{
				if (pathinfo($file, PATHINFO_EXTENSION) == "css")
				{
					echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"".$path."/".$file."\">";
				}
				
				if (is_dir($path."/".$file) and $file != "." and $file != "..") 
				{
					Includes::IncludeLibraryCSS($path."/".$file);
				}
			}
		}
		
		closedir($reader);
	}
	
	// INCLUDE CORE: ---------------------------------------------------------------------------------
	
	public static function IncludeLibraryCORE($path)
	{
		if ($reader = opendir($path))
		{
			while ($file = readdir($reader))
			{
				if (pathinfo($file, PATHINFO_EXTENSION) == "js")
				{
					echo "<script type=\"text/javascript\" src=\"".$path."/".$file."\"></script>";
				}
				
				if (is_dir($path."/".$file) and $file != "." and $file != "..") 
				{
					Includes::IncludeLibraryCORE($path."/".$file);
				}
			}
		}
		
		closedir($reader);
	}
	
	// INCLUDE CORE: ---------------------------------------------------------------------------------
	
	public static function IncludeLibraryMANUALCORE($path)
	{
		echo "<script type=\"text/javascript\" src=\"".$path."/"."jquery.js"."\"></script>";
	}
}

?>