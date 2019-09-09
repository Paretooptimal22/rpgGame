// hp, ap, cp
let playerHealth = 100
let cpuHealth = 100
let attack = ``
let counter = ``

// render fighters
const renderFighters = () => {
  document.getElementById(`fighters`).innerHTML = ``
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * 10) + 1
    let fighterElem = document.createElement(`div`)
    fighterElem.className = `col s3`
    fighterElem.innerHTML = `
    <div class="card">
      <div class="card-image">
        <img class="fighter" src="./assets/images/fighter${i + 1}.jpg" data-value="${random}">
      </div>
    </div>
    `
    document.getElementById(`fighters`).append(fighterElem)
  }
}

renderFighters()
