function takeInput() {
  let date = document.getElementById("date").value;
  if(date == "")
  {
    alert('Enter a date');
    return false;
  }
  console.log(date);
  let a = date.split("-");
  date = "";
  for(let i=0;i<a.length;i++)
  {
    date += a[i];
  }
  let temp = new Date(document.getElementById("date").value);
  date = "";
  date += (temp.getDate().toString().length == 1) ? "0"+ temp.getDate()  : temp.getDate();
  date += (temp.getMonth().toString().length == 1) ? "0"+ (temp.getMonth() + 1) : temp.getMonth()+1;
  date += temp.getFullYear();
  console.log(date);

  if(isPalindrome(date.toString()))
    document.getElementById('ans').innerHTML = "Your birthday is Pallindrome";
  else
    document.getElementById('ans').innerHTML = "Your birthday not a Pallindrome";
}

function isPalindrome(date) {

  let reverseDate = date.split('').reverse().join('');

  if(reverseDate == date)
    return true
  return false;
}