import React, { useEffect, useState } from "react";
import { useFetch } from "../helpers/hooks";
import { Endpoint } from "../constants/enums";
import LinearProgress from "@material-ui/core/LinearProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { downloadFile, loadDataStreamFile } from "../helpers/utils";
import { Box } from "@material-ui/core";
import { CloudDownloadOutlined, InfoOutlined } from "@material-ui/icons";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from '@material-ui/core/Paper'
import FilePreview from '../components/FilePreview'
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable handle=".draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#000000e3',
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  paper:{
    backgroundColor: '#000000de'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DataStreamView({uuid,dismiss}) {
  const classes = useStyles();
  const url = uuid && Endpoint.dataStreams + "/" + uuid;
  const [, dataStreamResult] = useFetch(url, { containers: [] });
  const [fileLoading, setfileLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [file, setFile] = useState(null);
  const [openDescription, setOpenDescription] = useState(false);
  const [downloadProgress,] = useState(0)


  function searchKeyValue(nameKey, array) {
    let description = "";
    array.forEach((property) => {
      if (property.key === nameKey) {
        description = property.value;
      }
    });
    return JSON.parse(description).values;
  }

  const handleDownload = async () => {
    const url = `${Endpoint.dataStreams}/${uuid}/download`;
    try {
      await downloadFile(url, dataStreamResult);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInfo = () => {
    const dataStreamDescription = searchKeyValue(
      "ermisf-description-el",
      dataStreamResult.properties
    );

    const dataStreamSource = searchKeyValue(
      "ermisf-source-el",
      dataStreamResult.properties
    );

    setSource(dataStreamSource)
    setDescription(dataStreamDescription);
    setOpenDescription(true);
  };

  const handleCloseDescription = () => {
    setOpenDescription(!openDescription);
  };

  useEffect(() => {
    if(uuid)
    {
      setfileLoading(false);
      loadDataStreamFile(uuid, setFile, setfileLoading);
    }
  }, [uuid]);

  return (
    <>
      <Dialog open={openDescription}
              PaperComponent={PaperComponent}
              onClose={handleCloseDescription}
              aria-labelledby="draggable-dialog-title"
              hideBackdrop={true}
      >
        <DialogTitle
          onClose={handleCloseDescription}
          className="draggable-dialog-title"
        >
          {dataStreamResult.label}
        </DialogTitle>
        <DialogContent dividers>
          <Box >
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Box>
          <Box mt={2}>
            <Typography variant={'body2'} color={'textPrimary'}>
              Πηγή: {source}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDescription} color="primary">
            Κλεισιμο
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullScreen
        open={!!uuid}
        onClose={dismiss}
        TransitionComponent={Transition}
      >
         <AppBar className={classes.appBar} elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={dismiss}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {dataStreamResult.label}
            </Typography>
            <Box mr={2}>
              <IconButton color="inherit" onClick={handleInfo} disabled={fileLoading}>
                <InfoOutlined />
              </IconButton>
            </Box>
            <Box mr={2}>
              <IconButton color="inherit" onClick={handleDownload} disabled={fileLoading}>
                <CloudDownloadOutlined />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.paper}>
        {fileLoading && <LinearProgress />}
            <FilePreview imageAlt={dataStreamResult.label} isLoading={fileLoading} fileBase64={file} fileType={dataStreamResult.mimeType} downloadProgress={downloadProgress}/>
        </DialogContent>
      </Dialog>
    </>
  );
}
