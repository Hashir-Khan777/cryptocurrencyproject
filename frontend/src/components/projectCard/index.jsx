import {
  Box,
  Card,
  CardBody,
  Flex,
  Image,
  Progress,
  Stack,
  Icon,
  Tooltip,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  return (
    <Card maxW="sm" minH="550px" height="auto">
      <Box as={Link} to={`/project/${item.id}`} width="100%">
        <Image
          src={item.image}
          alt={item.title}
          width="100%"
          height="100%"
          minHeight="300px"
          objectFit="cover"
        />
      </Box>
      <CardBody overflowY="auto" maxH="500px">
        <Stack mt="2" spacing="3">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text
              fontSize="0.7rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="500"
              textTransform={"uppercase"}
              maxW={{ base: "100%", md: "470px" }}
              color={useColorModeValue("#000", "gray.400")}
            >
              {item.subTitle}
            </Text>
            <Flex alignItems="center" gap="10px">
              {item.curated ? (
                <Tooltip label="Curated" hasArrow>
                  <Box>
                    <Icon as={FaCheckSquare} color="#0034EC" />
                  </Box>
                </Tooltip>
              ) : null}
              {item.treasuryFunded ? (
                <Tooltip label="Treasury Funded" hasArrow>
                  <Box>
                    <Icon as={FaCheckSquare} color="#E16A15" />
                  </Box>
                </Tooltip>
              ) : null}
              {item.runstoneRewards ? (
                <Tooltip label="Runstone Rewards" hasArrow>
                  <Box>
                    <Icon as={FaCheckSquare} color="#000000" />
                  </Box>
                </Tooltip>
              ) : null}
            </Flex>
            <CiHeart size={20} color="gray" />
          </Flex>
          <Text
            fontSize="0.8rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="600"
            textTransform={"uppercase"}
            maxW={{ base: "100%", md: "470px" }}
            color={useColorModeValue("#000", "gray.400")}
          >
            {item.title}
          </Text>
          <Text
            fontSize="0.7rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            maxW={{ base: "100%", md: "470px" }}
            mb={4}
            color={useColorModeValue("#6d6d6e", "gray.400")}
          >
            {item.description}
          </Text>
          <Flex gap={"2"} justifyContent="space-between">
            <Text
              fontSize="0.8rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="500"
              maxW={{ base: "100%", md: "470px" }}
              textTransform={"uppercase"}
              color={useColorModeValue("#000", "gray.400")}
            >
              {item.fundedAmount / 100000000} {item.coin} Raised
            </Text>
            <Text
              fontSize="0.8rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="400"
              maxW={{ base: "100%", md: "470px" }}
              textTransform={"uppercase"}
              color={useColorModeValue("#6d6d6e", "gray.400")}
            >
              {(item.fundedAmount / 100000000 / item.investment) * 100}%
            </Text>
          </Flex>
          <Progress
            size="sm"
            value={(item?.fundedAmount / 100000000 / item.investment) * 100}
            rounded={"10px"}
          />
          <Text
            fontSize="0.7rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="500"
            maxW={{ base: "100%", md: "470px" }}
            color={useColorModeValue("#6d6d6e", "gray.400")}
          >
            {new Date(item.createdAt).toLocaleDateString()}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
