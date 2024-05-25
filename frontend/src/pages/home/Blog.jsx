/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Heading,
  Text,
  Image,
  Stack,
  Box,
  Container,
  useColorModeValue,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { data } from "../../utils/BlogData";
const Blog = () => {
  return (
    <>
      <Container maxW="1240px" marginBottom="100px">
        <Box mt="8rem">
          <Heading
            as="h3"
            size="xl"
            fontWeight="bold"
            textAlign="left"
            mb={2}
            textTransform={"uppercase"}
          >
            Blog
          </Heading>
          <Heading
            as="h3"
            size="sm"
            fontWeight="500"
            textAlign="left"
            mb={8}
            textTransform={"uppercase"}
          >
            Keep up-to date on the Bitcoin Economy
          </Heading>
          <SimpleGrid
            columns={{ base: 2, md: 2, lg: 3, xl: 3 }}
            gap={6}
            justifyContent="center"
          >
            {data.map((item, index) => (
              <Box key={index} as="a" target="_blog" href={item.link}>
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  height="350px"
                  width="100%"
                />
                <Stack mt="2" spacing="3">
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontSize="0.8rem"
                      margin={"auto"}
                      display={"block"}
                      lineHeight="1.375"
                      fontWeight="600"
                      maxW={{ base: "100%", md: "470px" }}
                      color={useColorModeValue("#000", "gray.400")}
                    >
                      {item.title}
                    </Text>
                  </Flex>
                  <Box maxW={{ base: "100vw", lg: "20vw" }}>
                    <Text
                      fontSize="0.8rem"
                      textAlign="left"
                      lineHeight="1.375"
                      fontWeight="600"
                      maxW={{ base: "100%", md: "470px" }}
                      color={useColorModeValue("#000", "gray.400")}
                    >
                      {item.subTitle}
                    </Text>
                    <Text
                      fontSize="0.7rem"
                      textAlign="left"
                      lineHeight="1.375"
                      fontWeight="400"
                      maxW={{ base: "100%", md: "470px" }}
                      mb={4}
                      color={useColorModeValue("#6d6d6e", "gray.400")}
                    >
                      {item.content}
                    </Text>
                    <Text
                      fontSize="0.7rem"
                      textAlign="left"
                      lineHeight="1.375"
                      fontWeight="600"
                      textTransform={"uppercase"}
                      maxW={{ base: "100%", md: "470px" }}
                      color={useColorModeValue("#000", "gray.400")}
                    >
                      Learn More {">"}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Blog;
