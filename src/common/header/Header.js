import React,{ Component } from 'react';
import { Main,Tit,Search } from './style';

class Header extends Component {
    render(){
        return (
            <Main>
                <Tit>我的音乐</Tit>
                <Search>
                    <input />
                </Search>
            </Main>
        )
    }
}

export default Header;

