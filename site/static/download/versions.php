<?php

// create the releases array
$releases = array();

// the pattern
$pattern = '/slizaa-(\d*\.\d*\.\d*)\.(\d{4})(\d{2})(\d{2})(\d{4}).*/';

$path    = '../downloads';
$files = array_diff(scandir($path), array('.', '..'));

// iterate over all zip files
foreach (array_reverse($files) as $filename) {

  // pattern match		
  if (preg_match($pattern, $filename, $matches)) {

    $date = $matches[2]."-".$matches[3]."-".$matches[4]."_".$matches[5];
    
    // new key
    if (!array_key_exists($matches[1], $releases)) {
      $releases[$matches[1]]=$date;
    } 
    
    // update key
    else {
    	if (strcmp($releases[$matches[1]], $date)  < 0) {
        $releases[$matches[1]]=$date;
      } else {
      	//
      }
    }
  }
}

$releasesCount = sizeof($releases);
$keys = array_keys($releases);
$downloadUrl = "http://www.slizaa.org/downloads/";

for ($i=0; $i<$releasesCount; $i++) {

	$version = $keys[$i].".".str_replace("_", "",  str_replace("-", "", $releases[$keys[$i]]));
	if ($i=="0") {
    $releaseDate = "Development - Build ".$version;
   } else {
		$releaseDate = "Stable - ".substr($releases[$keys[$i]], 0, strpos($releases[$keys[$i]], "_"));
   }
	
  echo "<h2><b>".$keys[$i]."</b> <i>(".$releaseDate.")</i></h2>";
  echo "<div class=\"table-responsive\">";
  echo "<table class=\"download-table table table-bordered\">";
  echo "<tr>";
  echo "<th class=\"download-th\"><div>Windows 7+ (64 Bit)</div></th>";
  echo "<th class=\"download-th\"><div>Mac OS (64 Bit)</div></th>";
  echo "<th class=\"download-th\"><div>Linux (64 Bit)</div></th>";
  echo "</tr>";
  echo "<tr>";
  
  // windows
  echo "<td class=\"download-td\">";
  echo "<a class=\"btn btn-lg btn-primary\"";
  echo " href=\"".$downloadUrl."slizaa-".$version."-win32.win32.x86_64.zip\"><i";
  echo " class=\"fa fa-download \"></i>".$keys[$i]." (win32/x86_64)</a>";
  echo "</td>";
  // mac
  echo "<td class=\"download-td\">";
  echo "<a class=\"btn btn-lg btn-primary\"";
  echo " href=\"".$downloadUrl."slizaa-".$version."-macosx.cocoa.x86_64.zip\"><i";
  echo " class=\"fa fa-download \"></i>".$keys[$i]." (macosx/x86_64)</a>";
  echo "</td>";
  // linux
  echo "<td class=\"download-td\">";
  echo "<a class=\"btn btn-lg btn-primary\"";
  echo " href=\"".$downloadUrl."slizaa-".$version."-linux.gtk.x86_64.zip\"><i";
  echo " class=\"fa fa-download \"></i>".$keys[$i]." (linux.gtk/x86_64)</a>";
  echo "</td>";
   
  echo "</table>";
  echo "</div>";
}
?> 
