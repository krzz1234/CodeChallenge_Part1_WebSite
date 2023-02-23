import { Form, Button } from "react-bootstrap"
import { SyntheticEvent, useState } from "react"
import FormContainer from "../components/FormContainer"


async function loginUser(credentials: any) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export function LoginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await auth.signInWithEmailAndPassword(username, password);
      } catch (error) {
        console.error(error);
      }
    };

    return (
    <FormContainer>
        <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" 
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </FormContainer>
    )
}

