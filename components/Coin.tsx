import React from "react";
import {
  Heading,
  Image,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon, WarningIcon } from '@chakra-ui/icons'
interface CoinProps {
  name: string;
  price: Number;
  symbol: string;
  marketCap: Number;
  volume: Number;
  image: string;
  priceChange: Number;
}
const Coin = (props: CoinProps) => {
  return (
    <Tr>
      <Td>
        <Flex flexDirection="row" justifyContent="start" align="center">
          <Image boxSize="30px" src={props.image} alt="crypto" />
          <Text display={['none','none','Flex','Flex']} m={["2", "2", "4", "4"]}>{props.name}</Text>
          <Text display={['Flex','Flex','none','none']} m={["2", "2", "4", "4"]}>{props.symbol}</Text>
        </Flex>
      </Td>
      <Td>
        <Text w="90px" m={["2", "2", "4", "4"]}>
          ${props.price}
        </Text>
      </Td>
      <Td>
            <Flex m={["2", "2", "4", "4"]}> {props.priceChange < 0 ? (
                <Flex align="center" justifyContent="center" flexDirection= 'row'>
                <TriangleDownIcon m={['2','2','4','4']} color="red"  />  <Text color="red" >{props.priceChange.toFixed(2)}%</Text>
              </Flex>
              ) : (
                  <Flex align="center" justifyContent="center" flexDirection= 'row'>
                    <TriangleUpIcon m={['2','2','4','4']} color="green"  />  <Text color="green" >{props.priceChange.toFixed(2)}%</Text>
                  </Flex>
              )}</Flex>
        </Td>
    </Tr>
  );
};

export default Coin;
