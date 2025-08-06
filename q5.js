const trafficLight =(color) => {
    if(color=="green"){
        console.log("Go")
    }
    else if(color=="red"){
        console.log("Stop")
    }
    else if (color=="yellow"){
        console.log("Ready")
    }
    else{
        console.log("Invalid")
    }

    switch(color){
      case "green":
        console.log("Go")
        break;
    
      case "red":
        console.log("Stop")
        break;
    
     case "yellow":
        console.log("Ready")
        break;
    
    default:
        console.log("Invalid")
    
}
}
trafficLight("yellow")

