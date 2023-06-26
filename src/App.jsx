import "./App.css";
import Pagination from "./Pagination";
import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Home />
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
