$('#order').submit(function(){
    var size = document.getElementById('sizes').value;
    var type =document.getElementById('type').value
    var topping = document.getElementById('toppings').value;
    var cheese = document.getElementById('cheesee').value;
    var t = (parseInt(size)+parseInt(topping)+parseInt(cheese))
    document.getElementById('totalss').innerText = t;
    document.getElementById('size').innerText = size;
    document.getElementById('types').innerText =type
    $('#testss').show();
    return false;
})