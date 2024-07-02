import {
  Box,
  HStack,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Navlink from './Navlink';
import logo from '../images/logo_navbar.png';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { toggleColorMode } = useColorMode();

  const {currentUser, logout} = useAuth()

  return (
    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
      mx={{ base: 4, md: 8 }} 
    >
      <HStack
        py={4}
        justifyContent='space-between' 
        alignItems='center' 
        maxW='container.lg'
        mx='auto'
        px={{ base: 4, md: 0 }} 
      >
        {/* Logo with RouterLink */}
        <RouterLink to='/'>
          <Image w="100px" src={logo} alt="Company Logo" />
        </RouterLink>
        
        {/* Navlinks and other components */}
        <HStack spacing={4}>
          {!currentUser && <Navlink to='/login' name='Login' />}
          {/*{!currentUser && <Navlink to='/register' name='Register' />}*/}
          {currentUser && <Navlink to='/profile' name='Profile' />}
          {currentUser && <Navlink to='/dashboard' name='Dashboard' />}

          {currentUser && <Navlink
            to='/logout'
            name='Logout'
            onClick={async e => {
              e.preventDefault();
              // handle logout
              logout()
              alert('You are logging out now!!!');
            }}
          />}
          <IconButton
            variant='outline'
            icon={useColorModeValue(<FaSun />, <FaMoon />)}
            onClick={toggleColorMode}
            aria-label='toggle-dark-mode'
          />
        </HStack>
      </HStack>
    </Box>
  );
}
