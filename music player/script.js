/*credits🎶🎻


info: a music player that can play wierd songs 



libraries used-

pop_alert:for alerts(creator:me)
aw-toast:for toasts(creator:me)

help from-

audio reference from w3schools and mdn

for running the music in the background preview using sl code previewer(creator:arnav)->

https://arnav-kr.github.io/slcodepreview/?q=WwK776Z63Eq7


*/






addEventListener("DOMContentLoaded",()=>{
    cardImg=id("music-img")
cardTitle=id("music-name")
cardArtist=id("music-artist")

setUp()

new Toast("songs wont be loaded since almost all music links are expired","var(--light)",{
    closeDelay:10
})






pop_alert("this app no longer plays music because dropbox share link has expired 🗿",":( ","sad",false,"var(--light)")


});



function playMusic(){
   
   if(current.song.paused){ 
   
   current.song.play().catch((er)=>{

   })
   id("play-btn").innerHTML="pause"
   
   cardImg.style.animation="border-dance infinite 0.7s linear"
   
   }else{
       current.song.pause()

       cardImg.style.animation=""
       id("play-btn").innerHTML="play_arrow"
   }
}

iteraton=0


function playNext(){
if(!current.song.paused){
    current.song.pause()
    cardImg.style.animation=""
    id("play-btn").innerHTML="play_arrow"
    
}
current.song.currentTime=0
    iteraton++
    if(iteraton>musicArray.length-1){
        iteraton=0
    }
    setUpCard(iteraton)
    
}

function playPrev(){
if(!current.song.paused){
    current.song.pause()
    cardImg.style.animation=""
    id("play-btn").innerHTML="play_arrow"
    
}
current.song.currentTime=0
    iteraton--
    if(iteraton<0){
        iteraton=0
    }
    setUpCard(iteraton)
    
    
}



function setUp(){



class Music{
    constructor(obj){
        this.music=obj.music
        this.img=obj.img
        this.name=obj.name
        this.artist=obj.artist
        this.song=new Audio(this.music)
    }
    
}



   giorno=new Music({
       music:"https://dl.dropbox.com/s/ued9qm4h4x5aiqo/jojo%27s%20bizarre%20adventure_golden%20wind%20ost_%20_giorno%27s%20theme_%20il%20vento%20d%27oro%20%28320%20%20kbps%29.mp3?raw=1",
       img:"https://static.wikia.nocookie.net/jjba/images/6/63/Boss_Giorno_Anime.png/revision/latest/scale-to-width/720?cb=20210306021556"
       ,
       name:"giorno's theme"
       ,artist:"jjba golden wind"
   })






   jotaro= new Music({
        music:"https://dl.dropbox.com/s/bzzq8ym5rbic39l/JoJo%27s%20Bizarre%20Adventure_%20Stardust%20Crusaders%20OST%20-%20Stardust%20Crusaders%20%28320%20%20kbps%29.mp3?raw=1",
        img:"https://i1.sndcdn.com/artworks-000221273017-izy0jx-t500x500.jpg",
        
name:"jotaro's theme",
artist:"jjba stardust crusaders"
    })
    
    eren=new Music({
        music:"https://dl.dropbox.com/s/kthz4cqe0ot2o5l/attack%20on%20titan%20season%204%20ost%20-%20ashes%20on%20the%20fire%E3%80%8Emain%20theme%E3%80%8F%20%28320%20%20kbps%29.mp3?raw=1",
        img:"https://i1.sndcdn.com/avatars-l3f4huVHb5sRi2Fg-QAfNDg-t500x500.jpg",
        name:"Ashes on the fire",
        artist:"attack on titan s4"
    })
    
    tanjiro=new Music({
        music:"https://dl.dropbox.com/s/qxgfid1lpn0tbu6/gurenge%20%28320%20%20kbps%29.mp3?raw=1",
        name:"gurenge",
        artist:"demon slayer"
        ,img:"https://static.wikia.nocookie.net/heros/images/5/5e/Tanjiro_Kamado_Infobox.jpg/revision/latest/top-crop/width/720/height/900?cb=20200807162931&path-prefix=fr"
        
    })
    
    josuke=new Music({
        music:"https://dl.dropbox.com/s/82xbec46disdh5w/jojo%20amv%20-%20josuke%27s%20theme%20-%20diamond%20is%20unbreakable%20-%20main%20theme%20%28320%20%20kbps%29.mp3?raw=1",
        img:"https://i.pinimg.com/originals/3c/88/c8/3c88c8510028f627cf58792795629ed1.jpg",
        name:"josuke's theme",
        artist:"jjba diamond is unbreakable"
        
        
    })
    interstellar=new Music({
        music:'https://dl.dropbox.com/s/izk4805xsc733cv21crti/Interstellar-Official-Soundtrack-Cornfield-Chase-Hans-Zimmer-WaterTower.mp3?raw=1'
        ,img:'',
        name:'intestellar soundtrack '
        ,artist:'hanns zimmer'
        
    })
    
    
    
//music array     
musicArray=[eren,giorno,tanjiro,jotaro,josuke,interstellar] 

setUpCard(0)   

setInterval(update,1000)
    


}

