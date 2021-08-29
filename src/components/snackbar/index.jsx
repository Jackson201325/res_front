import { Snackbar as MuiSnackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import { Content } from "./content";
import styles from "./styles";

const useStyles = makeStyles(styles);

export function Snackbar({ isOpen, message, snackId, variant, onClose }) {
  const classes = useStyles();

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      autoHideDuration={5000}
      classes={{ root: classes.snackbar }}
      open={isOpen}
      onClose={onClose}
    >
      <Content
        snackId={snackId}
        message={message}
        variant={variant}
        onClick={onClose}
      />
    </MuiSnackbar>
  );
}

export function useSnackbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  return {
    isOpen,
    close,
    open,
  };
}
