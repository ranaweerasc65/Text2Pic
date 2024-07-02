import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,Flex,Image,
  useToast,Box,useColorMode, 
} from '@chakra-ui/react'
import React, {useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import {useMounted} from '../hooks/useMounted'
//import useMounted from '../hooks/useMounted'
import loginImage from '../images/login.jpg'


export default function Loginpage() {
  const navigate = useNavigate()
  const { signInWithGoogle, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const location = useLocation()

  //console.log(location.state?.from);

  // useEffect(() => {
  //   mounted.current = true
  //   return () => {
  //     mounted.current = false
  //   }
  // }, [])

const mounted=useMounted()
const { colorMode } = useColorMode();

  function handleRedirectToOrBack() {
    // console.log(location?.state)
    //navigate.replace(location.state?.from ?? '/profile')
    // if (location.state) {
    //   history.replace(location.state?.from)
    // } else {
    //   history.replace('/profile')
    // }
  }

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Login
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} maxW='6xl' mx='auto' mt={4}>
        
        <Box flex='1'  >
          <Card maxW='md' mx='auto' mt={0} roundedRight='lg' bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}>
            <chakra.form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!email || !password) {
                  toast({
                    description: 'Credentials not valid.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                  });
                  return;
                }

                setIsSubmitting(true);

                try {
                  await login(email, password);
                  navigate(location.state?.from ?? '/dashboard');
                } catch (error) {
                  console.log(error.message);
                  toast({
                    description: error.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  });
                } finally {
                  mounted.current && setIsSubmitting(false);
                }
              }}
            >
              <Stack spacing='6'>
                <FormControl id='email'>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    borderColor={colorMode === 'light' ? 'gray.400' : 'gray.600'}
                  />
                </FormControl>
                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input
                    name='password'
                    type='password'
                    autoComplete='password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
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
                  Sign in
                </Button>
              </Stack>
            </chakra.form>
            <HStack justifyContent='space-between' my={4}>
              <Button variant='link'>
                <Link to='/forgot-password'>Forgot password?</Link>
              </Button>
              <Button variant='link' onClick={() => navigate('/register')}>
                Register
              </Button>
            </HStack>
            <DividerWithText my={6}>OR</DividerWithText>

            <Flex justify='center' align='center'>
              <Button
                variant='outline'
                colorScheme={'blue'}
                leftIcon={<FcGoogle />}
                onClick={() =>
                  signInWithGoogle()
                    .then((user) => {
                      handleRedirectToOrBack();
                      navigate('/dashboard');
                    })
                    .catch((e) => console.log(e.message))
                }
              >
                Sign in with Google
              </Button>
            </Flex>
          </Card>
        </Box>
        <Box flex='1' display={{ base: 'none', md: 'block' }} overflow='hidden' >
          <Image src={loginImage} alt='Login' objectFit='cover' width='100%' height='92%' />
        </Box>
      </Flex>
    </Layout>
  )
}