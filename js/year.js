let year = document.getElementById('year');
let respuesta = document.getElementById('respuesta')
let btncalcular = document.getElementById('calc')
let actual = 2023;

function calcularEdad() {
    if (year.value !="" ) {
        if (year.value < 1800||year.value > actual)// esta funcion al operar con el "%" nos dara el resto de una division asi que me asegure que la edad no fuera menor que 1800 ya que me podria dar valores diferentes

         {
            return alert("año errado intente con otro")
        }
        else {
            let edad = actual % year.value;
            return year.value = `Usted tiene ${edad} años`;
        }
    }
    else{
        return alert("ingrese el año");
    }

}
btncalcular.addEventListener('click', () => {
    
    calcularEdad();
})

