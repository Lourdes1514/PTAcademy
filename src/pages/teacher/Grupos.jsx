import React from 'react';
import GruposPage from '../../components/teacher/grupos/GrupoPage'

class Grupos extends React.Component {
    render(){
        return(
            <div>
                <GruposPage id_access={this.props.id_access}/>
            </div>
        )
    }
}
export default Grupos;