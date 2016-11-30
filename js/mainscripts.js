function showInfo(e){
  var a = event.target.id || e.event.target;
  var top = document.getElementsByClassName('toptext');
  document.getElementById('cursiveName').style.display = "none";
  document.getElementById('cursiveName').style.visibility = "hidden";

  document.getElementById("complogo").src = "assets/complogo.png";
  document.getElementById("coglogo").src = "assets/coglogo.png";
  document.getElementById("brainlogo").src = "assets/brainlogo.png";
  document.getElementById("lightbulblogo").src = "assets/lightbulblogo.png";
  document.getElementById("glasseslogo").src = "assets/glasseslogo.png";
  document.getElementById("maglogo").src = "assets/maglogo.png";

  var texts =document.getElementsByClassName('info');
  for(var i = 0; i <texts.length;i++){
    texts[i].style.visibility = "hidden";
    texts[i].style.display = "none";
  }


  if(a == "complogo"){
    document.getElementById(a).src = "assets/complogowhite.png";
    document.getElementById('whoAmI').style.display = "block";
    document.getElementById('whoAmI').style.visibility = "visible";
    top[0].innerHTML = "Who am I?";
  }
  else if(a == "coglogo"){
    document.getElementById(a).src = "assets/coglogowhite.png";
    document.getElementById('goodat').style.display = "block";
    document.getElementById('goodat').style.visibility = "visible";
    top[0].innerHTML = "What am I good at?";

  }
  else if(a == "brainlogo"){
    document.getElementById(a).src = "assets/brainlogowhite.png";
    document.getElementById('iknow').style.display = "block";
    document.getElementById('iknow').style.visibility = "visible";
    top[0].innerHTML = "What do I know?";
  }
  else if(a == "lightbulblogo"){
    document.getElementById(a).src = "assets/lightbulblogowhite.png";
    document.getElementById('whyme').style.display = "block";
    document.getElementById('whyme').style.visibility = "visible";
    top[0].innerHTML = "Why should you choose me?";
  }
  else if(a == "glasseslogo"){
    document.getElementById(a).src = "assets/glasseslogowhite.png";
    document.getElementById('ilike').style.display = "block";
    document.getElementById('ilike').style.visibility = "visible";
    top[0].innerHTML = "What do I like working on?";
  }
  else if(a == "maglogo"){
    document.getElementById(a).src = "assets/maglogowhite.png";
    document.getElementById('knowmore').style.display = "block";
    document.getElementById('knowmore').style.visibility = "visible";
    top[0].innerHTML = "Want to know more?";
  }
}
