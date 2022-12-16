

document.querySelector('#signUp').addEventListener('click',()=>{
  document.querySelector('.popup').classList.add('active')
})

document.querySelector('.remove').addEventListener('click',()=>{
  document.querySelector('.popup').classList.remove('active')
})


fetch('https://db-json-file-production.up.railway.app/students')
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






// fetch('https://db-json-file-production.up.railway.app/meals')
// .then(res=>{
//   return res.json()
// }).then(data=>{
//   //console.log(data);

//  loopImage(data)

// })


// let time = 1000

// function loopImage(items){
//   for(let item of items){
//     imageArray = item.img
//    // console.log(imageArray);
//     let arrayNew =[]
//     arrayNew.push(imageArray)
//     console.log(arrayNew);
//     let i = 0
    
//    document.querySelector('.slideshow').src = arrayNew[i]
//     if(i<arrayNew.length -1){
//         i++
//     }else{
//       i =0 
//     }
   
    
//   }
//  setTimeout('loopImage()',time)
// }




// function displayImages(images){

// }



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

  fetch('https://db-json-file-production.up.railway.app/signups',config).then(res=>{
    return res.json()
  }).then(data=>{
    console.log(data);
  }).catch(error=>console.log(error))
  
})