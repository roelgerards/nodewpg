function showNumber(start, end) {
    if (start < end) 
    {
        for (start; start <= end; start++) {
            console.log(start);
        }
    } 
    else if (start > end) 
           {
              for (start; end <= start; start--) {
              console.log(start);   
              }
           }
    else if (start === end) {
      console.log(`start and end are the same number`);
    } else { 
      console.log(`parameters aren't numbers`);
    }

}
  
      


showNumber(1000, 0)