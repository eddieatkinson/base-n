var numberDigits = [];
var alphaDigits = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (let i = 0; i < 10; i++){
	numberDigits.push(`${i}`);
}
var allDigits = numberDigits.concat(alphaDigits);

var base = 2;

var finalNum = "";

var baseTenNumber = 95;

var numOK = true;
var digitsForBase = []

for(let i = 0; i < base; i++){
	digitsForBase.push(i);
}
var exp = 0;
// var expCounter = 1;
var numLeft = baseTenNumber;
var numTimes;
while(numLeft > 0){
	while(numOK){
		if(Math.pow(base, exp) > numLeft){
			exp--;
			numOK = false;
		}else{
			exp++;
		}
	}
	numTimes = Math.floor(numLeft / Math.pow(base, exp));
	console.log(numTimes);
	finalNum += allDigits[numTimes];
	numLeft -= Math.pow(base, exp);
	console.log(numLeft);
	numOK = true;
}
console.log(finalNum);

