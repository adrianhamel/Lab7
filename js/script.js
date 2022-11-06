function init(){

	function alertbox(){
    var enter = document.getElementById('entryinput');
    var output = document.getElementById('textoutput');

    output.innerHTML = enter.value;
    alert('Adrian Hamel: ' + enter.value);
}
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', alertbox);
}
window.addEventListener('load', init);