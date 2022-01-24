// UI 
// search bar 
const searchel = document.querySelector(".search"),
      searchinputel = document.querySelector('.searchinpu'),
      searchbtnel = document.querySelector('.searchbtn');

searchbtnel.addEventListener('click', ()=>{
    searchel.classList.toggle('active');
    inputel.focus();
})

// Link to sections 
const dashboardlink = document.getElementById('dashboard-link'),
    profilelink = document.getElementById('profile-link'),
    inboxlink = document.getElementById('inbox-link'),
    locationlink = document.getElementById('location-link'),
    managelink = document.getElementById('manage-link'),
    loginlink = document.getElementById('login-link'),
    upgradelink = document.getElementById('upgrade-link');

const dashboard = document.getElementById('dashboard'),
    profile = document.getElementById('profile'),
    inbox = document.getElementById('inbox'),
    contact = document.getElementById('contact'),
    manage = document.getElementById('manage-table'),
    login = document.getElementById('login'),
    upgrade = document.getElementById('upgrade');

const breadcrumb = document.querySelector('.bc-active');


dashboardlink.addEventListener('click',()=>{
    profile.style.display = "none";    
    inbox.style.display = "none";
    contact.style.display = "none";    
    manage.style.display = "none";  
    login.style.display = "none";
    upgrade.style.display = "none";

    dashboard.style.display = "block";

    breadcrumb.innerText="Dashboard";

})

profilelink.addEventListener('click',()=>{
    dashboard.style.display = "none";    
    inbox.style.display = "none";
    contact.style.display = "none";    
    manage.style.display = "none";  
    login.style.display = "none";
    upgrade.style.display = "none";

    profile.style.display = "block";

    breadcrumb.innerText="Profile";
})
    
inboxlink.addEventListener('click',()=>{
    dashboard.style.display = "none";    
    profile.style.display = "none";
    contact.style.display = "none";    
    manage.style.display = "none";  
    login.style.display = "none";
    upgrade.style.display = "none";
    
    inbox.style.display = "block";

    breadcrumb.innerText="Inbox";
})
    
locationlink.addEventListener('click',()=>{
    dashboard.style.display = "none";    
    inbox.style.display = "none";
    profile.style.display = "none";    
    manage.style.display = "none";  
    login.style.display = "none";
    upgrade.style.display = "none";
    
    contact.style.display = "block";

    breadcrumb.innerText="Location";
})
    
managelink.addEventListener('click',()=>{
    dashboard.style.display = "none";    
    inbox.style.display = "none";
    contact.style.display = "none";    
    profile.style.display = "none";  
    login.style.display = "none";
    upgrade.style.display = "none";
    
    manage.style.display = "block";

    breadcrumb.innerText="Tables";
})
    
loginlink.addEventListener('click',()=>{
    dashboard.style.display = "none";    
    profile.style.display = "none";
    contact.style.display = "none";    
    manage.style.display = "none";  
    profile.style.display = "none";
    upgrade.style.display = "none";
    
    login.style.display = "block";

    breadcrumb.innerText="Login";
})
     
upgradelink.addEventListener('click',()=>{
    dashboard.style.display = "none";    
    profile.style.display = "none";
    contact.style.display = "none";    
    manage.style.display = "none";  
    profile.style.display = "none";
    login.style.display = "none";
    
    upgrade.style.display = "block";

    breadcrumb.innerText="Upgrade";
})
    