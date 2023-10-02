$(document).ready(function(){
    // index page Js code -----------------------------------------------------------------------------------------------
    var colthingcard = document.getElementById('cothingcadrs')
    var accessriescard = document.getElementById('accessriescard')
    
    
    
    $("#count").text(localStorage.getItem("totalCartItem")) // setting up the cart value
    
    
    
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        autoplay: true,
        margin: 10,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
    
 
          
    function cardmaking(i, data){
      // console.log(data)
      // code for genrating card
      let card =
      `
      <div class= 'card'  >
        <a href="./productpage.html?id=kella" style= "text-decoration:none">
        <img class = 'image' src="./photo1.png" alt="image" />
        <div class="content-wrapper">
          <h3 class="item-name" ><b>Kella tiru<b></h3>
          <h4 class="brand-name">doctor</h4>
          <h5 class="price-tag">Rs2000</h5>
        </div></a>
      </div>
      `
      if(data[i].isAccessory === true){
        accessriescard.innerHTML += card
      }
      else{
        colthingcard.innerHTML += card
      }       
    }
    // Assigning cart value-----
     let cartCount = $("orders-count")
     
    })