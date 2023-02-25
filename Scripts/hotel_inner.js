let data = JSON.parse(localStorage.getItem("item"));
// console.log(data);
let append = document.getElementById("append");

Display(data);
function Display(item){
    console.log(item)
    append.innerHTML="";
    let dynamicDiv = `
    <div class="body">
    <img src="${item.innerImage[0]}" alt="">
    <div class="smallImageDiv">
    <img src="${item.innerImage[1]}" alt="">
    <img src="${item.innerImage[2]}" alt="">
    </div>
    <div class="detailsDiv">
        <div class="priceDetailDiv">
            <h4>1 King Size Bed,Superiror Room...</h4>
            <p>For 2 Adults Per Night</p>
            <span>Rs ${item.price}</span>
            <p>+ gst,taxes and fees</p>
            <hr>
            <span class="viewRoomMapReview">VIEW OTHER ROOMS</span>
            <button id="bookToCart">BOOK THIS NOW</button>
        </div>
        <div class="locationRatingDiv">
            <div>
                <img src="./Images/hotel_inner_image/map.PNG" alt="">
                <span class="viewRoomMapReview">VIEW ON MAP</span>
            </div>
            <div>
                <div id="rating">${item.rating}</div>
                <p>Excellent Rating</p>
                <hr>
                <span class="viewRoomMapReview">READ ALL REVIEWS</span>
            </div>
        </div>
    </div>
</div>
<h1 id="nameHotelh1">${item.hotelName}</h1>
<div class="lowerNav">
<div class="lowerNavlinks">
    <a href="#">OVERVIEW</a>
    <a href="">ROOMS</a>
    <a href="#location">LOCATION</a>
    <a href="#amendities">AMENITIES</a>
    <a href="#propertyRules">PROPERTY RULES</a>
    <a href="#review">USER REVIEWS</a>
    <a href="">SIMILAR PROPERTIES</a>
</div>
<hr></hr>
</div>
 <div id="detailPart">

 
<div id="location">
    <h3 class="detailHeaderh3">Location</h3>
    <img src="./Images/hotel_inner_image/mapImage.PNG" alt="">
</div>


<div id="amendities">
    <h3 class="detailHeaderh3">Amenities at Aiden by Best Western Vagator</h3>
    <div id="amenDivs">
        <div>
            <img src="https://promos.makemytrip.com/images/highlighted/free_parking.png" alt="">
            <p>Free Parking</p>
        </div>
        <div>
            <img src="https://promos.makemytrip.com/images/highlighted/cafe.png" alt="">
            <p>Cafe</p>
        </div>
        <div>
            <img src="https://promos.makemytrip.com/images/highlighted/bar.png" alt="">
            <p>Bar</p>
        </div>
        <div>
            <img src="https://promos.makemytrip.com/images/highlighted/bar.png" alt="">
            <p>Elevator/Lift</p>
        </div>
        <div>
            <img src="https://promos.makemytrip.com/images/highlighted/air_conditioning.png" alt="">
            <p>Air-Conditioning</p>
        </div>
    </div>
    <hr>
    <div id="amenDivsTwo">
        <div>
            <h4>Basic Facilities</h4>
            <p>- Free Parking</p>
            <p>- Elevator/Lift</p>
            <p>- Air Conditioning</p>
            <p>- Room Service</p>
        </div>
        <div>
            <h4>Transfers</h4>
            <p>- Paid Pickup/Drop            </p>
            <p>- Paid Shuttle Service
            </p>
            <p>- Paid Railway Station Transfers
            </p>
            <p>- Paid Airport Transfers
            </p>
        </div>
        <div>
            <h4>Food and Drinks

            </h4>
            <p>- Cafe
            </p>
            <p>- Bar
            </p>
            <p>- Restaurant
            </p>
            <p>- Dining Area
            </p>
        </div>
        <div>
            <h4>Payment Services

            </h4>
            <p>- Currency Exchange
            </p>
            
        </div>
        <div>
            <h4>Safety and Security

            </h4>
            <p>- Safety and Security
            </p>
            <p>- Security alarms
            </p>
            <p>- Smoke alarms
            </p>
        </div>
        
    </div>
</div>
<div id="propertyRules">
    <h3 class="detailHeaderh3">Property Rules</h3>
    <p>Check-in: 2 PMCheck-out: 11 AM</p>
    <div>
        <div>
            <li>PAN Card and Non-Govt IDs are not accepted as ID proof(s)</li>
            <li>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)</li>
            <li>Property staff is trained on hygiene guidelines</li>
            <li>Pets are not allowed.</li>
            <li>Quarantine protocols are being followed as per local government authorities</li>
            <li>Guests from containment zones are allowed</li>
            <li>Shared resources in common areas are properly sanitized</li>
            <li>Property staff is trained on hygiene guidelines</li>
        </div>
        <div>
            <li>
                Outside food is not allowed</li>
            <li>Does not allow private parties or events</li>
            <li>
                Quarantine protocols are being followed as per local government authorities</li>
            <li>
                Only those guests with safe status on Aarogya Setu app are allowed</li>
            <li>Guests with fever are allowed
            </li>
            <li>Hand sanitizer is provided in guest accommodation and common areas
            </li>
            <li>
                Thermal screening is done at entry and exit points</li>
            <li>Guests below 18 years of age are allowed</li>
            <li>Suitable for children</li>
        </div>
    </div>
</div>

<div id="review">
    <h3 class="detailHeaderh3">User Rating and Reviews</h3>
    <img src="./Images/hotel_inner_image/featureReview.PNG" alt="">
</div>
</div>
    `
append.innerHTML += dynamicDiv;
}