import { Flex, Button } from "@chakra-ui/react";
import { Text, useColorModeValue } from "@chakra-ui/react";

const Chat = () => {
  return (
    <Flex p={3} align="center" _hover={{ bg: "gray.400", cursor: "pointer" }}>
      <Text>Chat No:</Text>
    </Flex>
  );
};

export default function ChatSidebar({ onNewChat }) {

  const buttonBgColor = useColorModeValue('blue.400', 'blue.300'); // Button background color
  const buttonTextColor = useColorModeValue('white', 'gray.800'); // Button text color
  const buttonHoverBgColor = useColorModeValue('blue.600', 'blue.400'); // Hover background color
  
  return (
    <Flex
      w="300px"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Button
        m={5}
        p={4}
        onClick={onNewChat}
        bg={buttonBgColor}
        color={buttonTextColor}
        _hover={{ bg: buttonHoverBgColor }}
      >
        New Chat
      </Button>
      <Flex overflowX="scroll" direction="column">
        <Chat />
        <Chat />
        <Chat />
      </Flex>
    </Flex>
  );
}
