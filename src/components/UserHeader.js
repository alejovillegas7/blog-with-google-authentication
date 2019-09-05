import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component{
    render(){
        const {user}=this.props;
        if (!user){
            return null;
        };
        return <div className="header">{user.name}</div>
    };
};

const maptStateToProps=(state, ownProps)=>{ //ownProps es una referencia para poder utilizar los props del componente que esta arriba
                                            //en este caso "UserHeader"
    return {user:state.users.find(user=>user.id===ownProps.userId)};
};

export default connect(maptStateToProps)(UserHeader);