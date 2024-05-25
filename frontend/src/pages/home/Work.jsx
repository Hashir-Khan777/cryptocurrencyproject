/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Heading,
  Text,
  Card,
  Box,
  Container,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { data } from "../../utils/WorkData";

const Work = () => {
  return (
    <>
      <Container maxW="1240px" overflow="hidden">
        <Box mt="8rem">
          <Heading
            as="h3"
            size="xl"
            fontWeight="bold"
            textAlign="left"
            mb={2}
            color="#e16a15"
          >
            How it works?
          </Heading>
          <Heading
            as="h3"
            size="md"
            fontWeight="400"
            textAlign="left"
            mb={8}
            color="#808080"
          >
            Welcome to InventOnBTC, where you can support and fund projects
            created on Bitcoin. Here's how it works:
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 3, xl: 4 }}
            gap={6}
            justifyContent="center"
          >
            {data.map((item, index) => (
              <Box
                sx={{
                  position: "relative",
                  _before: {
                    content: `""`,
                    position: "absolute",
                    height: "1px",
                    width: "100%",
                    bgColor: "#e16a15",
                    top: "25px",
                    left: "40px",
                    display: { base: "none", lg: "block" },
                  },
                }}
              >
                <Flex
                  sx={{
                    bg: "#e16a15",
                    border: "#e16a15",
                    color: "#fff",
                    width: "3rem",
                    height: "3rem",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    marginBottom: "10px",
                    display: { base: "none", lg: "flex" },
                  }}
                >
                  {index + 1}
                </Flex>
                <Card
                  key={index}
                  maxW="sm"
                  minH="350px"
                  height="auto"
                  margin={"auto"}
                  bg={"#f8f8f8"}
                  p={6}
                >
                  <Box ml="3">
                    <Heading size="md" fontWeight={"extrabold"} mb={4}>
                      {item.title}
                    </Heading>
                    <Text color={"#7c7c7c"} fontSize={"1.2rem"}>
                      {item.content}
                    </Text>
                  </Box>
                </Card>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};
export default Work;
