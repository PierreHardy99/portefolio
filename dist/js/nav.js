var button = document.querySelector('#buttonId');
var navigation = document.querySelector('#navigation');

button.addEventListener('click',function(){

    navigation.classList.toggle("open");
    navigation.animate([{duration: 1000}]);

});