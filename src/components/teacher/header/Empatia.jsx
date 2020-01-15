import React from 'react';

import {Link} from 'react-router-dom'

import './Empatia.sass'
//cambios 
function Empatia(props){

    return(
        <>
            <header id="Empatia-header">
                <div></div>
                <div>
                    <Link className="nav-menu" to={`/teacher/${props.id_class}/${props.id_access}`}>LISTA DE ALUMNOS</Link>
                </div>
                <div>
                    <Link className="nav-menu" to={`/teacher/${props.id_class}/${props.id_access}/azar`}>AL AZAR</Link>    
                </div>
                <div>
                    <Link className="nav-menu" to={`/teacher/${props.id_class}/${props.id_access}/grupos`}>GRUPOS</Link>
                </div>
                <div>
                    <Link onClick={()=>props.redirect('temporizador')}className="nav-menu" to={`/teacher/${props.id_class}/${props.id_access}/temporizador`}>TEMPORIZADOR</Link>
                </div>
                <div>
                    <Link onClick={()=>props.redirect('trivia')}className="nav-menu" to={`/teacher/${props.id_class}/${props.id_access}/trivia`}>TRIVIA</Link>
                </div>
                <div></div>
            </header>
        </>
    )
}

export default Empatia;