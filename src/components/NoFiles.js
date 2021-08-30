import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

const NoFiles = ({ isLoading, result }) => {
  if (isLoading) return null;
  if (
    (result.children && result.children.length !== 0) ||
    (result.datastreams && result.datastreams.length !== 0)
  ) {
    return null;
  }
  return (
    <Fragment>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        This folder is empty
      </Typography>
    </Fragment>
  );
};

export default NoFiles;
