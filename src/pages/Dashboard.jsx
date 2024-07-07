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
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcComments, FcImageFile, FcCheckmark, FcDownload } from 'react-icons/fc';
import { Layout } from '../components/Layout';

export default function ProtectedPage() {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const userBgColor = useColorModeValue('blue.100', 'blue.700');
  const botBgColor = useColorModeValue('green.100', 'green.700');
  const textColor = useColorModeValue('gray.700', 'white');

  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', message: "Bot : Hi, How can I assist you?" },
  ]);
  const [message, setMessage] = useState('');

  const addMessageToChat = (role, message) => {
    // setChatHistory([...chatHistory, { role, message }]);
    setChatHistory((prevHistory) => [...prevHistory, { role, message }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const matchImageURL = (message) => {
    const regex = /\[(.*?)\]\((.*?)\)/; // Regular expression to capture text and link
    const match = message.match(regex);
    return match;
  }

  const sendMessage = async () => {
    if (!message.trim()) return;
    const payload = {
      human_msg: message
    };
    const url = process.env.REACT_APP_TEXT_TO_IMAGE_API_URL;
    
    try {
      addMessageToChat('user', `You : ${message}`);
      setMessage('');
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      const botResponse = responseData.ai_msg; // response message is in 'ai_msg' field
      const match = matchImageURL(botResponse);

      if (match) {
        const imageUrl = match[2]; // Second capture group contains the URL
        addMessageToChat('bot', `Bot: ${botResponse.slice(0, match.index)}`);
        addMessageToChat('image', `${imageUrl}`);
        addMessageToChat('bot', `Bot: ${botResponse.slice(match.index + match[0].length)}`);
        // Use imageUrl to display the image
      } else {
        addMessageToChat('bot', `Bot: ${botResponse}`);
      }

    } catch (error) {
      console.error('Error fetching response:', error);
      addMessageToChat('bot', 'Bot: Sorry, I encountered an error. Please try again later.');
    }


  };

  const Feature = ({ title, icon }) => {
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
              {chatHistory.map((chat, index) => (
                <Box
                  key={index}
                  bg={chat.role === 'bot' || chat.role === 'image' ? botBgColor : userBgColor}
                  p={3}
                  borderRadius="md"
                  alignSelf={chat.role === 'bot' || chat.role === 'image' ? 'flex-start' : 'flex-end'}>
                  {/* {chat.message} */}
                  {chat.role === 'image' ? (
                    <div>
                    <img src={chat.message} alt="Generated" width="200px" height="200px"/>
                    <a href={chat.message} target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: 'underline', color: 'aqua' }}>Open image in new tab</a>
                    </div>
                  ) : (
                    <span>{chat.message}</span>
                  )}
                </Box>
              ))}
            </Stack>
          </Box>
          <InputGroup size="md">
            <Input
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              bg={userBgColor}
              borderRadius="md"
              focusBorderColor="blue.500"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={sendMessage}>
                Send
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Container>
    </Layout>
  );
}