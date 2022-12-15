

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