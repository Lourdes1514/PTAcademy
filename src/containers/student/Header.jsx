import React from 'react';

import HeaderContainer from '../../components/student/Header/HeaderContainer'

class Header extends React.Component{

    render(){
        return(
            <>
            <HeaderContainer socketUrl={this.props.socketUrl} id_access={this.props.id_access} id_student={this.props.id_student} 
            name={this.props.name} lastName={this.props.lastName} apiUrl={this.props.apiUrl}/>
        </>
        )
    }
}

export default Header