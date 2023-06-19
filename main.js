let form = document.querySelector("form");
let input = document.querySelector("input");
let cel = document.querySelector(".cel");
let fer = document.querySelector(".fer");
let container = document.querySelector(".container-fluid")
let iconn = document.querySelector(".icon")
let humi = document.querySelector(".humidd")
let con = document.querySelector(".conn")
let km = document.querySelector(".km")
let mp = document.querySelector(".mp")
let oo = document.querySelector(".coo")
let no = document.querySelector(".noo")
let o3 = document.querySelector(".o3")
let soo = document.querySelector(".so2")
let con5 = document.querySelector(".container5")
let pres = document.querySelector(".pree")
let cety = document.querySelector(".cityy")
let regi = document.querySelector(".reg")
let conty = document.querySelector(".contr")











const weatherapp = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=32b39c4a2e34451099d164858231406&q=${input.value}&aqi=yes`);
    const data = await response.json();
    console.log(data);
   
    const cell = data.current.temp_c;
    console.log(cell);
    cel.innerHTML = `${cell}℃`
    const ferr = data.current.temp_f;
    console.log(ferr);
    fer.innerHTML = `${ferr}°F`
    // document.createElement('img')
    let img = document.createElement('img')
    img.setAttribute('src' , `${data.current.condition.icon}`)
    iconn.appendChild(img)

    const humid = data.current.humidity;
    console.log(humid);
    humi.innerHTML = `${humid}%`
    const connn = data.current.condition.text;
    console.log(connn);
    con.innerHTML = (connn);
    const kmphh = data.current.gust_kph
    console.log(kmphh);
    km.innerHTML = kmphh
    const mphh = data.current.gust_mph
    console.log(mphh);
    mp.innerHTML = mphh
    const cooo = data.current.air_quality.co
    console.log(cooo);
    oo.innerHTML = cooo
    const nooo = data.current.air_quality.no2
    console.log(nooo);
    no.innerHTML = nooo
    const oooo = data.current.air_quality.o3
    console.log(oooo);
    o3.innerHTML = oooo
    const soooo = data.current.air_quality.so2
    console.log(soooo);
    soo.innerHTML = soooo
    const pressur = data.current.pressure_in
    console.log(pressur);
    pres.innerHTML = pressur
    const cityyyy = data.location.name
    console.log(cityyyy);
    cety.innerHTML = cityyyy
    const regionnn = data.location.region
    console.log(regionnn);
    regi.innerHTML = regionnn
    const contryyyy = data.location.country
    console.log(contryyyy);
    conty.innerHTML = contryyyy


    if ( cell>= 5 && cell < 15) {
        con5.style.backgroundImage = "url('https://images.pexels.com/photos/16250632/pexels-photo-16250632/free-photo-of-a-house-in-the-mountains-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

    } 
     else if (cell >= 15 && cell < 20) {
         con5.style.backgroundImage = "url('https://www.pexels.com/photo/beach-black-and-white-clouds-dawn-414491/')";
       
   
        }
        else if (cell >= 20 && cell < 25) {
            con5.style.backgroundImage = "url('https://www.pexels.com/photo/scenic-view-of-clouds-during-dawn-1269777/')";
    
    
            
        }
        else if (cell >= 25 && cell < 30) {
            con5.style.backgroundImage = "url('https://images.pexels.com/photos/164266/pexels-photo-164266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";

                 
        }
        else if (cell >= 30 && cell < 50) {
            con5.style.backgroundImage = "url('https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";

            
        }
        else {
            con5.style.backgroundImage = "url('BG1.jpg')";
        }
        
        

       
        
        


     


























    form.reset();
// iconn.removeChild(img)

};

form, addEventListener("submit", weatherapp)


let hr = document.querySelector(".hour")
let mn = document.querySelector(".min")
let se = document.querySelector(".sec")
let dddd = document.querySelector(".day")
let jan = document.querySelector(".month")
let one = document.querySelector(".date")
let two = document.querySelector(".year")





function clock() {
    let time = new Date();
    // console.log(time);

    let hour = time.getHours();
    // console.log(hour);
    hr.innerHTML = hour;

    let min = time.getMinutes();
    // console.log(min);
    mn.innerHTML = min;

    let sec = time.getSeconds();
    // console.log(sec);
    se.innerHTML = sec;

    let dd = time.getDay();
    let mnth = time.getMonth();
    // console.log(mnth);
    let datee = time.getDate();
    let yearr = time.getFullYear();










    let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayss = [weeks[dd]]
    // console.log(values);
    dddd.innerHTML = dayss;

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let mnn = [months[mnth]]
    // console.log(mnn);
    jan.innerHTML = mnn

    one.innerHTML = datee;
    two.innerHTML = yearr;






}

clock()



function initialtime() {

    window.setInterval('clock()' , 1 )
}