import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./Components/Header";
import PlaseToVisit from "./Components/PlaseToVisit";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: `100vh`,
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
  }
}));

function App() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaseToVisit />
    </div>
  );
}

export default App;
