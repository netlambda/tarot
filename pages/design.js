import React from "react";
import { Styled } from "theme-ui";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";

export default props => (
  <>
    <Styled.h1>Style Guide</Styled.h1>
    <TypeScale />
    <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading">
      Heading
    </TypeStyle>
    <TypeStyle fontFamily="mono" fontWeight="heading" lineHeight="heading">
      Heading Monospace
    </TypeStyle>
    <TypeStyle fontFamily="sans" fontWeight="extrabold" lineHeight="heading">
      Heading Sans
    </TypeStyle>
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body">
      Body text
    </TypeStyle>
    <ColorPalette />
  </>
);
