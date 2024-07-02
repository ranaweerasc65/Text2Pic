import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
import { useLocation } from 'react-router-dom'
import { useAuth} from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function useQuery(){
  return new URLSearchParams(useLocation().search);
}


export default function ResetPasswordPage() {
  const toast = useToast()
  const navigate = useNavigate()
  const {resetPassword} = useAuth()
  const query=useQuery()
// console.log(query)

const [newPassword, setNewPassword]=useState('')


  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Reset password
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            resetPassword(query.get('oobcode'),newPassword)

            .then(response=>{
              console.log(response)
              toast({
                description: 'Password has been changed. You can now login. ',
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
              navigate('/login')
            })
            .catch(err=>{
              console.log(err.message)
            
            toast({
              description: err.message,
              status: 'error',
              duration: 5000,
              isClosable: true,
            })}
          )}}
        >
          <Stack spacing='6'>
            <FormControl id='password'>
              <FormLabel>New password</FormLabel>
              <Input 
              value={newPassword}
              onChange={e=>setNewPassword(e.target.value)}
              type='password' 
              autoComplete='password' 
              required />
            </FormControl>
            <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Reset password
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </Layout>
  )
}
