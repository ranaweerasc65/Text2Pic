import React, { useState } from 'react';
import {
  Container,
  Stack,
  Text,
  Flex,
  Box,
  useColorModeValue,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  
} from '@chakra-ui/react';
//import { FcComments, FcImageFile, FcCheckmark, FcDownload } from 'react-icons/fc';
import { Layout } from '../components/Layout';
import { AiOutlineSave, AiOutlineDownload } from 'react-icons/ai';
//import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
//import { storage, auth } from '../utils/init-firebase';

export default function ProtectedPage() {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const userBgColor = useColorModeValue('gray.200', 'gray.600');
  const buttonBgColor = useColorModeValue('blue.400', 'blue.300'); // Button background color
  const buttonTextColor = useColorModeValue('white', 'gray.800'); // Button text color
  const buttonHoverBgColor = useColorModeValue('blue.500', 'blue.400'); // Hover background color
  
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', message: "Hi, How can I assist you?" },
  ]);
  const [message, setMessage] = useState('');

  const addMessageToChat = (role, message) => {
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
      addMessageToChat('user', `${message}`);
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
        addMessageToChat('bot', `${botResponse.slice(0, match.index)}`);
        addMessageToChat('image', `${imageUrl}`);
        addMessageToChat('bot', `${botResponse.slice(match.index + match[0].length)}`);
        // Use imageUrl to display the image
      } else {
        addMessageToChat('bot', `${botResponse}`);
      }

    } catch (error) {
      console.error('Error fetching response:', error);
      addMessageToChat('bot', 'Bot: Sorry, I encountered an error. Please try again later.');
    }
  };

{/*
  const saveImageToFirebase = async (imageUrl) => {
    try {
      // Fetch the image blob using CORS Anywhere
      const response = await fetch(`https://cors-anywhere.herokuapp.com/${imageUrl}`);
      const blob = await response.blob();

      // Get the current user
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;

        // Create a reference to the storage location
        const storageRef = ref(storage, `images/${userId}/${Date.now()}_image.jpg`);

        // Create a new Blob with the correct MIME type
        const imageBlob = new Blob([blob], { type: 'image/jpeg' });

        // Upload the file
        const uploadTask = uploadBytesResumable(storageRef, imageBlob);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error) => {
            // Handle unsuccessful uploads
            console.error('Upload failed:', error);
          },
          () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

              console.log('Image is saved succesfully.')
              console.log('File available at', downloadURL);
              
              // Save downloadURL in a global or state variable for later use
            window.generatedImageDownloadURL = downloadURL;
            
            

            // Show success message, no download triggered here
            alert('Image successfully saved.');
            });
          }
        );
      } else {
        console.error('No user signed in');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
 
  

   // Handle the Save button click
  const handleSaveButtonClick = (imageUrl) => {
    saveImageToFirebase(imageUrl);
  };

  // Handle the Download button click using downloadurl

  const handleDownloadButtonClick = () => {
  const downloadURL = window.generatedImageDownloadURL;
  if (downloadURL) {
    downloadImage(downloadURL); 
    //openImageInNewTab(downloadURL); // Open the image in a new tab
  } else {
    alert('Please save the image first before downloading.');
  }
};
*/}
{/*
  const downloadImage = (url) => {
    // Create an anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated_image.jpg'; // Set the filename for the download
    document.body.appendChild(a); // Append the anchor to the body
    a.click(); // Programmatically click the anchor to trigger the download
    document.body.removeChild(a); // Clean up by removing the anchor
    console.log('Image is downloaded succesfully.')
  };
   */}
  
{/*
   const downloadImage = (url, mimeType = 'image/jpg') => {
    console.log('Download URL:', url); // Debugging the URL
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const file = new Blob([blob], { type: mimeType });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(file);
        a.download = `text2pic_image.${mimeType.split('/')[1]}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error('Download failed:', error);
      });
      console.log('Image is downloaded succesfully.')
  };
  
  */}

  // Handle the Download button click using directly imageurl
const handleDownloadButtonClick = (imageUrl) => {
  if (imageUrl) {
      downloadImage(imageUrl); // Use the passed imageUrl directly
  } else {
      alert('Please save the image first before downloading.');
  }
};

const downloadImage = (url, mimeType = 'image/jpeg') => {
  console.log('Download URL:', url); // Debugging the URL
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
  
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          //return response.blob(); // Convert response to a Blob (Binary Large Object)
          return response.json(); // allorigins returns a JSON object
      })
      .then((data) => {
        // Extract the actual image data from the `contents` field
        const decodedData = atob(data.contents.split(',')[1]); // Decode base64 content
        const byteArray = new Uint8Array(decodedData.length);
  
        // Convert the decoded base64 string into a byte array
        for (let i = 0; i < decodedData.length; i++) {
          byteArray[i] = decodedData.charCodeAt(i);
        }
      // Create a Blob from the byte array and download it
      const blob = new Blob([byteArray], { type: mimeType });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `text2pic_image.${mimeType.split('/')[1]}`; // Filename for the download
      document.body.appendChild(a);
      a.click(); // Trigger the download
      document.body.removeChild(a); // Clean up
    })
      .catch((error) => {
          console.error('Download failed:', error);
      });

  console.log('Image is downloaded successfully.');
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

  const handleNewChat = () => {
    setChatHistory([{ role: 'bot', message: "Hi, How can I assist you?" }]);
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
            <Box flex="1" overflowY="auto" p={3}>
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
                        //onClick={downloadImage}
                        />
                        {/* <a href={chat.message} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'aqua' }}>Open image in new tab</a>*/}
                        
                                                
                        <Button
                          leftIcon={<AiOutlineSave />}
                          mt={2}
                          mr={2}
                          bg={buttonBgColor}
                          color={buttonTextColor}
                          _hover={{ bg: buttonHoverBgColor }}
                          //onClick={() => handleSaveButtonClick(chat.message)}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevents the click event from propagating to other elements
                            handleSaveButtonClick(chat.message); // Only triggers save to Firebase
                          }}
                        >
                          Save
                        </Button>

                        <Button
                          leftIcon={<AiOutlineDownload />}
                          mt={2}
                          mr={2}
                          bg={buttonBgColor}
                          color={buttonTextColor}
                          _hover={{ bg: buttonHoverBgColor }}
                          onClick={() => handleDownloadButtonClick(chat.message)}
                        >
                          Download
                        </Button>
                        {/*
                        <Button
                          as="a"
                          href={chat.message}
                          target="_blank"
                          rel="noopener noreferrer"
                          download="generated_image.jpg"
                          leftIcon={<AiOutlineDownload />}
                          mt={2}
                          bg={buttonBgColor}
                          color={buttonTextColor}
                          _hover={{ bg: buttonHoverBgColor }}
                        >
                        Download
                        </Button>

                      */}
                        
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
{/*
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
                Guidelines
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
 */}
     

    </Layout>
  );
}
