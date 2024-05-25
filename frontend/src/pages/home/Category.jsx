"use client";

import { Box, Heading, Text, Stack, Flex, Image } from "@chakra-ui/react";
import { data } from "../../utils/CategoryData";
export default function Category() {
  return (
    <>
      <Stack
        bg={"#e6e7e9"}
        as={Box}
        textAlign={"center"}
        spacing={{ base: 4, md: 7 }}
        py={{ base: 20, md: 36 }}
        mt={20}
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: "xl", sm: "2xl", md: "2xl" }}
        >
          WHAT CATEGORIES ARE YOU INTERESTED IN?
        </Heading>
        <Text color={"#000"}>
          DISCOVER PROJECTS THAT ALIGN WITH YOUR INTERESTS
        </Text>
        <Text color={"#000"}>EXPLORE THE TOP CATEGORIES</Text>
        <Stack direction="column" spacing={3}>
          <Flex
            flexDirection={{ base: "row" }}
            flexWrap={{ base: "wrap", lg: "nowrap" }}
            justifyContent={{ base: "center", lg: "space-around" }}
            gap="60px"
          >
            {data.map((item, index) => (
              <Flex key={index} flexDirection="column" alignItems="center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={{ base: "35px", lg: "45px" }}
                  height={{ base: "35px", lg: "45px" }}
                  objectFit="contain"
                />
                <Text
                  fontSize={{ base: "10px", lg: "20px" }}
                  textTransform="capitalize"
                  textAlign="center"
                >
                  {item.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Stack>
      </Stack>
    </>
  );
}
