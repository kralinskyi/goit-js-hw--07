import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";

function App() {
  const handleSubmit = (query) => {
    console.log(query);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
    </div>
  );
}

export default App;
