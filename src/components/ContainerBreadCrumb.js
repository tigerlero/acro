import React from "react";
import { NavigateNext } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const ContainerBreadCrumb = ({ path, label }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="small" />}
    >
      <Link to={"/"}>
        <Typography color="textSecondary">Home</Typography>
      </Link>
      {path.map((sub) => (
        <div key={sub.uuid} style={{ maxWidth: 200, overflow: "hidden" }}>
          <Link to={"/containers/" + sub.uuid}>
            <Typography color="textSecondary" noWrap>
              {sub.label}
            </Typography>
          </Link>
        </div>
      ))}
      <div style={{ overflow: "hidden", maxWidth: 200 }}>
        <Typography color="textSecondary" noWrap>
          {label}
        </Typography>
      </div>
    </Breadcrumbs>
  );
};

export default ContainerBreadCrumb;
