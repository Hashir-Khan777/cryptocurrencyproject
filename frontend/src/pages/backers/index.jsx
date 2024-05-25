import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import banner2 from "../../assets/images/banner2.jpeg";
import backerImage from "../../assets/images/backer_main_image_1.png";
import perkImage from "../../assets/images/backer_main_image_2.png";
import { FaCheckSquare } from "react-icons/fa";
import Coin1 from "../../assets/images/Footer_logo.png";
import Coin2 from "../../assets/images/coin_2.png";
import XverseIcon from "../../assets/images/xverse_icon.png";
import LeatherIcon from "../../assets/images/leather_icon.png";
import image1 from "../../assets/images/backer_step_icon_1.png";
import image2 from "../../assets/images/backer_step_icon_2.png";
import image3 from "../../assets/images/backer_step_icon_3.png";
import image4 from "../../assets/images/backer_step_icon_4.png";
import { Link } from "react-router-dom";

const Backers = () => {
  return (
    <Box>
      <Flex
        backgroundImage={banner2}
        width="100%"
        height="400px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text
            color="#fff"
            fontSize={{ base: "20px", md: "30px", lg: "40px" }}
            fontWeight={900}
            textAlign="center"
            px="5px"
          >
            Welcome To The Future Of Crowdfunding
          </Text>
          <Text
            textAlign="center"
            color="#fff"
            fontSize={{ base: "13px", md: "20px", lg: "30px" }}
          >
            Discover another dimension of crowdfunding all happening on Bitcoin
          </Text>
        </Box>
      </Flex>
      <Container maxW="1240px">
        <Flex
          my="100px"
          alignItems="center"
          gap="20px"
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          <Image src={backerImage} />
          <Box>
            <Text fontSize="30px" fontWeight="semibold" mb="20px">
              Fund the next big thing on{" "}
              <Text as="span" color="#E16A15">
                Bitcoin
              </Text>
            </Text>
            <Text>
              Invent on BTC gives you access and opportunity to support
              groundbreaking Bitcoin innovations among many different
              categories. This is your chance to get on the ground floor and
              support these gems who are sometimes offering amazing perks to
              their early supporters. Every day you will find exciting new ideas
              taking flight on the platform. With our amazing and feature rich
              platform we’ll make crowdfunding exciting and give you access that
              has never been seen before in the Blockchain space.
            </Text>
          </Box>
        </Flex>
      </Container>
      <Box bg={"#e6e7e9"} py={{ base: 20, md: 36 }}>
        <Container maxW="793px">
          <Text
            sx={{
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "semibold",
              mb: "20px",
            }}
          >
            Bringing you{" "}
            <Text as="span" color="#0034EC">
              CURATED
            </Text>{" "}
            <Icon as={FaCheckSquare} color="#0034EC" /> projects
          </Text>
          <Text sx={{ textAlign: "center", fontSize: "16px" }}>
            Curated Projects on the Invent On BTC Platform are marked with the
            blue tick.
          </Text>
          <Text sx={{ textAlign: "center", fontSize: "16px" }}>
            It is only given to those who have satisfied the requirements set by
            the Invent On BTC platform
          </Text>
          <Text
            sx={{
              textAlign: "center",
              fontSize: "16px",
              color: "#0034EC",
              mt: "30px",
            }}
          >
            With curated projects you can get even more in-depth information
            about projects like analytics, founder interviews and a chance to
            know more about the vision and interact with the team through
            twitter spaces.
          </Text>
        </Container>
      </Box>
      <Container maxW="793px" my="100px">
        <Text
          sx={{
            fontSize: "30px",
            textAlign: "center",
            fontWeight: "semibold",
            mb: "20px",
          }}
        >
          Innovations from ideas to launched projects
        </Text>
        <Container>
          <SimpleGrid columns={4} gap={10} mb="20px">
            <Box
              sx={{
                position: "relative",
                _before: {
                  content: `""`,
                  position: "absolute",
                  height: "1px",
                  width: "90%",
                  bgColor: "#000",
                  top: "25px",
                  left: "50px",
                  display: { base: "none", lg: "block" },
                },
              }}
            >
              <Image
                src={image1}
                width={{ base: "30px", md: "50px" }}
                height={{ base: "30px", md: "50px" }}
                mixBlendMode={"multiply"}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                _before: {
                  content: `""`,
                  position: "absolute",
                  height: "1px",
                  width: "90%",
                  bgColor: "#000",
                  top: "25px",
                  left: "50px",
                  display: { base: "none", lg: "block" },
                },
              }}
            >
              <Image
                src={image2}
                width={{ base: "30px", md: "50px" }}
                height={{ base: "30px", md: "50px" }}
                mixBlendMode={"multiply"}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                _before: {
                  content: `""`,
                  position: "absolute",
                  height: "1px",
                  width: "90%",
                  bgColor: "#000",
                  top: "25px",
                  left: "50px",
                  display: { base: "none", lg: "block" },
                },
              }}
            >
              <Image
                src={image3}
                width={{ base: "30px", md: "50px" }}
                height={{ base: "30px", md: "50px" }}
                mixBlendMode={"multiply"}
              />
            </Box>
            <Box>
              <Image
                src={image4}
                width={{ base: "30px", md: "50px" }}
                height={{ base: "30px", md: "50px" }}
                mixBlendMode={"multiply"}
              />
            </Box>
          </SimpleGrid>
        </Container>
        <Text sx={{ textAlign: "center" }}>
          Invent On BTC gives you access to projects on all stages in their
          journey. They could be as early as just an idea or could be an already
          launched project looking to go to the next level. We support any and
          all Bitcoin startups regardless on what stage of development they are
          on.
        </Text>
        <Text sx={{ textAlign: "center" }}>
          Read about the projects, go through data and analytics, look into
          founder’s interviews and get your questions answered by the project
          team on twitter spaces. We give the backers an unprecedented level of
          control and access to the projects they want to back.
        </Text>
        <Flex justifyContent="center" width="100%">
          <Button
            fontSize="sm"
            fontWeight={600}
            color="white"
            backgroundColor="#E16A15"
            mt="20px"
            _hover={{
              bg: "#e69517",
            }}
            as={Link}
            to="/categories"
          >
            Explore Projects
          </Button>
        </Flex>
      </Container>
      <Box bg={"#e6e7e9"} py={30}>
        <Container maxW="793px">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box mt={6}>
              <Text
                fontSize="30px"
                textAlign="left"
                lineHeight="1.375"
                fontWeight="bold"
                maxW={{ base: "100%", md: "470px" }}
                mb={"4px"}
                mt="10px"
              >
                Fund with
              </Text>
              <HStack spacing={5} mt={"4px"}>
                <Image
                  sx={{ width: { base: "50px", md: "100px" } }}
                  src={Coin1}
                  alt="Coin1"
                />
                <Image
                  sx={{ width: { base: "50px", md: "100px" } }}
                  src={Coin2}
                  alt="Coin2"
                />
              </HStack>
            </Box>
            <Box mt={6}>
              <Text
                fontSize="30px"
                textAlign="left"
                lineHeight="1.375"
                fontWeight="bold"
                maxW={{ base: "100%", md: "470px" }}
                mb={"4px"}
                mt="10px"
              >
                Wallet Integration
              </Text>
              <HStack spacing={5} mt={"4px"}>
                <Image
                  sx={{ width: { base: "50px", md: "100px" } }}
                  src={XverseIcon}
                  alt="Coin1"
                />
                <Image
                  sx={{ width: { base: "50px", md: "100px" } }}
                  src={LeatherIcon}
                  alt="Coin2"
                />
              </HStack>
            </Box>
          </Flex>
          <Text sx={{ textAlign: "center", mt: "30px" }}>
            You can fund projects using BTC and STX.
          </Text>
          <Text sx={{ textAlign: "center", mt: "10px" }}>
            With integration of popular Bitcoin and Stacks wallets, just
            download XVERSE or Leather wallet and start funding.
          </Text>
        </Container>
      </Box>
      <Container maxW="1240px">
        <Flex
          mt="100px"
          alignItems="center"
          gap="20px"
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          <Image src={perkImage} />
          <Box>
            <Text fontSize="30px" fontWeight="semibold" mb="20px">
              Perks and Rewards
            </Text>
            <Text>
              Each project decides what they want to offer in terms of perks or
              rewards to backers. They could range from digital assets to
              physical goods and everything in between. Perks and Rewards are
              listed on the project fund page.
            </Text>
          </Box>
        </Flex>
        <Flex
          mb={{ base: 0, md: "100px" }}
          mt={{ base: "100px", md: 0 }}
          alignItems="center"
          flexDirection={{ base: "column-reverse", md: "row" }}
          gap="20px"
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          <Image src={perkImage} visibility="hidden" />
          <Box>
            <Text fontSize="30px" fontWeight="semibold" mb="20px">
              Newsletter:
            </Text>
            <Text>
              Get updates on the latest projects campaigns and the Bitcoin
              ecosystem
            </Text>
            <Flex gap="10px" my="20px">
              <Input placeholder="Your Email address" size="sm" height="40px" />
              <Button
                fontSize="sm"
                fontWeight={600}
                borderRadius={0}
                color="white"
                width="200px"
                backgroundColor="#E16A15"
                _hover={{
                  bg: "#e69517",
                }}
              >
                Subscribe
              </Button>
            </Flex>
            <Checkbox>
              <Text style={{ fontSize: "12px" }}>
                I agree to the{" "}
                <Text as="span" style={{ color: "#fba418" }}>
                  Terms of Use{" "}
                </Text>{" "}
                and have <box as="br" /> read and understand the{" "}
                <Text as="span" style={{ color: "#fba418" }}>
                  Privacy Policy
                </Text>
              </Text>
            </Checkbox>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Backers;
