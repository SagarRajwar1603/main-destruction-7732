let cardBody = document.getElementById("cardImpl");
let TempData=[] ;
let TempArray = [];
let priceFilter = document.getElementById("seclect_trip");

let city = localStorage.getItem("cityHotel")
// console.log(city)
fetch(`https://hotel-api-test.onrender.com/hotel`)
.then(res=>res.json())
.then((data)=>{
    TempData = [...data];
    // console.log(TempData)
    filterByCity(data,city);
})
.catch((err)=>{
    console.log(err)
})

let select = document.getElementById("sel");
select.addEventListener("change",()=>{
    if(select.value=="goa")
    {
        localStorage.setItem("cityHotel",select.value);
        filterByCity(TempData,"goa")
    }
    else if(select.value=="mumbai")
    {
        localStorage.setItem("cityHotel",select.value);
        filterByCity(TempData,"mumbai")
    }
    else if(select.value=="guwahati")
    {
        localStorage.setItem("cityHotel",select.value);
        filterByCity(TempData,"guwahati")
    }
    else if(select.value=="delhi")
    {
        localStorage.setItem("cityHotel",select.value);
        filterByCity(TempData,"delhi")
    }
})

function filterByCity(data,city)
{
    let filteredData = data.filter((item)=>{
        if(item.city==city)
        {
            return true;
        }
        else
        {
            return false;
        }
    })
    Display(filteredData,city);
    // console.log(filteredData)

}


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
    console.log(id)
    let localData = TempData.find((item)=>{
        if(item.id==id)
        {
            return item;
        }
    })
    // console.log(localData)
    localStorage.setItem("item",JSON.stringify(localData));
    window.location.href="../hotel_inner.html"
}


// console.log(priceFilter)
priceFilter.addEventListener("change",()=>{
    
    console.log("changing");
    if(priceFilter.value=="high")
    {
    let city = localStorage.getItem("cityHotel")
    let sortedData = TempData.sort((a,b)=>{
        if(Number(a.price)>Number(b.price))
        {
            return 1;
        }
        else if(Number(a.price)<Number(b.price))
        {
            return -1
        }
        return 0;
    });
    // console.log(sortedData)
    Display(sortedData,city);
    }
    else if(priceFilter.value=="low")
    {
    let city = localStorage.getItem("cityHotel")
    let sortedData = TempData.sort((a,b)=>{
        if(Number(a.price)>Number(b.price))
        {
            return -1;
        }
        else if(Number(a.price)<Number(b.price))
        {
            return 1
        }
        return 0;
    });
    // console.log(sortedData)
    Display(sortedData,city);
    }
    
})

