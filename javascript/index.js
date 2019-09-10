for(let number = 1; number <= 100; number ++)
  if(number % 3 === 0 && number % 5 !== 0){
    console.log("nitt");
  }else if(number % 3 !== 0 && number % 5 === 0){
    console.log("san");
  }else if(number % 3 === 0 && number % 5 === 0){
    console.log("nitt-san");
  }else
  console.log(number);
