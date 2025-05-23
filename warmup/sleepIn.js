/*
Warmup-1 -- sleepIn
The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on vacation.
 We sleep in if it is not a weekday or we're on vacation. 
 Return true if we sleep in.
*/

function sleepIn(weekday, vacation) {
  return !weekday || vacation === true;
}

sleepIn(true, true);
sleepIn(true, false);
sleepIn(false, true);
