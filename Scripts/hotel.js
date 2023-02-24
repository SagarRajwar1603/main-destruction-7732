let cardBody = document.getElementById("cardImpl");

fetch(`https://hotel-api-test.onrender.com/hotel`)
.then(res=>res.json())
.then((data)=>{
    console.log(data.delhi)
    Display(data.delhi)
})
.catch((err)=>{
    console.log(err)
})
function Display(data)
{
    cardBody.innerHTML = "";
    let cardItems = data.map((item)=>{
        return `
        <div class="second_part"  onClick="goToHotelInner(${item})">    
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
            <p>₹ 1,35,000</p>
            <p>+ ${item.price}taxes & fees</p>
            <p>Per Night</p>
            <span>No Cost</span>
            <span>EMI</span>
            <p>starts at
                <span>₹ 26,550</span>
            </p>
         </div>
           </div>
        `

    }).join("");
    cardBody.innerHTML = cardItems;

    
}

function goToHotelInner(item){
    console.log(item)
    // localStorage.setItem("hotelInnerData",something );
    // window.location.href = "../hotel_inner.html"
}