import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";
import { Switch, Route } from "react-router-dom";
import Detail from "../Pages/Detail/Detail";
function RoutesConfig() {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default RoutesConfig;
