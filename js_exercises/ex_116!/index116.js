

function getHexaColor(color) {
  
var output = getHexaColor(color)
  
    switch (color) 
      {
        case color = "white": 
        return `#FFFFFF`; break;
        case color = "black": 
        return `#000000`; break;
        case color = "blue": 
        return `#0b24fb`; break;
        case color = "green": 
        return `#0e7e12`; break;
        case color = "yellow": 
        return `#fffd38`; break;
        case color = "pink": 
        return `#fec1cc`; break;
        default:
             return 'not a web color';
      }

    console.log(`The hexa color is ${ouput}`);
      
}

getHexaColor('pink')