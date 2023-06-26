import "../assets/css/app.css";
import { SideBar } from "./SideBar/index";
import { ContentWrapper } from "./ContentWrapper/index";

function App() {
      return (
            <div id="wrapper">
                  <SideBar />
                  <ContentWrapper />
            </div>
      );
}

export default App;
