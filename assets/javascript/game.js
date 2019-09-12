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

document.getElementById(`hp1`).innerHTML = `HP: ` + fighter1.hp
document.getElementById(`hp2`).innerHTML = `HP: ` + fighter2.hp
document.getElementById(`hp3`).innerHTML = `HP: ` + fighter3.hp
document.getElementById(`hp4`).innerHTML = `HP: ` + fighter4.hp

// select player event
document.addEventListener(`click`, event => {
  // fighters
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
  // Cloud's element
  let cloudElem = document.createElement(`div`)
  cloudElem.className = `col s6`
  cloudElem.innerHTML = `
  <div class="card" id="cloud">
    <div class="card-image">
      <img class="fighter" src="./assets/images/fighter1.jpg">
      <span class="card-title" id="name1">Cloud</span>
    </div>
    <div class="card-content">
      <p id="hp1">HP: ${fighter1.hp}</p>
    </div>
  </div>
  `
  // Aeris's element
  let aerisElem = document.createElement(`div`)
  aerisElem.className = `col s6`
  aerisElem.innerHTML = `
  <div class="card" id="aeris">
    <div class="card-image">
      <img class="fighter" src="./assets/images/fighter2.jpg">
      <span class="card-title" id="name2">Aeris</span>
    </div>
    <div class="card-content">
      <p id="hp2">HP: ${fighter2.hp}</p>
    </div>
  </div>
  `
  // Sephiroth's element
  let sephElem = document.createElement(`div`)
  sephElem.className = `col s6`
  sephElem.innerHTML = `
  <div class="card" id="sephiroth">
    <div class="card-image">
      <img class="fighter" src="./assets/images/fighter3.jpg">
      <span class="card-title" id="name3">Sephiroth</span>
    </div>
    <div class="card-content">
      <p id="hp3">HP: ${fighter3.hp}</p>
    </div>
  </div>
  `
  // Lightning's element
  let lightElem = document.createElement(`div`)
  lightElem.className = `col s6`
  lightElem.innerHTML = `
  <div class="card" id="lightning">
    <div class="card-image">
      <img class="fighter" src="./assets/images/fighter4.jpg">
      <span class="card-title" id="name4">Lightning</span>
    </div>
    <div class="card-content">
      <p id="hp4">HP: ${fighter4.hp}</p>
    </div>
  </div>
  `

  // click event to move fighters to battle arena
  if (event.target.id === `cloud`) {
    document.getElementById(`arena`).append(cloudElem)
    document.getElementById(`p1`).innerHTML = ``
    document.getElementById(`select`).innerHTML = `Select Your Opponent!`
  } else if (event.target.id === 'aeris') {
    document.getElementById(`arena`).append(aerisElem)
    document.getElementById(`p2`).innerHTML = ``
    document.getElementById(`select`).innerHTML = `Select Your Opponent!`
  } else if (event.target.id === 'sephiroth') {
    document.getElementById(`arena`).append(sephElem)
    document.getElementById(`p3`).innerHTML = ``
    document.getElementById(`select`).innerHTML = `Select Your Opponent!`
  } else if (event.target.id === 'lightning') {
    document.getElementById(`arena`).append(lightElem)
    document.getElementById(`p4`).innerHTML = ``
    document.getElementById(`select`).innerHTML = `Select Your Opponent!`
  } 
})










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


