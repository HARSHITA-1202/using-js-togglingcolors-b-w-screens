let mdbtn=document.querySelector("button");
let body=document.querySelector("body");
let currmode="light";

mdbtn.addEventListener("click",()=>{
if(currmode=="light"){
    currmode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
}
else
{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");}

});