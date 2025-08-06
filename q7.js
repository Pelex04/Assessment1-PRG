function greeting(value){
let color = value.toUpperCase(); 

       if(color=="CHICHEWA"){
        console.log("MULI BWANJI?")
    }
    else if(color=="YAO"){
        console.log("MULI ULI?")
    }
    else if (color=="TUMBUKA"){
        console.log("MULI WULI}")
    }
    else{
        console.log("Invalid")
    }

    switch(color){
      case "CHICHEWA":
        console.log("MULI BWANJI?")
        break;
    
      case "YAO":
        console.log("MULI ULI?")
        break;
    
     case "TUMBUKA":
        console.log("MULI WULI")
        break;
    
    default:
        console.log("Invalid")
    
}
}
greeting("chichewa")