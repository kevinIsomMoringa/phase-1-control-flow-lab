function scuberGreetingForFeet(distance){
  /*
  this function:
      1) gives customers a free sample if the ride is less than or equal to 400 feet
      2) charges 30 dollars for a distance over 2000 feet
      3) does not allow rides over 2500 feet
      4) Achieves all the above using if...else if... statement
  */
  
  if (distance <= 400){
    return 'This one is on me!';
  } else if(distance > 2500) {
    return 'No can do.';
  } else if(distance > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
  /*
  this function;
      1) returns "Ok, sounds good." when the city is NYC
      2) should return "No go." if the destination city is not NYC
      3) Achieves all the above using tertiary expression
  */
  return city !== 'NYC' ? "No go." : "Ok, sounds good.";
  
}

function switchOnCharmFromTip(tip){
  /*
  this function;
      1) should return "Thank you so much." if the tip is generous
      2) should return "Thank you." if the tip is not as generous
      3) should return "Bye." if anything else
      4) Achieves all the above using switch statement
  */

  let response;

  switch (tip) {
      case 'generous':
          response = "Thank you so much.";
          break;
      case 'not as generous':
          response = "Thank you.";
          break;
      default:
          response = "Bye.";
          break;
  }

  return response
}




