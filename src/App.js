import "./App.css";
import Cats from "./components/Cats";
import Menu from "./components/Menu";
import Random from "./components/Random";
import { Contact } from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setCategories, setCats } from "./redux/reducers";
import { getCategories, getCats } from "./api/getCats";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const categoryId = useSelector((state) => state.cats.categoryId);

  const dispatch = useDispatch();
  useEffect(async () => {
    const categories = await getCategories();
    const cats = await getCats(12, categoryId);
    dispatch(setCategories(categories));
    dispatch(setCats(cats));
  }, [categoryId]);

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Cats />} />
          <Route path="/home" element={<Cats />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
