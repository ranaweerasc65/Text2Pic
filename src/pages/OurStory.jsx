import {
    Container,
    Heading,Stack,
    Text,Flex,Box,Image,useColorMode,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Layout } from '../components/Layout'
  import noveltyImage from '../images/novelty.jpg';
  import userImage from '../images/user.jpg';
  import newImage from '../images/new.jpg';

  export default function OurStoryPage() {
    const { colorMode } = useColorMode();
    return (
      

      <Layout>
        <Container maxW={'7xl'}>

        <Stack align={'center'} justify={'center'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              About  
            </Text>

            <Text as={'span'} color={'red.400'}>
              {" "}Text2Pic
            </Text>
          </Heading>
          <Text color={colorMode === 'light' ? 'white.400' : 'gray.300'} fontSize="lg"align={'center'} justify={'center'}>
          Text2Pic emerged in 2024 as an innovative online tool 
          crafted for children's English learning.
          Initially conceived as a platform for creating 
          image-based vocabulary, Text2Pic swiftly captivated users with 
          its intuitive interface and educational prowess. Continuously evolving, 
          Text2Pic integrates cutting-edge AI technologies to streamline the creative process, 
          empowering users to effortlessly transform words into captivating visual narratives. 
          Embark on a journey where learning knows no bounds, 
          and every image sparks imagination. 
          Experience the future of English learning with Text2Pic.
          </Text>

        </Stack>

        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
            <br/>           
            <Text as={'span'} color={'blue.400'}>
            Technology Behind Text2Pic:
            </Text>
        </Heading>

        </Container>

      {/* Novelty */ }
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
                  
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>

          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
             Novelty
            </Text>
            <br />
            
          </Heading>
          <Text color={colorMode === 'light' ? 'white.400' : 'gray.300'} fontSize="lg">
          At Text2Pic, we utilize Generative Adversarial Networks (GANs) to seamlessly transform textual descriptions into vibrant, lifelike images. What sets us apart is our integration of GANs with interactive user feedback, revolutionizing text-to-image synthesis. This unique approach ensures continuous refinement, enhancing image quality and user engagement.
          </Text>  
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
    
          <Box
            position={'relative'}
            height={'250px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>

            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={noveltyImage}
            />
            <Image/>
          </Box>
        </Flex>
        
      </Stack>
      
      
      </Container>

      {/*UI */}
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>



        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={userImage}
            />
          </Box>
        </Flex>

        

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              User Interface Design:
            </Text>
            
          </Heading>
          <Text color={colorMode === 'light' ? 'white.400' : 'gray.300'} fontSize="lg">
          Text2Pic's user interface is intuitively designed, featuring a user-friendly chatbot interface. Seamlessly integrated, it allows users to provide continuous feedback, enhancing the image creation process effortlessly.
          </Text>
          
        </Stack>

      </Stack>
      </Container>

      {/* Novelty */ }
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
                  
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>

          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
             Diversity
            </Text>
            <br />
            
          </Heading>
          <Text color={colorMode === 'light' ? 'white.400' : 'gray.300'} fontSize="lg">
          Implement strategies within the GAN framework
          to ensure a broad range of image outputs, capturing various aspects of the given
          textual descriptions.
          </Text>  
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
    
          <Box
            position={'relative'}
            height={'250px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>

            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={newImage}
            />
            <Image/>
          </Box>
        </Flex>
        
      </Stack>
      
      
      </Container>
  
  
      </Layout>
    )
  }