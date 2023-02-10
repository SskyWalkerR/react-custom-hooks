import "./App.css";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import useModal from "./hooks/useModal";

function App() {
  const { handleOpen, Modal } = useModal();

  return (
    <div className="App">
      <Button variant="outlined" color="neutral" onClick={handleOpen}>
        Open modal
      </Button>
      {/* Pass the modal content like below */}
      {Modal(
        <>
          <Typography
            component="h2"
            id="close-modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
          >
            Modal title is here..
          </Typography>
          <Typography id="layout-modal-description" textColor="text.tertiary">
            Modal body goes here...
          </Typography>
        </>
      )}
    </div>
  );
}

export default App;
