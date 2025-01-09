import axios from "axios";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const weatherApi = async(city: string): Promise<void> => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`;
    const response = await axios.get(url);
    if (!response){
        console.log(chalk.red("Error fetching weather data"));
    }
    const data: any = response.data;
    console.log(chalk.green(`${data.location.name}'s Temperature:-`))
    console.log(chalk.red(`The Temperature is ${chalk.bgGreen(`${data.current.temp_c} C`)}`))
    console.log(chalk.cyan(`The Humidity is: ${data.current.humidity}`))

}

export default weatherApi;