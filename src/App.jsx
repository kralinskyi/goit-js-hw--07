import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ReactModal from "react-modal";
// import Modal from "react-modal";

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
      <LoadMoreBtn />
      <ReactModal isOpen={false} />
    </div>
  );
}

export default App;
