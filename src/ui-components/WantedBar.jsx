/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function WantedBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1300px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
      position="relative"
      height="69px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Inter"
        top="4px"
        left="40px"
        width="217px"
        fontSize="48px"
        lineHeight="56px"
        position="absolute"
        fontWeight="700"
        direction="column"
        height="62px"
        children="WANTED"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
