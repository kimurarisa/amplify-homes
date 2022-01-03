/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Wanted } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import WantedCard from "./WantedCard";
import { Collection } from "@aws-amplify/ui-react";
export default function WantedCardCollection(props) {
  const { wanted, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Wanted,
        }).items;
  return (
    <Collection
      templateColumns="1fr 1fr 1fr 1fr"
      type="grid"
      alignItems="stretch"
      justifyContent="stretch"
      autoFlow="row"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <WantedCard
          width="320px"
          margin="10px 10px 10px 10px"
          wanted={item}
          height="auto"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.WantedCard[0]")}
        ></WantedCard>
      )}
    </Collection>
  );
}
