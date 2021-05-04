const WriteCookie = () => {
    if( document.loginForm.name.value == "" ) {
       alert("Enter some value!");
       return;
    }
      noSpaces = escape(document.loginForm.name.value)
    if( noSpaces.includes('%20')){
       noSpaces = noSpaces.split('%20').join('') 
    }
    cookievalue=  noSpaces + ";";
    document.cookie=("Name=" + cookievalue)
    document.location.href = "pages/menu.html"  
 }

