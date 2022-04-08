/** @format */

import { createSelector } from "reselect";
import memoize from "lodash/memoize";
const selectShop = ({ shop }) => shop.collection;

export const selectShopCollectionPreview = createSelector(
  [selectShop],
  (collection) => (collection ? collection : [])
);

export const selectOverViewPage = memoize((path) =>
  createSelector(
    [selectShopCollectionPreview],
    (collection) =>
      collection?.reduce((acc, { title, ...otherProps }) => {
        acc[title.toUpperCase()] = { title, ...otherProps };
        return acc;
      }, {})[path]
  )
);

export const selectPopupView = (path, colorType) => {
  return createSelector([selectShopCollectionPreview], (collection) =>
    collection
      ?.reduce((acc, { title, ...otherProps }) => {
        acc[title.toUpperCase()] = { title, ...otherProps };
        return acc;
      }, {})
      [path.toUpperCase()].item.filter((item) => item.color === colorType)
      .reduce((acc, item) => acc + item)
  );
};