<?php
$urlwinter = "https://www.infosnow.ch/~apgmontagne/?type=xml&id=113&report=1343&ref=64aabeec07dfbab017ed9adca4d91cdd";
$xmlwinter = file_get_contents($urlwinter);
$xmlwinter = str_replace("<![CDATA[", "", $xmlwinter);
$xmlwinter = str_replace("]]>", "", $xmlwinter);
$xmlwinter = str_replace("&", "&amp;", $xmlwinter);
$xmlwinter = simplexml_load_string($xmlwinter);

$jsonwinter = json_encode($xmlwinter);
print_r("<h1>Engstligen API</h1><h2>Winter:</h2>");
print_r($jsonwinter);
file_put_contents("winter.json", $jsonwinter);

$urlsommer = "https://www.infosnow.ch/~apgmontagne/?type=xml&id=113&report=1344&ref=21e3947a4153900307054655b8459caa";

$xmlsommer = file_get_contents($urlsommer);
$xmlsommer = str_replace("<![CDATA[", "", $xmlsommer);
$xmlsommer = str_replace("]]>", "", $xmlsommer);
$xmlsommer = str_replace("&", "&amp;", $xmlsommer);
$xmlsommer = simplexml_load_string($xmlsommer);

$jsonsommer = json_encode($xmlsommer);
print_r("<h2>Sommer:</h2>");
print_r($jsonsommer);
file_put_contents("sommer.json", $jsonsommer);



?>