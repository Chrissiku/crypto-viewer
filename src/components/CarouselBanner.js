import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Spinner,
} from "@chakra-ui/react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { useAppContext } from "../context/AppContext";
import { trendingCoins } from "../api/Api";
import { Link } from "react-router-dom";
import numWithCommas from "../util/numWithCommas";

const CarouselBanner = () => {
  const { currency } = useAppContext();
  const [trending, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTrendingCoins = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(trendingCoins(currency.value));
      const data = await response.json();
      setTrendingCoins(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  };

  const breakPoints = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const coinsItems =
    trending &&
    trending.map((coin) => {
      let dailyProfit = coin?.price_change_percentage_24h >= 0;
      return (
        <Link to={`/coin/${coin?.id}`}>
          <Flex direction="column" align="center" gap="1rem">
            <Image
              boxSize={{ base: "3rem", md: "4rem" }}
              src={coin?.image}
              alt="crypto image"
            />
            <Flex align="center" gap="0.5rem">
              <Text>{coin?.symbol.toUpperCase()}</Text>
              <Text color={dailyProfit ? "green.400" : "red.400"}>
                {dailyProfit && "+"}
                {coin?.price_change_percentage_24h.toFixed(3)}%
              </Text>
            </Flex>
            <Text fontSize="1.1rem">
              {currency.symbol}
              {numWithCommas(coin?.current_price.toFixed(3))}
            </Text>
          </Flex>
        </Link>
      );
    });

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <Box py={10}>
      <Container maxW="container.md">
        <Box mb={6} textAlign="center">
          <Heading fontSize={{ base: "2.2rem", md: "2.8rem" }} mb={2}>
            Crypto Viewer
          </Heading>
          <Text color="green.500">
            You should have your favorite crypto, now it's time to learn more
            about it
          </Text>
        </Box>
        <Flex direction="column" align="center" justify="center">
          {error && (
            <Text textAlign="center" color="red.400" py={5}>
              Ops! An error occurred. Impossible to find information you are
              looking for !
            </Text>
          )}
          {!error && loading ? (
            <Flex align="center" justify="center" w="full" py={6}>
              <Spinner size="xl" color="red.400" />
            </Flex>
          ) : (
            <AliceCarousel
              items={coinsItems}
              responsive={breakPoints}
              mouseTracking
              disableButtonsControls
              autoPlay={true}
              autoPlayInterval={1500}
              animationDuration={1000}
              infinite={true}
            ></AliceCarousel>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default CarouselBanner;
