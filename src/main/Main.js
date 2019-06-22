import React,{ Component } from 'react';
import { Body,Header,Cover,Introduction,Title,Info } from './style';
import { connect } from 'react-redux';
import { actionCreater } from './store'
import cover from '../upload/public/cover.jpg';


class Main extends Component{

    componentWillMount(){
        this.props.handleSetMsg();
    }

    Head(){

        const { header } = this.props;
    
        if(header){
            return (
                <Header>
                    <Cover src={cover}></Cover>
                    <Introduction>
                        <Title>{ header.get('name') }</Title>
                        <Info>{ header.get('num')+'首' }</Info>
                    </Introduction>
                </Header>
            )
        }
    }

    render(){

        const { list } = this.props;

        return (
            <Body>
                { this.Head() }
            </Body>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        list:state.getIn(['Main','list']),
        header:state.getIn(['Main','header']),
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleSetMsg(){
            //dispatch(actionCreater.setMsg(dispatch));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);