import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
  Flex,
  Box,useColorMode,
  Image,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import { useMounted } from '../hooks/useMounted'
import registerImage from '../images/register.jpg'



export default function Registerpage() {

  
  const navigate = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('') 
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()  //react hook

  const mounted = useMounted()
  const { colorMode } = useColorMode();

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword) {
      toast({
        description: 'All fields are required.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }

    if (password !== confirmPassword) {
      toast({
        description: 'Passwords do not match.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }

    setIsSubmitting(true)
    register(email, password)
      .then(async (res) => {
        
        navigate('/login')
      })
      .catch(error => {
        console.log(error.message)
        toast({
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
      .finally(() => {
        mounted.current && setIsSubmitting(false)
      })
  }

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Register
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} maxW='6xl' mx='auto' mt={4}>
        <Box flex='1' display={{ base: 'none', md: 'block' }} overflow='hidden' roundedLeft='lg'>
          <Image src={registerImage} alt='Register' objectFit='cover' width='100%' height='100%' />
        </Box>
        <Box flex='1'>
          <Card maxW='md' mx='auto' mt={0} roundedRight='lg' bg={colorMode === 'light' ? 'gray.100': 'gray.700'}>
            <chakra.form onSubmit={handleSubmit}>


              <Stack spacing='6'>
                <FormControl id='email'>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    borderColor={colorMode === 'light' ? 'gray.400' : 'gray.600'}
                  />
                </FormControl>

                
                


                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input
                    name='password'
                    type='password'
                    autoComplete='password'
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    borderColor={colorMode === 'light' ? 'gray.400' : 'gray.600'}
                  />
                </FormControl>
                <FormControl id='confirmPassword'>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    name='confirmPassword'
                    type='password'
                    autoComplete='password'
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    borderColor={colorMode === 'light' ? 'gray.400' : 'gray.600'}
                  />
                </FormControl>
                <Button
                  type='submit'
                  colorScheme={'red'}
                  bg={'red.400'}
                  _hover={{ bg: 'red.500' }}
                  size='lg'
                  fontSize='md'
                  isLoading={isSubmitting}
                >
                  Sign up
                </Button>
              </Stack>
            </chakra.form>
            <Center my={4}>
              <Button variant='link' onClick={() => navigate('/login')}>
                Login
              </Button>
            </Center>
            <DividerWithText my={6}>OR</DividerWithText>
            <Flex justify="center" align="center">
              <Button
                variant='outline'
                colorScheme='blue'
                leftIcon={<FcGoogle />}
                onClick={() =>
                  signInWithGoogle()
                    .then(user => navigate('/profile'))
                    .catch(e => console.log(e.message))
                }
              >
                Sign in with Google
              </Button>
            </Flex>
          </Card>
        </Box>
      </Flex>
    </Layout>
  )
}