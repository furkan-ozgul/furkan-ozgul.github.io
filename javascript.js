function hesaplama(){
    var s1=Number(document.getElementById("fuel").value);
    var s2=Number(document.getElementById("emusyon").value);

    var sonuc = s1 * s2;
    document.getElementById("Sonuc").innerHTML="Sonuç : "+sonuc+' (kg.CO2)';
}


function myFunction() {
    var txt;
    if (confirm("You will be redirected to another site !")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }

  $(document).ready(function() {
    var front = document.getElementsByClassName("front");
    var back = document.getElementsByClassName("back");
  
    var highest = 0;
    var absoluteSide = "";
  
    for (var i = 0; i < front.length; i++) {
      if (front[i].offsetHeight > back[i].offsetHeight) {
        if (front[i].offsetHeight > highest) {
          highest = front[i].offsetHeight;
          absoluteSide = ".front";
        }
      } else if (back[i].offsetHeight > highest) {
        highest = back[i].offsetHeight;
        absoluteSide = ".back";
      }
    }
    $(".front").css("height", highest);
    $(".back").css("height", highest);
    $(absoluteSide).css("position", "absolute");
  });