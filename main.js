let leters = "abcdefghijklmnopqrstuvwxyz";
let letersarray = Array.from(leters);
let leterscon = document.querySelector(".letters");

letersarray.forEach(leter => {
    let span = document.createElement("span");
    let theleter = document.createTextNode(leter);
    span.appendChild(theleter);
    span.className = "leter-box";
    leterscon.appendChild(span);
});

const words = {
    programing:["php","laravel","java","css"],
    people:["elsheik","medoo","lomaa","shata","bakar","gamal","mermaid","kaizar","memo","asma", "kandeel"],
    countries:["america","australi","bahrain","palastine","qatar","lebanon","japan","yemen","india","russia","colombia","england","croatia","argentin"],
    food:["pizza","chicken","apples","pasta","kunafa","mumbar","burger","nutella", "vanila","caramel","coffe","mangoo"]
}

let allkeys = Object.keys(words);

let randompropNu = Math.floor(Math.random() * allkeys.length);
let randompropN = allkeys[randompropNu];
let randompropv = words[randompropN];

let randomVN = Math.floor(Math.random() * randompropv.length);
let randomVV = randompropv[randomVN] 

document.querySelector(".category span").innerHTML = randompropN;

let leterguess = document.querySelector(".letters-guess");
let letersAndSpace = Array.from(randomVV);

letersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    if(letter===" "){
        emptySpan.className = "with-span";
    }
    leterguess.appendChild(emptySpan)
    
});

let guees = document.querySelectorAll(".letters-guess span");
let wrong = 0;
let winer = 0;
let man = document.querySelector(".draw");

document.addEventListener("click", (e)=> {
    let status = false;
    if(e.target.className === "leter-box"){
        e.target.classList.add("clicked");
        let clickedLeter = e.target.innerHTML.toLowerCase();
        let chosen = Array.from(randomVV.toLowerCase());
        chosen.forEach((wordLeter, wardIndex)=>{
            if(clickedLeter==wordLeter){
                status = true;
                guees.forEach((span, spanIndex)=>{
                    if(wardIndex === spanIndex){
                        span.innerHTML = clickedLeter;
                    }
                });
            }
        });
        if(status === true ){
            winer++;
            if(wrong < 5 &&  winer===letersAndSpace.length-1){
            leterscon.classList.add("finished");
            document.getElementById("can").play();
            endgame("win");
            playAgean();
           }
           
        }else{
            wrong++;
            man.classList.add(`wrong-${wrong}`);
        if(wrong === 5  ){
            leterscon.classList.add("finished");
            document.getElementById("fail").play();
            endgame();
            playAgean();
        }}
    }
});

 let win = false;
function endgame(result){
    let div = document.createElement("div");
    div.className = "popup";
    if(result === "win"){
        let divtex = document.createTextNode(`congratulation you won`)
        div.appendChild(divtex);
        document.body.appendChild(div);
    }else{
        let divtext = document.createTextNode(`Game over the ward is "${randomVV }"`)
    div.appendChild(divtext);
    document.body.appendChild(div);
    }}

function playAgean(){
    let add = document.createElement('button')
    add.className ="add"
    let butTxt = document.createTextNode('play Again')
    add.appendChild(butTxt)
    document.body.appendChild(add)
    add.addEventListener('click',()=>{
        window.location.reload();
    })
    
}


