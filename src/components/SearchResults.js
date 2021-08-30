import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {FolderOpen} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SearchResults({ results, busy }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!results[0] && (
        <Typography style={{margin: 16}}>{busy ? "Loading" : "No results"}</Typography>
      )}
      <List component="nav" aria-label="secondary mailbox folders">
        {results.map((container) => (
          <ListItemLink href={"/containers/" + container.uuid}>
            <ListItemIcon>
              <FolderOpen />
            </ListItemIcon>
            <ListItemText primary={container.label} />
          </ListItemLink>
        ))}
      </List>
    </div>
  );
}
