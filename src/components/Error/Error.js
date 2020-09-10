import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  errorWrapper: {
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2)
  }
}));

export default function Error() {
  const styles = useStyles();

  return (
    <div className={styles.errorWrapper}>
      <p>System error. Please try again.</p>
    </div>
  );
}
