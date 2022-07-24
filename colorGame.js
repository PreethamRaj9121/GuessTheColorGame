// Assign 6 random colors to an array 
var colors=ranColor(6);

//  Generate random color
function ranColor(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    // Generate random rgb
    arr[i]="rgb("+genNo()+", "+genNo()+", "+genNo()+")";
    return arr;
}

// Generate random no. from 0 to 256
function genNo()
{
    var r=Math.floor(Math.random()*256);
    return r;
}

// Dom
var squares=document.getElementsByClassName("square");
var correctColor=pickcolor(6);
var message=document.getElementsByClassName("message");
var heading=document.querySelector("h1");
var play=document.getElementById("play");
var span=document.getElementById("rgb");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var num=6;

// Initially assign colors to squares
assignColor();



// Assign new colors and change button context
play.addEventListener("click",function()
{
    colors=ranColor(num);
    correctColor=pickcolor(num);
    span.textContent=correctColor;
    // message should be neither correct nor wrong when btn is clicked 
    message[0].textContent="";
    assignColor();
    heading.style.backgroundColor='steelblue';
    if(play.textContent==="Play Again")
    {
    play.textContent="New Colors";
    
    }
});

// display correct color in heading
span.textContent=correctColor;

// Assign colors to grids when required
function assignColor()
{
        for(var i=0;i<squares.length;i++)
        {
            squares[i].style.backgroundColor =colors[i];
            
            // add Event listner to all div squares
            squares[i].addEventListener("click",function(){

                // grab clicked color
                var pickedColor=this.style.backgroundColor;

                // compare correct color and picked color
                if(pickedColor===correctColor)
                {
                    message[0].textContent="Correct!";
                    changeColor();

                    // change button context from new colors to play again when ans is correct
                    play.textContent="Play Again";
                    heading.style.backgroundColor=correctColor;
                }
                else
                {
                    message[0].textContent="Wrong";
                    this.style.backgroundColor='black';
                }
            });
        }
}

//  to change color of all blocks to corect color
function changeColor()
{
    for(var i=0;i<squares.length;i++)
    squares[i].style.backgroundColor=correctColor;
}

// to generate random correct color
function pickcolor(num)
{
    var random=Math.floor(Math.random()*num);
    return colors[random];
}

easy.addEventListener("click",function()
{
    // alert("Clicked");
   easyBtn();
});



function easyBtn()
{
  var Easy=document.querySelectorAll(".hardbtn");
  for(var i=0;i<3;i++)
  Easy[i].style.display="none";

  num=3;
  colors=ranColor(num);
  assignColor();
  correctColor=pickcolor(num);
  span.textContent=correctColor;
   // message should be neither correct nor wrong when btn is clicked 
   message[0].textContent="";
   heading.style.backgroundColor='black';
   if(play.textContent==="Play Again")
   {
   play.textContent="New Colors";
   }
}

hard.addEventListener("click",function()
{
    var Easy=document.querySelectorAll(".hardbtn");
  for(var i=0;i<3;i++)
  Easy[i].style.display="inline";

  num=6;
  colors=ranColor(num);
  assignColor();
  correctColor=pickcolor(num);
  span.textContent=correctColor;
   // message should be neither correct nor wrong when btn is clicked 
   message[0].textContent="";
   heading.style.backgroundColor='black';
   if(play.textContent==="Play Again")
   {
   play.textContent="New Colors";
   }



//   span.textContent=correctColor;
});

// display correct color in heading
span.textContent=correctColor;