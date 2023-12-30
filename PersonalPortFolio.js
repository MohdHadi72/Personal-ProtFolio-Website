const hamburger = document.getElementsByClassName(".hamburger");
const navList = document.querySelector('nav ul');

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle('active');
   navList.classList.toggle('active');

});


// dark - light Mode


const darkmodelight = document.getElementById("darkModeButton")

const body = document.body;

const enableDarkMode = () => {
    body.classList.remove('dark-mode');

}

const disableDarkMode = () => {
    body.classList.remove('dark-mode');

}

darkModeButton.addEventListener("change" , () =>{
    if(darkModeButton.checked){
        disableDarkMode();
   
    }
   
    else{
        enableDarkMode();
   
    }


})

// multiple text 

const typed = new Typed('.Multiple',{
    strings:['Fornt-End Developer' , 'Web Designer' , 'Back-End Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});