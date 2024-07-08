import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Circle,
  Box,
  Flex,
  Icon,
  Image,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  Input,
  Grid,
  GridItem,
  Slide,
  Stack,
  Radio,
  RadioGroup,
  Button,
  ButtonGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import banner from "../../assets/images/profile-banner.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineGridOn } from "react-icons/md";
import { RiLayoutGridLine } from "react-icons/ri";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import ProjectCard from "../../components/projectCard";
import { data } from "../../utils/TrendingProjectsData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getFundedProducts,
  getProductsByWalletId,
} from "../../store/actions/product.action";

const Profile = () => {
  const [column, setColumn] = useState("4");
  const [dropDown, setDropdown] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("USD");
  const [isDisplay, setIsDisplay] = useState(false);

  const { createdProducts, fundedProducts } = useSelector(
    (state) => state.productReducer
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const walletAddress = JSON.parse(localStorage.getItem("wallet"))?.addresses[0]
    ?.address;

  useEffect(() => {
    if (!walletAddress) {
      navigate("/");
    }
  }, [walletAddress]);

  useEffect(() => {
    dispatch(getProductsByWalletId({ walletId: walletAddress }));
    dispatch(getFundedProducts({ walletId: walletAddress }));
  }, [dispatch]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "whitesmoke",
          h: {
            base: "100px",
            sm: "150px",
            md: "200px",
            lg: "250px",
            xl: "330px",
          },
          mb: "60px",
        }}
      >
        <Circle
          sx={{
            position: "absolute",
            left: "20px",
            bottom: "-40px",
            p: "10px",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 16px",
            w: { base: "100px", md: "150px", lg: "200px" },
            h: { base: "100px", md: "150px", lg: "200px" },
          }}
        >
          <Image
            src={banner}
            sx={{ borderRadius: "50%", h: "100%", w: "100%" }}
            objectFit="cover"
          />
        </Circle>
        <Image
          objectFit="cover"
          src={banner}
          sx={{ w: { xl: "800px" }, h: "100%" }}
        />
      </Box>
      <Box px="20px">
        <Text
          sx={{
            fontSize: { base: "2xl", md: "4xl" },
            fontWeight: 600,
            mb: "10px",
          }}
        >
          Unnamed
        </Text>
        <Flex gap="30px" fontSize={{ base: "sm", md: "lg" }}>
          <Text display={{ base: "none", md: "block" }}>{walletAddress}</Text>
          <Text>Joined April 2024</Text>
        </Flex>
        <Tabs variant="unstyled">
          <TabList
            as="Flex"
            alignItems="center"
            gap="40px"
            h="100px"
            borderBottom="2px solid lightGrey"
          >
            <Tab
              sx={{
                h: "50px",
                rounded: "xl",
                px: "20px",
                fontSize: "18px",
                fontWeight: 600,
                _selected: { backgroundColor: "whitesmoke" },
              }}
            >
              Invested
            </Tab>
            <Tab
              sx={{
                h: "50px",
                rounded: "xl",
                px: "20px",
                fontSize: "18px",
                fontWeight: 600,
                _selected: { backgroundColor: "whitesmoke" },
              }}
            >
              Created
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px="0">
              <Flex gap="10x" h="45px" mb="30px" justify="space-between">
                <Box
                  display={{ base: "block", lg: "none" }}
                  onClick={() =>
                    setDropdown({
                      open: true,
                      type: "filter",
                    })
                  }
                  bgColor="#f6f6f6"
                  _hover={{ bgColor: "#e8e8e8 " }}
                  rounded="lg"
                  w="45px"
                  as="button"
                >
                  <Icon fontSize="2xl" as={HiOutlineBars3BottomLeft} />
                </Box>
                <Box
                  display={{ base: "none", lg: "block" }}
                  onClick={() => setIsDisplay(!isDisplay)}
                  bgColor="#f6f6f6"
                  _hover={{ bgColor: "#e8e8e8 " }}
                  rounded="lg"
                  w="45px"
                  as="button"
                >
                  <Icon fontSize="2xl" as={HiOutlineBars3BottomLeft} />
                </Box>
                <Menu>
                  <MenuButton
                    sx={{
                      display: { base: "none", lg: "block" },
                      px: "10px",
                      py: "8px",
                      rounded: "lg",
                      border: "1px solid lightgray",
                      _hover: { border: "1px solid gray" },
                    }}
                  >
                    <Flex
                      fontWeight={600}
                      fontSize="lg"
                      gap="10px"
                      align="center"
                      justify="center"
                    >
                      <Text>Status</Text>
                      <Icon fontSize="3xl" as={RiArrowDropDownLine} />
                    </Flex>
                  </MenuButton>
                  <MenuList px="10px" rounded="xl" boxShadow="2xl" w="200px">
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Listed
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      On auction
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      New
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Has offers
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    sx={{
                      display: { base: "none", lg: "block" },
                      px: "10px",
                      py: "8px",
                      rounded: "lg",
                      border: "1px solid lightgray",
                      _hover: { border: "1px solid gray" },
                    }}
                  >
                    <Flex
                      fontSize="lg"
                      fontWeight={600}
                      gap="10px"
                      align="center"
                      justify="center"
                    >
                      <Text>Chains</Text>
                      <Icon fontSize="3xl" as={RiArrowDropDownLine} />
                    </Flex>
                  </MenuButton>
                  <MenuList
                    overflowY="scroll"
                    h="290px"
                    px="10px"
                    rounded="xl"
                    boxShadow="2xl"
                  >
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Arbitrum
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Avalanche
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      BNB Chain
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Base
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Blast
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Ethereum
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Klaytn
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Optimism
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Polygon
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      solana
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      zora
                    </MenuItem>
                  </MenuList>
                </Menu>
                <InputGroup
                  as={Flex}
                  align="center"
                  sx={{
                    gap: "10px",
                    px: "10px",
                    border: "1px solid lightgray",
                    _hover: {
                      border: "1px solid gray",
                    },
                    w: {
                      base: "62%",
                      sm: "78%",
                      md: "80%",
                      lg: "38%",
                      xl: "50%",
                    },
                    rounded: "xl",
                  }}
                >
                  <Icon fontSize="xl" as={IoIosSearch} />
                  <Input
                    fontSize="lg"
                    variant="unstyled"
                    type="search"
                    placeholder="Search by name"
                  />
                </InputGroup>
                <Menu>
                  <MenuButton
                    sx={{
                      display: { base: "none", lg: "block" },
                      px: "10px",
                      py: "8px",
                      rounded: "lg",
                      border: "1px solid lightgray",
                      _hover: { border: "1px solid gray" },
                    }}
                  >
                    <Flex
                      fontSize="lg"
                      fontWeight={600}
                      gap="25px"
                      align="center"
                      justify="center"
                    >
                      <Text>Recently received</Text>
                      <Icon fontSize="3xl" as={RiArrowDropDownLine} />
                    </Flex>
                  </MenuButton>
                  <MenuList
                    overflowY="scroll"
                    h="290px"
                    px="10px"
                    rounded="xl"
                    boxShadow="2xl"
                  >
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Recently received
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Price high to low
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Price low to high
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Highest floor
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Best offer
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Recently listed
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Recently created
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Highest last sale
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Oldest
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Tabs
                  variant="unstyled"
                  sx={{
                    display: { base: "none", md: "block" },
                    py: "4px",
                    px: "4px",
                    bg: "#f5f5f5",
                    rounded: "xl",
                  }}
                >
                  <TabList>
                    <Tab
                      onClick={() => setColumn("4")}
                      sx={{
                        _selected: { bg: "white", boxShadow: "xl" },
                        rounded: "lg",
                        w: "40px",
                        h: "40px",
                      }}
                    >
                      <Icon fontSize="lg" as={MdOutlineGridOn} />
                    </Tab>
                    <Tab
                      onClick={() => setColumn("2")}
                      sx={{
                        _selected: { bg: "white", boxShadow: "xl" },
                        rounded: "lg",
                        w: "40px",
                        h: "40px",
                      }}
                    >
                      <Icon fontSize="lg" as={RiLayoutGridLine} />
                    </Tab>
                  </TabList>
                </Tabs>
                <Box
                  onClick={() =>
                    setDropdown({
                      open: true,
                      type: "sort",
                    })
                  }
                  as="button"
                  sx={{
                    display: { base: "block", md: "none" },
                    bgColor: "#f6f6f6",
                    _hover: { bgColor: "#e8e8e8 " },
                    rounded: "lg",
                    w: "45px",
                  }}
                >
                  <Icon fontSize="2xl" as={HiMiniArrowsUpDown} />
                </Box>
              </Flex>
              <Flex>
                <Box
                  display={{ base: "none", lg: isDisplay ? "block" : "none" }}
                  h="400px"
                  w={{ lg: "220px", xl: "320px" }}
                  pe="10px"
                >
                  <Accordion allowToggle>
                    <AccordionItem border="none">
                      <h2>
                        <AccordionButton
                          rounded="xl"
                          p="15px 10px"
                          fontSize="lg"
                          fontWeight={600}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            Collections
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        px="0"
                        borderBottom="1px solid lightgray"
                        pb={7}
                      >
                        <InputGroup
                          as={Flex}
                          align="center"
                          sx={{
                            mb: "15px",
                            gap: "10px",
                            px: "10px",
                            h: "45px",
                            border: "1px solid lightgray",
                            _hover: {
                              border: "1px solid gray",
                            },

                            rounded: "lg",
                          }}
                        >
                          <Icon fontSize="xl" as={IoIosSearch} />
                          <Input
                            fontSize="lg"
                            variant="unstyled"
                            type="search"
                            placeholder="Search"
                          />
                        </InputGroup>
                        <Flex justify="space-between" textTransform="uppercase">
                          <Text fontSize="sm" fontWeight={600}>
                            Collection
                          </Text>
                          <Text fontSize="sm" fontWeight={600}>
                            Value
                          </Text>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border="none">
                      <h2>
                        <AccordionButton
                          rounded="xl"
                          p="15px 10px"
                          fontSize="lg"
                          fontWeight={600}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            Price
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel p="12px 0" pb={4}>
                        <Menu>
                          <MenuButton
                            sx={{
                              w: "100%",
                              px: "10px",
                              py: "8px",
                              mb: "20px",
                              rounded: "lg",
                              border: "1px solid lightgray",
                              _hover: { border: "1px solid gray" },
                            }}
                          >
                            <Flex
                              fontWeight={600}
                              fontSize="md"
                              align="center"
                              justify="space-between"
                            >
                              <Text>{value}</Text>
                              <Icon fontSize="3xl" as={RiArrowDropDownLine} />
                            </Flex>
                          </MenuButton>
                          <MenuList p=" 20px">
                            <RadioGroup
                              defaultValue="USD"
                              onChange={setValue}
                              value={value}
                            >
                              <Stack gap="25px">
                                <Radio size="lg" spacing="15px" value="USD">
                                  USD
                                </Radio>
                                <Radio size="lg" spacing="15px" value="ETH">
                                  ETH
                                </Radio>
                                <Radio size="lg" spacing="15px" value="SOL">
                                  SOL
                                </Radio>
                              </Stack>
                            </RadioGroup>
                          </MenuList>
                        </Menu>
                        <Flex mb="20px" align="center" gap="15px">
                          <Input
                            textAlign="center"
                            h="45px"
                            fontSize="lg"
                            type="number"
                            placeholder="Min"
                          />
                          <Text fontWeight={600} fontSize="xl">
                            to
                          </Text>
                          <Input
                            textAlign="center"
                            h="45px"
                            fontSize="lg"
                            type="number"
                            placeholder="Max"
                          />
                        </Flex>
                        <Button
                          sx={{
                            w: "100%",
                            h: "50px",
                            rounded: "xl",
                            color: "white",
                            variant: "unstyled",
                            bgColor: "lightblue",
                          }}
                        >
                          Apply
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border="none">
                      <h2>
                        <AccordionButton
                          rounded="xl"
                          p="15px 10px"
                          fontSize="lg"
                          fontWeight={600}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            Currency
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        borderBottom="1px solid lightgrey"
                        px="0"
                        pb={4}
                      >
                        <InputGroup
                          as={Flex}
                          align="center"
                          sx={{
                            gap: "10px",
                            px: "15px",
                            h: "50px",
                            border: "1px solid lightgray",
                            _hover: {
                              border: "1px solid gray",
                            },

                            rounded: "xl",
                          }}
                        >
                          <Icon fontSize="2xl" as={IoIosSearch} />
                          <Input
                            fontSize="lg"
                            variant="unstyled"
                            type="search"
                            placeholder="Search"
                          />
                        </InputGroup>
                        <Stack>
                          <Checkbox size="lg" gap="10px" w="100%" py="10px">
                            ETH
                          </Checkbox>
                          <Checkbox size="lg" gap="10px" w="100%" py="16px">
                            WETH
                          </Checkbox>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <Box w={{ base: "100%", lg: isDisplay ? "80%" : "100%" }}>
                  <Text fontWeight={600}>{fundedProducts?.length} items</Text>
                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3, xl: column }}
                    sx={{
                      gap: 6,
                      justifyItems: "center",
                      p: "30px 15px ",
                      mt: "20px",
                      rounded: "xl",
                      border: "1px solid lightgrey",
                    }}
                  >
                    {fundedProducts?.map((item, index) => (
                      <ProjectCard item={item} key={index} />
                    ))}
                  </SimpleGrid>
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel px="0">
              <Flex gap="10x" h="45px" mb="30px" justify="space-between">
                <Box
                  display={{ base: "block", lg: "none" }}
                  onClick={() =>
                    setDropdown({
                      open: true,
                      type: "filter",
                    })
                  }
                  bgColor="#f6f6f6"
                  _hover={{ bgColor: "#e8e8e8 " }}
                  rounded="lg"
                  w="45px"
                  as="button"
                >
                  <Icon fontSize="2xl" as={HiOutlineBars3BottomLeft} />
                </Box>
                <Box
                  display={{ base: "none", lg: "block" }}
                  onClick={() => setIsDisplay(!isDisplay)}
                  bgColor="#f6f6f6"
                  _hover={{ bgColor: "#e8e8e8 " }}
                  rounded="lg"
                  w="45px"
                  as="button"
                >
                  <Icon fontSize="2xl" as={HiOutlineBars3BottomLeft} />
                </Box>
                <Menu>
                  <MenuButton
                    sx={{
                      display: { base: "none", lg: "block" },
                      px: "10px",
                      py: "8px",
                      rounded: "lg",
                      border: "1px solid lightgray",
                      _hover: { border: "1px solid gray" },
                    }}
                  >
                    <Flex
                      fontWeight={600}
                      fontSize="lg"
                      gap="10px"
                      align="center"
                      justify="center"
                    >
                      <Text>Status</Text>
                      <Icon fontSize="3xl" as={RiArrowDropDownLine} />
                    </Flex>
                  </MenuButton>
                  <MenuList px="10px" rounded="xl" boxShadow="2xl" w="200px">
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Listed
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      On auction
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      New
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Has offers
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    sx={{
                      display: { base: "none", lg: "block" },
                      px: "10px",
                      py: "8px",
                      rounded: "lg",
                      border: "1px solid lightgray",
                      _hover: { border: "1px solid gray" },
                    }}
                  >
                    <Flex
                      fontSize="lg"
                      fontWeight={600}
                      gap="10px"
                      align="center"
                      justify="center"
                    >
                      <Text>Chains</Text>
                      <Icon fontSize="3xl" as={RiArrowDropDownLine} />
                    </Flex>
                  </MenuButton>
                  <MenuList
                    overflowY="scroll"
                    h="290px"
                    px="10px"
                    rounded="xl"
                    boxShadow="2xl"
                  >
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Arbitrum
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Avalanche
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      BNB Chain
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Base
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Blast
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Ethereum
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Klaytn
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Optimism
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Polygon
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      solana
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      zora
                    </MenuItem>
                  </MenuList>
                </Menu>
                <InputGroup
                  as={Flex}
                  align="center"
                  sx={{
                    gap: "10px",
                    px: "10px",
                    border: "1px solid lightgray",
                    _hover: {
                      border: "1px solid gray",
                    },
                    w: {
                      base: "62%",
                      sm: "78%",
                      md: "80%",
                      lg: "38%",
                      xl: "50%",
                    },
                    rounded: "xl",
                  }}
                >
                  <Icon fontSize="xl" as={IoIosSearch} />
                  <Input
                    fontSize="lg"
                    variant="unstyled"
                    type="search"
                    placeholder="Search by name"
                  />
                </InputGroup>
                <Menu>
                  <MenuButton
                    sx={{
                      display: { base: "none", lg: "block" },
                      px: "10px",
                      py: "8px",
                      rounded: "lg",
                      border: "1px solid lightgray",
                      _hover: { border: "1px solid gray" },
                    }}
                  >
                    <Flex
                      fontSize="lg"
                      fontWeight={600}
                      gap="25px"
                      align="center"
                      justify="center"
                    >
                      <Text>Recently received</Text>
                      <Icon fontSize="3xl" as={RiArrowDropDownLine} />
                    </Flex>
                  </MenuButton>
                  <MenuList
                    overflowY="scroll"
                    h="290px"
                    px="10px"
                    rounded="xl"
                    boxShadow="2xl"
                  >
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Recently received
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Price high to low
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Price low to high
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Highest floor
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Best offer
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Recently listed
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Recently created
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Highest last sale
                    </MenuItem>
                    <MenuItem
                      as={Checkbox}
                      spacing="15px"
                      size="lg"
                      sx={{
                        px: "15px",
                        _hover: { backgroundColor: "rgb(246,248,300)" },
                        py: "10px",
                        rounded: "lg",
                        fontWeight: 600,
                      }}
                    >
                      Oldest
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Tabs
                  variant="unstyled"
                  sx={{
                    display: { base: "none", md: "block" },
                    py: "4px",
                    px: "4px",
                    bg: "#f5f5f5",
                    rounded: "xl",
                  }}
                >
                  <TabList>
                    <Tab
                      onClick={() => setColumn("4")}
                      sx={{
                        _selected: { bg: "white", boxShadow: "xl" },
                        rounded: "lg",
                        w: "40px",
                        h: "40px",
                      }}
                    >
                      <Icon fontSize="lg" as={MdOutlineGridOn} />
                    </Tab>
                    <Tab
                      onClick={() => setColumn("2")}
                      sx={{
                        _selected: { bg: "white", boxShadow: "xl" },
                        rounded: "lg",
                        w: "40px",
                        h: "40px",
                      }}
                    >
                      <Icon fontSize="lg" as={RiLayoutGridLine} />
                    </Tab>
                  </TabList>
                </Tabs>
                <Box
                  onClick={() =>
                    setDropdown({
                      open: true,
                      type: "sort",
                    })
                  }
                  as="button"
                  sx={{
                    display: { base: "block", md: "none" },
                    bgColor: "#f6f6f6",
                    _hover: { bgColor: "#e8e8e8 " },
                    rounded: "lg",
                    w: "45px",
                  }}
                >
                  <Icon fontSize="2xl" as={HiMiniArrowsUpDown} />
                </Box>
              </Flex>
              <Flex>
                <Box
                  display={{ base: "none", lg: isDisplay ? "block" : "none" }}
                  h="400px"
                  w={{ lg: "220px", xl: "320px" }}
                  pe="10px"
                >
                  <Accordion allowToggle>
                    <AccordionItem border="none">
                      <h2>
                        <AccordionButton
                          rounded="xl"
                          p="15px 10px"
                          fontSize="lg"
                          fontWeight={600}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            Collections
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        px="0"
                        borderBottom="1px solid lightgray"
                        pb={7}
                      >
                        <InputGroup
                          as={Flex}
                          align="center"
                          sx={{
                            mb: "15px",
                            gap: "10px",
                            px: "10px",
                            h: "45px",
                            border: "1px solid lightgray",
                            _hover: {
                              border: "1px solid gray",
                            },

                            rounded: "lg",
                          }}
                        >
                          <Icon fontSize="xl" as={IoIosSearch} />
                          <Input
                            fontSize="lg"
                            variant="unstyled"
                            type="search"
                            placeholder="Search"
                          />
                        </InputGroup>
                        <Flex justify="space-between" textTransform="uppercase">
                          <Text fontSize="sm" fontWeight={600}>
                            Collection
                          </Text>
                          <Text fontSize="sm" fontWeight={600}>
                            Value
                          </Text>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border="none">
                      <h2>
                        <AccordionButton
                          rounded="xl"
                          p="15px 10px"
                          fontSize="lg"
                          fontWeight={600}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            Price
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel p="12px 0" pb={4}>
                        <Menu>
                          <MenuButton
                            sx={{
                              w: "100%",
                              px: "10px",
                              py: "8px",
                              mb: "20px",
                              rounded: "lg",
                              border: "1px solid lightgray",
                              _hover: { border: "1px solid gray" },
                            }}
                          >
                            <Flex
                              fontWeight={600}
                              fontSize="md"
                              align="center"
                              justify="space-between"
                            >
                              <Text>{value}</Text>
                              <Icon fontSize="3xl" as={RiArrowDropDownLine} />
                            </Flex>
                          </MenuButton>
                          <MenuList p=" 20px">
                            <RadioGroup
                              defaultValue="USD"
                              onChange={setValue}
                              value={value}
                            >
                              <Stack gap="25px">
                                <Radio size="lg" spacing="15px" value="USD">
                                  USD
                                </Radio>
                                <Radio size="lg" spacing="15px" value="ETH">
                                  ETH
                                </Radio>
                                <Radio size="lg" spacing="15px" value="SOL">
                                  SOL
                                </Radio>
                              </Stack>
                            </RadioGroup>
                          </MenuList>
                        </Menu>
                        <Flex mb="20px" align="center" gap="15px">
                          <Input
                            textAlign="center"
                            h="45px"
                            fontSize="lg"
                            type="number"
                            placeholder="Min"
                          />
                          <Text fontWeight={600} fontSize="xl">
                            to
                          </Text>
                          <Input
                            textAlign="center"
                            h="45px"
                            fontSize="lg"
                            type="number"
                            placeholder="Max"
                          />
                        </Flex>
                        <Button
                          sx={{
                            w: "100%",
                            h: "50px",
                            rounded: "xl",
                            color: "white",
                            variant: "unstyled",
                            bgColor: "lightblue",
                          }}
                        >
                          Apply
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border="none">
                      <h2>
                        <AccordionButton
                          rounded="xl"
                          p="15px 10px"
                          fontSize="lg"
                          fontWeight={600}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            Currency
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        borderBottom="1px solid lightgrey"
                        px="0"
                        pb={4}
                      >
                        <InputGroup
                          as={Flex}
                          align="center"
                          sx={{
                            gap: "10px",
                            px: "15px",
                            h: "50px",
                            border: "1px solid lightgray",
                            _hover: {
                              border: "1px solid gray",
                            },

                            rounded: "xl",
                          }}
                        >
                          <Icon fontSize="2xl" as={IoIosSearch} />
                          <Input
                            fontSize="lg"
                            variant="unstyled"
                            type="search"
                            placeholder="Search"
                          />
                        </InputGroup>
                        <Stack>
                          <Checkbox size="lg" gap="10px" w="100%" py="10px">
                            ETH
                          </Checkbox>
                          <Checkbox size="lg" gap="10px" w="100%" py="16px">
                            WETH
                          </Checkbox>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <Box w={{ base: "100%", lg: isDisplay ? "80%" : "100%" }}>
                  <Text fontWeight={600}>{createdProducts?.length} items</Text>
                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3, xl: column }}
                    sx={{
                      gap: 6,
                      justifyItems: "center",
                      p: "30px 15px ",
                      mt: "20px",
                      rounded: "xl",
                      border: "1px solid lightgrey",
                    }}
                  >
                    {createdProducts?.map((item, index) => (
                      <ProjectCard item={item} key={index} />
                    ))}
                  </SimpleGrid>
                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Slide in={dropDown.open} direction="bottom">
        <Box bgColor="white" overflowY="scroll" p="20px" h="100vh">
          {dropDown.type == "sort" ? (
            <>
              <Flex mb="20px" justify="space-between" align="center">
                <Text fontWeight={600} fontSize="xl">
                  Sort
                </Text>
                <Icon
                  onClick={() => setDropdown({ open: false })}
                  fontSize="xl"
                  as={IoMdClose}
                />
              </Flex>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Recently received
              </Checkbox>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Price high to low
              </Checkbox>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Price low to high
              </Checkbox>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Highest floor
              </Checkbox>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Best offer
              </Checkbox>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Recently listed
              </Checkbox>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Recently created
              </Checkbox>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Highest last sale
              </Checkbox>
              <Checkbox size="lg" gap="15px" w="100%" py="16px">
                Oldest
              </Checkbox>
            </>
          ) : (
            <>
              <Flex mb="20px" justify="space-between" align="center">
                <Text fontWeight={600} fontSize="xl">
                  Filter
                </Text>
                <Icon
                  onClick={() => setDropdown({ open: false })}
                  fontSize="xl"
                  as={IoMdClose}
                />
              </Flex>
              <Stack h="90%" justify="space-between">
                <Accordion allowToggle>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton
                        p="15px 0"
                        fontSize="lg"
                        fontWeight={600}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Collections
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel px="0" borderBottom="1px solid gray" pb={7}>
                      <InputGroup
                        as={Flex}
                        align="center"
                        sx={{
                          mb: "15px",
                          gap: "10px",
                          px: "10px",
                          h: "45px",
                          border: "1px solid lightgray",
                          _hover: {
                            border: "1px solid gray",
                          },

                          rounded: "lg",
                        }}
                      >
                        <Icon fontSize="xl" as={IoIosSearch} />
                        <Input
                          fontSize="lg"
                          variant="unstyled"
                          type="search"
                          placeholder="Search"
                        />
                      </InputGroup>
                      <Flex justify="space-between" textTransform="uppercase">
                        <Text fontSize="sm" fontWeight={600}>
                          Collection
                        </Text>
                        <Text fontSize="sm" fontWeight={600}>
                          Value
                        </Text>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton
                        p="15px 0"
                        fontSize="lg"
                        fontWeight={600}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Chains
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel px="0" borderBottom="1px solid grey" pb={5}>
                      <Stack>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            fontWeight: 600,
                          }}
                        >
                          Arbitrum
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          Avalanche
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          BNB Chain
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          Base
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          Blast
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          Ethereum
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          Klaytn
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          Optimism
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          Polygon
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          solana
                        </Checkbox>
                        <Checkbox
                          spacing="15px"
                          size="lg"
                          sx={{
                            py: "10px",
                            rounded: "lg",
                            fontWeight: 600,
                          }}
                        >
                          zora
                        </Checkbox>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton
                        p="15px 0"
                        fontSize="lg"
                        fontWeight={600}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Status
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      borderBottom="1px solid lightgrey"
                      px="0"
                      pb={4}
                    >
                      <Flex gap="10px" wrap="wrap">
                        <Flex
                          align="center"
                          sx={{
                            fontSize: "lg",
                            fontWeight: 600,
                            bg: "#f6f6f6",
                            rounded: "xl",
                            h: "45px",
                            px: "15px",
                          }}
                        >
                          All
                        </Flex>
                        <Flex
                          align="center"
                          sx={{
                            fontSize: "lg",
                            fontWeight: 600,
                            bg: "#f6f6f6",
                            rounded: "xl",
                            h: "45px",
                            px: "15px",
                          }}
                        >
                          Listed
                        </Flex>
                        <Flex
                          align="center"
                          sx={{
                            fontSize: "lg",
                            fontWeight: 600,
                            bg: "#f6f6f6",
                            rounded: "xl",
                            h: "45px",
                            px: "15px",
                          }}
                        >
                          On aution
                        </Flex>
                        <Flex
                          align="center"
                          sx={{
                            fontSize: "lg",
                            fontWeight: 600,
                            bg: "#f6f6f6",
                            rounded: "xl",
                            h: "45px",
                            px: "15px",
                          }}
                        >
                          New
                        </Flex>
                        <Flex
                          align="center"
                          sx={{
                            fontSize: "lg",
                            fontWeight: 600,
                            bg: "#f6f6f6",
                            rounded: "xl",
                            h: "45px",
                            px: "15px",
                          }}
                        >
                          Has offers
                        </Flex>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton
                        p="15px 0"
                        fontSize="lg"
                        fontWeight={600}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Price
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p="12px 0" pb={4}>
                      <InputGroup
                        onClick={() => setIsOpen(true)}
                        as={Flex}
                        align="center"
                        sx={{
                          mb: "20px",
                          gap: "10px",
                          px: "15px",
                          h: "50px",
                          border: "1px solid lightgray",
                          _hover: {
                            border: "1px solid gray",
                          },

                          rounded: "xl",
                        }}
                      >
                        <Input
                          fontSize="lg"
                          variant="unstyled"
                          type="search"
                          placeholder={value}
                          _placeholder={{ fontWeight: 600, color: "black" }}
                        />
                        <Icon fontSize="md" as={FaChevronDown} />
                      </InputGroup>
                      <Flex mb="20px" align="center" gap="15px">
                        <Input
                          textAlign="center"
                          h="45px"
                          fontSize="lg"
                          type="number"
                          placeholder="Min"
                        />
                        <Text fontWeight={600} fontSize="xl">
                          to
                        </Text>
                        <Input
                          textAlign="center"
                          h="45px"
                          fontSize="lg"
                          type="number"
                          placeholder="Max"
                        />
                      </Flex>
                      <Button
                        sx={{
                          w: "100%",
                          h: "50px",
                          rounded: "xl",
                          color: "white",
                          variant: "unstyled",
                          bgColor: "lightblue",
                        }}
                      >
                        Apply
                      </Button>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton
                        p="15px 0"
                        fontSize="lg"
                        fontWeight={600}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Currency
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      borderBottom="1px solid lightgrey"
                      px="0"
                      pb={4}
                    >
                      <InputGroup
                        as={Flex}
                        align="center"
                        sx={{
                          gap: "10px",
                          px: "15px",
                          h: "50px",
                          border: "1px solid lightgray",
                          _hover: {
                            border: "1px solid gray",
                          },

                          rounded: "xl",
                        }}
                      >
                        <Icon fontSize="2xl" as={IoIosSearch} />
                        <Input
                          fontSize="lg"
                          variant="unstyled"
                          type="search"
                          placeholder="Search"
                        />
                      </InputGroup>
                      <Stack>
                        <Checkbox size="lg" gap="10px" w="100%" py="10px">
                          ETH
                        </Checkbox>
                        <Checkbox size="lg" gap="10px" w="100%" py="16px">
                          WETH
                        </Checkbox>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <ButtonGroup borderTop="1px solid grey" py="12px">
                  <Button rounded="xl" w="50%" h="50px">
                    Clear all
                  </Button>
                  <Button color="white" bg="blue" rounded="xl" w="50%" h="50px">
                    Done
                  </Button>
                </ButtonGroup>
              </Stack>
            </>
          )}
        </Box>
      </Slide>
      <Slide in={isOpen} direction="bottom">
        <Box borderTopRadius="30px" p="30px 20px" bgColor="white">
          <Flex mb="20px" align="center" justify="space-between">
            <Text fontWeight={600} fontSize="xl">
              Select
            </Text>
            <Icon
              onClick={() => setIsOpen(false)}
              fontSize="xl"
              as={IoMdClose}
            />
          </Flex>
          <RadioGroup defaultValue="USD" onChange={setValue} value={value}>
            <Stack gap="20px">
              <Radio size="lg" spacing="15px" value="USD">
                USD
              </Radio>
              <Radio size="lg" spacing="15px" value="ETH">
                ETH
              </Radio>
              <Radio size="lg" spacing="15px" value="SOL">
                SOL
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Slide>
    </Box>
  );
};

export default Profile;
