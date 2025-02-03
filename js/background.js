const imges =["1.jpg","2.jpg","4.jpg","5.jpg"];

  const chosenImage = imges[Math.floor(Math.random()*imges.length)];
  document.body.style.backgroundColor = "white";
  const url = "img/"+chosenImage;
  document.body.style.backgroundImage = "url('" + url + "')";