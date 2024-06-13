import { Container, VStack, Heading, Input, Button, List, ListItem, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <HStack width="100%">
          <Input 
            placeholder="Enter a new todo" 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddTodo}>Add Todo</Button>
        </HStack>
        <List width="100%" spacing={3}>
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" borderWidth={1} borderRadius="md" p={2}>
              <Text>{todo}</Text>
              <Button size="sm" colorScheme="red" onClick={() => handleDeleteTodo(index)}><FaTrash /></Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;