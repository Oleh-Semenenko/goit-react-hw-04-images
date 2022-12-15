import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import LoadMoreBtn from 'components/LoadMoreBtn';
import GallerySkeleton from 'components/Loader';
import { fetchImages } from 'services/fetch';
import { Container } from './App.styled';

function App() {
  const [searchQuery, setSearcQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      toast('Please, enter your request')
      return;
    }
    async function getImages() {
      try {
          setIsLoading(true);
          const searchImages = await fetchImages(searchQuery, page);
          if (searchImages.length === 0) {
            toast.error(
              `Sorry, there are no images for your search query: ${searchQuery}! Please, change your request. `
            );
          }
        setImages(prevImages => {
            return [...prevImages, ...searchImages];
          });

      } catch {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, searchQuery])

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleSearchSubmit = searchQuery => {
    setImages([]);
    setPage(1);
    setSearcQuery(searchQuery)
  };

    return (
      <Container>
        <Searchbar onSubmit={handleSearchSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && <LoadMoreBtn onClick={loadMore} />}
        {isLoading && <GallerySkeleton />}
        <Toaster position="top-right" />
      </Container>
    );
}

export default App;
