var countOfUpdates = 0;
var counter = 0;
var countOfBeerVendors =0;
var beerPrice = 10;
var numberOfVisitors = 0;
var playerPrice = 50;
var countOfPlayers = 0;
var grassPrice = 200;
var soccerGoalPrice = 600;
var auditoriumPrice = 1500;
var countOfGrass=0;
var countOfSoccerGoal=0;
var countOfAuditorium = 0;
var BeerUpdateIsBought = false;

window.onload=function(){
        window.setInterval(NumberOfVisitors,800);
};
function NumberOfVisitors(){
    if(numberOfVisitors>0){
        if(BeerUpdateIsBought===true){
            counter=counter+(countOfBeerVendors*50)+(countOfPlayers*3)+(countOfGrass*6)+(countOfSoccerGoal*15)+(countOfAuditorium*30);
        }
        else{
            counter=counter+countOfBeerVendors+(countOfPlayers*3)+(countOfGrass*6)+(countOfSoccerGoal*15)+(countOfAuditorium*30);
        }
        document.getElementById("point-counter").innerHTML = counter;
        
    }
    else {
        counter = counter+0;
        document.getElementById("point-counter").innerHTML = counter;
    }
    if(numberOfVisitors>=10000 && BeerUpdateIsBought === false){
        
        document.getElementById("special-updates").innerHTML = "Special updates:";
        document.getElementById("beer-update").innerHTML = "Beer + Popcorn by vendor";
        document.getElementById("beer-update-button").style.visibility = "visible";
        document.getElementById("right-panel").style.visibility = "visible";
        document.getElementById("beer-update-button").innerHTML = "Update";
    }
}
function UpdateBeer(){
    numberOfVisitors = numberOfVisitors-10000;
        document.getElementById("number-of-visitors").innerHTML = numberOfVisitors;
    document.getElementById("special-updates").style.visibility="hidden";
        document.getElementById("beer-update").style.visibility="hidden";
        document.getElementById("beer-update-button").style.visibility = "hidden";
        document.getElementById("right-panel").style.visibility = "hidden";
        BeerUpdateIsBought = true;
}

function IncreaseCountOnClick(){
    
    if(numberOfVisitors >= 10000){
        counter = counter+500;
        document.getElementById("point-counter").innerHTML =counter;
    }
    else if(numberOfVisitors >= 5000){
        counter = counter+100;
        document.getElementById("point-counter").innerHTML =counter;
    }
 
    else if(numberOfVisitors>=3500){
        counter = counter+49;
        document.getElementById("point-counter").innerHTML =counter;
    }
    else if(numberOfVisitors>=2000){
        counter = counter+27;
        document.getElementById("point-counter").innerHTML =counter;
    }
    else if(numberOfVisitors>=500){
        counter = counter+18;
        document.getElementById("point-counter").innerHTML =counter;
    }
    else if(numberOfVisitors>=250){
        counter = counter+10;
        document.getElementById("point-counter").innerHTML =counter;
    }
    else if(countOfPlayers>=18){
        
        counter=counter+7;
        document.getElementById("point-counter").innerHTML =counter;
    }
    else if(countOfPlayers>=11){
        counter=counter+5;
        document.getElementById("point-counter").innerHTML =counter;
    }
    
    else if(numberOfVisitors>=50){
        counter = counter+3;
        document.getElementById("point-counter").innerHTML =counter;
        
    }
    else {
        counter = counter+1;
        document.getElementById("point-counter").innerHTML =counter;
    }
    if(countOfUpdates>5000){
        document.body.style.background = "url('img/fullyupgraded.jpg')";
    }
    else if(countOfUpdates>1000){
        document.body.style.background = "url('img/ministadium.jpg')";
        
    }
    else if(countOfUpdates>100){
        document.body.style.background = "url('img/footballpitch.jpg')";
    }
    else if(countOfUpdates>20){
        
        document.body.style.background = "url('img/grasspitch.jpg')";
    }
    
    
    
}

function IncreaseBeerPrice(){
    if(counter>=beerPrice){
        counter = counter-beerPrice;
        document.getElementById("point-counter").innerHTML = counter;
        beerPrice = beerPrice+6;
        numberOfVisitors = numberOfVisitors+1;
        document.getElementById("number-of-visitors").innerHTML = numberOfVisitors;
        document.getElementById("beer-price").innerHTML = beerPrice;
        countOfBeerVendors++;
        document.getElementById("beer-level").innerHTML = countOfBeerVendors;
        countOfUpdates++;
    }
    
    
}

function IncreasePlayerPrice(){
    if(counter>=playerPrice){
        counter = counter - playerPrice;
        document.getElementById("point-counter").innerHTML = counter;
        playerPrice = playerPrice+20;
        numberOfVisitors = numberOfVisitors + 3;
        document.getElementById("number-of-visitors").innerHTML = numberOfVisitors;
        document.getElementById("player-price").innerHTML = playerPrice;
        countOfPlayers++;
        document.getElementById("player-level").innerHTML = countOfPlayers;
        countOfUpdates++;
       
    }
}

function IncreaseGrassPrice(){
    if(counter>=grassPrice){
        counter = counter - grassPrice;
        document.getElementById("point-counter").innerHTML = counter;
        grassPrice = grassPrice+50;
        numberOfVisitors = numberOfVisitors + 6;
        document.getElementById("number-of-visitors").innerHTML = numberOfVisitors;
        document.getElementById("grass-price").innerHTML = grassPrice;
        countOfGrass++;
        document.getElementById("grass-level").innerHTML = countOfGrass;
        countOfUpdates++;
       
    }
}

function IncreaseSoccerGoalPrice(){
    if(counter>=soccerGoalPrice){
        counter = counter - soccerGoalPrice;
        document.getElementById("point-counter").innerHTML = counter;
        soccerGoalPrice = soccerGoalPrice+200;
        numberOfVisitors = numberOfVisitors + 15;
        document.getElementById("number-of-visitors").innerHTML = numberOfVisitors;
        document.getElementById("soccer-goal-price").innerHTML = soccerGoalPrice;
        countOfSoccerGoal++;
        document.getElementById("soccer-goal-level").innerHTML = countOfSoccerGoal;
        countOfUpdates++;
       
    }
}

function IncreaseAuditoriumPrice(){
    if(counter>=auditoriumPrice){
        counter = counter - auditoriumPrice;
        document.getElementById("point-counter").innerHTML = counter;
        auditoriumPrice = auditoriumPrice+400;
        numberOfVisitors = numberOfVisitors + 30;
        document.getElementById("number-of-visitors").innerHTML = numberOfVisitors;
        document.getElementById("auditorium-price").innerHTML = auditoriumPrice;
        countOfAuditorium++;
        document.getElementById("auditorium-level").innerHTML = countOfAuditorium;
        countOfUpdates++;
        
    }
}