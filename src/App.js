import { Account } from "./Account";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import LogForm from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js";
import "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js";
import "https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js";

function App() {
  return (
    <section className="App-div">
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<LogForm />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      </Container>
    </section>
  );
}

export default App;
