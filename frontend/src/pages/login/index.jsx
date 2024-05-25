import React, { useState } from "react";
import {
  Heading,
  Stack,
  Image,
  Skeleton,
  Box,
  Text,
  Container,
  Flex,
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import BetaLogin from "../../assets/images/beta_icon.png";
import Logo from "../../assets/images/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../firebase";

const loginPassword = "InventOnBTC123";

const Login = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = React.useState({
    email: "",
    twitter: "",
  });

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const login = () => {
    if (password === loginPassword) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    }
  };

  const addEmailAndTwitterHandle = async () => {
    try {
      await addDoc(collection(db, "betaLogin"), form);
      setForm({
        email: "",
        twitter: "",
      });
      setMessage("Submitted successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Box bg="#000" minHeight="auto">
        <Box bg="black" p={0} margin={0}>
          <Container maxW="1240px">
            <Flex
              color="white"
              py={{ base: 2 }}
              align="center"
              justifyContent={"space-between"}
            >
              <Flex align="center">
                <Image boxSize="60px" src={Logo} alt="Logo" />
                <Box>
                  <Text
                    as="h1"
                    color="white"
                    fontSize="xl"
                    textTransform={"uppercase"}
                  >
                    ION | Invent On
                    <Box as="span" color="#fba418" display="block">
                      BTC
                    </Box>
                  </Text>
                </Box>
              </Flex>

              <Stack
                flex={{ base: 1, md: 0 }}
                justify="flex-end"
                direction="row"
                spacing={6}
                align="center"
              >
                <Text
                  color="gray"
                  fontSize="md"
                  as="a"
                  href="https://invent-on-btc.gitbook.io/invent-on-btc/"
                >
                  DOCS
                </Text>
              </Stack>
            </Flex>
          </Container>
        </Box>
        <Stack
          direction={"row"}
          mt={{ base: 0, md: -1 }}
          gap={0}
          justifyContent={"space-between"}
        >
          <Stack
            direction="column"
            color="white"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              pl={4}
              p={{ base: "0", lg: "2rem" }}
              ml={{ base: 2, lg: 10 }}
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              mt={"4rem"}
            >
              <Box>
                <Heading
                  maxW={{ base: "100vw", lg: "30vw" }}
                  as="h1"
                  size={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  textAlign="left"
                  mb={"4rem"}
                >
                  DEFI CROWDFUNDING FOR{" "}
                  <span style={{ color: "#f68d2c" }}>BITCOIN</span> STARTUPS
                </Heading>
                <Heading
                  as="h1"
                  size="2xl"
                  fontWeight="400"
                  textAlign="left"
                  mb={4}
                >
                  COMING SOON
                </Heading>
              </Box>
              <Box
                mt={"6rem"}
                ml={"4rem"}
                display={"flex"}
                gap={4}
                onClick={onOpen}
                cursor="pointer"
              >
                <FaArrowRightLong size={60} />
                <Text
                  fontWeight="400"
                  textAlign="right"
                  textTransform={"uppercase"}
                  mb={4}
                  fontSize={"1.2rem"}
                >
                  Access Invite Only <br /> Beta
                </Text>
                {/* <Box borderBottom="2px solid #e9522a" width="100%" /> */}
              </Box>
            </Box>
          </Stack>
          <Box mt={20}>
            <Image
              w="100%"
              h="100%"
              display={{ base: "none", lg: "block" }}
              minW={{ base: "auto" }}
              objectFit="cover"
              src={BetaLogin}
              fallback={<Skeleton />}
            />
          </Box>
        </Stack>
      </Box>
      <Box
        bg="#d97c27"
        minHeight="auto"
        pb={20}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          mt={{ base: 0, md: -1 }}
          gap={0}
          justifyContent={"space-between"}
        >
          <Stack
            direction="column"
            color="white"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              pl={4}
              p={{ base: "2rem", lg: "0" }}
              ml={10}
              display={"flex"}
              flexDir={"row"}
              mt={"4rem"}
            >
              <Box
                display={"flex"}
                flexDir={{ base: "column", lg: "row" }}
                gap={8}
                justifyContent={"center"}
                alignItems={"center"}
                margin={"auto"}
              >
                <Text
                  fontWeight="400"
                  textAlign="right"
                  mb={4}
                  fontSize={"1rem"}
                >
                  Sign up for early BETA access
                </Text>

                <Flex flexDir={"column"} gap={4}>
                  {message ? (
                    <Text bg="green" p="4px">
                      {message}
                    </Text>
                  ) : null}
                  <Input
                    placeholder="Your Email address"
                    size="sm"
                    height="35px"
                    width="250px"
                    value={form.email}
                    bg={"white"}
                    color="#000"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Your twitter handle @"
                    size="sm"
                    height="35px"
                    value={form.twitter}
                    width="250px"
                    bg={"white"}
                    color="#000"
                    onChange={(e) =>
                      setForm({ ...form, twitter: e.target.value })
                    }
                  />
                  <Button
                    textAlign={"center"}
                    marginTop={4}
                    size="md"
                    height="25PX"
                    width="80px"
                    borderColor="#fba418"
                    bg="#fff"
                    rounded={0}
                    color={"#000"}
                    textTransform={"uppercase"}
                    fontSize={"12px"}
                    fontWeight={700}
                    margin={"auto"}
                    onClick={addEmailAndTwitterHandle}
                  >
                    SUBMIT
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          mt={{ base: 0, md: -1 }}
          gap={0}
          justifyContent={"space-between"}
        >
          <Stack
            direction="column"
            color="white"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              pl={4}
              p={{ base: "2rem", lg: "0" }}
              ml={10}
              display={"flex"}
              flexDir={"row"}
              mt={"4rem"}
            >
              <Box
                display={"flex"}
                flexDir={{ base: "column", lg: "row" }}
                gap={8}
                justifyContent={"center"}
                alignItems={"center"}
                margin={"auto"}
              >
                <Text fontWeight="500" mb={4} fontSize={"1rem"} color={"#000"}>
                  For Start-ups: <br /> Submit a project for crowdfunding
                </Text>

                <Button
                  marginTop={4}
                  size="md"
                  height="40px"
                  width="200px"
                  rounded="md"
                  borderColor="#fba418"
                  _hover={{ bg: "#000" }}
                  bg="#000"
                  variant="solid"
                  color={"#fff"}
                  textTransform={"uppercase"}
                  fontSize={"12px"}
                  fontWeight={500}
                  as="a"
                  href="https://blocksurvey.io/ion-inventonbtc-start-a-project-qa6auObvQaCkVgIyILXj.g?v=o"
                >
                  START A PROJECT
                </Button>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter Password To Login"
              onChange={({ target }) => setPassword(target.value)}
              type="password"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={login}>
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
