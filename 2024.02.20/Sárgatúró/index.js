let inputFields = document.querySelectorAll('input[type="number"]');

inputFields.forEach(function(input) {
    input.addEventListener('input', function() {
        szamlalo();
    });
});
szamlalo();

function szamlalo(){
    let szam = document.getElementById("bevitel").value;
    
    let tej = 0.2;
    let tojas = 2;
    let cukor = 1;

    if(szam < 1) {
       szam = 1;
    }
    
    document.getElementById("tej").innerHTML = tej * szam;
    document.getElementById("tojas").innerHTML = tojas * szam;
    document.getElementById("cukor").innerHTML = cukor * szam;
}
