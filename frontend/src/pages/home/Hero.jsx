/* eslint-disable no-unused-vars */
import React from "react";
import {
  Heading,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import HeroImage from "../../assets/images/hero_img.png";
import Coin1 from "../../assets/images/Footer_logo.png";
import Coin2 from "../../assets/images/coin_2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        mt={{ base: 0, md: -1 }}
        gap={0}
      >
        <Stack
          direction="column"
          bg="#151517"
          color="white"
          alignItems={"center"}
          justifyContent={"center"}
          w={{ base: "100%", md: "60%" }}
        >
          <Box pl={4} p={{ base: "2rem", lg: "0" }}>
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              textAlign="left"
              mb={4}
            >
              Crowdfunding for Bitcoin <br /> start-ups
            </Heading>
            <Text
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="300"
              maxW={{ base: "100%", md: "470px" }}
              mb={8}
              color={useColorModeValue("#6d6d6e", "gray.400")}
            >
              Join the revolution and support groundbreaking Bitcoin based
              projects
            </Text>
            <HStack spacing={3}>
              <Button
                variant="solid"
                size="md"
                rounded="md"
                boxShadow="md"
                color="black"
                bg="white"
                as={Link}
                to="/backers"
              >
                For Backers
              </Button>
              <Button
                variant="solid"
                size="md"
                rounded="md"
                boxShadow="md"
                color="black"
                bg="white"
                as={Link}
                to="/startup"
              >
                For Startups
              </Button>
            </HStack>
            <Box mt={6}>
              <Text
                fontSize="1rem"
                textAlign="left"
                lineHeight="1.375"
                fontWeight="300"
                maxW={{ base: "100%", md: "470px" }}
                mb={"4px"}
                mt="10px"
                color={useColorModeValue("#fff", "gray.400")}
              >
                Fund with
              </Text>
              <HStack spacing={5} mt={"4px"}>
                <Image sx={{ width: "50px" }} src={Coin1} alt="Coin1" />
                <Image sx={{ width: "50px" }} src={Coin2} alt="Coin2" />
              </HStack>
            </Box>
          </Box>
        </Stack>
        <Box w={{ base: "100%", md: "40vw" }}>
          <Image
            w="100%"
            h="100%"
            minW={{ base: "auto" }}
            objectFit="cover"
            src={HeroImage}
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </>
  );
};

export default Hero;
