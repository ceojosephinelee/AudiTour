
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

function App(props) {
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
