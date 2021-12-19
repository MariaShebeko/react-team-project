import { useState, useEffect, useRef, useCallback } from 'react';
const BASE_URL = `https://api.pexels.com/v1/search`;
// const API_KEY = `563492ad6f917000010000012f5c0368e9da477c8129b3babcacc768`;
const API_KEY = `563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2`;
function useSearchImages(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    const fetching = async () => {
      setLoading(true);
      setError(false);

      if (query.trim() === '') return;

      try {
        const res = await fetch(BASE_URL + `?query=${query}&page=${page}`, {
          method: 'GET',
          headers: {
            Authorization: API_KEY,
          },
        });

        if (res.status !== 200) {
          return;
        }
        const data = await res.json();

        setImages(prev => {
          return [...prev, ...data.photos];
        });

        setLoading(false);
        setHasMore(data.photos.length > 0);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetching();
  }, [page, query]);

  return { loading, error, images, hasMore };
}

export default function Gallery() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { loading, error, images, hasMore } = useSearchImages(query, page);
  const observer = useRef();
  const lastElement = useCallback(
    node => {
      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) setPage(prev => prev + 1);
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [hasMore, loading],
  );
  return (
    <section>
      <h2>Gallery with infinite scroll</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!e.target.elements.query.value.trim()) {
            alert('Enter something');
            return;
          }
          setQuery(e.target.elements.query.value);
          setPage(1);
        }}
      >
        <input
          autoFocus
          type="text"
          placeholder="Enter search value"
          name="query"
          required
        />
        <button type="submit">Load More</button>
      </form>
      <ul>
        {images.map((image, idx, arr) => {
          const {
            id,
            src: { tiny },
            photographer,
          } = image;
          if (arr.length === idx + 1) {
            return (
              <li
                style={{ marginBottom: '20px' }}
                width="200"
                height="100"
                ref={lastElement}
                key={id}
                className="last"
              >
                <img src={tiny} alt={photographer} />
              </li>
            );
          } else {
            console.log('2');
            return (
              <li
                style={{ marginBottom: '30px' }}
                width="200"
                height="100"
                key={id}
                className="element"
              >
                <img src={tiny} alt={photographer} />
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
}
