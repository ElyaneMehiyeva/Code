var input = document.getElementById("inpId");
input.addEventListener("keydown",function(com){
    if(!isNaN(com.key)){
        com.preventDefault()
    }
})