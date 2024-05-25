import React, { useState } from "react";
import { Text, Button, Box, Flex, Image } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.png";
import { BsFillLightningChargeFill } from "react-icons/bs";

const style = {
  links: {
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    p: "0px 30px",
    alignItems: "center",
    h: "60px",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },
};

const Tabs = ({ tabs, isActive, setIsActive }) => {
  return (
    <Box borderBottom="2px solid lightgrey" backgroundColor="whitesmoke">
      <Flex
        direction="column"
        align="end"
        sx={{
          m: "auto",
          h: "178px",
          maxW: "1440px",
          pt: "20px",
          px: { base: "10px", lg: "40px" },
          gap: "20px",
        }}
      >
        <Flex w="100%" h="80px" align="center">
          <Flex
            align="center"
            justify="space-evenly"
            sx={{
              backgroundColor: "white",
              boxShadow: "md",
              rounded: "md",
              position: "relative",
              bottom: { base: "0px", lg: "-50px" },
              h: { base: "80px", lg: "170px" },
              w: { base: "90px", lg: "190px" },
            }}
          >
            <Image
              height={{ base: "40px", lg: "90px" }}
              width={{ base: "20px", lg: "70px" }}
              objectFit="cover"
              src={Logo}
              alt="Logo"
            />
            <Box>
              <Text as="h1" fontSize={{ base: "sm", lg: "2xl" }}>
                InventOn
                <Text as="span" color="#fba418" display="block">
                  BTC
                </Text>
              </Text>
            </Box>
          </Flex>
          <Flex
            sx={{ px: { base: "0", lg: "20px" }, w: "85%" }}
            justify={{ base: "end", lg: "space-between" }}
            align="center"
          >
            <Text
              display={{ base: "none", lg: "block" }}
              as="h1"
              fontSize="2xl"
            >
              InventOn
              <Text as="span" color="#fba418" display="block">
                BTC
              </Text>
            </Text>
            <Button
              variant="outline"
              colorScheme="orange"
              leftIcon={<BsFillLightningChargeFill />}
              sx={{
                fontSize: "sm",
                textTransform: "uppercase",
              }}
            >
              connect to crm
            </Button>
          </Flex>
        </Flex>
        <Flex w={{ base: "100%", lg: "78%", xl: "82%" }} gap="20px">
          {tabs.map((tab, index) => (
            <Flex
              style={{
                color: isActive === index ? "blue" : "black",
                backgroundColor: isActive === index ? "white" : "transparent",
                border: isActive === index ? "2px solid lightgrey" : null,
                borderBottom: isActive === index ? "2px solid white" : null,
              }}
              sx={{
                ...style.links,
                _hover: {
                  color: "#f7f9fc",
                },
              }}
              onClick={() => setIsActive(index)}
            >
              {tab}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Tabs;
