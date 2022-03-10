import Navbar from "./nav_bar";
import Achievements from "./Achievments";
import Footer from "./Footer";
import Hmc from "./hmcSlider";
import HmcHeader from "./hmcHeader";

function App() {
    return (
        <div className="App">
            <Navbar />
            <HmcHeader />
            <Hmc />

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
