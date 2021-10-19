function darkMode() {
    let drk = document.body
    if(drk.classList.contains("dark")) {
        drk.classList.remove("dark");
        document.querySelector("#bttn").innerHTML = "Dark Mode";
    }
    else{
    drk.classList.add("dark");
    document.querySelector("#bttn").innerHTML = "Light Mode";
    }
}


