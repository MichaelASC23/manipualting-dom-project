// Reference to the elements
let pButton = document.getElementById("p-button");
let pDiv = document.getElementById("p-div");
let imgButton = document.getElementById("img-button");
let imgDiv = document.getElementById("img-div");

// Reference to the Counter Element (Extra Credit)
let pCount = document.getElementById("p-counter");
let imgCount = document.getElementById("img-counter");
let nothingCount = document.getElementById("nothing-counter");

let pscore = 0;
let imgscore = 0;
let nothingscore = 0;

pCount.innerText = "pCount: " + pscore;
imgCount.innerText = "imgCount: " + imgscore;
nothingCount.innerText = "nothingCount: " + nothingscore;


//Paragraph  Button
pButton.onclick = function() {
    //"delete paragraph"
    pDiv.style.display = "block";
    imgDiv.style.display="none";
    nothingDiv.style.display = "none";
    

    // create paragraph element
    let pElement = document.createElement("p");
    pElement.innerText = "Pika Pika Chuuu!";
    pElement.style.fontFamily = "courier new";
    pElement.style.backgroundColor = "gold";

    //adding element to p-div
    pDiv.appendChild(pElement);

    //Counter
    pscore ++;
    pCount.innerText = "pCount: " + pscore
}


//Image Button
imgButton.onclick = function() {
    //"delete paragraph"
    pDiv.style.display ="none";
    nothingDiv.style.display = "none"
    imgDiv.style.display = "block";

    //Create image element
    let imgElement = document.createElement("img");
    imgElement.src = "images/pikachu.png";

    //adding element to imgDiv
    imgElement.style.width = "200px";
    imgDiv.appendChild(imgElement);

    //Counter
    imgscore ++;
    imgCount.innerText = "imgCount: " + imgscore;
    
}

//Extra Credit
// Do nothing Button
let nothingButton = document.getElementById("nothing-button");
let nothingDiv = document.getElementById("nothing-div");

nothingButton.onclick = function() {
    //"delete paragraph or image"
    pDiv.style.display = "none";
    imgDiv.style.display = "none";
    nothingDiv.style.display ="block"

    // Number Counter
    nothingscore ++;
    nothingCount.innerText = "nothingCount: " + nothingscore;
    
}
