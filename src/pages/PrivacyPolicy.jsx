import {
    Stack,
    Heading,
    Container,
    Text,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Layout } from '../components/Layout'

  
  export default function PrivacyPolicyPage() {
    
    return (
    <Layout>
        <Container maxW={'7xl'}>

          <Stack align={'center'} justify={'center'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
              <Text as={'span'} color={'red.400'}>
                Privacy Policy
              </Text>  
            </Heading>           
          </Stack>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              General info:
              </Text>
          </Heading>

          <Text textAlign={'justify'}>
          Your privacy is important to us. It is Text2Pic's policy to respect your privacy and comply with any applicable 
          law and regulation regarding any personal information we may collect about you, including across our websites and other sites 
          we own and operate. Personal information is any information about you that can be used to identify you. This includes information about you as a person 
          (such as name, address, and date of birth), your devices, payment details, and even information about how you use a website or online 
          service.

          In the event our site contains links to third-party sites and services, please be aware that those sites and services have 
          their own privacy policies. After following a link to any third-party content, you should read their posted privacy policy 
          information about how they collect and use personal information. This Privacy Policy does not apply to any of your activities 
          after you leave our site.

          <br/>
          <br/>
          This policy is effective as of 09 May 2024. Last updated: 09 May 2024.
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Amendments:
              </Text>
          </Heading>

          <Text textAlign={'justify'}>
          We may, at any time and at our discretion, vary this Privacy Policy by publishing the amended Privacy Policy on our website. 
           recommend you check our website regularly to ensure you are aware of our current Privacy Policy. In the event we make any significant 
           changes to this Privacy Policy we will use our reasonable endeavours to inform you of such changes in advance in writing.

          It is important that the personal information we hold about you is true, complete, accurate and current. Accordingly, you must 
          notify us of any changes to your personal information (for example, if you change your email address).
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              The information we collect:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          We collect various types of personal information about you, 
          including your name, contact details, preferences, payment information, and usage data when you use our software
           or visit our website. This may include browser session data, geo-location, and device information.
          We do not actively request sensitive information unless required by law. 
          If collected inadvertently, we handle it with your consent and in accordance with legal requirements. Sensitive information may include racial 
          or ethnic origin, political opinions, religion, health information, etc.</Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Registration profile:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          If you decide to create an account on the Website, you may be required to provide Us
           your Personal Data such as e-mail address, country and encrypted password with the submission of the registration form. You may also include additional Personal Data such as your username.</Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Security:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          We treat the security for all information submitted or provided by you to Us seriously and is of importance to Us. We will take reasonable steps to protect or secure this data, including your Personal Data. Accordingly, 
          We may require Our employees or third-party service providers to assist Us in implementing or applying 
          appropriate securities measures (such as firewalls, penetration testing and etc). You are also advised not to disclose and secure your own username and password.
          </Text>

          <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              <br/>           
              <Text as={'span'}>
              Changes to this Privacy Policy:
              </Text>
          </Heading>

          <Text textAlign={'justify'} >
          We will keep this Privacy Policy under regular review, and We may update this Privacy Policy from time to time. The updated version shall apply and supersede all previous versions. Hence, it is advisable that you check this Privacy Policy on a 
          regular basis.</Text>

          

          </Container>

  
  
  
      </Layout>
    )
  }