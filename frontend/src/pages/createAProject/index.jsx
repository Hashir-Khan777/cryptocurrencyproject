import {
  Box,
  Button,
  Flex,
  Select,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomInput } from "../../components";

const CreateProject = () => {
  const [form, setForm] = useState();

  const inputField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Box m="auto" maxW="1440px">
      <Text
        textAlign="center"
        fontWeight={700}
        color="#fba418"
        mt="40px"
        fontSize="3xl"
      >
        Create A Project
      </Text>
      <Stack
        as="form"
        onSubmit={submit}
        border="1px solid lightgray"
        gap="30px"
        w={{ base: "95%", xl: "80%" }}
        m="auto"
        my="30px"
        borderRadius="20px"
        p={{ base: "25px", md: "40px 40px 60px 40px" }}
      >
        <Box
          position="relative"
          w={{ base: "250px", md: "300px" }}
          h="300px"
          display="flex"
          textAlign="center"
          alignItems="center"
          border="1px dashed black"
        >
          <Text
            color="lightgrey"
            fontSize="7xl"
            top="80px"
            left={{ base: "100px", md: "120px" }}
            position="absolute"
          >
            +
          </Text>
          <CustomInput
            input={{
              id: "imageUrl",
              type: "file",
              required: true,
              style: {
                cursor: "pointer",
                opacity: "0",
                w: "100%",
                h: "300px",
              },
              changed: (e) => inputField(e.target.id, e.target.value),
            }}
          />
        </Box>
        <CustomInput
          input={{
            id: "title",
            placeholder: "Title",
            type: "text",
            required: true,
            changed: (e) => inputField(e.target.id, e.target.value),
          }}
        />
        <CustomInput
          input={{
            id: "subTitle",
            placeholder: "Sub Title",
            type: "text",
            required: true,
            changed: (e) => inputField(e.target.id, e.target.value),
          }}
        />
        <CustomInput
          input={{
            id: "description",
            placeholder: "Description",
            type: "text",
            required: true,
            changed: (e) => inputField(e.target.id, e.target.value),
          }}
        />

        <CustomInput
          input={{
            id: "investment",
            placeholder: "Investment",
            type: "text",
            required: true,
            changed: (e) => inputField(e.target.id, e.target.value),
          }}
        />
        <Flex display="flex" gap="15px" alignItems="center">
          <Text fontSize="lg">Curated</Text>
          <Switch
            onChange={(e) => inputField(e.target.id, !false)}
            isRequired
            id="curated"
          />
        </Flex>
        <Flex display="flex" gap="15px" alignItems="center">
          <Text fontSize="lg">treasury funded</Text>
          <Switch
            onChange={(e) => inputField(e.target.id, !false)}
            isRequired
            id="treasuryFunded"
          />
        </Flex>
        <Flex display="flex" gap="15px" alignItems="center">
          <Text fontSize="lg">Runstone Reward</Text>
          <Switch
            onChange={(e) => inputField(e.target.id, !false)}
            isRequired
            id="runstoneReward"
          />
        </Flex>
        <Select
          cursor="pointer"
          id="coin"
          onChange={(e) => inputField(e.target.id, e.target.value)}
          required={true}
          placeholder="Choose Coin"
        >
          <option value="STX">STX</option>
          <option value="bTC">BTC</option>
        </Select>
        <Select
          cursor="pointer"
          id="category"
          onChange={(e) => inputField(e.target.id, e.target.value)}
          required={true}
          placeholder="Choose Category"
        >
          <option value="first">First category</option>
          <option value="second">Second category</option>
        </Select>
        <Select
          cursor="pointer"
          id="time"
          onChange={(e) => inputField(e.target.id, e.target.value)}
          required={true}
          placeholder="Choose Duration"
        >
          <option value="1month">1 month</option>
          <option value="2months">2 months</option>
          <option value="3months">3 months</option>
        </Select>
        <Flex justifyContent="end">
          <Button
            fontSize="lg"
            mt="20px"
            bg="#fba418"
            h="50px"
            type="submit"
            width="250px"
            variant="unsyled"
          >
            Create
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CreateProject;
