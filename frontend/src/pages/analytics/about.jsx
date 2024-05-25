import React from "react";
import {
  Grid,
  GridItem,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  ButtonGroup,
  Circle,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoFlagSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

const About = () => {
  const style = {
    box: {
      p: "15px",
      borderRight: {
        base: "none",
        lg: "2px solid lightgrey",
      },
      boxShadow: {
        base: "0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a",
        lg: "none",
      },
      w: { base: "100%", lg: "413px" },
      _last: {
        borderRight: "none",
      },
    },
    GridItem: {
      borderRadius: "4px",
      boxShadow: "0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a",
      fontWeight: 600,
      py: "8px",
      ps: "10px",
    },
    Links: {
      _hover: { textDecoration: "underline" },
    },
  };

  return (
    <Box boxShadow="0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a">
      <Flex
        justify="center"
        direction={{ base: "column", lg: "row" }}
        sx={{
          py: "20px",
          m: "auto",
          maxW: "90%",
        }}
      >
        <Box sx={style.box}>
          <Text mb="20px" as="h2" fontSize="xl" fontWeight={600}>
            About
          </Text>
          <Text mb="20px" as="p" fontSize="sm">
            Barentz is a provider of ingredients for the pharmaceutical,
            personal & home care, food & nutrition, and animal nutrition
            industries.
          </Text>
          <List fontSize="sm" spacing="10px" color="#183444">
            <ListItem>
              <ListIcon fontSize="md" as={FaLocationDot} />
              <Text as={Link} sx={style.Links}>
                Hoofddorp,
              </Text>
              <Text as={Link} sx={style.Links}>
                Noord-Holland,
              </Text>
              <Text as={Link} sx={style.Links}>
                The Netherlands,
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon fontSize="md" as={FaUserFriends} />
              <Text as={Link} sx={style.Links}>
                1001-5000
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon fontSize="md" as={FaDollarSign} />
              <Text as={Link} sx={style.Links}>
                Private Equity
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon fontSize="md" as={IoFlagSharp} />
              <Text as="span">Private</Text>
            </ListItem>
            <ListItem>
              <ListIcon fontSize="md" as={BiWorld} />
              <Text as={Link} sx={style.Links}>
                www.barentz.com/
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon fontSize="md" as={FaChartBar} />
              <Text as={Link} sx={style.Links}>
                108,413
              </Text>
            </ListItem>
          </List>
        </Box>
        <Box sx={style.box}>
          <Text mb="20px" as="h2" fontSize="xl" fontWeight={600}>
            Highlights
          </Text>
          <Grid
            gap="10px"
            templateColumns={{ base: "repeat(1)", lg: "repeat(2, 1fr)" }}
          >
            <GridItem sx={style.GridItem} as={Link}>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text>Acquisitions</Text>
                  <Text color="blue" fontSize="xl">
                    2
                  </Text>
                </Box>
                <MdOutlineKeyboardArrowRight
                  color="lightgrey"
                  fontSize="35px"
                />
              </Flex>
            </GridItem>
            <GridItem sx={style.GridItem} as={Link}>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text>Acquisitions</Text>
                  <Text color="blue" fontSize="xl">
                    2
                  </Text>
                </Box>
                <MdOutlineKeyboardArrowRight
                  color="lightgrey"
                  fontSize="35px"
                />
              </Flex>
            </GridItem>
            <GridItem sx={style.GridItem} as={Link}>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text>Acquisitions</Text>
                  <Text color="blue" fontSize="xl">
                    2
                  </Text>
                </Box>
                <MdOutlineKeyboardArrowRight
                  color="lightgrey"
                  fontSize="35px"
                />
              </Flex>
            </GridItem>
            <GridItem sx={style.GridItem} as={Link}>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text>Acquisitions</Text>
                  <Text color="blue" fontSize="xl">
                    2
                  </Text>
                </Box>
                <MdOutlineKeyboardArrowRight
                  color="lightgrey"
                  fontSize="35px"
                />
              </Flex>
            </GridItem>
            <GridItem sx={style.GridItem} as={Link}>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text>Acquisitions</Text>
                  <Text color="blue" fontSize="xl">
                    2
                  </Text>
                </Box>
                <MdOutlineKeyboardArrowRight
                  color="lightgrey"
                  fontSize="35px"
                />
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box sx={style.box}>
          <Text mb="20px" as="h2" fontSize="xl" fontWeight={600}>
            Company Insights
          </Text>
          <Box
            sx={{
              p: "16px",
              boxShadow:
                "0 0 8px #eee, 1px 0 3px #0000001a, -1px 0 3px #0000001a",
            }}
          >
            <Text mb="20px" as="h2" fontSize="lg" fontWeight={600}>
              Is Barentz experiencing growth?
            </Text>
            <Flex
              align="center"
              sx={{
                px: "10px",
                gap: "8px",
                background: "linear-gradient(to right, #cbddff, #efebfc)",
                w: "150px",
                color: "#063cff",
                mb: "20px",
              }}
            >
              <Icon as={BsStars} />
              <Text>Powered by AI</Text>
            </Flex>
            <Text mb="20px" fontSize="sm">
              Barentz may be growing as it has recently acquired Radian Chemical
              Products in India, which is a strategic
            </Text>
            <Flex mb="40px" align="center" color="#063cff" gap="10px" as={Link}>
              <Text fontSize="sm" textTransform="uppercase">
                view more
              </Text>
              <Icon as={MdOutlineKeyboardArrowRight} />
            </Flex>
            <ButtonGroup spacing="10px">
              <Circle h="35px" w="35px" border="1px solid black" as="button">
                <BiSolidLike />
              </Circle>
              <Circle w="35px" h="35px" border="1px solid black" as="button">
                <BiSolidDislike />
              </Circle>
            </ButtonGroup>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
