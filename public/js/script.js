const continents = document.getElementById("continents");
continents.addEventListener("change", (e) => {
  sendDataToServer(e.target.value);
});

async function sendDataToServer(value) {
  try {
    const data = { Continent: value };
    const response = await axios.post("/grabCountries", data);
    populateUI(response.data);
  } catch (error) {
    console.log(error);
  }
}

function populateUI(data){
 const countriesEl = document.getElementById("countries");
   countriesEl.style.display= 'block'
      let countries;

      for (let i = 0; i < data.length; i++) {
        countries += `<option value="${data[i]}">${data[i]}</option> `;
      }
      countriesEl.innerHTML = `

                 <div class="form-group" id="countries">
                <label for="countries">Countries:</label>
                <select name="countries">
                      ${countries}
                </select>
            </div>

       `;


}


