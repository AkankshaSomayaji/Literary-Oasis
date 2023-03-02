import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import './App.scss';
import * as urls from "./utils/urls";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div className="App">
                <Router>
                    <Routes>
                        <Route path={urls.HOMEPAGE_ENDPOINT} element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path={urls.ABOUT_ENDPOINT} element={<About />} />
                    </Routes>
                    <Routes>
                        <Route path={urls.CONTACT_ENDPOINT} element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
