import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { AiOutlineDownload } from 'react-icons/ai';


export default function ProtectedPage() {
  const toast = useToast();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const userBgColor = useColorModeValue('gray.200', 'gray.600');
  const buttonBgColor = useColorModeValue('blue.400', 'blue.300');
  const buttonTextColor = useColorModeValue('white', 'gray.800'); 
  const buttonHoverBgColor = useColorModeValue('blue.500', 'blue.400'); 
  const downloadbuttonBgColor = useColorModeValue('pink.600', 'pink.400');
  const downloadbuttonTextColor = useColorModeValue('white', 'gray.800'); 
  const downloadbuttonHoverBgColor = useColorModeValue('pink.700', 'pink.500');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([{ role: 'bot', message: "Hi, How can I assist you?" },]);
  const [message, setMessage] = useState('');
  const chatContainerRef = useRef(null); 
  const [downloadButtonText, setDownloadButtonText] = useState('Download');
  const [downloadButtonColor, setDownloadButtonColor] = useState(downloadbuttonBgColor);

  
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth', 
      });
    }
  };
 
  useEffect(() => {
    const savedChatHistory = localStorage.getItem('chatHistory');
    if (savedChatHistory) {
      setChatHistory(JSON.parse(savedChatHistory));
    }
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  
   const addMessageToChat = (role, message) => {
    setChatHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, { role, message }];
      localStorage.setItem('chatHistory', JSON.stringify(updatedHistory)); 
      return updatedHistory;
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage().then(r => {});
    }
  };


  //const urlRegex = /(https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?)/g;
  const matchImageURL = (message) => {
    console.log("Incoming message:", message);
    localStorage.setItem("lastMessage", message);

    const markdownRegex = /\[(.*?)\]\((https?:\/\/[^\s]+)\)/;
    const markdownMatch = message.match(markdownRegex);
    if (markdownMatch) {

      return markdownMatch[2];
    }

    const urlRegex = /(https?:\/\/[^\s,]+)/g;
    const plainUrlMatch = message.match(urlRegex);
    if (plainUrlMatch && plainUrlMatch.length > 0) {
      return plainUrlMatch[0];
    }
    return null;
  };



  const harmfulKeywords = [
    'violence', 'abuse', 'drugs', 'hate', 'murder', 'terrorism', 'explicit',
    'pornography', 'explicit', 'racism', 'sex', 'mutilation', 'illegal', 'self-harm',
    'terrorist', 'slaughter', 'rape', 'weapon', 'bomb', 'blood', 'bullying',
    'injury', 'death', 'gore', 'war', 'assault', 'torture', 'threat', 'firearm',
    'explosion', 'explosive','pistol'
  ];

  const containsHarmfulContent = (input) => {
    return harmfulKeywords.some(keyword => input.toLowerCase().includes(keyword));
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Check for harmful content in the message before proceeding
    if (containsHarmfulContent(message)) {
      addMessageToChat('bot', 'Sorry, I cannot generate this image due to content restrictions.');
      return;
    }

    const payload = { human_msg: message };
    const url = process.env.REACT_APP_TEXT_TO_IMAGE_API_URL;

    try {
      addMessageToChat('user', message);
      setMessage('');
      setIsTyping(true);

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      const botResponse = responseData.ai_msg;
      const imageUrl = matchImageURL(botResponse);

      setIsTyping(false);

      // Remove Markdown links and any URLs from the bot's response
      const textPart = botResponse.replace(/\[.*?\]\(https?:\/\/[^\s]+?\)/g, '').trim();

      if (imageUrl) {
        addMessageToChat('bot', textPart);
        addMessageToChat('image', imageUrl); // Display the image
      } else {
        addMessageToChat('bot', botResponse); // Display the response without the image URL
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      addMessageToChat('bot', 'Sorry, I encountered an error. Please try again.');
      setIsTyping(false);
    }
  };







  const handleDownloadButtonClick = (imageUrl) => {
    if (imageUrl) {
      setDownloadButtonText('Downloading...');
      setDownloadButtonColor('purple.600'); 
      downloadImage(imageUrl); 
    } else {
      toast({
        title: 'No Image Available',
        description: "Please generate and save the image first before downloading.",
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  

const downloadImage = (url, mimeType = 'image/jpeg') => {
  setIsLoading(true);
  
  console.log('Download URL:', url); 
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
  
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data) => {
        const decodedData = atob(data.contents.split(',')[1]); 
        const byteArray = new Uint8Array(decodedData.length);
  
        for (let i = 0; i < decodedData.length; i++) {
          byteArray[i] = decodedData.charCodeAt(i);
        }
      
      const blob = new Blob([byteArray], { type: mimeType });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `text2pic_image.${mimeType.split('/')[1]}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setIsLoading(false);
      setDownloadButtonText('Download'); 
      setDownloadButtonColor('pink.600'); 
      toast({
        title: 'Download Successful',
        description: "Your image has been downloaded.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    })
      .catch((error) => {
          console.error('Download failed:', error);
          toast({
            title: 'Download Failed',
            description: "Something went wrong while downloading the image.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
      });

  console.log('Image is downloaded successfully.');
};

  
const handleNewChat = () => {
  setChatHistory([{ role: 'bot', message: "Hi, How can I assist you?" }]);
  localStorage.removeItem('chatHistory');
};


  return (
    <Layout>
      <Container maxW={'7xl'}> 
        <Stack spacing={4} mt={10} mb={20}>
          <Flex>       
            <Box bg={bgColor}  p={4}>
              
              <Button mt={4} 
                      bg={buttonBgColor}
                      color={buttonTextColor}
                      _hover={{ bg: buttonHoverBgColor }} 
                      onClick={handleNewChat}
              >
                 New Chat
              </Button>
            </Box>
            
            <Box w="100%" bg={bgColor} p={4} borderRadius="md" height="600px" display="flex" flexDirection="column">
            <Box ref={chatContainerRef} flex="1" overflowY="auto" p={3}>
              <Stack spacing={3}>
                {chatHistory.map((chat, index) => (
                  <Box
                    key={index}
                    bg={chat.role === 'bot' || chat.role === 'image' ? bgColor : userBgColor}
                    p={3}
                    borderRadius="md"
                    alignSelf={chat.role === 'bot' || chat.role === 'image' ? 'flex-start' : 'flex-end'}>
                    {chat.role === 'image' ? (
                      <div>
                        <img src={chat.message} 
                        alt="Generated" 
                        width="300px" 
                        height="300px" 
                        
                        />
                        
                        <Button
                          leftIcon={<AiOutlineDownload />}
                          mt={2}
                          mr={2}
                          bg={downloadButtonColor}
                          color={downloadbuttonTextColor}
                          _hover={{ bg: downloadbuttonHoverBgColor }}
                          onClick={() => handleDownloadButtonClick(chat.message)}
                          width="300px"
                        >
                          {downloadButtonText}
                        </Button>

                      </div>
                    ) : (
                      <span>{chat.message}</span>
                    )}
                  </Box>
                ))}
              
              {isTyping && <Spinner size="sm" color="blue.500" />} 
              {isLoading && <Spinner size="lg" color="pink.600" />} 
              

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
                <Button 
                h="1.75rem" 
                size="sm" 
                onClick={sendMessage}
                bg={buttonBgColor}
                color={buttonTextColor}
                _hover={{ bg: buttonHoverBgColor }}
              >
                  Send
                </Button>
              </InputRightElement>
            </InputGroup>

            
                
            </Box>
            </Flex>
        </Stack>
      </Container>
    </Layout>
  );
}
