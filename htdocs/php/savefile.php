<?php
	
	$t = $_GET["filename"];
	$v = $_REQUEST["playersJson"];
	
	//$t = '..\data\' . $t;
	
	//$t += 't';
	$myfile = fopen($t, "w") or die("Unable to save file");
	fwrite($myfile, $v);
	fclose($myfile);

?>