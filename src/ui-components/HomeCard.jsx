/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      border="3px SOLID rgba(104.00000140070915,112.000000923872,120.00000044703484,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 5px 0px 5px"
      backgroundColor="rgba(255,201.44999027252197,63.75,0.20000000298023224)"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      borderRadius="20px"
      gap="11px"
      width="320px"
      position="relative"
      direction="column"
      height="282px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        overflow="hidden"
        alignItems="center"
        shrink="0"
        gap="10px"
        position="relative"
        direction="column"
        height="199px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Image
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          grow="1"
          src={home?.image_url}
          width="304px"
          position="relative"
          basis="199px"
          height="199px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
      </Flex>
      <Flex
        padding="10px 9px 10px 9px"
        overflow="hidden"
        alignItems="center"
        shrink="0"
        gap="4px"
        width="304px"
        position="relative"
        justifyContent="center"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(35.00000171363354,47.0000009983778,62.00000010430813,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="286px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="700"
          direction="column"
          children={home?.address}
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(0,0,0,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="286px"
          fontSize="14px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children={`${"Price: $"}${home?.price}${"/night"}`}
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[1]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
