import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import banner3 from "../../assets/images/banner3.jpeg";
import Coin1 from "../../assets/images/Footer_logo.png";
import Coin2 from "../../assets/images/coin_2.png";
import RocketIcon from "../../assets/images/rocket.png";
import Planet from "../../assets/images/planet.png";
import { data } from "../../utils/TrendingProjectsData";
import { data as blogs } from "../../utils/BlogData";
import { data as curatedData } from "../../utils/StartupCuratedData";
import { FaCheckSquare } from "react-icons/fa";
import { ProjectCard } from "../../components";

const Satrtup = () => {
  return (
    <Box>
      <Flex
        backgroundImage={banner3}
        width="100%"
        height="400px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="#fff"
          fontSize={{ base: "20px", md: "30px", lg: "40px" }}
          fontWeight={900}
          textAlign="center"
          px="5px"
        >
          Bring Your Bitcoin Innovations To Life
        </Text>
      </Flex>
      <Container maxW="1240px" my={10}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Text
            sx={{
              fontSize: "40px",
              color: "#191919",
              fontWeight: "bold",
            }}
          >
            Become A Bitcoin Entrepreneur
          </Text>
          <Button
            width="250px"
            height="69px"
            bgColor="#E16A15"
            color="#fff"
            fontSize="20px"
            _hover={{
              bgColor: "#E16A15",
            }}
            as="a"
            href="https://blocksurvey.io/ion-inventonbtc-start-a-project-qa6auObvQaCkVgIyILXj.g?v=o"
          >
            Start A Project
          </Button>
        </Flex>
        <Box marginTop="30px">
          <Text
            fontSize="1rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="bold"
            maxW={{ base: "100%", md: "470px" }}
            mb={"4px"}
            mt="10px"
            color={"black"}
          >
            Get Funded with
          </Text>
          <Stack direction="row" spacing={5} mt={"4px"}>
            <Image sx={{ width: "50px" }} src={Coin1} alt="Coin1" />
            <Image sx={{ width: "50px" }} src={Coin2} alt="Coin2" />
          </Stack>
        </Box>
        <Flex
          alignItems="center"
          justifyContent="space-evenly"
          marginTop="100px"
          flexWrap="wrap"
        >
          <Box maxWidth="390px" width="100%">
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
              <Image src={RocketIcon} sx={{ width: "70px" }} />
              <Text
                sx={{
                  textAlign: "center",
                  color: "#2A2A2A",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Fund Your Ideas
              </Text>
            </Flex>
            <Text
              sx={{
                fontWeight: "bold",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Entrepreneurship through crowdfunding
            </Text>
            <Text>
              Get access to crowdfunding for your innovate ideas in the Bitcoin
              economy. Extend your reach to the crypto ecosystem.
            </Text>
          </Box>
          <Box maxWidth="390px" width="100%">
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
              <Image src={Planet} sx={{ width: "70px" }} />
              <Text
                sx={{
                  textAlign: "center",
                  color: "#2A2A2A",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                PLATFORM
              </Text>
            </Flex>
            <Text
              sx={{
                fontWeight: "bold",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Platform for all in the Bitcoin Enonomy
            </Text>
            <Text>
              This is a platform for all. From artists to technologists and
              everything in between in the Bitcoin ecosystem. Anyone is welcome
              to create and innovate
            </Text>
          </Box>
        </Flex>
      </Container>
      <Stack
        bg={"#e6e7e9"}
        as={Box}
        textAlign={"center"}
        spacing={{ base: 4, md: 7 }}
        py={{ base: 20, md: 36 }}
        mt={20}
      >
        <Flex justifyContent="center" alignItems="center" gap="20px">
          <Heading fontWeight="bold" fontSize="36px">
            GET CURATED
          </Heading>
          <Icon
            as={FaCheckSquare}
            color="#0034EC"
            marginRight="3px"
            fontSize={"32px"}
          />
        </Flex>
        <Text
          color={"#000"}
          w={{ base: "100%", md: "733px" }}
          textAlign={"center"}
          margin="0 auto"
        >
          Curated Projects on the Invent On BTC Platform are marked with the
          blue tick. This is a badge that makes the project stand-out from the
          rest and is only given to those who have satisfied the requirements
          set by the Invent On BTC platform
        </Text>
        <Text fontWeight="bold" fontSize="36px">
          Advantages to get curated
        </Text>
        <Stack direction="column" spacing={3} align="center" alignSelf="center">
          <Flex
            flexDir={{ base: "row" }}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap="20px"
          >
            {curatedData.map((item, index) => (
              <Flex
                flexDir="column"
                alignItems={"center"}
                gap="10px"
                maxW="200px"
                key={index}
                textAlign="center"
                mr={{ base: "18px", md: "50px" }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  mixBlendMode={"multiply"}
                />
                <Text fontSize={{ base: "10px", md: "14px" }}>
                  {item.content}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Stack>
      </Stack>
      <Container maxW="1240px" mb="100px">
        <Text
          sx={{
            color: "black",
            fontSize: "32px",
            fontWeight: "bold",
            marginTop: "100px",
            marginBottom: "20px",
          }}
        >
          PROJECTS FUNDED THROUGH{" "}
          <Text as="span" sx={{ color: "#E16A15" }}>
            INVENT ON BTC
          </Text>
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          gap={6}
          justifyContent="center"
        >
          {data.slice(0, 4).map((item, index) => (
            <ProjectCard item={item} key={index} />
          ))}
        </SimpleGrid>
        <Text
          sx={{
            color: "black",
            fontSize: "32px",
            fontWeight: "bold",
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          CREATOR RESOURCES
        </Text>
        <Text
          sx={{
            color: "black",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Some tools and resources to help you on you Bitcoin Entrepreneurial
          journey
        </Text>
        <Flex alignItems={"center"} justifyContent={"center"} width={"100%"}>
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
            gap={6}
            justifyContent="center"
            marginTop="30px"
          >
            {blogs.map((item, index) => (
              <Box key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  height="350px"
                  width="100%"
                />
                <Stack mt="2" spacing="3">
                  <Text
                    fontSize="0.8rem"
                    textAlign={"center"}
                    display={"block"}
                    lineHeight="1.375"
                    fontWeight="600"
                    maxW={{ base: "100%", md: "393px" }}
                    color={useColorModeValue("#000", "gray.400")}
                  >
                    {item.title}
                  </Text>
                  <Box maxW={"20vw"}>
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Satrtup;
