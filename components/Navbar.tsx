import React from 'react'
import { Flex, Spacer ,Text} from "@chakra-ui/react";
import Darkmode from './DarkMode';
const Navbar = () => {
    return (
        <Flex  m={2} align="center" justifyContent="center" w="100%">
            <Spacer />
            <Darkmode />

        </Flex>
        
    )
}

export default Navbar
