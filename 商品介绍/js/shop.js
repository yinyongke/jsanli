window.onload=function(){
	var show=document.getElementById("show-up");
	var img=document.getElementsByTagName("img");
	for (var i=0;i<img.length;i++) {
		(function(i){
			img[i].onmouseover=function(){
				show.style.backgroundImage="url(img/0"+(i+1)+"big.jpg)"
			}
		})(i)
	}
}
