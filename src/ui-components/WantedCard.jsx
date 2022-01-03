/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function WantedCard(props) {
  const { wanted, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,153.00000607967377,0,1)"
      gap="0"
      width="320px"
      position="relative"
      direction="column"
      height="404px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="10px 0px 10px 0px"
        alignSelf="stretch"
        backgroundColor="rgba(255,153.00000607967377,0,1)"
        overflow="hidden"
        alignItems="center"
        shrink="0"
        gap="4px"
        position="relative"
        justifyContent="space-between"
        direction="column"
        height="88px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(255,255,255,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="320px"
          fontSize="40px"
          lineHeight="48px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="WANTED"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(255,255,255,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="320px"
          fontSize="14px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Dead or Alive"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        grow="1"
        overflow="hidden"
        alignItems="center"
        gap="10px"
        position="relative"
        basis="244px"
        justifyContent="center"
        direction="column"
        height="244px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Flex
          padding="0px 20px 0px 20px"
          backgroundColor="rgba(255,153.00000607967377,0,1)"
          grow="1"
          overflow="hidden"
          alignItems="center"
          gap="0"
          width="320px"
          position="relative"
          basis="244px"
          justifyContent="center"
          direction="column"
          height="244px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            backgroundColor="rgba(255,255,255,1)"
            grow="1"
            overflow="hidden"
            gap="0"
            position="relative"
            basis="244px"
            direction="column"
            height="244px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Flex[0]")}
          >
            <Image
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              grow="1"
              src={wanted?.image_url}
              width="280px"
              position="relative"
              basis="244px"
              height="244px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Image[0]"
              )}
            ></Image>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        padding="10px 0px 10px 0px"
        alignSelf="stretch"
        backgroundColor="rgba(255,153.00000607967377,0,1)"
        overflow="hidden"
        alignItems="center"
        shrink="0"
        gap="4px"
        position="relative"
        justifyContent="space-between"
        direction="column"
        height="72px"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(255,255,255,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="320px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="700"
          direction="column"
          children={wanted?.name}
          {...getOverrideProps(overrides, "Flex.Flex[2].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(255,255,255,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="320px"
          fontSize="14px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children={`${wanted?.reward}${" \u30D9\u30EA\u30FC"}`}
          {...getOverrideProps(overrides, "Flex.Flex[2].Text[1]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
