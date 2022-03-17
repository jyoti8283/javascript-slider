// var image =["1.jpg","2.jpg","3.jpg","4.jpg","6.jpg","7.jpg","8.jpg" ,"9.jpg"];
// var i=0;
// function slides(){
//     document.getElementById("img").src = image[i]
//     if(i<(image.length-1))
//     i++;
//     else
//     i=0;
// }
// setInterval(slides,2000)
var prev = document.getElementById("previous");
var next = document.getElementById("next");
var image = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];
var i = 0;
next.addEventListener("click", function () {
  if (i < image.length - 1) i++;
  else i = 0;
  document.getElementById("img").src = image[i];
});
prev.addEventListener("click", function () {
//     if (i < image.length - 1) i--;
//   else i = 0;
i--;
if(i<0){
    i = image.length-1;
}
  document.getElementById("img").src = image[i];
})

