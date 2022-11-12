
loaded(()=>{
    current=new finder("#home")
    home=current
    Alertism({
        alertText:"this is a simple browser ui i tried to make a few weeks ago, try to click everything because somethings actually work :)",
        alertHeading:"browserUI"
        ,theme:"light-neumorphism"
        ,animation:"left"
        ,btnText:"let me see"
    })
})



oodacity=2
scamExist=false

function openMenu(r){
new finder(r,true).toggleClass("active")
    new finder(".popup").toggleClass("acti")
if(scamExist!=true){    
    scam=create("div")
scam.addClass("wrap")
scamExist=true
}
    
  scam.checkFor("click",(e)=>{
      if(e.target==scam.org()){
          
          new finder(r,true).removeClass("active")
    new finder(".popup").removeClass("acti")
    
     oodacity+=1
  
  if(scamExist && oodacity%2==0){
      scam.org().remove()
      scamExist=false
  }
  
          
      }
  })
  
  oodacity+=1
  
  if(scamExist && oodacity%2==0){
      scam.org().remove()
      scamExist=false
  }
  
  
}



function openFeed(){
timer(()=>{
    feed=new finder("#feed")
    current.hide()
    feed.show()
    current=feed
},0.5)
}

function openHome(){
    if(current!=home){
    timer(()=>{
        current.hide()
        home.show()
        current=home
    },0.5)    
    }
}

search=()=>{}


