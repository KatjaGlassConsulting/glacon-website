<?php 

// phpinfo();
//echo $_SERVER['REQUEST_URI'];

$file = $_SERVER['REQUEST_URI'] . '.html';

$filename = substr($file, 1);

if (file_exists(substr($file, 1))){
    header ("Location: " . $file);
} else if (strpos($filename, 'portal/') !== false) {
    header ("Location: /portal/404.html");
}
else {
    header ("Location: /error404.html");
}