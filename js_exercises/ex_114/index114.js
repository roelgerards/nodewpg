
function revert(textParameter) 
{
  var charCount  = textParameter.length;
  var backwards = "";


    for (charCount; charCount >= 1; charCount--)
    {
      backwards = backwards + textParameter.charAt(charCount - 1)
    }
    console.log(backwards);
      
}


revert('hello');
revert('Nico');
revert('I am');
revert('Roel');
revert('Gerards');
