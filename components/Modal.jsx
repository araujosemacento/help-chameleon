"use client";

import * as React from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/base/Button";
import { Progress } from "@material-tailwind/react";

let approvedGlobal, prefersDarkMode;

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade timeout={250} in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});
Backdrop.displayName = "Backdrop";
Backdrop.propTypes = {
  open: PropTypes.bool,
};

///*
const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
//*/

const green = {
  100: "#003300",
  200: "#006600",
  300: "#009900",
  400: "#00cc00",
  500: "#00ff00",
  600: "#33ff33",
  700: "#66ff66",
  800: "#99ff99",
};

const red = {
  100: "#330000",
  200: "#660000",
  300: "#990000",
  400: "#cc0000",
  500: "#ff0000",
  600: "#ff3333",
  700: "#ff6666",
  800: "#ff9999",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  p: 4,
};

const ModalContent = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  background-color: ${
    prefersDarkMode
      ? approvedGlobal
        ? green[300]
        : red[300]
      : approvedGlobal
      ? green[600]
      : red[600]
  };
  border-radius: 8px;
  border: 1px solid var(--text-400);
  box-shadow: 0px 4px 12px ${
    prefersDarkMode ? "rgba(0,0,0, 0.75)" : "rgba(0,0,0, 0.50)"
  };
  padding: 1rem;
  color: ${
    prefersDarkMode
      ? approvedGlobal
        ? green[800]
        : red[800]
      : approvedGlobal
      ? green[100]
      : red[100]
  };
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 700;
  text-align: start;
  position: relative;


  & .modal-title {
    margin: 0;
    line-height: 1.5rem;
    margin-right: 0.5rem;
  }

  & .modal-description {
    margin: 0;
    line-height: 1.5rem;
    font-weight: 500;
    color: ${
      prefersDarkMode
        ? approvedGlobal
          ? green[800]
          : red[800]
        : approvedGlobal
        ? green[100]
        : red[100]
    };
  }
  `
);

const TriggerButton = styled(Button)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 250ms ease;
  cursor: pointer;
  border: 1.5px solid var(--primary-600);
  border-bottom: 3px solid var(--primary-700);
  color: var(--primary-800);
  box-shadow: 0 2px 5px 0 rgb(50 50 50 / 0.5);

  &:hover {
    background: var(--secondary-300);
    border-color: var(--secondary-600);
  }

  &:active {
    background: var(--secondary-600);
  }

  &:focus-visible {
    box-shadow: 0 0 0 5px var(--primary-400);
    outline: none;
  }
`
);

export default function TransitionsModal(approved) {
  approvedGlobal = approved.approved;
  const [prefersDarkMode] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [open, setOpen] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        const updateWidth = width + 1/10;
        setWidth(updateWidth);
      }, 1);
    }
    if (width >= 100) setOpen(false);
  }, [width, open]);

  const handleOpen = () => {
    setWidth(0);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TriggerButton className="bg-primary-400" onClick={handleOpen}>
        Exibir Alerta
      </TriggerButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade timeout={250} in={open}>
          <ModalContent sx={style}>
            <h3 id="transition-modal-title" className="modal-title">
              Text in a child modal
            </h3>
            <p id="transition-modal-description" className="modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Progress
              className={`bg-transparent border-[${
                prefersDarkMode ? "#9C27B0" : "#673AB7"
              }]`}
              value={width}
              color={`gray`}
              size="sm"
            />
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
}
