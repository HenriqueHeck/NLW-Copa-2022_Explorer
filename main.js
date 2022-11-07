function createGame(team1, hour, team2) {
  return `
                    <li>
                        <img src="/assets/icon-${team1}.svg" alt="Logo ${team1}">
                        <strong> ${hour}</strong>
                        <img src="/assets/icon-${team2}.svg" alt="Logo ${team2}">     
                    </li> 
  `
}

let delay = -0.3;
function createCard(data, dia, jogo) {
  delay = delay + 0.3;
  return `<div class="card-1" style="animation-delay: ${delay}s">
                <h2> ${data} <span> ${dia} </span> </h2>
                <ul>
                    ${jogo} 
                </ul>
            </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard("24/11", "SEGUNDA", createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "SEGUNDA", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "SEXTA", createGame("brazil", "16:00", "cameroon"))
