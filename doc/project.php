<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/advent2012" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=advent2012" ;
$project = new project_object("advent2012", "Advent Calendar 2012", "https://github.com/aidansean/advent2012", "http://aidansean.com/projects/?tag=advent2012", "advent2012/images/project.jpg", "advent2012/images/project_bw.jpg", "This is a collection of YouTube videos as made as an outreach project in December 2012.  Each day of Advent gives a different interesting fact about particle physics.", "Physics,Outreach,Video", "CSS,HTML,JavaScript,YouTube") ;
?>