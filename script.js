function darkMode() {
    let drk = document.body;
    if(drk.classList.contains("dark")) {
        drk.classList.remove("dark");
        document.querySelector("#bttn").innerHTML = "Dark Mode";
        setDark();
    }
    else{
    drk.classList.add("dark");
    document.querySelector("#bttn").innerHTML = "Light Mode";
    setDark();
    }
}
function setDark(){
    let set = document.getElementsByClassName("dark");
    if( set.length > 0){
        localStorage.setItem("mode", "dark");       
    }
    else{
        localStorage.setItem("mode", "light");
    }
}
let sve = localStorage.getItem("mode");
function load(){
    if(sve === "dark") {
       darkMode();
    }
}
window.onload = load();
