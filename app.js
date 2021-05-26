const image="image";
var imgNo =0;
const img=document.querySelector(".img-container img")
function changer()
{

    if(imgNo>=4)
    {
         imgNo=0
         img.src="image"+imgNo+".jpg";
    }
    else
    {
        imgNo++
        img.src="image"+imgNo+".jpg";
    }
     
      
}