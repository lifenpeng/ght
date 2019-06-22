import React,{ Component } from 'react';
import { Main } from './Style';
import { connect } from 'react-redux';
import { actionCreater } from './store';
import { Link } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';
import { blockParams } from 'handlebars';

class Audio extends Component {

    Meau(){
        const { navList,log_stu } = this.props;
        const my = this;
        const list = navList.map(function(item,index){
            if(!log_stu&&item.get('iden')===0){
                return (
                    <Col 
                        key={index} 
                        style={{textAlign:'center',marginTop:'3%'}} 
                        span={12}
                    >
                        <Link style={{color:'#333'}} to={item.get('url')}>
                            <Icon style={{display:'block',fontSize:'22px'}} type={item.get('icon')} />
                            <span style={{fontSize:'12px'}}>{item.get('name')}</span>
                        </Link>
                    </Col>
                )
            }else if(log_stu&&item.get('iden')===1){
                return (
                    <Col 
                    key={index} 
                    style={{textAlign:'center',marginTop:'3%'}} 
                    span={4}
                    >
                        <Link style={{color:'#333'}} to={item.get('url')}>
                            <Icon style={{display:'block',fontSize:'22px'}} type={item.get('icon')} />
                            <span style={{fontSize:'12px'}}>{item.get('name')}</span>
                        </Link>
                    </Col>
                )
            }
        })

        return list;
    }

    render(){

        return (
            <Main>
                <Row type="flex" justify="center">
                    {this.Meau()}
                </Row> 
            </Main>
        )
    }
}

const mapStateToProps = (state)=>({
    navList:state.getIn(['Audio','navList']),
    log_stu:state.getIn(['Audio','log_stu']),
})

const mapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Audio);