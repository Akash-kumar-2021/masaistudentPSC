
let form =  document.getElementById("form").addEventListener("click",myFunction) ;
function myFunction(evet)
{
 
     studentArr = JSON.parse(localStorage.getItem("Student")) || []
    evet.preventDefault();
    // console.log("some click me");
   
  let  name = document.getElementById("name").value ;
  let  course = document.getElementById("course").value ;
  let  unit = document.getElementById("unit").value ;
  let  batch = document.getElementById("batch").value ;
  let imageUrl = document.getElementById("imageUrl").value ;
  imageUrl.src = imageUrl ;
   
 let studentObj = {
     name:name,
     course:course,
     unit:unit,
     batch:batch,
     imageUrl: imageUrl,

 }
    // console.log(name,unit,batch,imageUrl);
    studentArr.push(studentObj);

    localStorage.setItem("Student",JSON.stringify(studentArr));
    document.getElementById("form").value = null;
}