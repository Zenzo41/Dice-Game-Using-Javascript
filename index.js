
// For Dice 1
var randomnumber1 = Math.floor(Math.random() * 6) + 1 ; //Generating random number from 1 to 6
var randomDiceImage = "dice"+randomnumber1+".png"; //Setting variable to store the image file name
var randomImageSource ="images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

// For Dice 2
var randomnumber2 = Math.floor(Math.random() * 6) + 1 ; //Generating random number from 1 to 6
var randomImageSource2 ="images/dice"+randomnumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

// Condition for displaying the message
if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins !! "
}
else if(randomnumber2 > randomnumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins !! "
}
else
{
    document.querySelector("h1").innerHTML = "Draw !! "
}