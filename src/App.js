import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <di className="others">otherpages</di>
      </div>
    </div>
  );
}

export default App;
