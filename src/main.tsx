import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MaintainHash from './pages/MaintainHash.tsx';
import TestingPage from './pages/TestingPage.tsx';
import {CreateInfo} from './pages/CreateInfo.tsx';
import Home from './pages/Home.tsx';
import Authentication from './pages/Authentication';
import CreateHash from './pages/CreateHash.tsx';
import CreateHashCategory from './pages/CreateHashCategory.tsx';
import ContentMain from './pages/ContentMain.tsx';
import { ResourceDetails,ResourceDetailsProps } from './pages/ResourceDetails.tsx';

import { globalStore } from './store/store'
import { Provider } from 'react-redux'
import { TextSnippetTwoTone } from '@mui/icons-material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={globalStore}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="hashMain" element={<MaintainHash />} />
        <Route path="createHashCategory" element={<CreateHashCategory />} />
        <Route path="contentMain" element={<ContentMain />} />
        <Route path="createResource" element={<ResourceDetails detailsId={-1} mode="CREATE"   />} />
        <Route path="home" element={<Home />} />
        <Route path="testingPage" element={<TestingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>,
  </React.StrictMode>
  
)
