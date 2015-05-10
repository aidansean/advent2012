<?php
$title = 'Youtube player' ;
//$js_scripts  = array('youtube_jsapi.js', 'youtube.js' , 'functions.js') ;
$js_scripts  = array('youtube.js' , 'functions.js') ;
$stylesheets = array('youtube.css') ;
include_once($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
<div class="right">
  <div class="center" id="div_youtube_player"></div>
  <div class="center" id="div_player_wrapper"></div>
</div>
<?php foot() ; ?>