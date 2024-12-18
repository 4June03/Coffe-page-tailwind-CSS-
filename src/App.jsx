import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="root">
      <div className="content-wrapper max-w-screen-2xl text-base mx-auto px-8 bg-slate-400 h-[100vh]">
        <header>
          <Navbar />
        </header>
        <main>
          <div className="slider">slider</div>
          <div className="story">story</div>
          <div className="featured-mugs">featured-mugs</div>
          <div className="more products">more products</div>
          <div className="coffe magazines">coffe magazines</div>
          <div className="lifestyle stories">lifestyle stories</div>
          <div className="subscribes us">subscribes us</div>
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default App;
