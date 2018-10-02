import selectPlanReducer from './SelectPlanReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    selectPlanInfo: selectPlanReducer
})

export default rootReducer;
