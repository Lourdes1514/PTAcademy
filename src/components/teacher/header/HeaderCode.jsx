import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { Modal ,Button, ButtonToolbar } from "react-bootstrap";
import './HeaderCode.sass'
function BotonSalir(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const AgregarClick=()=>setShow(false)+props.getCursos
    return (
      <>
        <div className="menu-detail-content" onClick={handleShow}>   
        <li className="code-btn-menu material-icons" style={{ fontSize: "50px"}}>exit_to_app</li>
        </div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>¿Desea cerrar sesión?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ButtonToolbar>
            <Button href='/' variant="primary" size="sm">Si</Button>
            <br/><br/>
            <Link ><Button variant="secondary" size="sm" onClick={handleClose}>No</Button></Link>`      `
            <Button href='/CoursesTeacher/5db74edbae96433b08911b38' variant="primary" size="sm" onClick={handleClose}>Regresar a cursos</Button>
          </ButtonToolbar>
          </Modal.Body>
        </Modal>
      </>
    );
  }
function HeaderCode(props){

    return(
        <div className="code-header">
            <div className="code-clase-detail">
                <h1>
                    Nombre del clase : {props.nombre_clase}
                </h1>
            </div>         
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox"/>
                        <span className="hamburguesa-span"></span>
                        <span className="hamburguesa-span"></span>
                        <span className="hamburguesa-span"></span>
                        <ul id="menu-header">
                            <li><Link className="lista"  to={`/teacher/${props.id_class}/${props.id_access}`}>LISTA DE ALUMNOS</Link></li>    
                            <li><Link className="azar"   to={`/teacher/${props.id_class}/${props.id_access}/azar`}>AL AZAR</Link></li>
                            <li><Link className="grupos" to={`/teacher/${props.id_class}/${props.id_access}/grupos`}>GRUPOS</Link></li>
                            <li><Link className="tempor" to={`/teacher/${props.id_class}/${props.id_access}/temporizador`}>TEMPORIZADOR</Link></li>
                            <li><Link className="trivia" to={`/teacher/${props.id_class}/${props.id_access}/trivia`}>TRIVIA</Link></li>
                        </ul>
                </div>
            </nav>
            <div className="code-detail">
                <a href className="code-a" data-toggle="modal" data-target="#miCodigo" id="btnVerAlumnos">
                    <class className="code">Código:</class>
                    <div className="codigo-generado">
                       {props.id_access}
                    </div>
                </a>
            </div>
            <div className="code-menu-detail">
                
                <BotonSalir/>
                
            </div>
            <div id="miCodigo" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"><strong>CODIGO DE LA CLASE:</strong></h4>
                        </div>
                        <div className="modal-body" style={{fontSize: "100px"}}>
                        {props.id_access}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCode;