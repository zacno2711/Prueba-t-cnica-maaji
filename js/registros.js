let btnSave = document.getElementById('save');
let btnUpadte = document.getElementById('update');
let btnDelete = document.getElementById('delete');
let btnSearch = document.getElementById('read');
let btnClean = document.getElementById('clean');
let nombre = document.getElementById('name');
let apellido = document.getElementById('lastN');
let telefono = document.getElementById('cel');
let correo = document.getElementById('email');
//div contenedor de la alerta
let message = document.getElementById('message');
//array de objetos donde se guardan los registros
let registros = [
  {name:"pablo",last_name:"zapata",phone:12345,email:"pablo@gmail.com"},
  {name:"michel",last_name:"cano",phone:4056668877,email:"michel@gmail.com"},
  {name:"sara",last_name:"sanchez",phone:7777777,email:"sara@gmail.com"},
  {name:"carolina",last_name:"arteaga",phone:09,email:"carolina@gmail.com"}
];
console.log(registros);

function cleanInputs(){
  nombre.value="";
  apellido.value="";
  telefono.value="";
  correo.value="";
};

//guardar
btnSave.addEventListener('click',()=>{
  if(nombre.value!= ""&&apellido.value!= ""&&telefono.value!= ""&&correo.value!=""){
    let buscarRegistro = registros.find(r => r.name == nombre.value);
      //guardar registro si no encuentra el nombre
      if(buscarRegistro == undefined){
        let nuevoRegistro = {name:nombre.value,last_name:apellido.value,phone:telefono.value,email:correo.value};
        registros.push(nuevoRegistro);
        message.className = "alert alert-success";
        message.textContent = "Registro guardado";
        setTimeout(()=>{
          message.classList.remove('alert-success');
          message.classList.add('d-none');
          },3000)
        cleanInputs();
        console.log(registros);
      }
      //Si lo encontro, no se puede guardar
      else{
         message.className = "alert alert-danger";
         message.textContent = "nombre existente, intente con otro";
         setTimeout(()=>{
          message.classList.remove('alert-danger');
          message.classList.add('d-none');
          },3000)
         
      }
  }
  //ingresar todos los datos 
  else{
    message.className = "alert alert-danger";
    message.textContent = "TODOS LOS CAMPOS SON NECESARIOS";
    setTimeout(()=>{
      message.classList.remove('alert-danger');
      message.classList.add('d-none');
      },3000)
  }
})

//eliminar
btnDelete.addEventListener('click',()=>{
  if(nombre.value != ""){
    let buscarRegistro = registros.find(r => r.name == nombre.value);
    let indexR = registros.findIndex(r => r.name == nombre.value)// guardo el index para poder utilizar el metodo splice
    if(buscarRegistro == undefined){
      message.className = "alert alert-danger";
      message.textContent = "Es necesario que el nombre exista para poder eliminarlo";
      //eliminar alerta
      setTimeout(()=>{
        message.classList.remove('alert-danger');
        message.classList.add('d-none');
        },3000)
    }
    else{
      if (confirm(`Está seguro de eliminar el registro con con nombre "${nombre.value}" ?`)){
        registros.splice(indexR,1);
        cleanInputs();
        message.className = "alert alert-success";
        message.textContent = "Registro eliminado";
      //eliminar alerta
        setTimeout(()=>{
          message.classList.remove('alert-success');
          message.classList.add('d-none');
          },3000)
          console.log(registros);
    }
    }
  }
  else{
    message.className = "alert alert-danger";
    message.textContent = "Ingrese el nombre del registro que desea eliminar";
    //eliminar alerta
    setTimeout(()=>{
      message.classList.remove('alert-success');
      message.classList.add('d-none');
      },3000)
  }
})

//buscar
btnSearch.addEventListener('click',()=>{
  if(nombre.value != ""){
      let buscarRegistro = registros.find(r => r.name == nombre.value);
      if(buscarRegistro != undefined){
        apellido.value=buscarRegistro.last_name;
        telefono.value=buscarRegistro.phone;
        correo.value=buscarRegistro.email;
      }
      else{
        message.className = "alert alert-danger";
        message.textContent = "Registro no encontado";
        //eliminar alerta
        setTimeout(()=>{
          message.classList.remove('alert-success');
          message.classList.add('d-none');
          },3000)
      }
  }
  else{
    message.className = "alert alert-danger";
    message.textContent = "Ingrese el nombre del registro que quiere buscar";
    //eliminar alerta
    setTimeout(()=>{
      message.classList.remove('alert-success');
      message.classList.add('d-none');
      },3000)
  }
})

//actualizar
btnUpadte.addEventListener('click',()=>{
  if(nombre.value != ""&&apellido.value!= ""&&telefono.value!= ""&&correo.value!=""){
    let buscarRegistro = registros.find(r => r.name == nombre.value);
    let registroAC = {name:nombre.value,last_name:apellido.value,phone:telefono.value,email:correo.value};//creo un nuevo objeto con los valores actualizados
    let indexR = registros.findIndex(r => r.name == nombre.value)// guardo el index para poder utilizar el metodo splice
    if(buscarRegistro!=undefined){
      registros.splice(indexR,1,registroAC);//remplazo objeto en la posicion "indexR" con el nuevo objeto "registroAC"
      message.className = "alert alert-success";
      message.textContent = "Registro actualizado";
      //eliminar alerta
      setTimeout(()=>{
        message.classList.remove('alert-success');
        message.classList.add('d-none');
        },3000)
        console.log(registros);
  
    }
    else{
      message.className = "alert alert-danger";
      message.textContent = `registro con nombre ${nombre.value} no se puede actualizar por que no existe`;
      //eliminar alerta
      setTimeout(()=>{
        message.classList.remove('alert-danger');
        message.classList.add('d-none');
        },3000)
    }
  }
  else{
    message.className = "alert alert-danger";
    message.textContent = "todos los campos son necesarios para actualizar";
    //eliminar alerta
    setTimeout(()=>{
      message.classList.remove('alert-danger');
      message.classList.add('d-none');
      },3000)
  }

})

//limpiar campos
btnClean.addEventListener('click',()=>{
  cleanInputs();
})