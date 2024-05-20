//<![CDATA[
    cookieChoices = {};
    const cookieBox = document.querySelector(".cookie-box"),
    acceptBtn = cookieBox.querySelector("button");
    acceptBtn.onclick = ()=>{
      document.cookie = "CookieByKey2Blogging; max-age="+60*60*24*30;
      if(document.cookie){ 
        cookieBox.classList.add("hide"); 
      }else{ 
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieByKey2Blogging");
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
