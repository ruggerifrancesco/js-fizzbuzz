console.log("JS Loaded Succesfully!");

for ( let i = 1 ; i < 101 ; i++){

    //Print From 1 to 100 on console
    // DO NOT TOUCH THE NEXT LINE
        // # console.log(i);

    // If cycle

        //Check if is mutiple with 3 and 5
        if (i % 3 === 0 && i % 5 === 0)  {
        console.log('(' + i + ') ' + 'FizzBuzz'); 
        } //Check if is mutiple with 3
        else if (i % 3 === 0) {
            console.log('(' + i + ') ' + 'Fizz');
        } //Check if is mutiple with 5
        else if (i % 5 === 0) {
            console.log('(' + i + ') ' + 'Buzz');
        }  //Else return a normal value of the list
        else {
            console.log(i); 
        }
}







