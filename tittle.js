//nav
const navIcon = document.getElementById('navIcon')
const nav = document.getElementById('navsub')
nav.style.display = 'none'
navIcon.addEventListener('click', () => {
  if(nav.style.display == 'none') {
    navIcon.classList.add('cross')
    nav.style.display = 'block'
  } else {
    navIcon.classList.remove('cross')
    nav.style.display = 'none'
  }
})
////////////////////////////////

//section
const sectionCalc = document.querySelector('.calc')
const subSection = document.querySelector('.subSection')
const firstMoveSection = document.querySelector('.firstMove')

subSection.style.display = 'none'
sectionCalc.addEventListener('click', () => {
  if(subSection.style.display == 'none') {
    subSection.style.display = 'block'
    subSection.style.top = '194px'
    firstMoveSection.style.marginTop = '110px'
  } else {
    subSection.style.display = 'none'
    subSection.style.top = '50px'
    firstMoveSection.style.marginTop = '0'
  }
  
})