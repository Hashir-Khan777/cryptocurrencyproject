import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Grid,
  GridItem,
  Card,
  Avatar,
  useColorModeValue,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { data } from "../../utils/FeedbackData";

const Feedback = () => {
  return (
    <Container maxW="1240px" mt={20} mb={20}>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        textAlign="left"
        mb={2}
        textTransform={"uppercase"}
      >
        What People Are Saying
      </Heading>
      <Text
        fontSize="1rem"
        textAlign="left"
        lineHeight="1.375"
        fontWeight="400"
        maxW={{ base: "100%", md: "570px" }}
        mb={10}
        color={useColorModeValue("#6d6d6e", "gray.400")}
      >
        Don't just take our word for it. Here's what our satisfied startup
        founders and backers have to say about their experience with our
        crowdfunding platform.
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2, xl: 2 }}
        gap={6}
        justifyContent="center"
      >
        {data.map((item, index) => (
          <Box key={index} mb={4}>
            <Card maxW="md" bg="#f8f8f8" rounded="md" margin={"auto"}>
              <Flex p="4">
                <Avatar name="Segun Adebayo" src={item.image} />
                <Box ml="3">
                  <Heading size="sm">{item.title}</Heading>
                  <Text>{item.content}</Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Feedback;
