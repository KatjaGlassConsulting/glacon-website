<?php
// Dev-only router for PHP's built-in server: `php -S localhost:8000 router.php`
// Parses .html files through PHP so the inline PHP includes work,
// matching how the production (Apache) server is configured.

$uri  = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$path = __DIR__ . $uri;

// Map "/" or any directory to its index.html
if ($uri === '/' || is_dir($path)) {
    $path = rtrim($path, '/') . '/index.html';
}

if (!file_exists($path)) {
    http_response_code(404);
    include __DIR__ . '/error404.html';
    return true;
}

// Run .html and .php through the PHP interpreter; serve everything else statically.
if (preg_match('/\.(html|php)$/i', $path)) {
    chdir(__DIR__);
    include $path;
    return true;
}

return false; // css / js / images / fonts -> handled by the built-in server
