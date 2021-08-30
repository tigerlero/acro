import React, {useState} from "react";
import {FireInput} from "./FireInput";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {postData} from "../helpers/utils";
import {Endpoint} from "../constants/enums";
import SearchResults from "./SearchResults";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
  },
  results: {
    position: "absolute",
    width: "100%",
    zIndex: 99,
    maxHeight: 330,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },
  progress: {
    alignSelf: "center",
    margin: 16,
  },
}));

export default function Search() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState([]);

  const onFire = async () => {
    if (query) {
      setBusy(true);
      try {
        const res = await postData(Endpoint.search + "?q=" + query);
        setResults(res);
        setBusy(false);
      } catch (e) {
        setBusy(false);
      }
    }
  };

  return (
    <div className={classes.root}>
      <FireInput
        timeout={500}
        value={query}
        onChange={setQuery}
        onFire={onFire}
        busy={busy}
      />
      {query && (
        <Card className={classes.results}>
          <div className={classes.root}>
            <SearchResults results={results} busy={busy} />
          </div>
        </Card>
      )}
    </div>
  );
}
