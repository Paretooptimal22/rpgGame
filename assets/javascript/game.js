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
  cp: 20
}
let fighter4 = {
  name: `Lightning`,
  hp: 165,
  ap: 7,
  cp: 15
}

document.getElementById(`hp1`).innerHTML = `HP: ` + fighter1.hp
document.getElementById(`hp2`).innerHTML = `HP: ` + fighter2.hp
document.getElementById(`hp3`).innerHTML = `HP: ` + fighter3.hp
document.getElementById(`hp4`).innerHTML = `HP: ` + fighter4.hp

// select player event
let playerSelect = () => {
  let clickCount = 0
  document.addEventListener(`click`, event => {
    clickCount = clickCount + 1
    if (clickCount <= 2) {
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
        cp: 20
      }
      let fighter4 = {
        name: `Lightning`,
        hp: 165,
        ap: 7,
        cp: 15
      }
      // Cloud's element
      let cloudElem = document.createElement(`div`)
      // cloudElem.className = `col s3`
      cloudElem.innerHTML = `
      <div class="card" id="cloud">
        <div class="card-image">
          <img class="fighter" src="./assets/images/fighter1.jpg">
          <span class="card-title" id="name1">Cloud</span>
        </div>
      </div>
      `
      // Aeris's element
      let aerisElem = document.createElement(`div`)
      // aerisElem.className = `col s3`
      aerisElem.innerHTML = `
      <div class="card" id="aeris">
        <div class="card-image">
          <img class="fighter" src="./assets/images/fighter2.jpg">
          <span class="card-title" id="name2">Aeris</span>
        </div>
      </div>
      `
      // Sephiroth's element
      let sephElem = document.createElement(`div`)
      // sephElem.className = `col s3`
      sephElem.innerHTML = `
      <div class="card" id="sephiroth">
        <div class="card-image">
          <img class="fighter" src="./assets/images/fighter3.jpg">
          <span class="card-title" id="name3">Sephiroth</span>
        </div>
      </div>
      `
      // Lightning's element
      let lightElem = document.createElement(`div`)
      // lightElem.className = `col s3`
      lightElem.innerHTML = `
      <div class="card" id="lightning">
        <div class="card-image">
          <img class="fighter" src="./assets/images/fighter4.jpg">
          <span class="card-title" id="name4">Lightning</span>
        </div>
      </div>
      `
      // Cloud's Attack Button
      let cloudAttackBtn = document.createElement(`a`)
      cloudAttackBtn.id = `cloudAttack`
      cloudAttackBtn.className = `waves-effect waves-light btn red darken-4`
      cloudAttackBtn.innerHTML = `ATTACK!`

      // Aeris' Attack Button
      let aerisAttackBtn = document.createElement(`a`)
      aerisAttackBtn.id = `aerisAttack`
      aerisAttackBtn.className = `waves-effect waves-light btn red darken-4`
      aerisAttackBtn.innerHTML = `ATTACK!`

      // Sephiroth's Attack Button
      let sephAttackBtn = document.createElement(`a`)
      sephAttackBtn.id = `sephAttack`
      sephAttackBtn.className = `waves-effect waves-light btn red darken-4`
      sephAttackBtn.innerHTML = `ATTACK!`

      // Lightning's Attack Button
      let lightAttackBtn = document.createElement(`a`)
      lightAttackBtn.id = `lightAttack`
      lightAttackBtn.className = `waves-effect waves-light btn red darken-4`
      lightAttackBtn.innerHTML = `ATTACK!`

      // click event to move fighters to battle arena
      // move character to player side
      if (event.target.id === `cloudBtn` && clickCount < 2) {
        document.getElementById(`player`).append(cloudElem)
        document.getElementById(`p1`).innerHTML = ``
        document.getElementById(`select`).innerHTML = `Select Your Opponent!`
        document.getElementById(`playerHeader`).innerHTML = `Your Player`
        document.getElementById(`playerInfo`).innerHTML = `Your HP: ${fighter1.hp}`
        document.getElementById(`attack`).append(cloudAttackBtn)
      } else if (event.target.id === `aerisBtn` && clickCount < 2) {
        document.getElementById(`player`).append(aerisElem)
        document.getElementById(`p2`).innerHTML = ``
        document.getElementById(`select`).innerHTML = `Select Your Opponent!`
        document.getElementById(`playerHeader`).innerHTML = `Your Player`
        document.getElementById(`playerInfo`).innerHTML = `Your HP: ${fighter2.hp}`
        document.getElementById(`attack`).append(aerisAttackBtn)
      } else if (event.target.id === `sephBtn` && clickCount < 2) {
        document.getElementById(`player`).append(sephElem)
        document.getElementById(`p3`).innerHTML = ``
        document.getElementById(`select`).innerHTML = `Select Your Opponent!`
        document.getElementById(`playerHeader`).innerHTML = `Your Player`
        document.getElementById(`playerInfo`).innerHTML = `Your HP: ${fighter3.hp}`
        document.getElementById(`attack`).append(sephAttackBtn)
      } else if (event.target.id === `lightBtn` && clickCount < 2) {
        document.getElementById(`player`).append(lightElem)
        document.getElementById(`p4`).innerHTML = ``
        document.getElementById(`select`).innerHTML = `Select Your Opponent!`
        document.getElementById(`playerHeader`).innerHTML = `Your Player`
        document.getElementById(`playerInfo`).innerHTML = `Your HP: ${fighter4.hp}`
        document.getElementById(`attack`).append(lightAttackBtn)
      //move character to opponent side 
      } else if (event.target.id === `cloudBtn` && clickCount > 1){
        document.getElementById(`opponent`).append(cloudElem)
        document.getElementById(`p1`).innerHTML = ``
        document.getElementById(`select`).innerHTML = `Select Your Opponent!`
        document.getElementById(`oppHeader`).innerHTML = `Your Opponent`
        document.getElementById(`oppInfo`).innerHTML = `Opponent HP: ${fighter1.hp}`
      } else if (event.target.id === `aerisBtn` && clickCount > 1) {
        document.getElementById(`opponent`).append(aerisElem)
        document.getElementById(`p2`).innerHTML = ``
        document.getElementById(`select`).innerHTML = `Select Your Opponent!`
        document.getElementById(`oppHeader`).innerHTML = `Your Opponent`
        document.getElementById(`oppInfo`).innerHTML = `Opponent HP: ${fighter2.hp}`
      } else if (event.target.id === `sephBtn` && clickCount > 1) {
        document.getElementById(`opponent`).append(sephElem)
        document.getElementById(`p3`).innerHTML = ``
        document.getElementById(`select`).innerHTML = `Select Your Opponent!`
        document.getElementById(`oppHeader`).innerHTML = `Your Opponent`
        document.getElementById(`oppInfo`).innerHTML = `Opponent HP: ${fighter3.hp}`
      } else if (event.target.id === `lightBtn` && clickCount > 1) {
        document.getElementById(`opponent`).append(lightElem)
        document.getElementById(`p4`).innerHTML = ``
        document.getElementById(`select`).innerHTML = `Select Your Opponent!`
        document.getElementById(`oppHeader`).innerHTML = `Your Opponent`
        document.getElementById(`oppInfo`).innerHTML = `Opponent HP: ${fighter4.hp}`
      }
    }
  })}
playerSelect()

// click button to attack
const attackOpp = () => {
  if (event.target.id === `cloudAttackBtn`) {
      let ap = fighter1.ap
      document.getElementById(`cloudAttackBtn`).addEventListener(`click`, event => {
        ap = ap + ap
        
      })
      
      
    }
  }









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


