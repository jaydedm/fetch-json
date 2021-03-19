// TODO: add code here
window.addEventListener("load", () => {
  const json = fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then((response) =>
    response.json().then((responseJSONArray) => {

      console.log(responseJSONArray)
      const div = document.getElementById("container")

      let webPage = '';

      const buildAstronautCard = (astronaut) => {
        return `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
            `;
      }

      for (astronaut of responseJSONArray) {
          const newCard = buildAstronautCard(astronaut)
          console.log(newCard)
          webPage += newCard
        }
        
        console.log('webpage', webPage)
      div.innerHTML = webPage
    })
  )
})
