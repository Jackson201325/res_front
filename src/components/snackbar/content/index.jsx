import cx from "classnames";
import { IconButton, SnackbarContent } from "@material-ui/core";
import {
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import styles from "./styles";

const useStyles = makeStyles(styles);

const variantIcon = {
  error: ErrorIcon,
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
};

export function Content({ message, onClick, variant, snackId, ...other }) {
  const classes = useStyles();
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      classes={{ root: classes.content, action: classes.action }}
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={
        <span id={snackId} className={classes.message}>
          <Icon className={cx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClick}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}
