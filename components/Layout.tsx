import { Flex, Spacer } from "@chakra-ui/react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" w="100%" h="100%">
      <Flex w="100%"><Navbar /></Flex>
      <Flex minH="100vh" w="100%" align="center" justifyContent="center">
        {children}
      </Flex>
      <Flex>Footer</Flex>
    </Flex>
  );
};

export default Layout;
