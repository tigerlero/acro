import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { Description, NavigateNext } from "@material-ui/icons";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { Link } from "react-router-dom";
import { formatBytes } from "../helpers/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    transition: "transform .2s",
    zIndex: 99,
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main, // "#eaf6ff",
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textDecodation: "none",
  },
  subtitle: {
    fontWeight: "bold",
    textDecodation: "none",
  },
}));

export default function ContainerCard({ dataStream, containerUuid }) {
  const classes = useStyles();

  const path = `/containers/${containerUuid}?datastream=${dataStream.uuid}`
  return (
    <Link to={path}>
      <Card className={classes.root}>
        <CardContent>
          <Grid container alignItems={"center"} spacing={2}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <Description fontSize={"large"} />
              </Avatar>
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                overflow: "hidden",
              }}
            >
              <Typography noWrap className={classes.title}>
                {dataStream.label}
              </Typography>
              <Typography
                noWrap
                className={classes.subtitle}
                color={"textSecondary"}
              >
                {formatBytes(dataStream.filesize)}
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  noWrap
                  color={"textSecondary"}
                  style={{ marginRight: 8, textDecodation: "none" }}
                >
                  Last updated:
                </Typography>
                <Typography noWrap style={{ textDecodation: "none" }}>
                  {moment(dataStream.modifiedAt).format("Do, MM YYYY")}
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <NavigateNext />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}
