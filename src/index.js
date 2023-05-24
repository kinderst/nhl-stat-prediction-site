import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";
import PredictionsPage from "./predictions-page/PredictionsPage";
import AboutPage from "./about-page/AboutPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<PredictionsPage />} />

                <Route path="about" element={<AboutPage />} />
            </Route>

        </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
