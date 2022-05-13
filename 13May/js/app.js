var img = document.querySelectorAll('imgFruit')

img.forEach(img => {
    img.ondragstart = function (e) {     
        e.dataTransfer.setData('imgFruit',this.classList)
    }
})
let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.ondragover = function (el) {
        el.preventDefault()
    }
    box.ondrop = function (e) {  
        var img =document.querySelectorAll(e.dataTransfer.getData('imgFruit'))
        box.append(img)
    }
})
