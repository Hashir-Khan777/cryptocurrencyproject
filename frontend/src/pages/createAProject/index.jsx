import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CustomInput } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductImage,
  createProduct,
} from "../../store/actions/product.action";
import { getCategories } from "./../../store/actions/category.action";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [form, setForm] = useState();

  const { categories } = useSelector((state) => state.categoryReducer);
  const { image } = useSelector((state) => state.productReducer);

  const walletAddress = JSON.parse(localStorage.getItem("wallet"))?.addresses[0]
    ?.address;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ ...form, walletId: walletAddress }));
    navigate("/");
  };

  const addImage = (e) => {
    const formData = new FormData();
    if (e.target.files.length) {
      formData.append("image", e.target.files[0]);
      dispatch(addProductImage(formData));
    }
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (image) {
      setForm({ ...form, image: image });
    }
  }, [image]);

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
          {image ? (
            <Image src={image} />
          ) : (
            <Text
              color="lightgrey"
              fontSize="7xl"
              top="80px"
              left={{ base: "100px", md: "120px" }}
              position="absolute"
            >
              +
            </Text>
          )}
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
              changed: addImage,
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
            type: "number",
            required: true,
            changed: (e) => inputField(e.target.id, e.target.value),
          }}
        />
        <Select
          cursor="pointer"
          id="coin"
          onChange={(e) => inputField(e.target.id, e.target.value)}
          required={true}
          placeholder="Choose Coin"
        >
          <option value="STX">STX</option>
          <option value="BTC">BTC</option>
        </Select>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex display="flex" gap="15px" alignItems="center">
            <Text fontSize="lg">Curated</Text>
            <Switch
              onChange={(e) => inputField(e.target.id, !false)}
              id="curated"
            />
          </Flex>
          <Flex display="flex" gap="15px" alignItems="center">
            <Text fontSize="lg">treasury funded</Text>
            <Switch
              onChange={(e) => inputField(e.target.id, !false)}
              id="treasuryFunded"
            />
          </Flex>
          <Flex display="flex" gap="15px" alignItems="center">
            <Text fontSize="lg">Runstone Reward</Text>
            <Switch
              onChange={(e) => inputField(e.target.id, !false)}
              id="runstoneRewards"
            />
          </Flex>
        </Flex>
        <Select
          cursor="pointer"
          id="CategoryId"
          onChange={(e) => inputField(e.target.id, e.target.value)}
          required={true}
          placeholder="Choose Category"
        >
          {categories.map((cat) => (
            <option value={cat.id}>{cat.title}</option>
          ))}
        </Select>
        <Select
          cursor="pointer"
          id="time"
          onChange={(e) => inputField(e.target.id, e.target.value)}
          required={true}
          placeholder="Choose Duration"
        >
          <option value={new Date(new Date().getMonth() + 2)}>2 month</option>
          <option value={new Date(new Date().getMonth() + 4)}>4 months</option>
          <option value={new Date(new Date().getMonth() + 6)}>6 months</option>
        </Select>
        <Select
          cursor="pointer"
          id="stage"
          onChange={(e) => inputField(e.target.id, e.target.value)}
          required={true}
          placeholder="Choose Stage"
        >
          <option value="concept">Concept</option>
          <option value="prototype">Prototype</option>
          <option value="live">Live</option>
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
