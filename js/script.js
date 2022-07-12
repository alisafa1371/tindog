var test = document.createElement("div")
test.className = "hidden d-none"

document.head.appendChild(test)
var cssLoaded = window.getComputedStyle(test).display === "none"
document.head.removeChild(test)

if (!cssLoaded) {
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "lib/bootstrap.min.css";

    document.head.appendChild(link);
}



if (!window.bootstrap) { // the bootstrap object is not present
        var newScript = document.createElement("script");
        newScript.setAttribute("src", "lib/bootstrap.bundle.min.js");
        document.getElementsByTagName("head")[0].appendChild(newScript);
}


