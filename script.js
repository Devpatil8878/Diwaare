const inputW = document.querySelector("#wcount");
const H = document.querySelector("#wheight");
const container = document.querySelector("#container");
const result = document.querySelector("#result");

const handlesubmit = () => {
    container.innerHTML = ''; 
    result.innerHTML = ''; 

    const inputH = H.value.split('#').map(Number); 

    let left = 1;
    let right = 1;
    let lval = inputH[0];  
    let rval = inputH[inputH.length - 1];  

    if (parseInt(inputW.value) !== inputH.length) {
        alert("The number of heights does not match the number of walls.");
        return;
    }

    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.paddingBottom = "20px";
    container.style.paddingTop = "20px";

    result.style.display = "flex";
    result.style.justifyContent = "center";
    result.style.paddingBottom = "20px";
    result.style.paddingTop = "20px";

    for (let i = 0; i < parseInt(inputW.value); i++) {
        const walls = document.createElement("div");
        walls.style.width = "30px"; 
        walls.style.height = "500px"; 
        walls.style.display = "inline-block";
        walls.style.position = "relative"; 
        walls.style.margin = "0 5px"; 
        walls.style.textAlign = "center"; 

        const height = document.createElement("span");
        height.innerHTML = inputH[i];
        height.style.position = "absolute";
        height.style.bottom = "-20px"; 
        height.style.left = "50%";
        height.style.color = "white";
        height.style.transform = "translateX(-50%)"; 

        const wall = document.createElement("div");
        wall.style.height = `${inputH[i] * 4}px`; 
        wall.style.width = "100%";
        wall.style.backgroundColor = 'white';
        wall.style.position = "absolute";
        wall.style.bottom = "0"; 

        walls.appendChild(height);
        walls.appendChild(wall);
        container.appendChild(walls);
    }

    for (let i = 1; i < inputH.length; i++) {
        if (inputH[i] > lval) {
            left++;
            lval = inputH[i]; 
        }
    }

    for (let i = inputH.length - 2; i >= 0; i--) {
        if (inputH[i] > rval) {
            right++;
            rval = inputH[i]; 
        }
    }

    result.style.color = "white";
    result.innerHTML = `Visible from Left: ${left} Visible from Right: ${right}`;
};

document.querySelector("#submitButton").addEventListener("click", handlesubmit);
