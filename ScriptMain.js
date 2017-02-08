function move() {
  var elem = document.getElementById("myBar");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("demo").innerHTML = width * 1  + '%';
    }
  }
     function moveRight(){
                var imgObj = null;
                imgObj = document.getElementById('eksLogo');
                imgObj.style.position= 'relative'; 
                imgObj.style.left = '0px'; 
                imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
            }
            
}



            
         
               
        
           
          