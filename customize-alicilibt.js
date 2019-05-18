// let floatingWindow = document.getElementById("LELE_ShowDIV_UNIONtop");
// floatingWindow.parentNode.removeChild(floatingWindow);

// console.log("hhhh");
// console.log(document);

// console.log(JSON.stringify(document));

// let floatingWindow = document.getElementsByClassName("wrap-content");
// //document.body.innerHTML = floatingWindow.outerHTML;
// console.log(floatingWindow);

// var markup = document.documentElement.innerHTML;
// console.log(markup);

document.getElementsByTagName("html")[0].style.display = "none";
document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded");
    // PUT YOUR CODE HERE.
    //document.body.textContent = "Changed this!";
    document.getElementsByTagName("html")[0].style.display = "block";

    let floatingWindow = document.getElementById("LELE_ShowDIV_UNIONtop");
    console.log(floatingWindow);
    floatingWindow.parentNode.removeChild(floatingWindow);

}

// document.onreadystatechange = function () {
//     if (document.readyState === 'interactive') {
//         console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
//         let floatingWindow = document.getElementById("LELE_ShowDIV_UNIONtop");
//         console.log(floatingWindow);
//         floatingWindow.parentNode.removeChild(floatingWindow);
//     }
// }

// document.getElementsByTagName("html")[0].style.display = "none";

// document.onload = function () {

//     let floatingWindow = document.getElementById("LELE_ShowDIV_UNIONtop");
//     console.log(floatingWindow);
//     floatingWindow.parentNode.removeChild(floatingWindow);

//     document.getElementsByTagName("html")[0].style.display = "block"; //to show it all back again

// }