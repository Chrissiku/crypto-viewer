import React from "react";
import { Box, Container, Flex, Heading, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { supportedCurrencies, setCurrency } = useAppContext();
  return (
    <Box py={{ base: 3, md: 5 }}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Heading fontSize="1.5rem" fontWeight="600" color="red.400">
            <Link to="/">Crypto Viewer</Link>
          </Heading>
          <Box>
            <Select
              onChange={(e) =>
                setCurrency(
                  supportedCurrencies.filter(
                    (curr) => curr.value === e.target.value
                  )[0]
                )
              }
              colorScheme="red.700"
            >
              {supportedCurrencies.map((currency, i) => (
                <option
                  style={{ background: "#2D3748" }}
                  key={i}
                  value={currency.value}
                >
                  {currency.value}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
