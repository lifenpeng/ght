import { combineReducers } from 'redux-immutable';
import { PlayReducer } from '../play/store';
import { PopupsReducer } from '../common/popups/store';
import { MainReducer } from '../main/store';
import { AudioReducer } from '../audio/store';

const reducer = combineReducers({
    Play:PlayReducer,
    Popups:PopupsReducer,
    Main:MainReducer,
    Audio:AudioReducer
})

export default reducer;