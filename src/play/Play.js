import React, { Component } from 'react';
import { Main,Login,Mask} from './style';
import { Typography,Input,Button,Spin } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as PopupsCreators } from '../common/popups/store';
import { actionCreater as AudioCreators } from '../audio/store';

const { Title } = Typography;

class Play extends Component {

  componentDidMount(){
    if(localStorage.getItem('songUser')){
      const uid = JSON.parse(localStorage.getItem('songUser')).id;
      this.props.updataList(uid);
    }
  }

  load(){
    const { loading } = this.props;
    if(loading){
      return (
        <Mask>
            <Spin style={{position:'fixed',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}} tip="Loading..."></Spin>
        </Mask>
      )
    }else{
      return null;
    }
  }

  render() {
    const { log_submit } = this.props;
    this.loging = {};

    return (
          <Main>
              { this.load() }
              <Login>
                <Title style={{color:'#3C4043'}} level={4}>IGHT登录</Title>
                <Input ref={ (e)=>{ this.loging.name = e; } } placeholder="请输入手机号" />
                <Input type='password' ref={ (e)=>{ this.loging.pwd = e; } } placeholder="密码" />
                <Button style={{width:'80%'}} onClick={ ()=>log_submit(this) } type="primary">登录</Button>
              </Login>
          </Main>
    );
  }
}

const mapStateToProps = (state)=>({
  loading:state.getIn(['Play','loading']),
})

const mapDispatchToProps = (dispatch)=>{

  return {
    log_submit(my){
      let name = my.loging.name.state.value||'';
      let pwd = my.loging.pwd.state.value||'';
      const reg = /\S/;
      let n_stu = reg.test(name);
      let p_stu = reg.test(pwd);
      if(n_stu&&p_stu){
        dispatch(actionCreators.log_submit(name,pwd,PopupsCreators,AudioCreators,my));
        dispatch(actionCreators.loading());
      }else{
        dispatch(PopupsCreators.popDisplay(dispatch,'输入不能为空!'));
      }
    
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Play); 
