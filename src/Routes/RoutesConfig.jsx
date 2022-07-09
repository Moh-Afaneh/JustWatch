import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import Catalog from "../Pages/Catalog";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function RoutesConfig() {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default RoutesConfig;
