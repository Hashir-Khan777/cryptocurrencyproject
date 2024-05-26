/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { Heading, Box, Container, SimpleGrid } from "@chakra-ui/react";
import { ProjectCard } from "../../components";

const TrendingProjects = ({ data }) => {
  return (
    <>
      <Container maxW="1240px">
        <Box mt="8rem">
          <Heading
            as="h3"
            size="xl"
            fontWeight="bold"
            textAlign="left"
            mb={8}
            textTransform={"uppercase"}
          >
            Trending Projects
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            gap={6}
            justifyContent="center"
          >
            {data
              .filter((x) => x.trending)
              .map((item, index) => (
                <ProjectCard item={item} key={index} />
              ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default TrendingProjects;
