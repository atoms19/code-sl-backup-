addEventListener("DOMContentLoaded",setup);

colorMain="black"
undoStack=[]
function setup(){
  canvas=document.getElementById("whiteboard")
  canvas.width=window.innerWidth
  canvas.height=window.innerHeight-80
  ctx=canvas.getContext("2d")
  ctx.strokeStyle="black"
  ctx.lineJoin="round"
  ctx.lineCap="round"
  ctx.lineWidth=7
  
  drawSetup()
  loadPicker()
  loadElements()
  
}


function loadElements(){
    indicator=document.getElementById("sz-indication")
  thicSlider=document.getElementById("sldr")
  
brushMenu=document.querySelector(".brush-menu")
}

function drawSetup(){
  
  window.addEventListener("touchstart",drawStart)
  window.addEventListener("touchmove",drawMove)
  window.addEventListener("touchend",drawEnd)
}

isDrawing=false
allowDraw=true

function drawStart(e){

if(allowDraw){
 ctx.beginPath()
 ctx.moveTo(e.touches[0].clientX,e.touches[0].clientY)
 isDrawing=true
 drawMove(e)
 }
}

function drawMove(e){
 if(isDrawing){
   ctx.lineTo(e.touches[0].clientX,e.touches[0].clientY)
   ctx.stroke()
 }
}

function drawEnd(e){
   if(isDrawing){
   undoStack.push(canvas.toDataURL())
   isDrawing=false
   }else{
       isDrawing=false
   }
   
   
}

//canvas clearing

function clearCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.closePath()
}


function loadPicker(){
    



const pickr = Pickr.create({
    el: '#color-picker',
    theme: 'monolith', // or 'monolith', or 'nano'

    swatches: [],

    components: {

        // Main components
        preview:true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input:true,
            save: true,
            
        }
    }
});

pickr.on('change', (color,source, instance) => {



ctx.strokeStyle=color.toRGBA()
pickr.applyColor(true)
});


previous=undefined

pickr.on("save",(color,source,instance)=>{
    if(source!="swatch"){
    
    if(previous){
        if(previous!=color.toRGBA().toString()){
            pickr.addSwatch(color.toRGBA().toString())
        }else{
            
        }
        
    }else{
        pickr.addSwatch(color.toRGBA().toString())
    }
    previous=color.toRGBA().toString()
}


})


pickr.on("show",()=>{
    allowDraw=false
})

pickr.on("hide",()=>{
    allowDraw=true
})





}



function updateWidth(){

    indicator.style.width=thicSlider.value+"px"
    
indicator.style.height=thicSlider.value+"px"

indicator.style.background=colorMain

ctx.lineWidth=thicSlider.value

}
bmExists=false

function toggleBrushMenu(){

if(bmExists==true){
    brushMenu.classList.add("hide")
    allowDraw=true
    bmExists=false
    
}else if(bmExists!=true){
    brushMenu.classList.remove("hide")
    allowDraw=false
    bmExists=true
    
}



}



i=2
function undo(){
clearCanvas()
    img=document.createElement("img")
    img.src=undoStack[undoStack.length-2]
    ctx.drawImage(img,0,0,canvas.width,canvas.height,0,0,canvas.width,canvas.height)

}





