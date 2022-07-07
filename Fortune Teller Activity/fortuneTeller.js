//fortune teller game

function tellFortune(x) {
    fortune = 6
    if (fortune === 0){ 
        console.log("Oh no! You selected a low fortune!");
    }else if (fortune === 1){
        console.log("It's not looking good.");
    }else if (fortune === 2){
        console.log("Better luck next time");
    }else if (fortune === 3){
        console.log("Try again later");
    }else if (fortune === 4){
        console.log("Not looking great");
    }else if (fortune === 5){
        console.log("You selected an average fortune");
    }else if (fortune === 6){
        console.log("You selected an above average fortune");
    }else if (fortune === 7){
        console.log("The future is looking good.");
    }else if (fortune === 8){
        console.log("Congradulations!! You selected an excelent fortune.");
    }else if (fortune === 9) {
        console.log("The future is very bright");
    }else if (fortune === 10){
        console.log("The future could not be any brighter");
    }
}

tellFortune(6);