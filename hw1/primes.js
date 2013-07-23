#!/usr/bin/env node

//based on sieve of eratosthenes, from wiki
//input very large number to ensure get first 100
var setup = function(n) {
  //setup arr - 
  var primeArr = [];
  for(var i=1; i<n; i++) {
    var isPrime = true;
    primeArr.push(isPrime);
  }
  return primeArr;
};

var find_primes = function(n) {
  var sieve = setup(1000);
  var primes = [];

  for(var i = 2; i < n; i++) {

    if(sieve[i] == true) {
      //add this number to primes array
      primes.push(i);

      //now mark all multiples of i as false
      for(var j = 2; j < n; j++) {
	sieve[j*i] = false;
      }
    }
  }
  //console.log(sieve);
  return primes;
};

//Print to console

var n = 1000;
var primes = find_primes(n);

var count = 0;
for(var i = 0; i < primes.size && count<101; i++) {
  if(count < 99) {
    console.log(i+",");
  } else {
    console.log(i);
  }
  count++;
}




