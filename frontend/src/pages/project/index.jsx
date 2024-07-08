import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import detailImage from "../../assets/images/detail.png";
import { FaCheckSquare, FaLink, FaTwitter } from "react-icons/fa";
import Coin1 from "../../assets/images/Footer_logo.png";
import Coin2 from "../../assets/images/coin_2.png";
import car from "../../assets/images/car.png";
import man from "../../assets/images/man.png";
import bike from "../../assets/images/bike.jpeg";
import { FaFacebookSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fundProduct, getProduct } from "../../store/actions/product.action";
import Wallet from "sats-connect";
import { getTransactions } from "../../store/actions/transactions.action";
import XverseIcon from "../../assets/images/xverse_icon.png";
import LeatherIcon from "../../assets/images/leather_icon.png";

const Project = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [amount, setAmount] = useState(0);
  const [wallet, setWallet] = useState("leather");
  const [error, setError] = useState("");

  const { product } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();
  const walletAddress = JSON.parse(localStorage.getItem("wallet"))?.addresses[0]
    ?.address;

  const transferBitcoin = async () => {
    dispatch(
      fundProduct({
        id: product.id,
        fundedAmount: amount,
        walletId: walletAddress,
      })
    );
    if (wallet === "leather") {
      try {
        const response = await window.LeatherProvider.request("sendTransfer", {
          recipients: [
            {
              address: product.walletId,
              amount: amount.toString(),
            },
          ],
          network: "testnet",
        });
        dispatch(
          fundProduct({
            id: product.id,
            fundedAmount: amount,
            walletId: walletAddress,
          })
        );
        console.log(response, "response");
        onClose();
      } catch (err) {
        setError(err.error.message);
      }
    } else {
      try {
        const response = await Wallet.request("sendTransfer", {
          recipients: [
            {
              address: product.walletId,
              amount: 2000,
            },
          ],
        });
        dispatch(
          fundProduct({
            id: product.id,
            fundedAmount: amount,
            walletId: walletAddress,
          })
        );
        console.log(response, "response");
        onClose();
      } catch (err) {
        setError(err.error.message);
      }
    }
  };

  useEffect(() => {
    dispatch(getProduct({ id }));
  }, [dispatch]);

  return (
    <Box>
      <Container maxW="1240px">
        <Flex gap="20px" my="100px" flexWrap={{ base: "wrap", lg: "nowrap" }}>
          <Image
            src={product.image}
            sx={{
              width: { base: "100%", lg: "60%" },
              height: { base: "260px", md: "100%" },
            }}
          />
          <Box>
            <Text color="#088366">FUNDING LIVE</Text>
            <Text sx={{ fontSize: "32px", fontWeight: "bold" }}>
              {product.title}
            </Text>
            <Text sx={{ fontSize: "15px", mb: "20px" }}>
              {product.category?.title}
            </Text>
            <Text sx={{ fontSize: "20px" }}>{product.description}</Text>
            <Flex gap="10px" mt="20px">
              <Image src={detailImage} />
              <Box>
                <Text sx={{ fontWeight: "bold" }}>Ava InnLead</Text>
                <Text>3 Campaigns | Hongkong, Hong Kong</Text>
              </Box>
            </Flex>
            {product.curated ? (
              <Flex alignItems="center" mt="20px">
                <Icon
                  as={FaCheckSquare}
                  color="#0034EC"
                  marginRight="3px"
                  fontSize={"22px"}
                />
                <Text sx={{ fontSize: "25px" }} color="#0034EC">
                  CURATED PROJECT
                </Text>
              </Flex>
            ) : null}
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mb="5px"
              mt="20px"
            >
              <Text sx={{ fontSize: "20px" }}>
                {product?.fundedAmount / 100000000} {product.coin} raised
              </Text>
              <Text sx={{ fontSize: "20px" }}>
                {product.investment} BTC goal
              </Text>
            </Flex>
            <Progress
              colorScheme="gray"
              size="sm"
              value={
                (product?.fundedAmount / 100000000 / product.investment) * 100
              }
              rounded={"10px"}
            />
            <Text sx={{ fontSize: "14px" }}>
              {product?.fundedAmount / 100000000} {product.coin} funded of{" "}
              {product.investment} {product.coin} goal
            </Text>
            <Flex alignItems="flex-end" justifyContent="space-between">
              <Box mt={6}>
                <Text
                  fontSize="1rem"
                  textAlign="left"
                  lineHeight="1.375"
                  fontWeight="300"
                  maxW={{ base: "100%", md: "470px" }}
                  mb={"4px"}
                  mt="10px"
                >
                  Fund with
                </Text>
                <HStack spacing={5} mt={"4px"}>
                  {product.coin === "BTC" ? (
                    <Image sx={{ width: "50px" }} src={Coin1} alt="Coin1" />
                  ) : (
                    <Image sx={{ width: "50px" }} src={Coin2} alt="Coin2" />
                  )}
                </HStack>
              </Box>
              <Button
                fontSize="sm"
                fontWeight={600}
                color="white"
                bg="#E16A15"
                _hover={{
                  bg: "#e69517",
                }}
                onClick={onOpen}
              >
                Fund Now
              </Button>
              <Box>
                <Icon as={FaFacebookSquare} fontSize={"20px"} color="gray" />
                <Icon as={FaTwitter} fontSize={"20px"} mx="20px" color="gray" />
                <Icon as={FaLink} fontSize={"20px"} color="gray" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
      {product.curated ? (
        <Box bg={"#e6e7e9"} py={{ base: 20, md: 36 }} mb="100px">
          <Container maxW="1240px">
            <Flex alignItems={"center"} gap="10px">
              <Text sx={{ fontSize: "22px" }}>This is a</Text>
              <Flex alignItems="center">
                <Icon
                  as={FaCheckSquare}
                  color="#0034EC"
                  marginRight="3px"
                  fontSize={"22px"}
                />
                <Text sx={{ fontSize: "25px" }} color="#0034EC">
                  CURATED PROJECT
                </Text>
              </Flex>
            </Flex>
            <Text sx={{ fontSize: "17px", mt: "10px" }}>
              This means the project has gone through the process of satisfying
              the requirements set forth by the platform designed to get
              specific information* regarding development and teams.
            </Text>
            <Flex sx={{ alignItems: "center", gap: "10px", mt: "20px" }}>
              <Badge color="gray">BITCOIN SOFTWARE</Badge>
              <Badge color="gray">PRODUCTIVITY</Badge>
              <Badge color="gray">WALLET</Badge>
            </Flex>
          </Container>
        </Box>
      ) : null}
      <Box mb="100px">
        <Text sx={{ fontSize: "30px", textAlign: "center" }}>
          GET MORE INFORMATION TO HELP YOU IN YOUR FUNDING DECISION
        </Text>
        <Text sx={{ textAlign: "center" }}>
          Only available for CURATED projects
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap="20px"
          mt="20px"
        >
          <Button
            as={Link}
            to={`/project/analytics/${id}`}
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="#189CFB"
            _hover={{
              bg: "#189CFB",
            }}
          >
            Project Analytics
          </Button>
          <Button
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="#189CFB"
            _hover={{
              bg: "#189CFB",
            }}
          >
            Founder interview
          </Button>
        </Flex>
      </Box>
      <Container maxW="1240px" mb="100px">
        <Text sx={{ fontSize: "30px" }}>Funder's Perk</Text>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3, xl: 3 }}
          gap={6}
          justifyContent="center"
          mt="20px"
        >
          <Box>
            <Image src={man} objectFit="cover" maxH="350px" width="100%" />
            <Stack mt="2" spacing="3">
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color={useColorModeValue("#000", "gray.400")}
              >
                1 Ordinal drop
              </Text>
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color={useColorModeValue("#000", "gray.400")}
              >
                0.002 BTC Contribution
              </Text>
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color="red"
                textDecoration="line-through"
              >
                Public sale 0.003
              </Text>
            </Stack>
          </Box>
          <Box>
            <Image src={car} objectFit="cover" maxH="350px" width="100%" />
            <Stack mt="2" spacing="3">
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color={useColorModeValue("#000", "gray.400")}
              >
                1 Ordinal drop
              </Text>
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color={useColorModeValue("#000", "gray.400")}
              >
                0.002 BTC Contribution
              </Text>
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color="red"
                textDecoration="line-through"
              >
                Public sale 0.003
              </Text>
            </Stack>
          </Box>
          <Box>
            <Image src={bike} objectFit="cover" maxH="350px" width="100%" />
            <Stack mt="2" spacing="3">
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color={useColorModeValue("#000", "gray.400")}
              >
                1 Ordinal drop
              </Text>
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color={useColorModeValue("#000", "gray.400")}
              >
                0.002 BTC Contribution
              </Text>
              <Text
                fontSize="0.8rem"
                margin={"auto"}
                display={"block"}
                lineHeight="1.375"
                fontWeight="bold"
                textAlign="center"
                maxW={{ base: "100%", md: "470px" }}
                color="red"
                textDecoration="line-through"
              >
                Public sale 0.003
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
      <Container maxW="1240px" p={0}>
        <Tabs isFitted mt="100px">
          <TabList mb="1em" bgColor="#E6E7E9" color="black">
            <Tab
              _selected={{
                color: "black",
                borderColor: "#000",
              }}
              _active={{
                bgColor: "transparent",
              }}
            >
              Details
            </Tab>
            <Tab
              _selected={{
                color: "black",
                borderColor: "#000",
              }}
              _active={{
                bgColor: "transparent",
              }}
            >
              FAQ
            </Tab>
            <Tab
              _selected={{
                color: "black",
                borderColor: "#000",
              }}
              _active={{
                bgColor: "transparent",
              }}
            >
              UPDATES
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>{product?.details}</Text>
            </TabPanel>
            <TabPanel>
              <Text>faq</Text>
            </TabPanel>
            <TabPanel>
              <Text>updates</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fund</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {error ? (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            ) : null}
            <HStack spacing={5} mt={"4px"}>
              <Image
                sx={{
                  width: { base: "50px", md: "100px" },
                  cursor: "pointer",
                  border: wallet === "xverse" ? "3px solid blue" : "none",
                }}
                src={XverseIcon}
                alt="Coin1"
                onClick={() => setWallet("xverse")}
              />
              <Image
                sx={{
                  width: { base: "50px", md: "100px" },
                  cursor: "pointer",
                  border: wallet === "leather" ? "3px solid blue" : "none",
                }}
                src={LeatherIcon}
                alt="Coin2"
                onClick={() => setWallet("leather")}
              />
            </HStack>
            <Input
              type="number"
              placeholder="Amount"
              marginY={10}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="#E16A15"
              _hover={{
                bg: "#e69517",
              }}
              onClick={transferBitcoin}
            >
              Send
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Project;
