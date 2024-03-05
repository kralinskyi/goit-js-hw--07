import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { useEffect, useState } from "react";
import fetchPhotos from "./components/API/unsplashApi";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import toast from "react-hot-toast";

function App() {
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#root");

  useEffect(() => {
    if (searchQuery === "") return;
    async function getPhotos() {
      try {
        setIsLoading(true);
        setError(false);
        const newData = await fetchPhotos(searchQuery, page);

        if (newData.total_pages <= page) {
          setShowLoadMore(false);
          toast.error(`No more results for ${searchQuery}`);
        } else {
          setShowLoadMore(true);
          toast.success(`We find ${newData.total} photos`);
        }

        setGallery((prevImages) => [...prevImages, ...newData.results]);
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
    setShowLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function handleOpen(image) {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function handleClose() {
    setModalIsOpen(false);
  }

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {gallery.length > 0 && (
        <ImageGallery images={gallery} onOpen={handleOpen} />
      )}

      {error && <ErrorMessage />}
      <div className="center">{isLoading && <Loader />}</div>
      {showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}

      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        overlayClassName="overlay">
        <ImageModal image={selectedImage} />
      </Modal>
    </div>
  );
}

export default App;
