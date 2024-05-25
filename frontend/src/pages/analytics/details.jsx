import {
  Text,
  Image,
  Button,
  Box,
  Flex,
  List,
  ListItem,
  ListIcon,
  Circle,
  Stack,
} from "@chakra-ui/react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import analytic from "../../assets/images/analytic-image-1.webp";

const Details = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      sx={{ py: "20px", m: "auto", maxW: "90%", gap: "20px" }}
    >
      <Stack gap="20px" w={{ base: "100%", lg: "60%", xl: "70%" }}>
        <Box
          p="20px"
          boxShadow="0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a"
          backgroundColor="#fff8da"
        >
          <Text mb="20px" fontWeight="600" fontSize="2xl">
            Find More Contacts for Barentz
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap="20px"
          >
            <Box
              backgroundColor="white"
              w={{ base: "100%", md: "350px" }}
              p="15px"
              boxShadow="0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a"
            >
              <Text fontSize="sm">President</Text>
              <Text fontSize="sm">Executive</Text>
              <Text fontSize="sm">Management</Text>
              <List py="15px">
                <ListItem>
                  <ListIcon fontSize="lg" as={MdEmail} />1 email found
                </ListItem>
                <ListItem>
                  <ListIcon fontSize="lg" as={FaPhoneAlt} />1 phone number found
                </ListItem>
              </List>
            </Box>
            <Box
              px={{ base: "0", md: "20px" }}
              w={{ base: "100%", md: "350px" }}
            >
              <Text mb="20px" fontSize="sm">
                View contacts for Barentz to access new leads and connect with
                decision-makers.
              </Text>
              <Button
                backgroundColor="#146aff"
                color="white"
                fontSize="sm"
                textTransform="uppercase"
                px="10px"
                variant="unstyled"
              >
                View all contacts
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box
          p="20px"
          boxShadow="0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a"
        >
          <Flex mb="25px" justify="space-between" align="center">
            <Text fontWeight={600} fontSize="xl">
              Details
            </Text>
            <Circle
              as="button"
              sx={{
                w: "30px",
                h: "30px",
                _hover: { backgroundColor: "lightgrey" },
              }}
            >
              <FaPencil />
            </Circle>
          </Flex>
          <Text fontWeight={600}>Industries</Text>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap="20px"
            pb="20px"
            borderBottom="2px solid lightgrey"
          >
            <List spacing="20px" w={{ base: "100%", lg: "400px" }}>
              <ListItem>
                <Flex wrap="wrap" mb="10px" gap="10px">
                  <Text
                    as="button"
                    rounded="2xl"
                    px="10px"
                    py="5px"
                    backgroundColor="#e7f8f2"
                    fontWeight={600}
                  >
                    Food and Beverage
                  </Text>
                  <Text
                    as="button"
                    rounded="2xl"
                    px="10px"
                    py="5px"
                    backgroundColor="#e7f8f2"
                    fontWeight={600}
                  >
                    Food Processing
                  </Text>
                </Flex>
                <Flex wrap="wrap" gap="10px">
                  <Text
                    as="button"
                    rounded="2xl"
                    px="10px"
                    py="5px"
                    backgroundColor="#e7f8f2"
                    fontWeight={600}
                  >
                    Nutrition
                  </Text>
                  <Text
                    as="button"
                    rounded="2xl"
                    px="10px"
                    py="5px"
                    backgroundColor="#e7f8f2"
                    fontWeight={600}
                  >
                    Personal Health
                  </Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Text>Founded Date</Text> 1953
              </ListItem>
              <ListItem>
                <Text>Company Type</Text>For Profit
              </ListItem>
            </List>
            <List spacing="20px">
              <ListItem>
                <Text>
                  Headquarters Regions
                  <Text>
                    European Union (EU), Europe, Middle East, and Africa (EMEA)
                  </Text>
                </Text>
              </ListItem>
              <ListItem>
                <Text>Founders Herman </Text> Barentz
              </ListItem>
              <ListItem>
                <Text>Last Funding Type </Text> Private Equity
              </ListItem>
            </List>
          </Flex>
          <Box py="20px" borderBottom="2px solid lightgrey">
            <Text>Company Type </Text> For Profit
          </Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            py="20px"
            gap="20px"
            borderBottom="2px solid lightgrey"
          >
            <Text w={{ base: "100%", lg: "400px" }}>
              Contact Email <Text>info.desk@barentz.nl</Text>
            </Text>
            <Text>
              Phone Number <Text>+31 (0)23 567 34 56</Text>
            </Text>
          </Flex>
          <Text py="10px">
            Barentz is a global provider of ingredients for the life sciences
            markets. Representing world-class suppliers, Barentz offers
            customers a comprehensive portfolio of speciality ingredients,
            including unique specialty ingredients and blends from Barentz-owned
            production companies, all supported by the best technical teams and
            top-of-the-lineapplication labs.
          </Text>
        </Box>
        <Box
          boxShadow="0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a"
          p="20px"
        >
          <Flex mb="20px" justify="space-between" align="center">
            <Text fontWeight={600} fontSize="xl">
              Lists Featuring This Company
            </Text>
            <Circle
              as="button"
              sx={{
                w: "30px",
                h: "30px",
                _hover: { backgroundColor: "lightgrey" },
              }}
            >
              <FaPencil />
            </Circle>
          </Flex>
          <Stack mb="20px" gap="20px">
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify="space-between"
              align={{ base: "end", lg: "center" }}
              gap="10px"
            >
              <Box fontSize="sm" w={{ base: "100%", sm: "500px" }}>
                <Text
                  sx={{
                    fontWeight: 600,
                    _hover: { textDecoration: "underline" },
                  }}
                  as={Link}
                >
                  European Union (EU) Private Equity Stage Companies With More
                  Than $10M in Revenue
                </Text>
                <Text mt="8px">
                  536 Number of Organizations • $69B Total Funding Amount •
                  1,101 Number of Investors
                </Text>
              </Box>
              <Button
                sx={{
                  fontSize: "md",
                  px: "20px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
                spacing="10px"
                leftIcon={<BsFillLightningChargeFill color="orange" />}
                variant="unstyled"
              >
                track
              </Button>
            </Flex>
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify="space-between"
              align={{ base: "end", lg: "center" }}
              gap="10px"
            >
              <Box fontSize="sm" w={{ base: "100%", sm: "500px" }}>
                <Text
                  sx={{
                    fontWeight: 600,
                    _hover: { textDecoration: "underline" },
                  }}
                  as={Link}
                >
                  European Union (EU) Private Equity Stage Companies With More
                  Than $10M in Revenue
                </Text>
                <Text mt="8px">
                  536 Number of Organizations • $69B Total Funding Amount •
                  1,101 Number of Investors
                </Text>
              </Box>
              <Button
                sx={{
                  fontSize: "md",
                  px: "20px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
                spacing="10px"
                leftIcon={<BsFillLightningChargeFill color="orange" />}
                variant="unstyled"
              >
                track
              </Button>
            </Flex>
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify="space-between"
              align={{ base: "end", lg: "center" }}
              gap="10px"
            >
              <Box fontSize="sm" w={{ base: "100%", sm: "500px" }}>
                <Text
                  sx={{
                    fontWeight: 600,
                    _hover: { textDecoration: "underline" },
                  }}
                  as={Link}
                >
                  European Union (EU) Private Equity Stage Companies With More
                  Than $10M in Revenue
                </Text>
                <Text mt="8px">
                  536 Number of Organizations • $69B Total Funding Amount •
                  1,101 Number of Investors
                </Text>
              </Box>
              <Button
                sx={{
                  fontSize: "md",
                  px: "20px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
                spacing="10px"
                leftIcon={<BsFillLightningChargeFill color="orange" />}
                variant="unstyled"
              >
                track
              </Button>
            </Flex>
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify="space-between"
              align={{ base: "end", lg: "center" }}
              gap="10px"
            >
              <Box fontSize="sm" w={{ base: "100%", sm: "500px" }}>
                <Text
                  sx={{
                    fontWeight: 600,
                    _hover: { textDecoration: "underline" },
                  }}
                  as={Link}
                >
                  European Union (EU) Private Equity Stage Companies With More
                  Than $10M in Revenue
                </Text>
                <Text mt="8px">
                  536 Number of Organizations • $69B Total Funding Amount •
                  1,101 Number of Investors
                </Text>
              </Box>
              <Button
                sx={{
                  fontSize: "md",
                  px: "20px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
                spacing="10px"
                leftIcon={<BsFillLightningChargeFill color="orange" />}
                variant="unstyled"
              >
                track
              </Button>
            </Flex>
          </Stack>
          <Box textAlign="center">
            <Button
              sx={{
                fontSize: "sm",
                px: "20px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
              leftIcon={<BsFillLightningChargeFill color="orange" />}
              variant="unstyled"
            >
              show more
            </Button>
          </Box>
        </Box>
        <Box
          boxShadow="0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a"
          p="20px"
        >
          <Flex mb="20px" justify="space-between" align="center">
            <Text fontWeight={600} fontSize="xl">
              Frequently Asked Questions
            </Text>
            <Circle
              as="button"
              sx={{
                w: "30px",
                h: "30px",
                _hover: { backgroundColor: "lightgrey" },
              }}
            >
              <FaPencil />
            </Circle>
          </Flex>
          <List spacing="10px" fontSize="15px">
            <ListItem>
              Where is{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Barentz
              </Text>
              's headquarters?{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Barentz
              </Text>{" "}
              is located in{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Hoofddorp
              </Text>
              ,{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Noord-Holland
              </Text>
              ,{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                The Netherlands.
              </Text>
            </ListItem>
            <ListItem>
              Who invested in{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Barentz
              </Text>{" "}
              ?{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Barentz
              </Text>{" "}
              is funded by{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Cinven
              </Text>
              .
            </ListItem>
            <ListItem>
              When was the last funding round for{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Barentz
              </Text>{" "}
              ?{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Barentz
              </Text>{" "}
              closed its last funding round on{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Nov 26, 2019
              </Text>{" "}
              from a{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Private Equity
              </Text>{" "}
              round.
            </ListItem>
            <ListItem>
              Who are{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Barentz
              </Text>
              's competitors? Alternatives and possible competitors to{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Barentz
              </Text>{" "}
              may include{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Nekkanti Sea Foods
              </Text>{" "}
              ,{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Trovita Health Science
              </Text>
              , and{" "}
              <Text
                as={Link}
                sx={{
                  fontWeight: 600,
                  _hover: { textDecoration: "underline" },
                }}
              >
                Chr. Hansen
              </Text>
              .
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Box
        boxShadow="0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a"
        w={{ base: "100%", lg: "450px" }}
        h="100%"
      >
        <Image src={analytic} />
      </Box>
    </Flex>
  );
};

export default Details;
