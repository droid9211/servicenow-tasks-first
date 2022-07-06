////////////////  1 /////////////
var up = document.getElementById('GFG_UP');
var down = document.getElementById('GFG_DOWN');
var n = 5;
         
up.innerHTML = "Click on the button to calculate" + " the factorial of n.<br>n = " + n;
     
function Factorial(n) {
    var ans=1;       
    for (var i = 2; i <= n; i++)
        ans = ans * i;
        return ans;
}
         
function GFG_Fun() {
        down.innerHTML = Factorial(n);
}

/////////////////// 2 ////////////////

function palindrome() {
	var a= document.getElementById("pa").value;
	var b = "";
	for (i = a.length-1; i >= 0; i--) {
		b = b + a[i]
	}
	if (a == b)
		document.getElementById("pa2"). value = b + " is a Palindrome String ";
	else
		document.getElementById("pa2"). value = b + " is not a Palindrome String";
}

/////////////////// 3 ////////////////

function uniqueCharacters(str)
{
     
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    return true;
}

function unique1() {
var str = document.getElementById("is-unique").value;

if (uniqueCharacters(str) == true)
    document.getElementById("result").innerHTML= str +
                   " has all unique characters" ;
else
    document.getElementById("result").innerHTML= str +
                   " has duplicate characters";
}