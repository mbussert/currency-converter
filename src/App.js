import "./App.css";
import Card from "./components/Card";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
      <Card />
    </Container>
  );
}

export default App;
