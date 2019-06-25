
// const cards = document.querySelectorAll('.card');
// for (const card of cards) {
//   card.addEventListener('click', function(e){
//     const icons = card.childNodes[1];
//     const first = document.querySelectorAll('.one');
//     const second = document.querySelectorAll('.two')
//       console.log(e.detail);
//     if(icons.style.visibility === "visible"){
//     icons.style.visibility = "hidden";
//     }else {
//      icons.style.visibility = "visible";
//  }
// });
// }

// const cards = document.querySelectorAll('.card');
// const first = document.querySelectorAll('.one');
// const second = document.querySelectorAll('.two')
// let count = 0;
// for (const card of cards) {
//   card.addEventListener('click', function(e){
//     const icons = card.childNodes[1];
//     count += 1
//     if(count <= 2) {
//       console.log(first);
//     }else {
//       console.log(second);
//     }
// });
// }



  const cards = document.querySelectorAll('.card-panel');
  const iconEl = document.querySelector('.card-panel');
  

  let count = 0;
  for (const card of cards) {
    card.addEventListener('click', function(e){
      const icons = card.childNodes[1];
      count += 1
      if(count === 1 || icons.style.visibility === "hidden"){
        icons.style.visibility = "visible";
        icons.classList.add('selected-1')
        console.log(icons); 
      }else if (count ===2|| icons.style.visibility === "hidden") {
        icons.style.visibility = "visible";
        icons.classList.add('selected-2')
      }else {
        console.log("it's not your turn");
      };
       
   });
   
  }

  const iconList =document.querySelectorAll('i')
  console.log(iconList)
  let iconArray = Array.from(iconList);
  console.log(iconArray);


const aMatch = function() {
  let firstGuess = document.querySelector('.selected-1') 
  let secondGuess = document.querySelector('.selected-2')
  const iconList =document.querySelectorAll('i')
  

  let iconArray = Array.from(iconList);
  console.log(iconArray);
  iconArray.find(function(icon,index){
    if(icon === icon)
    icon.classList.add('match')
    
  })
}

const cardData = document.getElementsByClassName('.card-panel')[0].getAttribute('dataset-data-icon','redeem');
let iconData = cardData.getAttribute('.data-icon');
console.log(iconData)
 
  //for (let i = 0; i < iconArray.length; i++) {
    // newArray = []
     //iconArray.
  //}
  
  // console.log('i.material-icons.redeem'=== 'i.material-icons.schedule')

  //const iconList =document.querySelectorAll('i')

  
  //console.log(iconList)

  //let iconArray = Array.from(iconList);
  //console.log(iconArray);
  
  // const findIcon = iconArray.filter(function(icon) {
  //     return icon === icon;
  // });
    
  // console.log(findIcon)

  // var icons = document.getElementsByTagName('i');

  // for (let i=0; i< icons.length; i++){
  //   if(icons[i].matches('.r-1')){
  //     console.log("It's a match")
  //   }
  // }




