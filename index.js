function scuberGreetingForFeet(feet){
  let answer;

  if (feet > 2500) {
    //if over 2500
    answer = 'No can do.';
  } else if (feet > 2000) {
    //if over 2000 feet
    answer = 'I will gladly take your thirty bucks.';
  } else if (feet <= 400) {
    //if 400 or less
    answer = 'This one is on me!';
  } else {
    //do nothing accounting for 401-1999
  }

  return answer;
}

function ternaryCheckCity(city){
  //if city is NYC ? true : false
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tip){

  //declare answer to tip
  let answer; 

  switch (tip) {
    case 'generous':
      answer = 'Thank you so much.';
      break;
    case 'not as generous':
      answer = 'Thank you.';
      break;
    //set default if it doesn't fit the above tips
    default:
      answer = 'Bye.';

  }

  return answer;
}