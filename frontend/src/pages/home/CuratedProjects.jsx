/* eslint-disable no-unused-vars */
import React from "react";
import {
  Heading,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  Divider,
  Box,
  Container,
  Progress,
  Flex,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";
import { QuestionIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ProjectCard } from "../../components";

const CuratedProjects = ({ data }) => {
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
            Curated Projects
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            gap={6}
            justifyContent="center"
          >
            {data
              .filter((x) => x.curated)
              .map((item, index) => (
                <ProjectCard item={item} key={index} />
              ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default CuratedProjects;
