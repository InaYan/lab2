<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    $thumb1 = "8710320515.jpg";
    include("travel-data.inc.php");
    echo "<div class=\"row\">
                        <div class=\"col-md-4\">". generateLink(${thumb.$number},
            "<img src='images/{${thumb.$number}}' alt='{${title.$number}}}' class='img-responsive'",
            "")."</div>
                        <div class=\"col-md-8\">
                            <h2>{${title.$number}}</h2>
                            <div class=\"details\">Posted by ".
        generateLink("user.php?id={${userId.$number}}",
            "{${userName.$number}}",
            "")."</div>
                            <span class=\"pull-right\">{${date.$number}}</span>
                                <p class=\"ratings\">
                                   ".constructRating(${reviewsRating.$number}). "{${reviewsNum.$number}} Reviews
                                </p>
                            </div>
                            <p class=\"excerpt\">{${excerpt.$number}}<p>".
                            generateLink("post.php?id={${postId.$number}}",
                                "Read more",
                                "btn btn-primary btn-sm") ."</p>
                        </div>
                    </div>";
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