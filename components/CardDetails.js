/** @jsx jsx */
import React from "react";
import { Flex, jsx } from "theme-ui";
import { Text } from "@theme-ui/components";
import romanize from "../lib/romanize";

function CardDetails({ data }) {
  return (
    <Flex sx={{ flexDirection: "column", flex: 1 }}>
      <Flex sx={{ flexDirection: "row" }}>
        <Flex
          sx={{
            flexDirection: "row",
            flex: 1,
            // minWidth: 300,
            // maxWidth: 300,
            // alignItems: "center",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              flex: "0 0 300px",
            }}
          >
            <img
              width="200"
              src={(data.card && data.card.image) || "/back.png"}
              alt={data.card && data.card.name}
              sx={{ objectFit: "cover", px: 1, cursor: "pointer" }}
            />

            <Text>
              {data.id}. {data.present}
            </Text>

            <Flex sx={{ py: 3, flexWrap: "wrap", justifyContent: "center" }}>
              {data?.card?.keywords.map(i => (
                <Flex
                  sx={{
                    px: 2,
                    py: 1,
                    bg: "gray",
                    mr: 2,
                    my: 1,
                    borderRadius: 50,
                  }}
                >
                  <Text sx={{ color: "white", fontSize: 0 }}>{i}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <Flex sx={{ flexDirection: "column" }}>
            <Text
              sx={{
                color: "gray.6",
                fontSize: 4,
                fontFamily: "sans",
                fontWeight: "bold",
              }}
            >
              {romanize(data.card?.rank)}.
            </Text>
            <Text
              sx={{
                fontSize: 6,
                fontFamily: "sans",
                textTransform: "capitalize",
              }}
              variant="heading"
            >
              {data.card?.name}
            </Text>

            <Flex sx={{ flexDirection: "column" }}>
              <Flex sx={{ flexDirection: "row", mt: 4 }}>
                <Flex sx={{ flexDirection: "column", mr: 3 }}>
                  <Text variant="heading" sx={{ mb: 3 }}>
                    Light
                  </Text>
                  {data?.card?.meanings.light.map(i => (
                    <Flex sx={{ alignItems: "baseline" }}>
                      <Text sx={{ mr: 3, fontSize: 0 }}>★</Text>
                      <Text sx={{ color: "gray", fontSize: 1 }}>{i}</Text>
                    </Flex>
                  ))}
                </Flex>

                <Flex sx={{ flexDirection: "column" }}>
                  <Text variant="heading" sx={{ mb: 3 }}>
                    Shadow
                  </Text>
                  {data?.card?.meanings.shadow.map(i => (
                    <Flex sx={{ alignItems: "baseline" }}>
                      <Text sx={{ mr: 3, fontSize: 0 }}>★</Text>
                      <Text sx={{ color: "gray", fontSize: 1 }}>{i}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>

              <Flex sx={{ flexDirection: "column", mt: 4 }}>
                <Text variant="heading" sx={{ mb: 3 }}>
                  Fortune telling
                </Text>
                {data?.card?.fortune_telling.map(i => (
                  <Flex sx={{ alignItems: "baseline" }}>
                    <Text sx={{ mr: 3, fontSize: 0 }}>★</Text>
                    <Text sx={{ color: "gray", fontSize: 0 }}>{i}</Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CardDetails;
