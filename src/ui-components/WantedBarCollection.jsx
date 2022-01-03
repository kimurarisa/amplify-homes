/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import WantedBar from "./WantedBar";
import { Collection } from "@aws-amplify/ui-react";
import { Home } from "../models";
export default function WantedBarCollection(props) {
  const { items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Home,
        }).items;
  return (
    <Collection
      type="list"
      justifyContent="stretch"
      direction="column"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <WantedBar
          key={item.id}
          {...getOverrideProps(overrides, "Collection.WantedBar[0]")}
        ></WantedBar>
      )}
    </Collection>
  );
}
