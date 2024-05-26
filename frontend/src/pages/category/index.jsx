import {
  Box,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import banner1 from "../../assets/images/banner1.jpeg";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import Coin1 from "../../assets/images/Footer_logo.png";
import Coin2 from "../../assets/images/coin_2.png";
import { data } from "../../utils/TrendingProjectsData";
import { ProjectCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/category.action";

// const Categories = [
//   { name: "Ordinals", link: "" },
//   { name: "BRC-20", link: "" },
//   { name: "Layer 2", link: "" },
//   { name: "Mining", link: "" },
//   { name: "Media", link: "" },
//   { name: "Stamps", link: "" },
//   { name: "DEFI", link: "" },
//   { name: "Bitcoin Art", link: "" },
//   { name: "Wallets", link: "" },
//   { name: "Bitcoin Education", link: "" },
//   { name: "Bitcoin Metaverse", link: "" },
//   { name: "Bitcoin Games", link: "" },
// ];

const Category = () => {
  const { categories } = useSelector((state) => state.categoryReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Box>
      <Flex
        backgroundImage={banner1}
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
          fontSize={{ base: "20px", md: "50px" }}
          fontWeight={900}
          textAlign="center"
          px="5px"
        >
          Start Funding Exciting And Innovative Projects Being Built On Bitcoin
        </Text>
      </Flex>
      <Container my={10} maxW="1240px">
        <Flex gap="50px">
          <Box sx={{ display: { base: "none", md: "block" } }}>
            <Text fontSize="30px" color="black" fontWeight="semibold">
              Filter Results
            </Text>
            <Text
              sx={{
                fontSize: "18px",
                textTransform: "uppercase",
                lineHeight: "18px",
                color: "#949494",
                fontWeight: 500,
                marginTop: "30px",
              }}
            >
              Category
            </Text>
            <Text
              sx={{
                fontSize: "14px",
                lineHeight: "33px",
                fontWeight: "500",
                color: "#e16a15",
                my: "15px",
              }}
            >
              All Categories
            </Text>
            {categories.map((item, index) => (
              <Text
                sx={{
                  cursor: "pointer",
                  marginBottom: "15px",
                }}
                key={index}
              >
                {item.title}
              </Text>
            ))}
            <Box as="hr" />
            <Text
              sx={{
                fontSize: "18px",
                textTransform: "uppercase",
                lineHeight: "18px",
                color: "#949494",
                fontWeight: 500,
                my: "15px",
              }}
            >
              Project Timing
            </Text>
            <RadioGroup>
              <Stack direction="column">
                <Radio
                  value="all"
                  sx={{
                    _checked: {
                      borderColor: "#e16a15",
                      borderWidth: "5px",
                    },
                  }}
                >
                  All
                </Radio>
                <Radio
                  value="launching_soon"
                  sx={{
                    _checked: {
                      borderColor: "#e16a15",
                      borderWidth: "5px",
                    },
                  }}
                >
                  Launching Soon
                </Radio>
                <Radio
                  value="ending_soon"
                  sx={{
                    _checked: {
                      borderColor: "#e16a15",
                      borderWidth: "5px",
                    },
                  }}
                >
                  Ending Soon
                </Radio>
                <Radio
                  value="just_launched"
                  sx={{
                    _checked: {
                      borderColor: "#e16a15",
                      borderWidth: "5px",
                    },
                  }}
                >
                  Just Launched
                </Radio>
              </Stack>
            </RadioGroup>
            <Box as="hr" marginTop="15px" />
            <Text
              sx={{
                fontSize: "18px",
                textTransform: "uppercase",
                lineHeight: "18px",
                color: "#949494",
                fontWeight: 500,
                my: "15px",
              }}
            >
              Project Stage
            </Text>
            <RadioGroup>
              <Stack direction="column">
                <Radio
                  value="all"
                  sx={{
                    _checked: {
                      borderColor: "#e16a15",
                      borderWidth: "5px",
                    },
                  }}
                >
                  All
                </Radio>
                <Radio
                  value="concept"
                  sx={{
                    _checked: {
                      borderColor: "#e16a15",
                      borderWidth: "5px",
                    },
                  }}
                >
                  Concept
                </Radio>
                <Radio
                  value="prototype"
                  sx={{
                    _checked: {
                      borderColor: "#e16a15",
                      borderWidth: "5px",
                    },
                  }}
                >
                  Prototype
                </Radio>
                <Radio
                  value="live"
                  sx={{
                    _checked: {
                      borderColor: "#e16a15",
                      borderWidth: "5px",
                    },
                  }}
                >
                  Live
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box>
                  <Text fontSize="30px" color="black" fontWeight="semibold">
                    Filter Results
                  </Text>
                  <Text
                    sx={{
                      fontSize: "18px",
                      textTransform: "uppercase",
                      lineHeight: "18px",
                      color: "#949494",
                      fontWeight: 500,
                      marginTop: "30px",
                    }}
                  >
                    Category
                  </Text>
                  <Text
                    sx={{
                      fontSize: "14px",
                      lineHeight: "33px",
                      fontWeight: "500",
                      color: "#e16a15",
                      my: "15px",
                    }}
                  >
                    All Categories
                  </Text>
                  {categories.map((item, index) => (
                    <Text
                      sx={{
                        cursor: "pointer",
                        marginBottom: "15px",
                      }}
                      key={index}
                    >
                      {item.title}
                    </Text>
                  ))}
                  <Box as="hr" />
                  <Text
                    sx={{
                      fontSize: "18px",
                      textTransform: "uppercase",
                      lineHeight: "18px",
                      color: "#949494",
                      fontWeight: 500,
                      my: "15px",
                    }}
                  >
                    Project Timing
                  </Text>
                  <RadioGroup>
                    <Stack direction="column">
                      <Radio
                        value="all"
                        sx={{
                          _checked: {
                            borderColor: "#e16a15",
                            borderWidth: "5px",
                          },
                        }}
                      >
                        All
                      </Radio>
                      <Radio
                        value="launching_soon"
                        sx={{
                          _checked: {
                            borderColor: "#e16a15",
                            borderWidth: "5px",
                          },
                        }}
                      >
                        Launching Soon
                      </Radio>
                      <Radio
                        value="ending_soon"
                        sx={{
                          _checked: {
                            borderColor: "#e16a15",
                            borderWidth: "5px",
                          },
                        }}
                      >
                        Ending Soon
                      </Radio>
                      <Radio
                        value="just_launched"
                        sx={{
                          _checked: {
                            borderColor: "#e16a15",
                            borderWidth: "5px",
                          },
                        }}
                      >
                        Just Launched
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <Box as="hr" marginTop="15px" />
                  <Text
                    sx={{
                      fontSize: "18px",
                      textTransform: "uppercase",
                      lineHeight: "18px",
                      color: "#949494",
                      fontWeight: 500,
                      my: "15px",
                    }}
                  >
                    Project Stage
                  </Text>
                  <RadioGroup>
                    <Stack direction="column">
                      <Radio
                        value="all"
                        sx={{
                          _checked: {
                            borderColor: "#e16a15",
                            borderWidth: "5px",
                          },
                        }}
                      >
                        All
                      </Radio>
                      <Radio
                        value="concept"
                        sx={{
                          _checked: {
                            borderColor: "#e16a15",
                            borderWidth: "5px",
                          },
                        }}
                      >
                        Concept
                      </Radio>
                      <Radio
                        value="prototype"
                        sx={{
                          _checked: {
                            borderColor: "#e16a15",
                            borderWidth: "5px",
                          },
                        }}
                      >
                        Prototype
                      </Radio>
                      <Radio
                        value="live"
                        sx={{
                          _checked: {
                            borderColor: "#e16a15",
                            borderWidth: "5px",
                          },
                        }}
                      >
                        Live
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Box flex={1}>
            <Flex alignItems={"center"} gap="5px">
              <Button
                ref={btnRef}
                variant="ghost"
                onClick={onOpen}
                p={0}
                sx={{ display: { base: "block", md: "none" } }}
              >
                <Icon as={HamburgerIcon} sx={{ fontSize: "25px" }} />
              </Button>
              <Flex
                sx={{ borderBottomWidth: "1px", borderColor: "#dddddd" }}
                alignItems="center"
                flex={1}
              >
                <Icon as={SearchIcon} />
                <Input
                  variant="unstyled"
                  sx={{
                    borderRadius: 0,
                    border: "none",
                    outline: "0px",
                    p: "10px",
                  }}
                />
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" mt="10px">
              <Box>
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
                  Fund with
                </Text>
                <Stack direction="row" spacing={5} mt={"4px"}>
                  <Image sx={{ width: "50px" }} src={Coin1} alt="Coin1" />
                  <Image sx={{ width: "50px" }} src={Coin2} alt="Coin2" />
                </Stack>
              </Box>
              <Flex alignItems="center" gap="10px">
                <Text>Sort By</Text>
                <Select width={"110px"} height={"48px"}>
                  <option value="trending">Trending</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Flex>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              mt={10}
              gap={6}
              justifyContent="center"
            >
              {data.map((item, index) => (
                <ProjectCard item={item} key={index} />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Category;
