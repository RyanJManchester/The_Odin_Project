function palindromes(string) {
  let regExp = /[\W_]/g;
  let newStr = string.toLowerCase().replace(regExp, "");
  let rev = newStr.split("").reverse().join("");
  if (rev == newStr) {
    console.log("its a palindrome!");
    return true;
  } else {
    console.log("not a palindrome :/");
    return false;
  }
}

//module.exports = palindromes;
