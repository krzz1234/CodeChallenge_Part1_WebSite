import { Form, Button } from "react-bootstrap"
import { SyntheticEvent, useState } from "react"
import FormContainer from "../components/FormContainer"

export function CheckOut() {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
      event.preventDefault()
    }

    return (
    <FormContainer>
        <h1>CheckOut</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User First Name" 
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Last Name" 
        value={lastname}
        onChange={e => setLastname(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </FormContainer>
    )
}