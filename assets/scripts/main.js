let fullscreen_image_display

document.addEventListener("DOMContentLoaded", (e) => {
    fullscreen_image_display = document.getElementById("fullscreen-image-display");
    fullscreen_image_display.style.display = "none";
    fullscreen_image_display.addEventListener("click", (e) => {
        fullscreen_image_display.style.display = "none";
    });


    let image_elements = document.getElementsByTagName("img");
    for (let image_element of image_elements) {
        if (image_element != fullscreen_image_display) {
            image_element.addEventListener("click", (e) => {
                fullscreen_image_display.src = image_element.src;
                fullscreen_image_display.title = image_element.title;
                fullscreen_image_display.style.display = "block";
            });
        }
    }
});
