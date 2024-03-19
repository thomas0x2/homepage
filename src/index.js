function showDropdown() {
    var elem = document.getElementById("menuDropdown");
    if (elem.classList.contains("hidden")) {
        elem.classList.remove("hidden");
    }
    else {
        elem.classList.add("hidden")
    }
}