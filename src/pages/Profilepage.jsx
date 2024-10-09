import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  Flex,
  Center,
  Heading,
  Button,
} from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import { upload } from '../utils/init-firebase';
import { useState } from 'react';


export default function Profilepage() {

  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email); // Initialize email with currentUser's email
    }
  }, [currentUser]);


  function handleChange(e) {
    if(e.target.files[0]){
      setPhoto(e.target.files[0])
    }else {
      setPhoto(null);  
    }
    
  }

  function handleClick() {
    if (!photo) {
      alert("No file is selected");
      return;
    }
    // Only proceed with upload if a photo is selected
    upload(photo, currentUser, setLoading);
  }

  
  
  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        My Profile
      </Heading>

      <Flex 
        minH={'5vh'} 
        align={'center'} 
        justify={'center'} 
      >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('gray.50', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}
        >
          
          <Center>
            <Avatar size="xl" src={currentUser && currentUser.photoURL}></Avatar>  
          </Center>

          <div 
            style={{
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
            }}
          >
            <input type="file" onChange={handleChange} />
            <Button
              disabled={loading || !photo}
              bg={useColorModeValue('gray.200', 'gray.600')}
              color={useColorModeValue('black', 'white')}
              w="200px"
              h="30px"
              onClick={handleClick}
            >
              Upload
            </Button>
          </div>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} 
            />
          </FormControl>

          
          
        </Stack>
        </Flex>
    </Layout>
  )
}