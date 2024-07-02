import {
  Heading,
  Container,
  Stack,
  Text,
  Flex,
  Box,
  SimpleGrid,
  Icon,
  useColorMode,
  useColorModeValue,
  Image,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { FcComments, FcImageFile, FcCheckmark, FcDownload } from 'react-icons/fc';
import { Layout } from '../components/Layout';
import chatImage from '../images/dashboard.jpg';

export default function ProtectedPage() {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const userBgColor = useColorModeValue('blue.100', 'blue.700');
  const botBgColor = useColorModeValue('green.100', 'green.700');
  const textColor = useColorModeValue('gray.700', 'white');
  
  const Feature = ({ title, text, icon }) => {
    return (
      <Stack spacing={2}>
        <Flex
          w={12}
          h={12}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
      </Stack>
    );
  };

  return (
    <Layout>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 2, md: 4 }}
          py={{ base: 2, md: 2 }}
          direction={{ base: 'column', md: 'row' }}>
                  
          <Stack flex={1} spacing={{ base: 1, md: 4 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}>
              <Text as={'span'} color={'red.400'} fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                How it works
              </Text>
              <br />
            </Heading>
          </Stack>
        </Stack>

        <Box p={4}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={2}>
            <Feature
              icon={<Icon as={FcComments} w={10} h={10} />}
              title={'1. Input your desired image description.'}
            />
            <Feature
              icon={<Icon as={FcImageFile} w={10} h={10} />}
              title={'2. The chatbot interprets and generates a relevant image.'}
            />
            <Feature
              icon={<Icon as={FcCheckmark} w={10} h={10} />}
              title={'3. Review and refine until satisfied.'}
            />
            <Feature
              icon={<Icon as={FcDownload} w={10} h={10} />}
              title={'4. Download your high-quality image, tailored to your specifications!'}
            />
          </SimpleGrid>
        </Box>
        
        <Stack spacing={4} mt={10} mb={20}> 
              <Text as={'span'} color={'black.400'} fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                Chat with our Bot
              </Text>
          <Box bg={bgColor} p={4} borderRadius="md">
            <Stack spacing={3}>
              <Box bg={botBgColor} p={3} borderRadius="md" alignSelf="flex-start">
                Bot : Hi, How can I assist you?
              </Box>
              <Box bg={userBgColor} p={3} borderRadius="md" alignSelf="flex-end">
                User : Hi! Can you generate an image of a car for me?
              </Box>
              <Box bg={botBgColor} p={3} borderRadius="md" alignSelf="flex-start">
                Bot: Sure! I'd be happy to help you with that. Could you please provide me with some details about the car?
              </Box>
              <Box bg={userBgColor} p={3} borderRadius="md" alignSelf="flex-end">
                User: I want a black car driving on a race track.
              </Box>
              <Box bg={botBgColor} p={3} borderRadius="md" alignSelf="flex-start">
                Bot: Generating your image... Please wait a moment.
              </Box>
              <Box bg={botBgColor} p={3} borderRadius="md" alignSelf="flex-start">
                <Flex direction="column" alignItems="center">
                  <Image src={chatImage} alt="Generated Image" borderRadius="md" boxSize="200px" />
                  <Stack direction="row" spacing={4} mt={3}>
                    <Button colorScheme="red" variant="solid">
                      Save
                    </Button>
                    <Button colorScheme="blue" variant="solid">
                      Download
                    </Button>
                  </Stack>
                </Flex>
              </Box>
              <Box bg={botBgColor} p={3} borderRadius="md" alignSelf="flex-start">
                Bot: Is there anything specific you would like to add or modify in the image?
              </Box>

              <Box bg={userBgColor} p={3} borderRadius="md" alignSelf="flex-end">
                User: No, Thank You.
              </Box>
              
            </Stack>
          </Box>
        </Stack>
        
      </Container>
    </Layout>
  );
}
