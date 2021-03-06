import { all, call, delay, put, takeEvery } from 'redux-saga/effects';

import { DELETE_ALERT, SET_ALERT } from './alertsTypes';

export function* setAlertTimeout({ payload }) {
  yield delay(5000);
  yield put({ type: DELETE_ALERT, payload: payload.id });
}

export function* onSetAlert() {
  yield takeEvery(SET_ALERT, setAlertTimeout);
}

export default function* alertSagas() {
  yield all([call(onSetAlert)]);
}
