import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchArtworkDetailData, RootState, AppDispatch } from '../../store';

import { Spinner } from '../';

import * as Styles from './ArtworkList.styles';

export const ArtworkDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.artwork);
  const { id }: { id?: number } = useParams();

  useEffect(() => {
    if (id && !items[id]) dispatch(fetchArtworkDetailData(id));
  }, []);

  const artwork = id && items[id];

  return status !== 'loading' && artwork ? (
    <Styles.Wrapper>
      {artwork.thumbnail ? (
        <Styles.Image
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
          width={artwork.thumbnail.width}
          height={artwork.thumbnail.height}
          alt={artwork.thumbnail.alt_text}
        />
      ) : (
        <Styles.NoImage>No artwork provided</Styles.NoImage>
      )}

      <Styles.Details>
        <h1>{artwork.title}</h1>

        <Styles.Meta>
          <p>{artwork.artist_title}</p>
          <span>
            {artwork.place_of_origin}, {artwork.date_start}
          </span>
        </Styles.Meta>

        {artwork.description && (
          <Styles.Description
            dangerouslySetInnerHTML={{ __html: artwork.description }}
          />
        )}

        <Styles.DescriptionList>
          <dt>Medium</dt>
          <dd>{artwork.medium_display}</dd>

          <dt>Dimensions</dt>
          <dd>{artwork.dimensions}</dd>

          <dt>Credit Line</dt>
          <dd>{artwork.credit_line}</dd>

          <dt>Reference Number</dt>
          <dd>{artwork.main_reference_number}</dd>

          <dt>IIIF Manifest</dt>
          <dd>
            https://api.artic.edu/api/v1/artworks/{artwork.id}/manifest.json
          </dd>
        </Styles.DescriptionList>
      </Styles.Details>
    </Styles.Wrapper>
  ) : (
    <Spinner />
  );
};
