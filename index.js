function myFunc() {
    var body_tag = document.getElementById("body");
    if (body_tag.className === "") {
        body_tag.className += "light-mode";
    } else {
        body_tag.className = "";
    }

    var header_tag = document.getElementById("header");
    if (header_tag.className === "") {
        header_tag.className += "light-mode";
    } else {
        header_tag.className = "";
    }

    var a_tag = document.getElementById("a");
    if (a_tag.className === "") {
        a_tag.className += "light-mode";
    } else {
        a_tag.className = "";
    }

    var h1_tag = document.getElementById("h1");
    if (h1_tag.className === "") {
        h1_tag.className += "light-mode";
    } else {
        h1_tag.className = "";
    }

    var h2_tag = document.getElementById("h2");
    if (h2_tag.className === "") {
        h2_tag.className += "light-mode";
    } else {
        h2_tag.className = "";
    }

    var h3_tag = document.getElementById("h3");
    if (h3_tag.className === "") {
        h3_tag.className += "light-mode";
    } else {
        h3_tag.className = "";
    }

    var h6_tag = document.getElementById("h6");
    if (h6_tag.className === "") {
        h6_tag.className += "light-mode";
    } else {
        h6_tag.className = "";
    }

    var footer_tag = document.getElementById("footer");
    if (footer_tag.className === "") {
        footer_tag.className += "light-mode";
    } else {
        footer_tag.className = "";
    }
}