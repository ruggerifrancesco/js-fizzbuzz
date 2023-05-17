console.log("JS Loaded Succesfully!");

const containerBlocks = document.getElementById('result-container');

for ( let i = 1 ; i < 101 ; i++){

    const multipleBlock = document.createElement('span');
    const fizzBuzz = 'FizzBuzz';
    const fizz = 'Fizz';
    const buzz = 'Buzz';

    // If cycle

        //Check if is mutiple with 3 and 5
        if (i % 3 === 0 && i % 5 === 0)  {

            console.log(fizzBuzz); 
            multipleBlock.innerHTML = fizzBuzz;

        } //Check if is mutiple with 3
        else if (i % 3 === 0) {

            console.log(fizz);
            multipleBlock.innerHTML = fizz;

        } //Check if is mutiple with 5
        else if (i % 5 === 0) {

            console.log(buzz);
            multipleBlock.innerHTML = buzz;

        }  //Else return a normal value of the list
        else {
            console.log(i);
            multipleBlock.innerHTML = i;
        }

        containerBlocks.appendChild(multipleBlock);
}   







