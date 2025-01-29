import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import './App.scss';
import "@fontsource/caveat";
import * as urls from "./utils/urls";
import Home from "./pages/home/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import HMYEHY from "./pages/hmyehy/hmyehy";
import LATE20S from "./pages/late20s/late20s";
// import LATE20S from "./pages/late20s/late20s_bkp";
// import MyApp from "./pages/late20s/late20s_new";
import pdfFile from "./pages/late20s/TheQuarterLifeCircus.pdf";
import NotFoundPage from "./pages/404notFound";

function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div className="App">
                <Router>
                    <Routes>
                        <Route path={urls.DEFAULT_ENDPOINT} element={<Home />} />
                        <Route path={urls.HOMEPAGE_ENDPOINT} element={<Home />} />
                        <Route path={urls.ABOUT_ENDPOINT} element={<About />} />
                        <Route path={urls.CONTACT_ENDPOINT} element={<Contact />} />
                        <Route path={urls.HMYEHY_ENDPOINT} element={<HMYEHY />} />
                        <Route path={urls.LATE20S_ENDPOINT} element={<LATE20S pdfFile={pdfFile}/>} />
                        <Route path={urls.NOT_FOUND_ENDPOINT} element={<NotFoundPage/>}/>
                        <Route path="*" element={<Navigate to={urls.NOT_FOUND_ENDPOINT} replace="true" />}/>
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
