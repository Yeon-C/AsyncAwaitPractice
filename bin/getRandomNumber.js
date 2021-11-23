function getRandomNumber() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        // set min/max for random number
        min = 1;
        max = 100;
        // generate const of random integer of min/max
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        // throw an error if randomNumber is not an integer
        const error = !Number.isInteger(randomNumber) ? true : false;
        // resolve promise after .5 seconds
        if (error) {
          reject('Error: Something went wrong');
        } else {
          resolve(randomNumber);
        }
      }, 500);
    }); 
  }
  
  async function printNumber() {
    // initialize variable
    let number;
    
    console.log("I'm awaiting!");
    // invoke async function
    number = await getRandomNumber();
  
    console.log('Awaited number is: ', number);
  }
  
  printNumber();
  