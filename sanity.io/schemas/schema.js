/** @format */

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import crewMember from "./crewMember";
import castMember from "./castMember";
import person from "./person";
import shopPage from "./shopPage";
import collections from "./collections";
import featurePage from "./featurePage";
import aboutPage from "./aboutPage";
import post from "./post";
import youtube from "./youtube";
import bodyPortableText from "./bodyPortableText";
import orders from "./orders";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    person,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    // blockContent,
    // castMember,
    // crewMember,
    shopPage,
    collections,
    featurePage,
    aboutPage,
    post,
    youtube,
    bodyPortableText,
    // orders,
  ]),
});
