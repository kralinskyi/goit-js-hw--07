import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ReactModal from "react-modal";
// import Modal from "react-modal";
import { useEffect, useState } from "react";
import fetchPhotos from "./components/API/unsplashApi";

function App() {
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [showLoadMore, setShowLoadMore] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery === "") return;
    async function getPhotos() {
      try {
        const newData = await fetchPhotos(searchQuery, page);
        setGallery((prevImages) => [...prevImages, ...newData]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [searchQuery, page]);

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setGallery([]);
    setPage(1);

    // if (newData.totalHits < request.per_page) {
    //   setShowLoadMore(false);
    // } else {
    //   setShowLoadMore(true);
    // }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {gallery.length > 0 && <ImageGallery images={gallery} />}

      {error && <ErrorMessage />}
      <div className="center">{isLoading && <Loader />}</div>
      {gallery.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      <ReactModal isOpen={false} />
    </div>
  );
}

export default App;
