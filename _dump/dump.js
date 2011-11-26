
function sh(source, target){
    if (document.getElementById(target).style.display == "none"){
        document.getElementById(source).style.display= "none";
        document.getElementById(target).style.display= "inherit";
    } else {
        document.getElementById(source).style.display= "inherit";
        document.getElementById(target).style.display= "none";
    }        
}
