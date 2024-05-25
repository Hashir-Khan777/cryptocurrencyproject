/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Heading,
  Grid,
  GridItem,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  Divider,
  Box,
  Container,
  useColorModeValue,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { data } from "../../utils/SpotlightData";
const Spotlight = () => {
  return (
    <>
      <Container maxW="1240px">
        <Box mt="8rem">
          <Heading
            as="h3"
            size="xl"
            fontWeight="bold"
            textAlign="left"
            mb={8}
            textTransform={"uppercase"}
          >
            Spotlight
          </Heading>
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            textAlign="left"
            mb={8}
            textTransform={"uppercase"}
          >
            Founder Interviews
          </Heading>
          <Text
            fontSize="0.7rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            maxW={{ base: "100%", md: "470px" }}
            mb={20}
            color={useColorModeValue("#6d6d6e", "gray.400")}
          >
            Get insights on the founders behind the projects on InventOnBTC.
            Dive deep into their vision behind their ideas and innovations
          </Text>
          <SimpleGrid
            columns={{ base: 2, md: 2, lg: 3, xl: 3 }}
            gap={6}
            justifyContent="center"
          >
            {data.map((item, index) => (
              <Card key={index} minH="300px" height="auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  maxH="450px"
                  width="100%"
                />
                <CardBody overflowY="auto" maxH="300px">
                  <Stack mt="2" spacing="3">
                    <Flex justifyContent={"space-between"}>
                      <Text
                        fontSize="0.7rem"
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="600"
                        textTransform={"uppercase"}
                        maxW={{ base: "100%", md: "470px" }}
                        color={useColorModeValue("#0034ec", "gray.400")}
                      >
                        {item.title}
                      </Text>
                      <CiHeart size={20} color="gray" />
                    </Flex>
                    <Box maxW={{ base: "100vw", lg: "20vw" }}>
                      <Text
                        fontSize="0.8rem"
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="600"
                        mb={4}
                        // maxW={{ base: "100%", md: "470px" }}
                        color={useColorModeValue("#000", "gray.400")}
                      >
                        {item.subTitle}
                      </Text>
                      <Text
                        fontSize="0.7rem"
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="400"
                        // maxW={{ base: "100%", md: "470px" }}
                        mb={4}
                        color={useColorModeValue("#6d6d6e", "gray.400")}
                      >
                        {item.content}
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Spotlight;
