function scuberGreetingForFeet(number) {

  if(number<=400) {
    return 'This one is on me!';
  }
  else if(number>2000 && number<=2499) {
    return ('I will gladly take your thirty bucks.')
}
  else if(number>=2500) {
    return ('No can do.');
  }

}
function ternaryCheckCity(Place){
  
  return (Place === 'NYC' ? 'Ok, sounds good.' : "No go.");
}
function switchOnCharmFromTip (Handout){
  switch(Handout) {
    case'generous' : return 'Thank you so much.';
    break;
    case'not as generous' : return 'Thank you.';
    break;
    default : return 'Bye.';

  }}