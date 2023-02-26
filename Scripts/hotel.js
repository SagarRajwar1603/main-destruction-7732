let cardBody = document.getElementById("cardImpl");
let TempData ;
let TempArray = [];
let city = localStorage.getItem("cityHotel")
console.log(city)
fetch(`https://hotel-api-test.onrender.com/hotel`)
.then(res=>res.json())
.then((data)=>{
    // console.log(data.delhi)
    TempData = data;
    // console.log(TempData)
    TempArray = [...data[city]]
    Display(data[city],city)
    // console.log(data.delhi)
})
.catch((err)=>{
    console.log(err)
})

let select = document.getElementById("sel");
select.addEventListener("change",()=>{
    if(select.value=="goa")
    {
        TempArray = [...TempData.goa];
        Display(TempData.goa,"Goa")
    }
    else if(select.value=="mumbai")
    {
        TempArray = [...TempData.mumbai];
        Display(TempData.mumbai,"Mumbai")
    }
    else if(select.value=="guwahati")
    {
        TempArray = [...TempData.guwahati];
        Display(TempData.guwahati,"Guwahati")
    }
    else if(select.value=="delhi")
    {
        TempArray = [...TempData.delhi];
        Display(TempData.delhi,"Delhi")
    }
})


function Display(data,city)
{
    cardBody.innerHTML = "";
    let hOne = `<h1>Showing Properties in ${city}</h1>`
    let cardItems = data.map((item)=>{
        // console.log(item)
        return `
        <div class="second_part" onClick="goToHotelInner(${item.id})"> 
            <div>
               <img src="${item.innerImage}" alt="">
           </div>
           <div>
               <span class="place">${item.hotelName}</span>
               <p class="innerPtags">Free Cancelation till 4hr before Check-In</p>
               <p class="innerPtags">BreakFast Included</p>
               <p class="innerPtags">Couple Friendly</p>
           </div>
         <div class="price">
            <p>Per Night Price :</p>
            <p>+ ₹ ${item.price} taxes & fees</p>
            <p>Rating</p>
            <div id="rating">${item.rating}</div>
            
         </div>
           </div>
        `

    }).join("");
    cardBody.innerHTML+=hOne
    cardBody.innerHTML += cardItems;

    
}

function goToHotelInner(id) {
    // console.log(id)
    let localData = TempArray.find((item)=>{
        if(item.id==id)
        {
            return item;
        }
    })
    console.log(localData)
    localStorage.setItem("item",JSON.stringify(localData));
    window.location.href="../hotel_inner.html"
}


