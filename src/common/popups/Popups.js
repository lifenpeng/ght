import React,{ Component } from 'react';
import { Main } from './style';
import { connect } from 'react-redux';

class Popups extends Component{ 

    Main = ()=>{
        const { msg } = this.props;
        return(
           <Main>{msg}</Main>
        )
    }

    render(){

        const { show } = this.props;
   
        return (
            <div>
                { show&&this.Main() }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        show:state.getIn(['Popups','show']),
        msg:state.getIn(['Popups','msg'])
    }
}

export default connect(mapStateToProps,null)(Popups);