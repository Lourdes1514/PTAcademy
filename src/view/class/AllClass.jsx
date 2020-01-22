import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import cursoImg from '../../img/courses/cursos.jpg'
import axios from "axios";
export default class AllClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_access: "",
      redirect: false
    };
  }
  obtenerCodigo = () => {
    var varToken = localStorage.getItem('token');
    let id_access = "";
    let possible = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    for (let i = 0; i < 5; i++) {
      id_access += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.setState({
      id_access : id_access
    })
    const data = {
      id_access: id_access,
      id_class: this.props.id
    };

    axios({
      url: this.props.apiUrl+"/v1/api/access/", 
      data,
      method: 'post',
      headers: {
        'x-access-token': `${varToken}`
      }
    }).then(res => console.log(res))
      .catch(err => console.log(err));
      this.setState({
        redirect: true
      })
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect  to={`/teacher/${this.props.id}/${this.state.id_access}`}/>
    }
  }
  render() {
    return (
      <>
        <div className="courseTeacher-card-item">
          <div className="courseTeacher-card-image">
            {/* <img src={cursoImg} alt="some value" /> */}
          </div>
          <div className="courseTeacher-card-info">
            <h2 className="courseTeacher-card-title">{this.props.name_class}</h2>
            <p className="courseTeacher-card-intro">{this.props.desc}</p>
            {/* <Link to="/ClassTeacher" className="btn card_btn">
              Entrar a detalle de la clase
            </Link> */}
            <div >
            </div>
            {this.renderRedirect()}
            <div className="classTeacher__buttonEntry courseTeacher__button" onClick={this.obtenerCodigo}>
              <label className="courseTeacher__buttonEntry-label ">ACTIVAR CLASE</label>
            </div>
          </div>
        </div>
      </>
    );
  }
}
