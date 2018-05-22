<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    $string1 = "<div class=\"row\"><div class=\"col-md-4\">";
    $string2 = "</div><div class=\"col-md-8\"><h2>{${"title".$number}}</h2><div class=\"details\">Posted by ";
    $string3 = "<span class=\"pull-right\">{${"date".$number}}</span><p class=\"ratings\">";
    $string4 = "{${"reviewsNum".$number}} Reviews</p></div><p class=\"excerpt\">{${"excerpt".$number}}<p>";
    $string5 = "</p></div></div><hr>";
    echo $string1 . generateLink(${"thumb".$number},"<img src='images/{${"thumb".$number}}' alt='{${"title".$number}}' class='img-responsive'>", "") .
        $string2 . generateLink("user.php?id={${"userId".$number}}","{${"userName".$number}}","") .
        $string3 . constructRating(${"reviewsRating".$number}) .
        $string4 . generateLink("post.php?id={${"postId".$number}}","Read more","btn btn-primary btn-sm") .
        $string5;
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>
