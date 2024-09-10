
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//pages
import Header from './component/Header';
import RegionListPage from './page/RegionListPage';
import SightListPage from './page/SightListPage';
import StoryListPage from './page/StoryListPage';
import StoryPage from './page/StoryPage';

function App() {
  return (
      <BrowserRouter>
          <Header></Header>
          <Routes>
              <Route index element={<RegionListPage />} />
              <Route path="sight-list" element={<SightListPage />} />
              <Route path="story-list" element={<StoryListPage />} />
              <Route path="story" element={<StoryPage />} />

          </Routes>
          
      </BrowserRouter>
  );
}

export default App;
