window.onload = function(){
    let home_nav = document.querySelector("#home_nav");
    let deals_nav = document.querySelector("#deals_nav");
    let people_nav = document.querySelector("#people_nav");
    let hiring_nav = document.querySelector("#hiring_nav");
    let profile_nav = document.querySelector("#profile_nav");
    let login_nav = document.querySelector("#login_nav");
    let signup_nav = document.querySelector("#signup_nav");
    let logout_nav = document.querySelector("#logout_nav");

    hiring_nav.style.display = "none";
    q=JSON.parse(localStorage.getItem('login')) || []; //to get the value stored under login key. I have already coded to push the login data to localstorage on login page
    if(q.length>0){
      //show all menu bar
      profile_nav.style.display = "";
      deals_nav.style.display = "";
      signup_nav.style.display = "none";
      login_nav.style.display = "none";
      // logout dsplay
      logout_nav.style.display = "";
    }
    else{
      //show only login, signup and people
      //  hide profile and deals
      profile_nav.style.display = "none";
      deals_nav.style.display = "none";
      signup_nav.style.display = "";
      login_nav.style.display = "";
      logout_nav.style.display = "none";
      
    }
};

function logout(){
    localStorage.removeItem("login");
    let address_bar = location.href.slice(location.href.length-10,location.href.length);
    if(address_bar == 'index.html'){
        location.reload();
    }
    else{
        window.open('../index.html','_self');
    }
}