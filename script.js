//accesing all the boxes
let zero=document.querySelector("#zero");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");


let arr=[0,0,0,0,0,0,0,0];
let forZero=0;
let a=0;
let yna=[0,0,0,0,0,0,0,0,0];


function winpos(won){
    let el=document.createElement("div");
    el.style.height="400px";
    el.style.width="600px";
    el.style.border="solid white 2px";
    el.style.backgroundColor="black"
    el.style.color="white";
    el.style.font="100px";
    el.style.textAlign="Center";    
    el.innerText="YaYY! "+won+" the match";
    el.style.verticalAlign="center";
    el.style.position="absolute";
    el.style.top="100px";
    el.style.left="350px";
    el.innerHTML="<p>Congratulatios to '"+won+"' for winning the match.</p>";
    let body=document.querySelector("body");
    body.append(el);
}

zero.addEventListener("click",()=>{
    if(arr[0]>0){
        alert("You cant click it again!");
    } else{
        if(a%2==0){
            zero.innerHTML='<i class="fa-solid fa-xmark"></i>';
            yna[0]++;
        } else{
            zero.innerHTML='<i class="fa-solid fa-o"></i>';
            yna[0]--;
        }
        a++;
    }
    arr[0]++;
    winnerCheck();
});
one.addEventListener("click",()=>{
    if(arr[1]>0){
        alert("You cant click it again!");
    } else {
        if(a%2==0){
            one.innerHTML='<i class="fa-solid fa-xmark"></i>';
            yna[1]++;
            console.log(yna[1]);
        } else{
            one.innerHTML='<i class="fa-solid fa-o"></i>';
            yna[1]--;
        }
        a++;
    }
    arr[1]++;
    
    winnerCheck();
});
two.addEventListener("click",()=>{
    if(arr[2]>0){
        alert("You can't click it again!");
    } else{
        if(a%2==0){
        two.innerHTML='<i class="fa-solid fa-xmark"></i>';
        yna[2]++;
    } else{
        two.innerHTML='<i class="fa-solid fa-o"></i>';
        yna[2]--;
    }
        a++;
    }
    arr[2]++;
    
    winnerCheck(); 
});

three.addEventListener("click",()=>{
    if(arr[3]>0){
        alert("You can't click it again!");
    } else {
        if(a%2===0){
            three.innerHTML='<i class="fa-solid fa-xmark"></i>';
            yna[3]++;
        } else{
            three.innerHTML='<i class="fa-solid fa-o"></i>';
            yna[3]--;
        }
        a++;
    }
    arr[3]++;
    winnerCheck();
});
four.addEventListener("click",()=>{
    if(arr[4]>0){
        alert("You cant click it again!");
    } else {
        if(a%2==0){
            four.innerHTML='<i class="fa-solid fa-xmark"></i>';
            yna[4]++;
        } else{
            four.innerHTML='<i class="fa-solid fa-o"></i>';
            yna[4]--;
        }
        a++;
    }
    arr[4]++;
    winnerCheck();
});


five.addEventListener("click",()=>{
    if(arr[5]>0){
        alert("You can't click it again!");
    } else {
        if(a%2==0){
            five.innerHTML='<i class="fa-solid fa-xmark"></i>';
            yna[5]++;
        } else{
            five.innerHTML='<i class="fa-solid fa-o"></i>';
            yna[5]--;
        }
        a++;
    }
    arr[5]++;
    winnerCheck();
});


six.addEventListener("click",()=>{
    if(arr[6]>0){
        alert("You can't click it again!");
    } else {
        if(a%2==0){
            six.innerHTML='<i class="fa-solid fa-xmark"></i>';
            yna[6]++;
        } else{
            six.innerHTML='<i class="fa-solid fa-o"></i>';
            yna[6]--;
        }
        a++;
    }
    arr[6]++;
    winnerCheck();
});


seven.addEventListener("click",()=>{
    if(arr[7]>0){
        alert("You can't click it again!");
    } else {
        if(a%2==0){
            seven.innerHTML='<i class="fa-solid fa-xmark"></i>';
            yna[7]++;
        } else{
            seven.innerHTML='<i class="fa-solid fa-o"></i>';
            yna[7]--;
        }
        a++;
    }
    arr[7]++;
    winnerCheck();
});


eight.addEventListener("click",()=>{
    if(arr[8]>0){
        alert("You can't click it again!");
    } else {
        if(a%2==0){
            eight.innerHTML='<i class="fa-solid fa-xmark"></i>';
            yna[8]++;
        } else{
            eight.innerHTML='<i class="fa-solid fa-o"></i>';
            yna[8]--;
        }
        a++;
    }
    arr[8]++;
    winnerCheck();
});


