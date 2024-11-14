import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  IconButton,
  Center
} from '@chakra-ui/react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../images/logo_navbar.png';
import {Link as ChakraLink } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';



const Footer = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };


  return (
    <Box p={{ base: 5, md: 8 }} maxW="container.lg" marginInline="auto" >
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box maxW="300px">
          <Image w="100px" src={logo} alt="Company Logo" />
          <Text mt={2} color="gray.500" fontSize="md">
            Revolutionizing education with innovative image-based English learning experiences for children.
          </Text>
        </Box>
        {/* About section */}
        <VStack spacing={4} alignItems="flex-start">
          <Text fontSize="md" fontWeight="bold">
            About
          </Text>
          <VStack spacing={2} alignItems="flex-start" color="gray.500">
            <ChakraLink onClick={() => handleNavigation('/about-us')}>About Us</ChakraLink>
            <ChakraLink onClick={() => handleNavigation('/terms-and-conditions')}>Terms and Conditions</ChakraLink>
            <ChakraLink onClick={() => handleNavigation('/privacy-policy')}>Privacy Policy</ChakraLink>
            <ChakraLink onClick={() => handleNavigation('/meet-the-team')}>Meet the Team</ChakraLink>
          </VStack>
        </VStack>

        {/* Quick Links section */}
        <VStack spacing={4} alignItems="flex-start">
          <Text fontSize="md" fontWeight="bold">
            Quick Links
          </Text>
          <VStack spacing={2} alignItems="flex-start" color="gray.500">
            <ChakraLink onClick={() => handleNavigation('/login')}>Login</ChakraLink>
            <ChakraLink onClick={() => handleNavigation('/register')}>Register</ChakraLink>

          </VStack>
        </VStack>


        {/* "Follow Us" section */}
        <VStack spacing={4} alignItems="flex-start">
          <Text fontSize="md" fontWeight="bold">
            Follow Us
          </Text>
          <HStack spacing={2}>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="gray.500"
            />
            <IconButton
              aria-label="WhatsApp"
              icon={<FaWhatsapp />}
              variant="ghost"
              color="gray.500"
            />
            <IconButton
              aria-label="Phone"
              icon={<MdPhone />}
              variant="ghost"
              color="gray.500"
            />
            <IconButton
              aria-label="Email"
              icon={<MdEmail />}
              variant="ghost"
              color="gray.500"
            />
          </HStack>
        </VStack>
      </Stack>
      <Divider my={4} />

      <Center>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
          <Text fontSize="md">
            Copyright 2024 design and develop by Text2Pic. All rights are reserved.
          </Text>
        </Stack>
      </Center>
    </Box>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;
  