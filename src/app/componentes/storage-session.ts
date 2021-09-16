import { Employee } from "../models/employee";

export class Storage {
    
    iniciarSession(empleado:Employee):any{
        if(empleado){
            let object =  JSON.stringify(empleado);
            localStorage.setItem('user', object);
            return true;
        }else{
            return false;
        }
    }

    isLoggin(){
        if(localStorage.getItem('user')){
            return true;
        }

        return false;
    }

    cerrarSession(){
        localStorage.clear();
    }

    obtenerUsuario(){
        let user = localStorage.getItem('user');
        let empleado:Employee = JSON.parse(user+"");
        return empleado;
    }
}