let x=-1;
let y=0;
let z=1;
function winnerCheck(){
    //FOR X
    //horizontal
    //for 0,1,2
    if(yna[1]!=y && yna[2]!=y){
        if(yna[0]===yna[1] && yna[1]===yna[2] && yna[2]===z){
            winpos("X");
        }
    }

    if(yna[0]!=y && yna[2]!=y){
        if(yna[0]===yna[1] && yna[1]===yna[2] && yna[2]===z){
            winpos("X");
        }
    }

    if(yna[1]!=y && yna[0]!=y){
        if(yna[0]===yna[1] && yna[1]===yna[2] && yna[2]===z){
            winpos("X");
        }
    }


    // for 3,4,5
    if(yna[4]!=y && yna[5]!=y){
        if(yna[3]===yna[4] && yna[4]===yna[5] && yna[5]===z){
            winpos("X");
        }
    }

    if(yna[3]!=y && yna[5]!=y){
        if(yna[3]===yna[4] && yna[4]===yna[5] && yna[5]===z){
            winpos("X");
        }
    }

    if(yna[4]!=y && yna[3]!=y){
        if(yna[3]===yna[4] && yna[4]===yna[5] && yna[5]===z){
            winpos("X");
        }
    }    


    //for 6,7,8
    //not working
    if(yna[7]!=y && yna[8]!=y){
        if(yna[6]===yna[7] && yna[7]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }

    if(yna[6]!=y && yna[8]!=y){
        if(yna[6]===yna[7] && yna[7]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }

    if(yna[7]!=y && yna[6]!=y){
        if(yna[6]===yna[7] && yna[7]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }


    //vertical
    //for 0,3,6
    if(yna[3]!=y && yna[6]!=y){
        if(yna[0]===yna[3] && yna[3]===yna[6] && yna[6]===z){
            winpos("X");
        }
    }

    if(yna[0]!=y && yna[6]!=y){
        if(yna[0]===yna[3] && yna[3]===yna[6] && yna[6]===z){
            winpos("X");
        }
    }

    if(yna[3]!=y && yna[0]!=y){
        if(yna[0]===yna[3] && yna[3]===yna[6] && yna[6]===z){
            winpos("X");
        }
    }


    //for 1,4,7
    if(yna[4]!=y && yna[7]!=y){
        if(yna[1]===yna[4] && yna[4]===yna[7] && yna[7]===z){
            winpos("X");
        }
    }

    if(yna[1]!=y && yna[7]!=y){
        if(yna[1]===yna[4] && yna[4]===yna[7] && yna[7]===z){
            winpos("X");
        }
    }

    if(yna[4]!=y && yna[1]!=y){
        if(yna[1]===yna[4] && yna[4]===yna[7] && yna[7]===z){
            winpos("X");
        }
    }


    //for 2,5,8
    if(yna[5]!=y && yna[8]!=y){
        if(yna[2]===yna[5] && yna[5]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }

    if(yna[2]!=y && yna[8]!=y){
        if(yna[2]===yna[5] && yna[5]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }

    if(yna[5]!=y && yna[2]!=y){
        if(yna[2]===yna[5] && yna[5]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }

    //diagnoally
    //for 0,4,8
    if(yna[4]!=y && yna[8]!=y){
        if(yna[0]===yna[4] && yna[4]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }

    if(yna[0]!=y && yna[8]!=y){
        if(yna[0]===yna[4] && yna[4]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }

    if(yna[4]!=y && yna[0]!=y){
        if(yna[0]===yna[4] && yna[4]===yna[8] && yna[8]===z){
            winpos("X");
        }
    }

    //for 2,4,6
    if(yna[4]!=y && yna[6]!=y){
        if(yna[2]===yna[4] && yna[4]===yna[6] && yna[6]===z){
            winpos("X");
        }
    }

    if(yna[2]!=y && yna[6]!=y){
        if(yna[2]===yna[4] && yna[4]===yna[6] && yna[6]===z){
            winpos("X");
        }
    }

    if(yna[4]!=y && yna[2]!=y){
        if(yna[2]===yna[4] && yna[4]===yna[6] && yna[6]===z){
            winpos("X");
        }
    }




    //FOR O
    //horizontal
    //for 0,1,2
    if(yna[1]!=y && yna[2]!=y){
        if(yna[0]===yna[1] && yna[1]===yna[2] && yna[2]===x){
            winpos("O");
        }
    }

    if(yna[0]!=y && yna[2]!=y){
        if(yna[0]===yna[1] && yna[1]===yna[2] && yna[2]===x){
            winpos("O");
        }
    }

    if(yna[1]!=y && yna[0]!=y){
        if(yna[0]===yna[1] && yna[1]===yna[2] && yna[2]===x){
            winpos("O");
        }
    }


    // for 3,4,5
    if(yna[4]!=y && yna[5]!=y){
        if(yna[3]===yna[4] && yna[4]===yna[5] && yna[5]===x){
            winpos("O");
        }
    }

    if(yna[3]!=y && yna[5]!=y){
        if(yna[3]===yna[4] && yna[4]===yna[5] && yna[5]===x){
            winpos("O");
        }
    }

    if(yna[4]!=y && yna[3]!=y){
        if(yna[3]===yna[4] && yna[4]===yna[5] && yna[5]===x){
            winpos("O");
        }
    }    


    //for 6,7,8
    //not working
    if(yna[7]!=y && yna[8]!=y){
        if(yna[6]===yna[7] && yna[7]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }

    if(yna[6]!=y && yna[8]!=y){
        if(yna[6]===yna[7] && yna[7]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }

    if(yna[7]!=y && yna[6]!=y){
        if(yna[6]===yna[7] && yna[7]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }


    //vertical
    //for 0,3,6
    if(yna[3]!=y && yna[6]!=y){
        if(yna[0]===yna[3] && yna[3]===yna[6] && yna[6]===x){
            winpos("O");
        }
    }

    if(yna[0]!=y && yna[6]!=y){
        if(yna[0]===yna[3] && yna[3]===yna[6] && yna[6]===x){
            winpos("O");
        }
    }

    if(yna[3]!=y && yna[0]!=y){
        if(yna[0]===yna[3] && yna[3]===yna[6] && yna[6]===x){
            winpos("O");
        }
    }


    //for 1,4,7
    if(yna[4]!=y && yna[7]!=y){
        if(yna[1]===yna[4] && yna[4]===yna[7] && yna[7]===x){
            winpos("O");
        }
    }

    if(yna[1]!=y && yna[7]!=y){
        if(yna[1]===yna[4] && yna[4]===yna[7] && yna[7]===x){
            winpos("O");
        }
    }

    if(yna[4]!=y && yna[1]!=y){
        if(yna[1]===yna[4] && yna[4]===yna[7] && yna[7]===x){
            winpos("O");
        }
    }


    //for 2,5,8
    if(yna[5]!=y && yna[8]!=y){
        if(yna[2]===yna[5] && yna[5]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }

    if(yna[2]!=y && yna[8]!=y){
        if(yna[2]===yna[5] && yna[5]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }

    if(yna[5]!=y && yna[2]!=y){
        if(yna[2]===yna[5] && yna[5]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }

    //diagnoally
    //for 0,4,8
    if(yna[4]!=y && yna[8]!=y){
        if(yna[0]===yna[4] && yna[4]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }

    if(yna[0]!=y && yna[8]!=y){
        if(yna[0]===yna[4] && yna[4]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }

    if(yna[4]!=y && yna[0]!=y){
        if(yna[0]===yna[4] && yna[4]===yna[8] && yna[8]===x){
            winpos("O");
        }
    }

    //for 2,4,6
    if(yna[4]!=y && yna[6]!=y){
        if(yna[2]===yna[4] && yna[4]===yna[6] && yna[6]===x){
            winpos("O");
        }
    }

    if(yna[2]!=y && yna[6]!=y){
        if(yna[2]===yna[4] && yna[4]===yna[6] && yna[6]===x){
            winpos("O");
        }
    }

    if(yna[4]!=y && yna[2]!=y){
        if(yna[2]===yna[4] && yna[4]===yna[6] && yna[6]===x){
            winpos("O");
        }
    }

    //if draw
    let count=0;
    for(let i=0;i<=9;i++){
        if(yna[i]!=0){
            count++;
        }
    }
    console.log("Count="+count);
    if(count==10){
        drawpos();
    }
}
function drawpos(){
    let el=document.createElement("div");
    el.style.height="400px";
    el.style.width="600px";
    el.style.border="solid white 2px";
    el.style.backgroundColor="black"
    el.style.color="white";
    el.style.font="100px";
    el.style.textAlign="Center";    
    el.style.verticalAlign="center";
    el.style.position="absolute";
    el.style.top="100px";
    el.style.left="350px";
    el.innerHTML="<p>The match has been Drawn, please restart the match.Thank You.</p>";
    let body=document.querySelector("body");
    body.append(el);
}