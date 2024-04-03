import axios from "axios"
import { useState } from "react"

export default function App()
{
    const [deg,setdeg]=useState("0")
    const [city,setcity]=useState("France")
    const [desc,setdesc]=useState("Raining")
    const [enteredvalue,setenteredvalue]=useState("")

    function handleInput(event){
        console.log(event.target.value);
        setenteredvalue(event.target.value);
    }

    function getdata(){
        var weather=axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=234b6c8abc6b72959079b16981cc4fdb`)

        weather.then(function(dalta){
            setdeg(dalta.data.main.temp);
            setdesc(dalta.data.weather[0].main);
            setcity(dalta.data.name);
        }) 
    }
    return(
    <div className="flex flex-row justify-center h-[100vh] items-center" >
        <div style={{backgroundImage:"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"}} className="p-2 rounded-md shadow">
            <h2 className="font-medium">Hey!⛅</h2>
            <p className="text-xs">Do you want to know the Weather Report</p>
            <input onChange={handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="Cityname?" />

            <br/>

            <button onClick={getdata} className="bg-black text-white rounded-lg p-1 text-xs-mt-2 mt-2">Get Report ⚡</button>
            <p className="text-xs mt-2">Degree:{deg} | City:{city} |Weather:{desc}</p>
        </div>
    </div>
    )
}