import { useState } from "react";
import AppModal from "../components/AppModal";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleClose,
    Modal: (children: React.ReactNode) => AppModal({ open, handleClose, children }),
  };
};

export default useModal;
