let dataForCart = JSON.parse(localStorage.getItem("cartItem"));
let appendDiv = document.querySelector(".hotel-info");
let appenPrice = document.querySelector(".price-section");
let tax = 379;
console.log(dataForCart)
Display(dataForCart);
function Display(data){
    let hotelInfo = `
    <div>
                        <h5>HOTEL INFORMATION</h5>
                    </div>
                    <div class="hotel-details">
                        <div>
                            <h2>${data.hotelName}</h2>
                            <p>CTS 1359 Marol Next to Airport Metro Station entrance no 3 Andheri Kurla Road, ${data.city},
                                India</p>
                        </div>
                        <div class="hotel-img">
                            <img src="${data.innerImage}"
                                alt="" width="100px" height="100px">
                        </div>

                    </div>
                    <div class="htl-info-wrapper">
                        <div class="checking">
                            <div>
                                <h5>CHECK IN</h5>
                                <h2>26 Feb 2023</h2>
                            </div>
                            <div>
                                <h5>1 night</h5>
                            </div>
                            <div>
                                <h5>CHECK OUT</h5>
                                <h2>27 Feb 2023</h2>
                            </div>
                        </div>
                        <!--  -->
                        <div class="book-det">
                            <h4>1 Night</h4>
                            <h4>6 Adults</h4>
                            <h4>2 Rooms</h4>
                        </div>

                    </div>
    `;
    appendDiv.innerHTML += hotelInfo;

    let priceInfo = `
    <div>
                        <h5>PRICE BREAK-UP</h5>
                    </div>
                    
                    <div class="night-det">
                        <div>
                            <h5>2 Rooms
                                x
                                1 Night</h5>
                            <h5>₹ ${data.price}</h5>
                        </div>
                        <div>
                            <h5>Hotel Taxes</h5>
                            <h5>₹ ${tax} gst</h5>
                        </div>
                        <div>
                            <h4>Total Amount to be paid</h4>
                            <h4>₹ ${tax+Number(data.price)}</h4>
                        </div>

                        <div class="pay-btn">
                            <button id="payNow">PAY NOW</button>
                        </div>

                    </div>
    `
    appenPrice.innerHTML = priceInfo;
}
let payNow = document.getElementById("payNow");

payNow.addEventListener("click",()=>{
    alert("Payment Done....")
});
