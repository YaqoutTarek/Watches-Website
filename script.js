let icon = document.querySelector(`i`)
let elReview= document.querySelector(`.elreview`)
let reviewBox= document.querySelector(`.review .box`)
let side= document.querySelectorAll(`.side`)
let showBar=document.querySelector(`.showBar img`)
let form=document.querySelector(`.forming`)
let log=document.getElementById(`lo`)
let lightMood=document.getElementById(`lightMood`)
let darkMood=document.getElementById(`darkMood`)
const section=document.getElementById(`section`)
const root = document.documentElement;

function perspective(e){
    e.style.animation= `move 0.8s ease`
}
function unPerspective(e) {
    e.style.animation= ``
}

for(i=0;i<8;i++){
    let clone= elReview.cloneNode(true)
    reviewBox.appendChild(clone)
}

function change(e){
    showBar.src = e.src
}

function border(){
    form.style.animation=`border 0.5s forwards ease-in`
    if (form.style.animation=`border 0.5s forwards ease-in`) {
        log.style.display=`block` ;
    }
}


lightMood.onclick= ()=> {
    section.style.backgroundImage=`url(./MATERIAL/lightMoodBG.jpg)`
    root.style.setProperty(`--shadow-color`,`white`)
    root.style.setProperty(`--dark`,`#BFBFBF`)
    root.style.setProperty(`--mid-dark`,`#A6A6A6`)
    root.style.setProperty(`--mid`,`#595959`)
    root.style.setProperty(`--mid-light`,`#262626`)
    root.style.setProperty(`--light`,`#0D0D0D`)
    root.style.setProperty(`--font-color`,`brown`)
    root.style.setProperty(`--dark-font-color`,`crimson`)
    root.style.setProperty(`--hover`,`red`)
    lightMood.style.display=`none`
    darkMood.style.display=`inline`
}
darkMood.onclick=()=>{
    section.style.backgroundImage=`linear-gradient(to left, var(--dark), var(--mid-dark))`
    root.style.setProperty(`--shadow-color`,`black`)
    root.style.setProperty(`--dark`,`#0D0D0D`)
    root.style.setProperty(`--mid-dark`,`#262626`)
    root.style.setProperty(`--mid`,`#595959`)
    root.style.setProperty(`--mid-light`,`#A6A6A6`)
    root.style.setProperty(`--light`,`#BFBFBF`)
    root.style.setProperty(`--font-color`,`gold`)
    root.style.setProperty(`--dark-font-color`,`goldenrod`)
    root.style.setProperty(`--hover`,`white`)
    darkMood.style.display=`none`
    lightMood.style.display=`inline`
}
