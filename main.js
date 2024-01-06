document.addEventListener('DOMContentLoaded', function() {

let btn_node=document.querySelectorAll(".click_comp")
let your_cnt=document.querySelector('.your_count');
let cmpt_cnt=document.querySelector('.cmpt_count');
let res_btn=document.querySelector('.res_btn');
let your_choice = document.querySelector('#your_cont');
let computer_cont=document.querySelector("#computer_cont");
let result_text=document.querySelector('.result_text');
let content=["Rock","paper","scissors"];

let cmpt=false;
let youwin=false;
let youcnt=0;
let Cnt=0;
btn_node.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
       

        let cmpt_val=checkwinner(index);
        if(cmpt===true)
        {
            Cnt++;
            cmpt=false;
            res_btn.innerText=`you Lost`;
            res_btn.classList.remove('Game_draw');
            res_btn.classList.remove('youwin');
            res_btn.classList.add('cmpt_winner');

        }
        else if(youwin===true)
        {
            youcnt++;
            youwin=false;
            res_btn.innerText=`you won`;
            res_btn.classList.remove('Game_draw');
            res_btn.classList.remove('cmpt_winner');
            res_btn.classList.add('youwin');
        }
        else {
            res_btn.innerText=`Game Draw`;
            res_btn.classList.remove('youwin');
            res_btn.classList.remove('cmpt_winner');
            res_btn.classList.add('Game_draw');
        }
        
        your_cnt.innerText=`${youcnt}`;
        cmpt_cnt.innerText=`${Cnt}`;
       DisplayContent(index,cmpt_val);
       result_text.classList.add('show');
    })
    res_btn.classList.remove('show');
})
const DisplayContent=(index1,index2)=>{
        content.forEach((val,index)=>{
            let res=`${val}`;
            if(index===index1)
            { 
                your_choice.innerText=res;
            }
            if(index===index2)
            {
                computer_cont.innerText=res;
            }
        })
    }

const checkwinner=(index)=>{
        let cmpt_choice=Math.floor(Math.random()*3)
        
        if(cmpt_choice!=index)
        {
            if((index===0 && cmpt_choice===2)||(index===1 && cmpt_choice===0)||(index===2 && cmpt_choice===1))
            {
                youwin=true;
            }
            else
            {
                cmpt=true;
            }
           
        }
        return cmpt_choice;
}
})
