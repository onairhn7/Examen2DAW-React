import { useState } from 'react';
import axios from 'axios';



export const RegistroSamurai = () => {


    //logica de vista
    const [nombre, setNombre] = useState();

    const [ataque, setAtaque] = useState();

    const [idBando, setIdBando] = useState();

    const [idSexo, setIdSexo] = useState();

    const [idEstiloPelea, setIdEstiloPelea] = useState();

    //
    const nombreHandler = (event)=>{

        const {name, value} = event.target;
        setNombre(value);


    }

    const ataqueHandler = (event)=>{

        const {name, value} = event.target;
        setAtaque(value);


    }

    const idBandoHandler = (event)=>{

        const {name, value} = event.target;
        setIdBando(value);


    }

    const idSexoHandler = (event)=>{

        const {name, value} = event.target;
        setIdSexo(value);


    }

    const idEstiloPeleaHandler = (event)=>{

        const {name, value} = event.target;
        setIdEstiloPelea(value);


    }

    const submitHandler = () =>{

        event.preventDefault();

        const dataSend = {

            nombre : nombre,
            ataque: ataque,
            id_bando: idBando,
            id_sexo : idSexo,
            id_estiloPelea : idEstiloPelea
        }

        console.log (dataSend);


    }


    


 

  return (
    <>
    <div className='container mt-5'>

        <form onSubmit={submitHandler}>
            <fieldset>
                <legend>Registro de Samurai</legend>

                <div className="row">
                    <label  className="col-sm-2 col-form-label">Nombre Samurai</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" name="nombre" placeholder="Escriba su Samurai" onChange={nombreHandler} />
                    </div>
                </div>

                <div className="row">
                    <label  className="col-sm-2 col-form-label">Ataque</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" name="ataque" placeholder="escriba su ataque" onChange={ataqueHandler} />
                    </div>
                </div>



                <div className="row">
                    <label  className="col-sm-2 col-form-label">ID de bando</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" name="idBando" placeholder="Escribe tu ID de bando" onChange={idBandoHandler} />
                    </div>
                </div>


                <div className="row">
                    <label  className="col-sm-2 col-form-label">ID sexo</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" name="idSexo" placeholder="Ingrese su ID de sexo" onChange={idSexoHandler} />
                    </div>
                </div>



                <div className="row">
                    <label  className="col-sm-2 col-form-label">ID estilo de pelea</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" name="idEstiloPelea" placeholder="Ingrese su ID de estilo de pelea" onChange={idEstiloPeleaHandler} />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary w-100">Crear Samurai</button>
            </fieldset>
        </form>
    </div>

</>
  );
}

export default RegistroSamurai;