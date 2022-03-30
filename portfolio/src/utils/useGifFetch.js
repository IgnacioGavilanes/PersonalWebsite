import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from '@giphy/react-components'
import { useState } from "react";
import { useAsync } from "react-async-hook";

export function useGifFetch(id, className, width, borderRadius) {
    //Access env variables (Giphy API key)
    const API_KEY = process.env.REACT_APP_GIPHY_KEY

    const giphyFetch = new GiphyFetch(API_KEY);

    const [gif, setGif] = useState(null);
    
    useAsync(async () => {
      const { data } = await giphyFetch.gif(id);
      setGif(data);
    }, []);

  return gif && <Gif gif={gif} width={width} noLink={true} backgroundColor={'#D6D6D6'} borderRadius={borderRadius} className={className}/>;
}