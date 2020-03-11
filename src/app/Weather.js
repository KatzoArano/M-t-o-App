export class Weather{

    constructor(city, countryCode){
        this.apiKey = 'a672293fe53145b79fcc822b0543f747'
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
      }
    
      changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
      }
}