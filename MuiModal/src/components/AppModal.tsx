import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { ModalDialog } from "@mui/joy";

type Props = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

const AppModal = ({ open, handleClose, children }: Props) => {
  return (
    <Modal
      aria-labelledby="close-modal-title"
      open={open}
      onClose={handleClose}
      hideBackdrop={true}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalDialog
        aria-labelledby="layout-modal-title"
        aria-describedby="layout-modal-description"
        variant="outlined"
        size="lg"
        sx={{
          minWidth: 400,
          minHeight: 200,
          borderRadius: "md",
          p: 3,
          backgroundColor: "black",
        }}
      >
        <ModalClose variant="outlined" />
        {children}
      </ModalDialog>
    </Modal>
  );
};

export default AppModal;
