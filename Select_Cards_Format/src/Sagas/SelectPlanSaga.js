import * as SelectPlanActions from '../Action/SelectPlanAction';
import * as SelectPlanActionTypes from '../ActionTypes/SelectPlanActionTypes';
import { put, takeLatest } from "redux-saga/effects";

let url = "http://.............."
//Give your url

export function* getSelectPlanSaga() {
    try {
        let result = yield fetch(url).then(result => result.json());
        yield put(SelectPlanActions.getSelectPlanSuccess(result));

    } catch (error) {

        yield put(SelectPlanActions.getSelectPlanFailure(error));

    }

}

export function* getSelectPlanWatcher() {
    yield takeLatest(SelectPlanActionTypes.GET_SELECTPLAN, getSelectPlanSaga)
}