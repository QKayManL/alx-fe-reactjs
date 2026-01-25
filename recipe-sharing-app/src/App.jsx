import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<RecipeList />} />
    <Route path="/recipes/:id" element={<RecipeDetails />} />
  </Routes>
</BrowserRouter>

}

export default App;
