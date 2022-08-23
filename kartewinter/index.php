
<?php 
$urlw = "https://www.infosnow.ch/~apgmontagne/?type=xml&id=113&report=1344&ref=21e3947a4153900307054655b8459caa";
$xml = simplexml_load_file($urlw);
print_r($xml);
?>