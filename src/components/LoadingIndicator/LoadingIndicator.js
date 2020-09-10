import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  loadingWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2)
  }
}));

export default function LoadingIndicator() {
  const styles = useStyles();

  return (
    <div className={styles.loadingWrapper}>
      <CircularProgress />
    </div>
  );
}
