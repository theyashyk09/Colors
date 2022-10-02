// Hex to Rgb

function hexConvbtn() {
  let hexColor = document.getElementById("hexCInp").value;

  let convertedColor = `rgb(${("0x" + hexColor[1] + hexColor[2]) | 0}, ${
    ("0x" + hexColor[3] + hexColor[4]) | 0
  }, ${("0x" + hexColor[5] + hexColor[6]) | 0})`;

  document.getElementById("hexCOut").textContent = convertedColor;
}

// Rgb to Hex

function rgbConvbtn() {
  let rC = document.getElementById("RCInput").value;
  let gC = document.getElementById("GCInput").value;
  let bC = document.getElementById("BCInput").value;

  function decimalToHex(val) {
    let hexV = Number(val).toString(16);
    if (hexV.length < 2) {
      hexV = "0" + hexV;
    }
    return hexV;
  }

  function rgbToHex(r, g, b) {
    let redV = decimalToHex(r);
    let greenV = decimalToHex(g);
    let blueV = decimalToHex(b);
    return "#" + redV + greenV + blueV;
  }

  document.getElementById("rgbCOut").textContent = rgbToHex(rC, gC, bC);
}

// Range Selector

function RangeSelector() {
  let rV = document.getElementById("RrInput").value;
  let gV = document.getElementById("GrInput").value;
  let bV = document.getElementById("BrInput").value;

  let rangeBox = document.getElementById("range-color-box");

  document.getElementById("rangeCopy").textContent = `rgb(${rV},${gV},${bV})`;
  rangeBox.style.backgroundColor = `rgb(${rV},${gV},${bV})`;
}

// Rgb Color Finder

function RGBFindbtn() {
  let red = document.getElementById("RInput").value;
  let green = document.getElementById("GInput").value;
  let blue = document.getElementById("BInput").value;

  document.getElementById(
    "rgb-color-box"
  ).style.backgroundColor = `rgb(${red},${green},${blue})`;
}

// Hex Color Finder

function hexFindbtn() {
  let hexInput = document.getElementById("hexInput").value;
  document.getElementById("color-box").style.backgroundColor = hexInput;
}

// Random Color Picker

function randompickerbtn() {
  let newColor = Math.floor(Math.random() * 16777215).toString(16);
  let bg = document.getElementById("randomValuePara");
  if (newColor.length == 5) {
    newColor = "#" + "0" + newColor;
  } else {
    newColor = "#" + newColor;
  }

  bg.textContent = newColor;
  document.getElementById("randomPicker").style.backgroundColor = newColor;
}

// Copy Color Code

function copyIt() {
  let colorValue = document.getElementById("randomValuePara").textContent;
  navigator.clipboard.writeText(colorValue);

  let copied = document.getElementById("copied");
  copied.style.display = "block";

  setTimeout(() => {
    copied.style.display = "block";
  }, 100);

  setTimeout(() => {
    copied.style.display = "none";
  }, 800);
}

function copyItOne() {
  let colorValue = document.getElementById("hexCOut").textContent;
  navigator.clipboard.writeText(colorValue);

  let copied = document.getElementById("copied-1");
  copied.style.display = "block";

  if (!document.getElementById("hexCOut").textContent) {
    document.getElementById("copied-1").textContent = "";
  } else {
    document.getElementById("copied-1").textContent = "Copied ✔";
  }

  setTimeout(() => {
    copied.style.display = "block";
  }, 100);

  setTimeout(() => {
    copied.style.display = "none";
    document.getElementById("hexCInp").value = "";
    document.getElementById("hexCOut").textContent = "";
  }, 800);
}

function copyItTwo() {
  let colorValue = document.getElementById("rgbCOut").textContent;
  navigator.clipboard.writeText(colorValue);

  let copied = document.getElementById("copied-2");
  copied.style.display = "block";

  if (!document.getElementById("rgbCOut").textContent) {
    document.getElementById("copied-2").textContent = "";
  } else {
    document.getElementById("copied-2").textContent = "Copied ✔";
  }

  setTimeout(() => {
    copied.style.display = "block";
  }, 100);

  setTimeout(() => {
    copied.style.display = "none";
    document.getElementById("RCInput").value = "";
    document.getElementById("GCInput").value = "";
    document.getElementById("BCInput").value = "";
    document.getElementById("rgbCOut").textContent = "";
  }, 800);
}

function copyItLast() {
  //   document.getElementById("rangeCopy").style.display = "block";
  let colorValue = document.getElementById("rangeCopy").textContent;
  navigator.clipboard.writeText(colorValue);

  let copied = document.getElementById("copied-3");
  copied.style.display = "block";

  setTimeout(() => {
    copied.style.display = "block";
  }, 100);

  setTimeout(() => {
    copied.style.display = "none";
    document.getElementById("hexCInp").value = "";
    document.getElementById("hexCOut").textContent = "";
  }, 800);
}
