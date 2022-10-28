import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LogForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_email = "test@test.com";
  const user_password = "test111";

  const navigate = useNavigate();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="primary"
        onClick={() => {
          if (email === user_email && password === user_password) {
            navigate("/account");
          } else alert("invalid input");
        }}
      >
        Вход
      </Button>
    </Form>
  );
}

export default LogForm;
