/** @jsx jsx */
import React from "react";
import { Box, Styled, jsx } from "theme-ui";

export default function Text(props) {
  return (
    <Styled.p
      {...props}
      sx={{
        fontSize: 1,
        fontFamily: "body",
        margin: 0,
        padding: 0,
      }}
    />
  );
}
