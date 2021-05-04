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

const sectionInfo = document.querySelector('.info')
const subSec = document.getElementById('subSec')
const footerSection = document.querySelector('.footer')

showSection(subSection, sectionCalc, firstMoveSection)
showSection(subSec, sectionInfo, footerSection)

function showSection(sectionDown, clickSection, marginSection) {
  sectionDown.style.display = 'none'
  clickSection.addEventListener('click', () => {
    if(sectionDown.style.display == 'none') {
      sectionDown.style.display = 'block'
      sectionDown.style.top = '194px'
      marginSection.style.marginTop = '110px'
    } else {
      sectionDown.style.display = 'none'
      sectionDown.style.top = '50px'
      marginSection.style.marginTop = '0'
    }
  })
}