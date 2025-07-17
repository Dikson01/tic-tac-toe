let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let new_btn = document.querySelector("#new-btn");
let msg_con = document.querySelector(".msg-con");

let turnO = true;

const winPaterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box wa clicked!");
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    });
});

let disableBtn = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

let enableBtn = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msg_con.classList.add("hide");
};

let win_game = function (winner){
    msg.innerText = `Congratulation!, ${winner} Win.`
    disableBtn();
    msg_con.classList.remove("hide");
};

const checkWinner = () =>{
    for (let patern of winPaterns){
           let pos1val = boxes[patern[0]].innerText;
           let pos2val = boxes[patern[1]].innerText;
           let pos3val = boxes[patern[2]].innerText;
           
           if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log(pos1val,"Win!")
                win_game(pos1val);
            }
           }
    }
}

new_btn.addEventListener("click",enableBtn);
reset.addEventListener("click",enableBtn);