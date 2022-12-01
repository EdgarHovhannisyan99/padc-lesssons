import axios from 'axios'

export class CardService {
  weather = {
    country: 'Armenia',
    temperature: 5
  }
  constructor() {
    // this.weather = this.getWeather()
  }

  // async getWeather(): Promise<any> {
  //  await axios.get('https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=HuFcd5HwRL6l3oOMfm3D6Pz598lHW1kM').then((response) => {
  //    return response.data;
  //  })
  //   return
  // }
}
