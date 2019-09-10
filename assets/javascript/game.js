// fighter stats
let fighter1 = {
    name: `Cloud`,
    hp: 175,
    ap: 5,
    cp: 10
  }
  let fighter2 = {
    name: `Aeris`,
    hp: 200,
    ap: 4,
    cp: 5
  }
  let fighter3 = {
    name: `Sephiroth`,
    hp: 185,
    ap: 6,
    cp: 30
  }
  let fighter4 = {
    name: `Lightning`,
    hp: 155,
    ap: 7,
    cp: 20
  }

document.getElementById(`hp1`).textContent = `HP: ` + fighter1.hp
document.getElementById(`hp2`).textContent = `HP: ` + fighter2.hp
document.getElementById(`hp3`).textContent = `HP: ` + fighter3.hp
document.getElementById(`hp4`).textContent = `HP: ` + fighter4.hp



// render fighters
// const renderFighters = () => {
  
//   document.getElementById(`fighters`).innerHTML = ``
//   for (let i = 0; i < 4; i++) {
//     let fighterElem = document.createElement(`div`)
//     fighterElem.className = `col s3`
//     fighterElem.innerHTML = `
//     <div class="card">
//       <div class="card-image">
//         <img class="fighter" id="fighter${i + 1}" src="./assets/images/fighter${i + 1}.jpg">
//         <span class="card-title" id="name${i + 1}"></span>
//       </div>
//     </div>
//     `
//     document.getElementById(`fighters`).append(fighterElem)
//     document.getElementById(`name1`).textContent = fighter1.name
//     document.getElementById(`name2`).textContent = fighter2.name
//     document.getElementById(`name3`).textContent = fighter3.name
//     document.getElementById(`name4`).textContent = fighter4.name
    
//   }

// }
// renderFighters()


