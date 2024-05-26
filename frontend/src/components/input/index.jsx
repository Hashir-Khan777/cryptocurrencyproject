import { Input } from "@chakra-ui/react";
import React from "react";

const CustomInput = ({ input }) => {
  return (
    <Input
      variant="unstyled"
      id={input.id}
      placeholder={input.placeholder}
      type={input.type}
      required={input.required}
      onChange={input.changed}
      sx={{
        _placeholder:{fontSize:"lg" },
        outline: "none",
        borderBottom: "1px solid gray",
        borderRadius: "0",
        p:"10px 20px",
        ...input.style,
      }}
    />
  );
};

export default CustomInput;
