let cardBody = document.getElementById("cardImpl");
let TempData=[] ;
let TempArray = [];
let priceFilter = document.getElementById("select_price");
let filteredCity = [];
let city = localStorage.getItem("cityHotel")
// console.log(city)
fetch(`https://hotel-api-test.onrender.com/hotel`)
.then(res=>res.json())
.then((data)=>{
    TempData = [...data];
    // console.log(TempData)
    let newData =filterByCity(data,city);
    Display(newData,city)
})
.catch((err)=>{
    console.log(err)
})

let searchBtn = document.querySelector(".src_btn");
let select = document.getElementById("sel")
searchBtn.addEventListener("click",()=>{
    if(select.value=="goa")
    {
        localStorage.setItem("cityHotel",select.value);
        let data = filterByCity(TempData,"goa");
        Display(data,select.value);
    }
    else if(select.value=="mumbai")
    {
        localStorage.setItem("cityHotel",select.value);
        let data = filterByCity(TempData,"mumbai");
        Display(data,select.value);
    }
    else if(select.value=="guwahati")
    {
        localStorage.setItem("cityHotel",select.value);
        let data = filterByCity(TempData,"guwahati");
        Display(data,select.value);
    }
    else if(select.value=="delhi")
    {
        localStorage.setItem("cityHotel",select.value);
        let data = filterByCity(TempData,"delhi");
        Display(data,select.value);
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
    return filteredData;
    // console.log(filteredData)

}


function Display(data,city)
{
    // console.log(data)
    
    cardBody.innerHTML = "";
    let hOne = `<h1>Showing Properties in ${city}</h1>`
    let cardItems = data.map((item)=>{
        // console.log(item)
        let stars = '';
        for(let i=0;i<Number(item.star);i++)
        {
         stars += `<i class="fa-solid fa-star"></i>`
        }
        // console.log(stars)
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
               ${stars}
               
               

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
    
    if(priceFilter.value=="high")
    {
    console.log("changing");

    let city = localStorage.getItem("cityHotel")
    
    let cityWiseData = filterByCity(TempData,city);
    console.log(cityWiseData)
    let sortedData = cityWiseData.sort((a,b)=>{
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
    console.log(sortedData)
    Display(sortedData,city);
    }
    else if(priceFilter.value=="low")
    {
    console.log("changing");

    let city = localStorage.getItem("cityHotel")
    let cityWiseData = filterByCity(TempData,city);
    console.log(cityWiseData)
    let sortedData = cityWiseData.sort((a,b)=>{
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
    else if(priceFilter.value=="ratingHigh")
    {
        let city = localStorage.getItem("cityHotel")
    let cityWiseData = filterByCity(TempData,city);
    console.log(cityWiseData)
    let sortedData = cityWiseData.sort((a,b)=>{
        if(Number(a.star)>Number(b.star))
        {
            return -1;
        }
        else if(Number(a.star)<Number(b.star))
        {
            return 1
        }
        return 0;
    });
    // console.log(sortedData)
    Display(sortedData,city);
    }
    
})