
const files = ["assets/IMG_7392.jpg", "assets/IMG_7393.jpg", "assets/IMG_7394.jpg", "assets/IMG_7395.jpg"];
const filesLength = files.length
const range = 50

function handleOrientation(e){

  const gamma = Math.min(Math.max(e.gamma + range/2, 0), range);
  
  
  // console.log(gamma);

  const index = Math.min(Math.floor(gamma/(range/filesLength)), filesLength-1);

  console.log(index);

  document.getElementById("img").src = files[index];

}

async function requestDeviceOrientation() {

  document.getElementById("information").innerHTML = "requesting";
  if(typeof DeviceOrientationEvent != 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function'){

    document.getElementById("information").innerHTML = "requesting, ios ?";
    try{
      const permissionState = await DeviceOrientationEvent.requestPermission()
      document.getElementById("information").innerHTML = "requesting, ios 1 ?";
      if(permissionState === 'granted'){
        document.getElementById("information").innerHTML = "requesting, ios ok";
        window.addEventListener('deviceorientation', handleOrientation)
      }
    }catch(error){
      console.error(error)
      document.getElementById("information").innerHTML = "requesting, ios :((";
    }
  }else if('DeviceOrientationEvent' in window){
    window.addEventListener('deviceorientation', handleOrientation)
    document.getElementById("information").innerHTML = "requesting, easy";
  }else{
    alert('not supported')
    document.getElementById("information").innerHTML = "not supported";
  }
}


let container = document.querySelector(".container");

let icon = document.querySelector("i");

function handleDoubleClick(){
  console.log("segesr")
  icon.style.transform = "translate(-50%,50%) scale(1)";
  icon.style.opacity = 0.8;
  icon.style.color = "red";
  setTimeout(function () {
    icon.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    icon.style.transform = "translate(-50%,50%) scale(0)";
  }, 1000);
  
}