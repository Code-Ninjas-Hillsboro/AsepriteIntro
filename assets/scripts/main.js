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


    let table_of_contents = document.getElementById("table-of-contents");
    let header_elements = document.querySelectorAll("h1, h2, h3");
    let link_id = 0;
    for (let i = 0; i < header_elements.length; i += 1) {
        header_elements[i].id = "link_" + link_id;

        let anchor_element = document.createElement("a");
        anchor_element.href = "#link_" + link_id;
        anchor_element.innerHTML = header_elements[i].innerHTML;
        anchor_element.className = "link_" + header_elements[i].tagName
        table_of_contents.append(anchor_element);

        link_id += 1;
    }
});
