import Navbar from "./nav_bar";
import Achievements from "./Achievments";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div
                style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "white",
                }}
            ></div>
            <Achievements />
            <div
                style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "white",
                }}
            ></div>
            <Footer />
        </div>
    );
}

export default App;
