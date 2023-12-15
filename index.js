
// const files = ["assets/gif/IMG_7392.jpg", "assets/gif/IMG_7393.jpg", "assets/gif/IMG_7394.jpg", "assets/gif/IMG_7395.jpg"];
// const filesLength = files.length
// const range = 50

// function handleOrientation(e){

//   const gamma = Math.min(Math.max(e.gamma + range/2, 0), range);
  
  
//   // console.log(gamma);

//   const index = Math.min(Math.floor(gamma/(range/filesLength)), filesLength-1);

//   console.log(index);

//   document.getElementById("gif").src = files[index];

// }

async function requestDeviceOrientation() {

  console.log("requesting")
  if(typeof DeviceOrientationEvent != 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function'){

    console.log("requesting ios ?");;
    try{
      const permissionState = await DeviceOrientationEvent.requestPermission()
      console.log("requesting ios 1");
      if(permissionState === 'granted'){
        console.log("ios ok");
        window.addEventListener('deviceorientation', handleOrientation)
      }
    }catch(error){
      console.error(error)
      console.log("requesting ios :(((");
    }
  }else if('DeviceOrientationEvent' in window){
    window.addEventListener('deviceorientation', handleOrientation)
    console.log("requesting easy");
  }else{
    alert('not supported')
    console.log("not supported");
  }
}
function handleDoubleClick(event){

  var section = event.currentTarget;

  if (!event.target.closest('.ig_post_content')) {
    return
  }

  var postAction = section.querySelector('.ig_post_action');
  if (postAction) {
    var heartIcon = postAction.querySelector('.fa-heart-o');
    if (heartIcon) {
      heartIcon.classList.remove('fa-heart-o');
      heartIcon.classList.add('fa-heart');
    }
  }

  var icon = section.querySelector("i")
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

function like(icon) {
  var liked = icon.classList.contains('fa-heart')
  if (liked) {
    icon.classList.remove('fa-heart');
    icon.classList.add('fa-heart-o');
  } else {
    icon.classList.remove('fa-heart-o');
    icon.classList.add('fa-heart');
  }
}