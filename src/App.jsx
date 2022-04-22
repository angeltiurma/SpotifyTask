import React, { useEffect } from "react";
import Login from "./components/login";
import Spotify from "./components/spotify";
import { reducerCases } from "./Utils/Constants";
import { useStateProvider } from "./Utils/StateProvider";
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "spotify";
  }, [dispatch, token]);
  return <div>{token ? <spotify /> : <login />}</div>;
}
