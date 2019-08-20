function getShapePerimiter(base, height) 
{
  var perimeter;

   if (base === height) {
    perimeter = (4*base);
      console.log(`Square (${perimeter}m) is the shape perimeter`)
   } else {
    perimeter = 2 * (base + height);
    console.log(`Rectangle (${perimeter}m) is the shape perimeter`) 
   }
   

   if (perimeter > 100) {
       console.log('The perimeter is too big')
   } else {
    console.log('The perimeter is fine')
   }
   
  }

  getShapePerimiter(10,20)

