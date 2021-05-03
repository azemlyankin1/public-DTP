 
  let trigger = 1

  const submit = document.querySelector('.btn')
  submit.addEventListener('click', (event) => {
    
     

    const breakCar = +document.getElementById('break').innerText
    const road = +document.getElementById('road').value
    const car = +document.getElementById('car').value
    const sum = document.getElementById('sum')
    const animateCar = document.querySelector('.animateCar')
    event.preventDefault()
    
    const cost = Math.sqrt((breakCar * road * 254) / car).toFixed(1)
    sum.innerText = cost + ' км/ч'
    animateCar.style.animation = '3s forwards cubic-bezier(0, 0.79, 0.32, 1.01) 0s  alternate move_eye' 

    setTimeout(function() {
      animateCar.style.animation = 0
    }, 3000)

  })
  