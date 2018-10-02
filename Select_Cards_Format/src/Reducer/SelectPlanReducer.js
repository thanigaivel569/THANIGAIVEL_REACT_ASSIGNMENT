import * as  SelectPlanActionTypes from '../ActionTypes/SelectPlanActionTypes';

export default function selectPlanReducer(state = { SelectPlan: [], SelectPlanError: {}, isLoading: false }, action) {
  switch (action.type) {
    case  SelectPlanActionTypes.GET_SELECTPLAN:
      return {
        ...state,
        isLoading: true
      };
    case  SelectPlanActionTypes.GET_SELECTPLAN_SUCCESS:
      return { SelectPlan: action.payload, isLoading: false }

    case  SelectPlanActionTypes.GET_SELECTPLAN_FAILURE:
      return { SelectPlanError: action.payload, isLoading: false }

    default:
      return state;
  }
}
