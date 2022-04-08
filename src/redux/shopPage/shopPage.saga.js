/** @format */

import { call, put, takeLatest, all } from "redux-saga/effects";
import ShopPageActionType from "./shopPage.type";
import { snapshot, shopPageToMap } from "../../firebase/firebase.utils";
import { fetchShopPageSuccess, fetchShopPageFailure } from "./shopPage.action";

function* fetchShopPageAsync() {
  try {
    const shopPageRes = yield snapshot("shop_page");
    const shopPageData = shopPageToMap(shopPageRes);
    yield put(fetchShopPageSuccess(shopPageData));
  } catch (error) {
    yield put(fetchShopPageFailure(error));
  }
}

function* fetchShopPageStart() {
  yield takeLatest(
    ShopPageActionType.FETCHING_SHOPPAGE_START,
    fetchShopPageAsync
  );
}

function* shopPageSaga() {
  yield all([call(fetchShopPageStart)]);
}

export default shopPageSaga;