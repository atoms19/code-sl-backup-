/* PDF READER APP CLONE


idk wether it is convincing or not but i made this app as close to the real one as possible for me ;)

only some buttons work btw :/ didnt get time to make everything

and the scroll bar is half broken 😂

credits-

libraries used

riplet.js-for ripples
dominity v4-dom manipulation (me)


time taken: approximately 3-4 hrs 


-atoms~⚛


*/
/*
alert(`buttons that work 
-search button
-menu button
-edit button(floating)
-drive button({save})

`)

alert(`pls comment any details i missed from the orginal app (ui based), i'll give you like storm as reward 😉`)
*/



//messy javascript not clean code😣

loaded(()=>{
    
    file=new finder("#file").hide()
    inputInfo=new finder(".right-e").hide()
    
    app2=new finder("#app2").hide()
    
    dropAct=false
    
    timer(()=>{
        file.show()
        new finder(".loader").hide()
        
        new finder(".loading").hide()
        si.show()
        sc.show()
        fb.show()
        
        
    },4)
    
    
    fb=new finder(".floating-btn").hide()
    
    
    info={
        location:1,
        toatal:0
    }
    
    new finderAll(".page").forEach((s)=>{
        info.toatal+=1
    })
    
    started=false
    sc=new finder(".scroll").checkFor("touchstart",()=>{
        started=true
    }).checkFor("touchmove",(e)=>{
       
       if(started){ 
       window.scrollTo(0,e.touches[0].clientY)
       }
    }).checkFor("touchend",(e)=>{
        started=false
        
    })
    
    
    si=new finder(".scroll-info").keyWords(info)
   
    

setInterval(resetScroll,1)


info.toatal++

si.hide()
sc.hide()


fb.checkFor("click",()=>{
new finderAll(".page").forEach((p)=>{
    if(p.hasAttr("contenteditable")){
        p.removeAttr("contenteditable")
    }else{
        p.attr("contenteditable","")
    }
    })
})


new finder(window,true).checkFor("scroll",()=>{
    if(dropAct){
    
    new finder(".dropdown").style("opacity","0")
    
    timer(()=>{
        new finder(".dropdown").style({
            transform:"translateY(-600px) translateX(600px)"
        })},0.5)
        
        dropAct=false
    }
})


new finder("body").checkFor("click",(e)=>{



if(e.target.tagName!="SPAN"){

if(e.target.tagName!="LI"){
       new finder(".dropdown").style({
            opacity:"0"})
            
             
    timer(()=>{
        new finder(".dropdown").style({
            transform:"translateY(-600px) translateX(600px)"
        })},0.5)
        
        dropAct=false

}


}})

})

function resetScroll(){

wh=document.body.scrollHeight/window.innerHeight


sc.style({
    top:window.pageYOffset/wh+100+"px"
})

si.style({
    top:window.pageYOffset/wh+120+"px"
})

si.txt(Math.floor((window.pageYOffset/wh)/100)+1+"/"+info.toatal)



}

function readd(st){

    if(st.val().length>0){
        inputInfo.show()
        inputInfo.child(0).txt("0 of 0")
    }else{
        inputInfo.hide()
    }
}

function hideDrive(){
   esr= new finder("#app2").style({
        transform:"translateY(5000px)"
    })
    
    timer(()=>{
        
        esr.hide()
        new finder("#app").show()
        
    },0.2)
}

attempt=true
function saveError(s){
if(attempt){
    s.style({
        color:"#DB4437"
    }).txt("unable to save")
    attempt=false
}
}
