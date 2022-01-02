/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      overflow="hidden"
      borderRadius="20px"
      width="320px"
      position="relative"
      height="253px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        padding="0px 0px 0px 0px"
        top="0px"
        left="0px"
        src={home?.image_url}
        width="320px"
        position="absolute"
        height="160px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Flex
        padding="10px 9px 10px 9px"
        overflow="hidden"
        top="163px"
        left="7px"
        gap="7px"
        position="absolute"
        direction="column"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(35.00000171363354,47.0000009983778,62.00000010430813,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children={home?.address}
          {...getOverrideProps(overrides, "View.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(0,0,0,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="14px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children={`${"Price: $"}${home?.price}${"/night"}`}
          {...getOverrideProps(overrides, "View.Flex[0].Text[1]")}
        ></Text>
      </Flex>
    </View>
  );
}
