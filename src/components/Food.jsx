import React from 'react'

const Food = ({hambre,comida,number}) => {

    function validarNumero(valor){
        if(valor===undefined){
        return 1
        }else{
        return valor}
    }

    return (
        <div>
            {hambre ? "Tengo hambre" : "No tengo hambre"}
            {/* QUE COMIDA QUIERO? */}


            {hambre ? ` quiero comer ${validarNumero(number)} ${comida}` : null}  


        </div>
    )
}

export default Food
