

document.querySelector('#signUp').addEventListener('click',()=>{
  document.querySelector('.popup').classList.add('active')
})

document.querySelector('.remove').addEventListener('click',()=>{
  document.querySelector('.popup').classList.remove('active')
})


fetch('http://localhost:3000/students')
.then(res=>{
  return res.json()
}).then(data=>{
  console.log(data);
  displayImage(data[0])
})


function displayImage(data){
  document.querySelector('#main_image').setAttribute('src', data.image)
  document.querySelector('#name').innerHTML = data.name
  document.querySelector('#description').innerHTML = data.description
}












let forms = document.querySelector('#form')
forms.addEventListener('submit', (e)=>{
  e.preventDefault()

  let name = document.querySelector('#names').value
  let email = document.querySelector('#emails').value
  let des = document.querySelector('#desig').value

  let obj ={
    name : name,
    email: email,
    des : des
  }



  const config = {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      Accept: "application/json",
    },
    body: JSON.stringify(obj)
  }

  fetch('http://localhost:3000/signups',config).then(res=>{
    return res.json()
  }).then(data=>{
    console.log(data);
  }).catch(error=>console.log(error))
  
})