function id(s){
  return document.getElementById(s)
}

sbtn=id('startbtn')
scrn=id('screen')
rebtn=id('resetbtn')
timerbtn=id('examclk')
timerpbtn=id('timerpause')
timerpaused=false

time=0
secs=0
mins=0
hrs=0
modeinc=1 //defaultvtimeiincrement mode
io=false // variable to make rev=true


ison=false
cleared=true


function setup(){
  cleared=false
  interval1=setInterval(activate,10)
}
function stoper(){
  clearInterval(interval1)
  cleared=true
}
function resettime(t,s,m,h,mis){
  time=t
  secs=s
  mins=m
  hrs=h
  ms=mis
  timechange()
  update(hrs,mins,secs,ms)
}

function hide(elm){
  elm.classList.add('hidden')
}


function update(hr,min,sec,tim){
  if(mins>=10){
    fake0m=''
  }else{
    fake0m='0'
  }
  if(secs>=10){
    fake0s=''
  }else{
    fake0s='0'
  }
  if(ms>=10){
    fake0t=''
  }else{
    fake0t='0'
  }
  
  
  if(hr<1){
  scrn.innerText=`${fake0m}${min}:${fake0s}${sec}:${fake0t}${tim}`
}else{
  scrn.innerText=`${hr}:${fake0m}${min}:${fake0s}${sec}`
}
}

function timechange(rev=false){
  if(!rev){
  ms=Math.floor(time%60)
  secs=Math.floor(time/100)-mins*60
  mins=Math.floor(time/100/60)-hrs*60
  hrs=Math.floor(time/100/60/60)

  }else{
    hrs=Math.floor(time/100/60/60)
    mins=Math.floor(time/100/60)-hrs*60
    secs=Math.floor(time/100)-mins*60-hrs%60*60*60
    ms=Math.floor(time%60)
  }
    if(time<=0){
    stoper()
    timesup()
  }
}

function activate(){
  time+=modeinc
  timechange(io)
  
update(hrs,mins,secs,ms)
console.log(hrs,mins,secs,time)

}



sbtn.addEventListener('click',()=>{
if(!io){
  if(!ison){
  setup()
  ison=true
  sbtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
</svg>`
  sbtn.classList.remove('start')
  hide(rebtn)
  }else{
    stoper()
    ison=false
    sbtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>`

    sbtn.classList.add('start')
    rebtn.classList.remove('hidden')
  }}else{
    
   if(!timerpaused){
    sbtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>`
clearInterval(interval1)
timerpaused=true
rebtn.classList.remove('hidden')
}else{
  setup()
  timerpaused=false
  sbtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
</svg>`
hide('hidden')
}
  }
})

rebtn.addEventListener('click',()=>{
  if(!io){
 resettime(0,0,0,0,0)
  }else{
    time=timeinit
  }
 sbtn.innerHTML=`    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
`   
 hide(rebtn)
})


timerbtn.addEventListener('click',()=>{
if(!io){
  timerbtn.innerHTML='stopwatch'
timersetup()
  modeinc=-1
  io=true //revrtrue inp for timesetup
}else{
  timerbtn.innerHTML='timer'
  scrn.innerHTML='00:00:00'
  sbtn.innerHTML=`    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
`   
  stoper()
  time=0
  io=false
  modeinc=1
}
})


function timersetup(){
  id('app').classList.toggle('hidden')
  id('setup-scrn').classList.toggle('hidden')
   sbtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>`
}
 function timerstart(){
   ins=document.querySelectorAll('.inp')
  time=(ins[0].value)*360000+(ins[1].value)*6000+(ins[2].value)*100+100
  timeinit=time
  if(time!=100){
  timersetup()
  setup()
 
  }else{
    new Toast('timer should be atleast 1s long')
  }
 }


function timesup(){
  console.log('hhhh')
  if(io){
  new Toast('timeout')
  }
}
