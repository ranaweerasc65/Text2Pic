import {
    Container,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Layout } from '../components/Layout'
  
  
  export default function TermsConditionPage() {
 
    return (
      <Layout>
        <Container maxW={'7xl'}>

          <Stack align={'center'} justify={'center'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>

              <Text as={'span'} color={'red.400'}>
                Terms{" "}
              </Text>

              <Text
                as={'span'}
                position={'relative'}
                >
                and  
              </Text>

              <Text as={'span'} color={'red.400'}>
                {" "}Conditions
              </Text>
            </Heading>
           
          </Stack>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Acceptance of terms:
              </Text>
          </Heading>

          <Text textAlign={'justify'}>
          By accessing or using Text2Pic, 
          you agree to be bound by these terms of service (the "Terms") 
          and our privacy policy (the "Privacy Policy"). 
          If you do not agree to these Terms or the Privacy Policy, 
          do not use the platform.
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Accounts:
              </Text>
          </Heading>

          <Text textAlign={'justify'}>
          In order to use certain features of Text2Pic, 
          you must register for an account 
          and provide certain information about yourself 
          as prompted by the account registration form. 
          You represent and warrant that: 
          (a) all required registration information you submit 
          is truthful and accurate; and (b) 
          you will maintain the accuracy of such information. 
          You may delete your Account at any time, 
          for any reason, by following the instructions on Text2Pic. 
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Modifications:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          Company reserves the right, at any time, to modify, suspend, or discontinue Text2Pic (in whole or in part) 
          with or without notice to you. You agree that Company will not be liable to you or to any third party for 
          any modification, suspension, or discontinuation of Text2Pic or any part thereof.
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Data privacy:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          Any data that you input into the platform, including but not limited to personal data, will be treated as 
          confidential in accordance with the terms of the Privacy Policy. The platform may use this data to provide 
          analytics and insights, but will not share this data with third parties without your consent, except as 
          required by law or as necessary to provide the platform's services.
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Termination:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          Text2Pic reserves the right to terminate or suspend your access to the platform at any time, 
          for any reason, and without notice.
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Governing law:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          These Terms and your use of the platform will be governed by and construed in accordance with the laws of 
          Sri Lanka, without giving effect to any principles of conflicts of law.
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Disclaimers:
              </Text>
          </Heading>

          <Text textAlign={'justify'}>
          Text2Pic is provided "as is" and without warranties of any kind, either express or implied. 
          Text2Pic does not guarantee that the platform will be error-free or uninterrupted. 
          Text2Pic will not be liable for any damages resulting from the use of the platform, including but not limited 
          to direct, indirect, incidental, consequential, or punitive damages.
          Text2Pic may change at any time and in any manner, at the Company’s sole discretion. 
          This includes, without limitation, updates to and discontinuation of features previously available. 
          We make no guarantees related to the quality, reliability or uptime of Text2Pic. 
          We make no representations or warranties related to current law that might apply to you. 
          We advise you to refrain from relying on Text2Pic or creating any dependency related 
          to Text2Pic in any manner. You acknowledge and agree that (a) we will have no liability to you, 
          your customers or any third party for any harm caused by your reliance or dependency on Text2Pic and 
          (b) you are solely responsible for determining the legality of your use and redistribution of Text2Pic Content. 
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Copyright/Trademark Information:
              </Text>
          </Heading>

          <Text textAlign={'justify'}>
          Copyright 2024 design and develop by Text2Pic. All rights are reserved. 
          All trademarks, logos and service marks (“Marks”) displayed on Text2Pic are our property or the 
          property of other third parties. You are not permitted to use these Marks without our prior written consent 
          or the consent of such third party which may own the Marks. 
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Changes to terms of service:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          Text2Pic reserves the right to update these Terms at any time and will post any updates on this page. 
          It is your responsibility to review these Terms periodically for any changes. 
          Your continued use of the platform after any changes have been made will constitute acceptance of those changes.
          </Text>



          </Container>

  
  
  
      </Layout>
    )
  }