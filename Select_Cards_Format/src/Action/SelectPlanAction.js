import * as SelectPlanActionTypes from '../ActionTypes/SelectPlanActionTypes';

export function getSelectPlan() {
    return {
        type: SelectPlanActionTypes.GET_SELECTPLAN
    }
}

export function getSelectPlanSuccess(data) {
    return {
        type: SelectPlanActionTypes.GET_SELECTPLAN_SUCCESS,
        payload: data
    }
}

export function getSelectPlanFailure(error) {
    return {
        type: SelectPlanActionTypes.GET_SELECTPLAN_FAILURE,
        payload: error
    }
}