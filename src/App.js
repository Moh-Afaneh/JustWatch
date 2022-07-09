import "./App.scss";
// Import Swiper styles
import "swiper/css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import RoutesConfig from "./Routes/RoutesConfig";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/header";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <RoutesConfig />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
