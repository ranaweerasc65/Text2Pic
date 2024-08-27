import {
  Box,
  HStack,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import Navlink from './Navlink';
import logo from '../images/logo_navbar.png';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { currentUser, logout } = useAuth();

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
          {currentUser && (
            <>
              <Navlink to='/dashboard' name='Dashboard' />
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='User Menu'
                  icon={<FaUser />}
                  variant='outline'
                />
                <MenuList>
                  <MenuItem as={RouterLink} to='/profile'>Profile</MenuItem>
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      // handle logout
                      await logout();
                      alert('You are logging out now!!!');
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
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
