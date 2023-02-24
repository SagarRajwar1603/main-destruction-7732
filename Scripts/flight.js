const fetchServer = "https://relieved-garment-toad.cyclic.app/flight";
 
let flightDataContainer = document.getElementById("flightDataContainer");
let flightFetchedData = [];



fetch(fetchServer)
.then((responseData)=>{
    return responseData.json()
})
.then((actualData)=>{
    flightFetchedData = actualData
    console.log(actualData)
    displayFlightData(actualData)
})
.catch((error)=>{
    console.log(error)
})


function displayFlightData(data){
   flightDataContainer.innerHTML=null;
  data.forEach((element,index)=>{
    
    let maindivFlight = document.createElement("div")
    maindivFlight.setAttribute("class","mainFlightDiv")

    let innerDiv1 = document.createElement("div")
    innerDiv1.setAttribute("class","inner1FlightDiv")
    innerDiv1.innerHTML=`
     <div>
    <img src="${element.image}" alt="">
    <div>
  <h3>${element.name}</h3>
    <p>6E 6172, 6E 6305</p>
  </div>
  </div>`

  let innerDiv2 = document.createElement("div")
  innerDiv2.setAttribute("class","inner2FlightDiv")
  innerDiv2.innerHTML=`
     <div>
    <h2>${element.departureTime}</h2>
    <p>${element.departureLocation}</p>
   </div>`

   let innerDiv3 = document.createElement("div")
   innerDiv3.setAttribute("class","inner3FlightDiv")
   innerDiv3.innerHTML=`
   <div>
   <h3>${element.timeTaken}</h3>
   <hr>
  </div>`

  let innerDiv4 = document.createElement("div")
  innerDiv4.setAttribute("class","inner4FlightDiv")
  innerDiv4.innerHTML=`
     <div>
    <h2>${element.arrivalTime}</h2>
    <p>${element.arrivalLocation}</p>
   </div>`

   let innerDiv5 = document.createElement("div")
   innerDiv5.setAttribute("class","inner5FlightDiv")
   innerDiv5.innerHTML=`
   <div>
   <h2>${element.ticketPrice}</h2>
  </div>`


   let button = document.createElement("button")
   button.innerText="Book Now"

  maindivFlight.append(innerDiv1,innerDiv2,innerDiv3,innerDiv4,innerDiv5,button)
  flightDataContainer.append(maindivFlight)
  })
}