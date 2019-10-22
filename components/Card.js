/** @jsx jsx */
import React from "react";
import { Flex, jsx } from "theme-ui";
import Text from "./Text";

function Card({
  onSetReadMode,
  isActive,
  column,
  row,
  rowSpan = 3,
  columnSpan = 2,
  card,
  children,
  ...props
}) {
  return (
    <Flex
      sx={{
        gridColumn: `${(column - 1) * columnSpan + 1} / span ${columnSpan}`,
        gridRow: `${(row - 1) * rowSpan + 1} / span ${rowSpan}`,
        bg: "white",
        flexDirection: "column",
        p: 2,
        cursor: "pointer",
        backgroundImage: `url(${card ? card.image : "/back.png"})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        boxShadow:
          "0 12.5px 20px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)",
        borderRadius: "default",
        // border: "4px solid",
        // borderColor: isActive ? "primary" : "transparent",
        boxSizing: "content-box",
        backgroundBlendMode: isActive ? "hard-light" : "unset",
        // opacity: isActive ? 0.75 : 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
      {...props}
    >
      {/* <Flex sx={{ bg: "white", p: 1, borderRadius: 3 }}>
        <Text sx={{ fontSize: 0 }}>{props.present}</Text>
      </Flex> */}
      <Flex sx={{ justifyContent: "center" }}>
        <Flex
          sx={{
            borderRadius: "full",
            bg: isActive ? "primary" : "gray.6",
            px: 2,
            cursor: "pointer",
            ":hover": {
              bg: "primaryHover",
            },
          }}
          onClick={e => {
            e.stopPropagation();
            onSetReadMode(false);
          }}
        >
          <Text sx={{ color: "white" }}>{children}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Card;
