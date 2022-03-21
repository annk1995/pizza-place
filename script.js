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
    document.getElementById('toppingss').innerText =topping;
    

    $('#testss').show();
    return false;
})