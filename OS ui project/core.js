/* js is complicated to understand since it is using dominity 😐 */

/*design copyrights @
©©©©©©©©©atoms19 */
 
alert("this will be my last code on sl 👋, moving away from webdev for now")


iter=0

class AppWindow{
    
    constructor(obj){
    if(obj!=undefined){
    
        if(obj.width!=undefined){
            this.width=obj.width
        }else{
            this.width="70%"
        }
        
        if(obj.height!=undefined){
            this.height=obj.height
        }else{
            this.height="300px"
        }
        
        if(obj.x!=undefined){
            this.x=obj.x
        }else{
            this.x=20+"px"
        }
        
        if(obj.y!=undefined){
            this.y=obj.y
        }else{
            this.y=20+"px"
        }
        
        if(obj.maxWidth!=undefined){
            this.maxWidth=obj.maxWidth
        }else{
            this.maxWidth="100%"
        }
        
        if(obj.maxHeight!=undefined){
            this.maxHeight=obj.maxHeight
        }else{
            this.maxHeight=""
        }
        
        if(obj.title!=undefined){
            this.title=obj.title
        }else{
            this.title="new window"
        }
        
        if(obj.fullScreen!=undefined){
            this.fullScreen=obj.fullScrern
        }else{
            this.fullScreen=false
        }
        
        }
        }
        
        create(){
    this.app=create("section").addClass("app")
    this.nav=create("header").addClass("app-head")
    this.nav.addChild(create("div").addClass("left").addChild(create("div").addClass("app-title").txt(this.title).org).org)
    
    this.navMenu=create("div").addClass("right")
    this.sizeBtn=create("span").addClass("app-btn")
    this.navMenu.addChild(this.sizeBtn.org)
    
this.normalBtn=create("span").addClass("app-btn")
    this.navMenu.addChild(this.normalBtn.org)
    
this.closeBtn=create("span").addClass("app-btn")
    this.navMenu.addChild(this.closeBtn.org)
    
this.nav.addChild(this.navMenu.org)

this.content=create("div").addClass("app-content")
this.app.addChild(this.nav.org)
this.app.addChild(this.content.org)
    
        this.nav.checkFor("touchstart",()=>{
          this.app.style("zIndex","500")
        })
        
this.nav.checkFor("touchmove",(e)=>{

if(!this.fullScreen){
          this.app.style({
              top:e.touches[0].clientY+"px",
                    left:e.touches[0].clientX-(parseInt(this.nav.style("width"))/2)+"px"
          })
          
          if(e.touches[0].clientY<0){
              this.maximize()
          }
          
          if( e.touches[0].clientY+(parseInt(this.app.style("height"))/2)+10>window.innerHeight-parseInt(new finder(".taskbar").style("height"))){
              this.close()
          }
          
          
        }else{
            if(e.touches[0].clientY>0){
              this.minimize()
          }
          
        }
          
        })
        
        this.nav.checkFor("touchend",()=>{
          this.app.style("zIndex",2+iter+"")
          iter+=1
        })
        
        this.closeBtn.checkFor("click",()=>{
            this.close()
        })
        
   this.sizeBtn.checkFor("click",()=>{
   if(!this.fullScreen){
            this.maximize()
        }else if(this.fullScreen){
            this.minimize()
        }
        })
        
        
        this.app.style({
            top:this.y+"",
            left:this.x+""
        })
             
        
        }
        
        close(){
            this.app.style({
                animation:"closeAnim 0.5s forwards"
            })
            
            timer(()=>{
                this.app.hide()
                
            },0.55)
        }
        
        
        maximize(){
        
       this.app.style({
                animation:"scaleAnim 0.25s"
            })
            
            timer(()=>{
                this.maxHeight=window.innerHeight-parseInt(this.nav.style("height"))+"px"
    
    this.app.style({
        width:this.maxWidth 
        ,top:"0"
        ,left:"0"
        ,borderRadius:"0px"
        
    }).child(1).style({
        height:this.maxHeight
    })
    
    this.sizeBtn.style("background","var(--warning)")
    
    this.fullScreen=true
                
            },0.25) 
        }
        
        minimize(){
        
        this.app.style({
                animation:"scaleAnimR 0.25s"
            })
            
            timer(()=>{
                this.app.style({
     width:this.width,
     left:this.x,
     top:this.y
     ,borderRadius:"0.5rem"
 }).child(1).style({
     height:this.height,
     
 })    
 
 this.sizeBtn.style("background","var(--success)")
    
 
 this.fullScreen=false
                
            },0.25)
        
            
        
        }
        
    
    
    
}

loaded(()=>{
for(i of range(1,3)){  
    new AppWindow({
x:random(40/100*window.innerWidth,0)+"px",
y:random(50/100*window.innerHeight,0)+"px",
title:random(["window","compiler","unnamed app","terminal","minecraft","google","firefox"])   
    }).create()
    dt=new Date()
    
    
   currentTime=dt.getHours()+":"+dt.getMinutes()+"am"
   
   if(dt.getHours()>12){
       currentTime=(dt.getHours()-12)+":"+dt.getMinutes()+"pm"
   }
    
   setInterval(()=>{
   new finder("#time").txt(
       currentTime
   )
   
   
   },1000)



}

homeOpened=false
quicktoolsOpened=false
new finder("#home-btn").checkFor("click",toggleHome)

new finder("#quick-btn").checkFor("click",toggleQuicktools)



})

function toggleHome(){
    
if(!homeOpened){
    new finder(".home").style({
        transform:"translateY(0)"
    })
    homeOpened=true
    
    
}else{
    new finder(".home").style({
        transform:"translateY(150%)"
    })
    homeOpened=false
    
    
}

}

function toggleQuicktools(){
    
if(!quicktoolsOpened){
    new finder(".quicktools").style({
        transform:"translateY(0) translateX(50%)"
    })
    quicktoolsOpened=true
    
    
}else{
    new finder(".quicktools").style({
        transform:"translateY(150%) translateX(50%)"
    })
    quicktoolsOpened=false
    
    
}

}






finder.prototype.checkHold=function(timeout,callback){
    this.isHolding=false
    this.checkFor("touchstart",()=>{
        this.isHolding=true
        this.timeoutId=setTimeout(()=>{
            if(this.isHolding){
                callback()
            }
        },timeout)
    })
    
    this.checkFor("touchend",()=>{
        this.isHolding=false
        clearTimeout(this.timeOutId)
    })
}


