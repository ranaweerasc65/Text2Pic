import React, { useState } from 'react';
import {
  Box,
  HStack,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import Navlink from './Navlink';
import logo from '../images/logo_navbar.png';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { currentUser, logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleLogout = async () => {
    onClose();
    await logout();
    alert('You are logging out now!!!');
  };

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
          
          {currentUser && <Navlink to='/dashboard' name='Dashboard' />}
          
          {currentUser && (
            <Menu>
              <MenuButton as={IconButton} icon={<FaUserCircle />} aria-label="Profile Menu" variant="outline" />
              <MenuList>
                <Navlink to='/profile' name='Profile' />
                <MenuItem onClick={onOpen}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}

          <IconButton
            variant='outline'
            icon={useColorModeValue(<FaSun />, <FaMoon />)}
            onClick={toggleColorMode}
            aria-label='toggle-dark-mode'
          />
        </HStack>
      </HStack>

      {/* AlertDialog for logout confirmation */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Confirm Logout
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to logout? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleLogout} ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
