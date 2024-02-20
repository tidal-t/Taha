// HTML
{/* <div class="width">This is a div element with class width</div> */}

// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".width");
    elements.forEach(function(element) {
        var width = element.offsetWidth;
        element.innerHTML += " - Width: " + width + "px";
    });
});
