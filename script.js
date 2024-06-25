/*Enunciado del problema: 
Crea una función fábrica que genere objetos para manejar cuentas bancarias. Cada cuenta bancaria debe tener un saldo inicial y debe permitir 
realizar depósitos y retiros. Los métodos para depositar y retirar dinero deben ser privados, de manera que no puedan ser
accedidos directamente desde fuera del objeto.

La función fábrica debe retornar un objeto con métodos públicos para consultar el saldo y realizar transacciones (depósitos y retiros).

*/

//Función fábrica para crear una cuenta bancaria
function crearCuentaBancaria(saldoInicial){
    //Propiedad privada
    var saldo = saldoInicial;
    //Método privado para depositar dinero
    function depositar(cantidad){
        if(cantidad > 0){
            saldo += cantidad;
        }else{
            console.log("La cantidad a depositar debe ser mayor a cero.");
        }
    }

    //Método privado pasra retirar dinero
    function retirar(cantidad){
        if(cantidad > 0 && cantidad <= saldo){
            saldo -= cantidad;
        }else{
            console.log("La cantidad a retirar debe ser mayor a cero y no exceder el saldo disponible.");
        }
    }
    //Retornamos un objeto con métodos públicos
    return{
        consultarSaldo: function(){
            return saldo;
        },
        realizarDeposito: function(cantidad){
            depositar(cantidad);
        },
        realizarRetiro: function(cantidad){
            retirar(cantidad);
        }
    };
}

    //Ejemplo de uso
    var miCuenta = crearCuentaBancaria(1000);
    console.log("Saldo inicial: " + miCuenta.consultarSaldo());
    miCuenta.realizarDeposito(500);
    console.log("Saldo después del depósito: " + miCuenta.consultarSaldo());
    miCuenta.realizarRetiro(200);
    console.log("Saldo después del retiro: " + miCuenta.consultarSaldo());

    try{
        miCuenta.depositar(100);
    }catch(e){
        console.log(e.message);
    }
    try{
        miCuenta.retirar(100);
    }catch(e){
        console.log(e.message);
    }
