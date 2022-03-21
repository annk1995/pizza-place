$('#order').submit(function(){
    var size = document.getElementById('sizes').value;
    console.log(size)
    var type =document.getElementById('type').value
    var topping = document.getElementById('toppings').value;
    var cheese = document.getElementById('cheesee').value;
    var t = (parseInt(size)+parseInt(topping)+parseInt(cheese))
   
   
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

    
   $("#checkout").submit(function(event){
       event.preventDefault();
       console.log('hi')
   // $("#choise").toggle();
  });
   
})