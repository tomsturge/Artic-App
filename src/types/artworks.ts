export interface Artwork {
  id: string;
  title: string;
  image_id: string;
  artist_title?: string;
  thumbnail?: {
    alt_text: string;
    width: number;
    height: number;
  };
}

export interface ArtworkDetail extends Artwork {
  place_of_origin: string;
  date_start: number;
  description: string;
  medium_display: string;
  dimensions: string;
  credit_line: string;
  main_reference_number: string;
}

export interface ArtworkState {
  list: Artwork[][];
  items: { [key: number]: ArtworkDetail };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
