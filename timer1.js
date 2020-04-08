

// Confirm that our script can handle some common edge cases.
  // No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
  // An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
  // An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

let timer = process.argv.slice(2, process.argv.length)

const hearDing = function(timer) {
  for (let time of timer) { 
    if (time > 0) {    
      timeInMS = time * 1000;
      setTimeout(() => {
        process.stdout.write('\x07')
      }, timeInMS);
    }
  }
}; 

hearDing(timer);
