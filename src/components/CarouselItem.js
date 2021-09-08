import React, { useCallback, useState , useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { Endpoint } from "../constants/enums";
import { fetchData } from "../helpers/utils";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import { Block, InfoOutlined } from "@material-ui/icons";
import {downloadThumb} from '../helpers/utils'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginRight: 16,
      maxWidth:'645px',
      height:'530px',
    },
    [theme.breakpoints.down('md')]: {
      width:'60%',
      height:'60%'
    },
      [theme.breakpoints.down('sm')]: {
        width:'90%'
      },
    [theme.breakpoints.down('xs')]: {
      width:'60%'
    }
  },
  media: {
    height: '60%',
    width: "60%",
    objectFit: "cover",
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
    backgroundColor: "#eaf6ff",
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
    maxWidth: '60%',
    
  },
}));


const getDescription = (datastream) => {
  if (!datastream) return "Loading..";
  const descriptionMatch = datastream.properties.find(
    (x) => x.key === "ermisf-description-el"
  );
  const sourceMatch = datastream.properties.find(
    (x) => x.key === "ermisf-source-el"
  );
  try {
    const json = JSON.parse(descriptionMatch.value).values;
    const sourceValue = JSON.parse(sourceMatch.value).values;
    return <>
      <div dangerouslySetInnerHTML={{ __html: json }} />
      {sourceMatch && <Box mt={2}><Typography variant={'body2'} color={'textPrimary'}>Πηγή: {sourceValue}</Typography></Box>}
      </>;
  } catch (e) {
    return <div>No info</div>;
  }
};

export default function CarouselItem({ dataStream, containerUuid }) {
  const classes = useStyles();
  const path = `/containers/${containerUuid}?datastream=${dataStream.uuid}`;
  const url = Endpoint.dataStreams + "/" + dataStream.uuid;
  const [, setBusy] = useState(false);
  const [fullDataStream, setFullDataStream] = useState(null);
  const [imgSrc,setImgSrc] = useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(()=>{
    if (dataStream.thumbnail.length > 0)
      downloadThumb(dataStream.uuid,setImgSrc)
  },[dataStream])


  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    if (!fullDataStream) {
      getDataStream();
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  //const id = open ? "simple-popover" : undefined;

  const getDataStream = useCallback(async () => {
    setBusy(true);
    try {
      const result = await fetchData(url);
      setFullDataStream(result);
      setBusy(false);
    } catch (e) {
      setBusy(false);
    }
  }, [url]);

  const description = getDescription(fullDataStream);

  return (
    <Link to={path}>
      <Card className={classes.root} variant={"outlined"}>
        <img height='100%' width='100%' src={imgSrc == null ? require("../assets/default.png") : imgSrc} className={classes.media} alt={""} />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component={"p"}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            style={{ display: "flex", alignItems: "center" }}
          >
            {dataStream.label}
            {/*{`${dataStream.label.substring(0,20)}...`}*/}
            <InfoOutlined style={{marginLeft: 4}}/>
          </Typography>
        </CardContent>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography className={classes.typography}>{description}</Typography>
        </Popover>
      </Card>
    </Link>
  );
}
