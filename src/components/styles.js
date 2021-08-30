import { makeStyles } from "@material-ui/core/styles";

const useCommonStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
    flex: 1,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  searchContainer: {
    position: "absolute",
    marginTop: 36,
    display: "flex",
    width: "100%",
  },
  delayControls:{
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(12),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(20),
    }
  }
}));

export { useCommonStyles };
