const img = document.querySelector(".row .img")
 
const zoomImage = document.querySelector(".row .result")
img.addEventListener("mousemove",(e) => {
 
    const mouseLeft = e.clientX
    const mouseTop = e.clientY
 
  
    const imgHeight = img.clientHeight
    const imgWidth = img.clientWidth
 

    if(img.hasChildNodes(img.querySelector(".box"))) {
        document.querySelectorAll(".box").forEach(box =>{
            box.remove()
        })
    }

 
   
    const box = document.createElement("div")
    box.setAttribute("class","box")
    const x = e.offsetX / imgWidth
    const y = e.offsetY / imgHeight

    const bgX= -x * (zoomImage.clientWidth - 650)
    const bgY= -y * (zoomImage.clientHeight - 150)
 
    box.style.left = (mouseLeft-60) + "px"
    box.style.top = (mouseTop-60) + "px"
 
     
    zoomImage.style.backgroundPosition = `${bgX}px ${bgY}px`
    img.append(box)
})
img.addEventListener("mouseleave", () => {zoomImage.classList.add("hide"); document.querySelector(".box").remove()})
img.addEventListener("mouseenter", () => {zoomImage.classList.remove("hide")})

 
