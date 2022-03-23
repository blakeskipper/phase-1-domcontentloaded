document.addEventListener("DOMContentLoaded", function () {
    console.log("The Dom Has Loaded");
    document.getElementById('text').textContent = 'This is really cool!';    

});

console.log(
    "This console.log() fires when index.js loads 0before DOMContentLoaded is triggered"
);
