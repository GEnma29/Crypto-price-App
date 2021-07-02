import {useState} from 'react'
import {
  Heading,
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Input,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import Coin from "../components/Coin";
import Image from 'next/image'

function HomePage({ coins }) {
  const [search, setSearch] = useState('');
  const allCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    );
  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  //console.log(coins);
  return (
    <Flex align="center" justifyItems="center" flexDirection="column">
    <Image src="/StocksPrice.svg" alt="Stocks price " width="240" height="200"  />
    <Input m={['2','2','4','4']} w={['240px','240px','md','md']}  placeholder="Search Coin name" onChange={handleChange} />
    <Box marginTop={['4','4','8','8']} borderWidth="1px" borderRadius="lg">
    <Table size="sm" variant="simple">
      <TableCaption>Coins price by coingecko</TableCaption>
      <Thead>
        <Tr>
          <Th>Coin</Th>
          <Th>Price (usd)</Th>
          <Th>Price change % 24h</Th>
        </Tr>
      </Thead>
      <Tbody>
        {allCoins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketCap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        ))}
      </Tbody>
    </Table>
    </Box>
  </Flex>
  );
}

export default HomePage;

export async function getStaticProps() {
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const res = await fetch(apiUrl);
  const response = await res.json();
  const coins = Array.from(response);

  return {
    props: {
      coins,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
