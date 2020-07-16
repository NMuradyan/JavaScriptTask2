//first
let num=5478

if (num%2 == 0) {
    alert ("Number is even")
}else {
    alert ("Number is odd")
}

//second
let num=29;
let sum=0;

for (i=1; i<=num; i++) {
    if (i%2 !== 0) {
        sum+=i
    }
}
alert (sum);

//third
let num1=78;
let num2=154;
let num3=111;

if (num1 < num2 && num2 < num3) {
    alert ('In bounds')
} else {
    alert ('Out of bounds')
}

//fourth
let sideA=23;
let sideB=12;
let sideC=31;

if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    alert ('Yes')
} else {
    alert ('NO')
}