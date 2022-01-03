/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function WantedFooter(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
      alignItems="flex-start"
      gap="10px"
      width="1262px"
      position="relative"
      direction="row"
      height="372px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        position="relative"
        shrink="0"
        gap="16px"
        direction="column"
        height="112px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="471px"
          fontSize="14px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="使用しているイラストは、「いらすとや」が「ONE PIECE」1000話記念コラボで描いて下さったイラスト達です。可愛い…"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          textDecoration="underline"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="471px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="ONE PIECEのイラスト（まとめ）&#xA;https://www.irasutoya.com/2021/01/onepiece.html"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        grow="1"
        overflow="hidden"
        width="419px"
        position="relative"
        basis="419px"
        height="252px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      ></View>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        overflow="hidden"
        alignItems="stretch"
        shrink="0"
        gap="5px"
        position="relative"
        direction="column"
        height="292px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          shrink="0"
          gap="1px"
          width="272px"
          position="relative"
          direction="column"
          height="227px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(255,255,255,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            letterSpacing="0.010000000000000009px"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="272px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="フッダーって何書いたらいいんだろ"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[0]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(255,255,255,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            letterSpacing="0.010000000000000009px"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="272px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="Amazon Web Services ブログ"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[1]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(255,255,255,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            letterSpacing="0.010000000000000009px"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="272px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="DevelopersIO ブログ"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[2]")}
          ></Text>
        </Flex>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="right"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-end"
          fontFamily="Inter"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="リサリサ 2021"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
