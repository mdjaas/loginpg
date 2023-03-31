window.onload = function(){
    let nav_items = document.querySelectorAll(".nav-item");
    let home_nav, deals_nav, people_nav, hiring_nav, profile_nav, login_nav, signup_nav, logout_nav;

    for(let i=0; i<8; i++){
        switch(nav_items[i].innerText){
            case 'Home':
                home_nav = nav_items[i];
                break;
            case 'Deals':
                deals_nav = nav_items[i];
                break;
            case 'People':
                people_nav = nav_items[i];
                break;
            case 'Hiring':
                hiring_nav = nav_items[i];
                break;
            case 'Profile':
                profile_nav = nav_items[i];
                break;
            case 'Login':
                login_nav = nav_items[i];
                break;
            case 'Sign Up':
                signup_nav = nav_items[i];
                break;
            case 'Logout':
                logout_nav = nav_items[i];
                break;
        }
    }

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