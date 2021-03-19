const asyncFunction = async () => {
  const promiseResponse = await fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  )

  const json = await promiseResponse.json()

  const div = document.getElementById("container")

  let webPage = ""

  const buildAstronautCard = (astronaut) => {
    return `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
            `
  }

  json.forEach((astronaut) => {
    const newCard = buildAstronautCard(astronaut)
    console.log(newCard)
    webPage += newCard
  })

  console.log("webpage", webPage)
  div.innerHTML = webPage
}

asyncFunction()
