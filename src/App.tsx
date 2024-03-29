import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./areas/shared/pages/MainLayout";
import NotFound from "./areas/shared/pages/NotFound";
import Home from "./areas/home/pages/Home";
import About from "./areas/about/pages/About";
import ListPosts from "./areas/posts/pages/ListPosts";
import Post from "./areas/posts/pages/Post";
import ListProjects from "./areas/projects/pages/ListProjects";
import { RootStoreContext } from "./areas/shared/stores/StoreContext";
import { rootStore } from "./areas/shared/stores/RootStore";

function App() {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<ListPosts />} />
            <Route path="posts/:urlId" element={<Post />} />
            <Route path="projects" element={<ListProjects />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RootStoreContext.Provider>
  );
}

export default App;
