function move( x ) {

  var width = 1;
  var id = setInterval(frame, 10);
  if (x==="html") 
    { 
      var end = 80;
      var elem = document.getElementById("myBar1");
      elem.style.background="#F16529";
    }
  else if (x==="css")
   {
      var end = 75;
      var elem = document.getElementById("myBar2");
      elem.style.background="#0170BA";}
  else if (x==="javast")
   {
      var end = 70;
      var elem = document.getElementById("myBar3");
      elem.style.background="#F7DF1E";}
  else if (x==="bootst") 
    {
      var end = 70;
      var elem = document.getElementById("myBar4");
      elem.style.background="#5B4282";}
  else if (x==="react") 
    { var end = 50;
      var elem = document.getElementById("myBar5");
      elem.style.background="#53D2FA";}
  function frame() {
    if (width >= end) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
} 