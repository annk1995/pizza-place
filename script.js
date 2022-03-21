$('#order').submit(function(event){
    event.preventDefault();
    var size = document.getElementById('sizes').value;
    console.log(size)
    var type =document.getElementById('type').value
    var topping = document.getElementById('toppings').value;
    var cheese = document.getElementById('cheesee').value;
    var delivery = document.getElementById('delivery').value;
    var t = (parseInt(size)+parseInt(topping)+parseInt(cheese)+parseInt(delivery))
   
   
    document.getElementById('totalss').innerText = t;
   //document.getElementById('sizes:selected').innerText  
if (size == "400"){

    document.getElementById('size').innerText = "small"
}else if (size == "600"){

    document.getElementById('size').innerText = "medium"
}else{
    document.getElementById('size').innerText = "large"
}
    document.getElementById('types').innerText =type;
   // document.getElementById('toppingss').innerText =topping;
   if (topping == "250"){
       document.getElementById('toppingss').innerText = "pineapple"
   }else if  (topping == "100"){
    document.getElementById('toppingss').innerText = "cheese"
   }else{
    
        document.getElementById('toppingss').innerText = "chicken"
   }
   document.getElementById('cheese').innerText="cheesee"
   if (delivery == "250"){
       document.getElementById('deliverys').innerText = "nairobi"
   }else{
        document.getElementById('deliverys').innerText = "Thika"
   }

    $('.choise').show();
   
})

$(document).ready(function() {
    $('#contactUs').submit(function(event) {
        var myName = $('#name').val();
        var myEmail = $('#email').val();
        var comment = $('#textarea').val();
  
        if (myName === '' || myEmail === '' || comment === '') {
            alert('Please fill in the required data');
        } else {
            alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
        }
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#textarea').val('');
    });
  });