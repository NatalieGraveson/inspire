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

  //convert(kelvin) {
  //  this.kelvin = - 273.15
  // return this.kelvin
  // console.log(this.kelvin)
  //}

  get Template() {
    return `
    <h2>location:${this.city}<h2>
    <h2>temp:${this.temp}</h2>
  `
  }

}