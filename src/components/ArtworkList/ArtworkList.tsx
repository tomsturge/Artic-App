import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchArtworkData, RootState, AppDispatch } from '../../store';
import { Artwork } from '../../types/artworks';

import { Spinner } from '../';

import * as Styles from './ArtworkList.styles';

export const ArtworkList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const { list, status } = useSelector((state: RootState) => state.artwork);

  useEffect(() => {
    dispatch(fetchArtworkData(page));
  }, [dispatch]);

  const resetWindowPos = () => window.scroll(0, 0);

  const handleNextClick = async () => {
    const newPage = page + 1;
    resetWindowPos();

    if (!list[page]) {
      await dispatch(fetchArtworkData(newPage));
      setPage(newPage);
    }

    setPage(newPage);
  };

  const handlePrevClick = async () => {
    resetWindowPos();
    setPage(page - 1);
  };

  return status !== 'loading' ? (
    <>
      <Styles.List>
        {list.length > 0 &&
          list[page - 1].map(
            ({ id, image_id, thumbnail, title, artist_title }: Artwork) => (
              <Styles.ListItem key={id}>
                <Link to={`/${id}`}>
                  {thumbnail ? (
                    <img
                      src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
                      width={thumbnail.width}
                      height={thumbnail.height}
                      alt={thumbnail.alt_text}
                    />
                  ) : (
                    <Styles.NoImage>No artowrk provided</Styles.NoImage>
                  )}

                  <Styles.Title>{title}</Styles.Title>
                  <Styles.Artist>{artist_title || 'Unknown'}</Styles.Artist>
                </Link>
              </Styles.ListItem>
            ),
          )}
      </Styles.List>

      <Styles.Pagination>
        {page > 1 && (
          <Styles.Button onClick={handlePrevClick}>Prev page</Styles.Button>
        )}
        <Styles.Button onClick={handleNextClick}>Next page</Styles.Button>
      </Styles.Pagination>
    </>
  ) : (
    <Spinner />
  );
};
