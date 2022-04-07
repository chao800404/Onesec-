/** @format */

import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopPage = ({ shopPage }) => shopPage.shopPageData;

export const selectShopPageContainer = memoize((sunGlassesType) =>
  createSelector([selectShopPage], (shopPage) =>
    shopPage ? shopPage[sunGlassesType] : {}
  )
);
