const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('Name='))
  .split('=')[1];

function readCookie() {
    document.getElementById("nameOutput").innerText = `Welcome ${cookieValue}, Pick your Quiz!`
    document.getElementById("backLink").innerHTML = `Not ${cookieValue}? <a onclick = 'clearListCookies()' href="/index.html"> Change login</a>`
}

function clearListCookies(){
  var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++){   
          var spcook =  cookies[i].split("=");
          document.cookie = spcook[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;";                                
      }
  }