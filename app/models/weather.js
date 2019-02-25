export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.temp = data.temp || ((data.main.temp - 273.15) * (9 / 5) + 32).toFixed(2)
  }



  get Template() {
    return `
    <div class="card-transparent text-white special-card">
    <div class="card-body">
    <h5 class="card-title">${this.city}</h5>
    <i class="fas fa-temperature-high"
    <h5>${this.temp}</h5>
    </i>
  </div>
</div>
  `
  }

}