function setUpCard(order=0){

current=musicArray[order]
cardImg.src=current.img
cardTitle.innerHTML=current.name
cardArtist.innerHTML=current.artist


}

function update(){
percent=(current.song.currentTime/current.song.duration)*100


    id("stat").style.width=percent+"%"
    id("stat").style.borderRadius="0px"
    
    if(percent==100){
        id("stat").style.borderRadius="0.5rem 0.5rem 0 0"
    }
        id("main").style.borderRadius="0 0 0.5rem 0.5rem";
    
}

function id(n){
    return document.getElementById(n)
}



function toggleLoop(){
    if(!current.song.loop){
        current.song.loop=true
        id("lp-b").style.color="var(--light)"
        
        new Toast("loop turned on","var(--theme)")
    }else{
        current.song.loop=false
        id("lp-b").style.color="var(--theme)"
        new Toast("loop turned off","var(--theme)")
    }
    
    
}

function loadToastCss(){toastStyle=document.createElement("style"),toastStyle.innerHTML="div.aw-toast{width:80%;position:fixed;bottom:2rem;background:#9666ff;color:#fff;padding:.79rem 1rem;left:50%;transform:translateX(-50%);text-align:center;font-size:1.1rem;border-radius:.21rem;animation:aw-toast-anim .71s,aw-toast-anim .71s 2.5s reverse forwards;z-index:500;overflow:hidden;box-shadow:0 0 7px rgb(0,0,0,.15),inset 0 0 5px 1px rgb(0,0,0,.03)}@keyframes aw-toast-anim{from{transform:translateY(1000px) translateX(-50%)}to{transform:translateY(0) translateX(-50%)}}",document.body.appendChild(toastStyle)}toastCss=!1;class Toast{constructor(t,s,a){0==toastCss&&(loadToastCss(),toastCss=!0),this.toast=document.createElement("div"),this.delay=2.5,this.timing=.71,this.animation="aw-toast-anim",this.toast.classList.add("aw-toast"),this.toast.innerHTML=t,null!=s&&(this.toast.style.background=s),null!=a&&(null!=a.textColor&&(this.toast.style.color=a.textColor),null!=a.closeDelay&&(this.delay=a.closeDelay),null!=a.timing&&(this.timing=a.timing),null!=a.animation&&(this.animation=a.animation)),this.toast.style.animation=`${this.animation} ${this.timing}s,${this.animation} ${this.timing}s ${this.delay}s reverse forwards`,document.body.appendChild(this.toast),setTimeout(()=>{this.toast.remove()},1e3*this.delay+1e3*this.timing)}}


