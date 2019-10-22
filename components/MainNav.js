/** @jsx jsx */
import React from "react";
import { Flex, jsx } from "theme-ui";
import { Text } from "@theme-ui/components";
import IconLogo from "./IconLogo";

function MainNav() {
  return (
    <Flex
      sx={{
        bg: "dark",
        px: 3,
        py: 3,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Flex>
        <Text sx={{ color: "gray.4", fontWeight: "bold" }}>
          <span
            sx={{
              py: 0,
              px: 2,
              bg: "gray.4",
              color: "text",
              borderRadius: "sm",
            }}
          >
            λ
          </span>{" "}
          Astrology
        </Text>
      </Flex>

      <Flex>
        <IconLogo sx={{ color: "white" }} />
      </Flex>

      <Flex>
        <Text sx={{ fontSize: 1, color: "gray.4" }}>Card</Text>
      </Flex>
    </Flex>
  );
}

export default MainNav;
