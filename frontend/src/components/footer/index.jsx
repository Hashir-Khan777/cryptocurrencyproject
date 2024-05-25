import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Text,
  Image,
  Input,
  Checkbox,
  Button,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import FooterLogo from "../../assets/images/Footer_logo.png";
import { BsEnvelope } from "react-icons/bs";
import { FaDiscord, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#FFF0E5"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Container maxW="1240px">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={6} px={10}>
          <Flex flexDir="column" as={Link} to="/">
            <Image src={FooterLogo} alt="Coin1" width={"100px"} />
          </Flex>
          <Flex flexDir="column">
            <Heading
              as="h5"
              color="gray.600"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              EXPLORE
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="What we do" />
              <LinkItem text="Funding" />
            </List>
          </Flex>
          <Flex flexDir="column">
            <Heading
              as="h5"
              color="gray.600"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              ABOUT
            </Heading>
            <List lineHeight="2">
              <LinkItem text="About us &amp; Safety" />
              <LinkItem text="Blog" />
              <LinkItem text="Trust & Safety" />
              <LinkItem text="Help & Support" />
              <LinkItem text="Press" />
              <LinkItem text="Careers" />
              <LinkItem text="Contact" />
            </List>
          </Flex>
          <Flex flexDir="column">
            <Heading
              as="h5"
              color="gray.600"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Entrepreneurs
            </Heading>
            <List lineHeight="2">
              <LinkItem text="How it works" />
              <LinkItem text="Creator Corner" />
              <LinkItem text="Fees" />
            </List>
          </Flex>
          <Flex flexDir="column" align="center">
            <BsEnvelope size={30} />
            <Heading
              as="h5"
              color="#000"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
              textAlign="center"
            >
              Get it first
            </Heading>
            <Text textAlign="center">
              Discover new innovations in the <br /> InventOnBTC newsletter
            </Text>
            <Input
              placeholder="Your Email address"
              size="sm"
              height="40px"
              width="200px"
              bg={"white"}
            />
            <Checkbox>
              <p style={{ fontSize: "12px" }}>
                I agree to the{" "}
                <span style={{ color: "#fba418" }}>Terms of Use </span> and have{" "}
                <br /> read and understand the{" "}
                <span style={{ color: "#fba418" }}>Privacy Policy</span>
              </p>
            </Checkbox>
            <Button
              marginTop={4}
              size="md"
              height="35px"
              width="200px"
              borderColor="#fba418"
              bg="#fba418"
              color={"#fff"}
              rounded={0}
              textTransform={"uppercase"}
              fontSize={"12px"}
            >
              Sign Me Up
            </Button>
          </Flex>
        </SimpleGrid>
        <Box
          display={"flex"}
          gap={6}
          justifyContent={{ base: "center", lg: "flex-start" }}
          ml={10}
        >
          <Button
            marginTop={4}
            size="md"
            height="35px"
            width="200px"
            borderColor="#ccc"
            bg="#fff"
            color={"#000"}
            rounded={0}
            textTransform={"uppercase"}
            fontSize={"12px"}
          >
            BTC & STX
          </Button>
          <Flex gap={4} mt={7} justify="center">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaDiscord />
          </Flex>
        </Box>
        <Flex
          maxW="64rem"
          mx="auto"
          alignItems="center"
          px={10}
          justifyContent={"center"}
          mt={10}
        >
          <List lineHeight="2" display={"flex"} flexWrap="wrap" gap={4}>
            <LinkItem color={"#000"} fontSize={"10px"} text="Terms of Use" />
            <LinkItem color={"#000"} fontSize={"10px"} text="Privacy Policy" />
            <LinkItem color={"#000"} fontSize={"10px"} text="Cookie Policy" />
            <LinkItem
              color={"#000"}
              fontSize={"10px"}
              text="Do Not Sell My Personal Information"
            />
            <LinkItem color={"#000"} fontSize={"10px"} text="Accessibility" />
            <LinkItem
              color={"#000"}
              fontSize={"10px"}
              text="© 2024 InventOnBTC, Inc. All Rights Reserved"
            />
          </List>
        </Flex>
      </Container>
    </Box>
  );
};

const LinkItem = ({ text }) => {
  return (
    <ListItem display="flex">
      <Link
        fontWeight="600"
        to="/"
        color="rgba(113, 128, 150, 1)"
        _hover={{ color: "green.600" }}
      >
        {text}
      </Link>
    </ListItem>
  );
};

export default Footer;
