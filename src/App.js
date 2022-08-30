import "./App.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./utils/authCheck";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Container from "./Container/Container";
import Frontpage from "./pages/Frontpage/Frontpage";
import Template from "./pages/Template/Template";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Skills from "./pages/Skills/Skills";
import Language from "./pages/Language/Language";
import Certification from "./pages/Certification/Certification";
import Summary from "./pages/Summary/Summary";
import Preview from "./pages/Preview/Preview";
import Resume from "./pages/Resume/Resume";
import { getPersonal,getExperience, getEducation, getSkills, getLanguages, getCertification, getSummary} from "./store/reducers/data";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonal());
    dispatch(getExperience());
    dispatch(getEducation());
    dispatch(getSkills());
    dispatch(getLanguages());
    dispatch(getCertification());
    dispatch(getSummary());

    // const user_id = localStorage.getItem("user_id");
    // const databaseRef = ref(db);
    // get(child(databaseRef, `container/${user_id}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />
        <Route path="/front" exact component={Frontpage} />
        <Route path="/template" exact component={Template} />
        <Container>
          <Route path="/create" exact component={Create} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/education" exact component={Education} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/languages" exact component={Language} />
          <Route path="/certification" exact component={Certification} />
          <Route path="/summary" exact component={Summary} />
          {/* <Route path="/preview" exact component={Preview}/> */}
          <Route path="/preview" exact component={Resume} />
        </Container>
      </Switch>
    </div>
  );
}

export default App;
