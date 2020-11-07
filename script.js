const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

var $buttons = document.querySelectorAll(".button");
var $modals = document.querySelectorAll(".modal");
var $overlay = document.querySelector(".overlay");

var $menuProjects = document.querySelectorAll('.span-menu-projects')

/* Menu burger */
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

/* Affichage des modals */
$buttons.forEach(($button) => {
  $button.addEventListener("click", (event) => {  
    $overlay.classList.add("active");
    var cible_id = $button.dataset.cible;
    var $modal = document.getElementById(cible_id);
    $modal.classList.add("active");
  });
});

$overlay.addEventListener("click", (event) => {
  $overlay.classList.remove("active");
  $modals.forEach(($modal) => {
    $modal.classList.remove("active");
  });
});

/* Filtrer les éléments */
$menuProjects.forEach(buttonProjects => {
  buttonProjects.addEventListener('click', () => {
    $menuProjects.forEach(buttonProjects => {
      buttonProjects.className = ""
    })
    buttonProjects.className = "active"
    //Show div
    let values = buttonProjects.textContent
    $buttons.forEach(show => {
      show.style.display = 'none'
      if(show.getAttribute("data-id") === values || values === "Tout"){
        show.style.display = 'block'
      }
    })
  })
})



