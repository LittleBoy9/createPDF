import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePDF from "./pages/CreatePDF";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  //let labName = btoa("lab_A");
 // btoa(labName)

 

  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createpdf">Create PDF</Link>
          </li>
        </ul>

        <hr /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/createpdf/:labName/:id`} element={<CreatePDF />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
