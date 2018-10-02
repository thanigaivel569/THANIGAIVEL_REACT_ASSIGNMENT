import { getSelectPlanWatcher } from './SelectPlanSaga';


export default function* rootSaga() {
  yield getSelectPlanWatcher()
}