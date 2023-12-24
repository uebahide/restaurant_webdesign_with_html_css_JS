document.addEventListener('DOMContentLoaded', function() {
  const style = localStorage.getItem('style');
  if(style === null){
    document.getElementById('stylesheet').href = "style_light_mode.css";
  }else{
    document.getElementById('stylesheet').href = style;
    if(style.includes("dark")){
      document.getElementById('setting').innerText = "light_mode";
    }
  }

  const size = localStorage.getItem('size');
  if(size !== null){
    document.body.style.setProperty('font-size', size, 'important');
  }
});

function saveSize(size){
  localStorage.setItem('size', size);
}

function bigger(){
  var width = window.innerWidth;
  var size = '18px';

  if (width > 1200) {
    size = '30px';
  } else if(width > 600){
    size = '25px';
  } 

  document.body.style.setProperty('font-size', size, 'important');
  
  saveSize(size);
}
function smaller(){
  document.body.style.setProperty('font-size', '18px', 'important');
  saveSize('18px');
}

function saveStyle(style){
  localStorage.setItem('style', style);
}

function changeMode() {
  const mode_setting = document.getElementById("setting");
  const styleSheet = document.getElementById("stylesheet");

  if (styleSheet.href.includes("style_light_mode.css")) {
    styleSheet.href = "style_dark_mode.css";
    mode_setting.innerText = "light_mode"
  } else if (styleSheet.href.includes("style_dark_mode.css")) {
    styleSheet.href = "style_light_mode.css";
    mode_setting.innerText = "dark_mode"
  }

  saveStyle(styleSheet.href);

  const size = localStorage.getItem('size');
  if(size !== null){
    document.body.style.setProperty('font-size', size, 'important');
  }
}


