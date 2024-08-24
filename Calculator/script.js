let input = document.getElementById("inputbox");
let btn=document.querySelectorAll("button");
let arr=Array.from(btn);
let string="";
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        // console.log("ok nasha");
        // string = button.innerHTML;
        // console.log(string);
        
        if(e.target.innerHTML=="="){
            result=eval(string);
            input.value=result;
            string="";
        }
        else if(e.target.innerHTML=="AC"){
            input.value="";
            string="";
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        } 
    })
})
