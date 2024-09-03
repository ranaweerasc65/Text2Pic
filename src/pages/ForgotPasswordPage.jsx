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
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'


export default function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const {forgotPassword} = useAuth()
  const toast = useToast()
  // const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Forgot password
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            forgotPassword(email)
              .then(response=>{
                console.log(response)
                toast({
                  description: 'Email sent successfully. Check your email. ',
                  status: 'success',
                  duration: 5000,
                  isClosable: true,
                })
              })
              .catch(e=>{
                console.log(e.message)
              
              toast({
                description: e.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
              })}
            )
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input value={email}
              onChange={e=>setEmail(e.target.value)}
              name='email' 
              type='email' 
              autoComplete='email' 
              required />
            </FormControl>
            <Button 
            type='submit' 
            bg={'red.400'}
              _hover={{ bg: 'red.500' }}
            size='lg' 
            fontSize='md'
            isLoading={isSubmitting}
            >
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText my={6}>OR</DividerWithText>
        <Center>
          <Button variant='link' onClick={() => navigate('/login')}>
            Login
          </Button>
        </Center>
      </Card>
    </Layout>
  )
}
