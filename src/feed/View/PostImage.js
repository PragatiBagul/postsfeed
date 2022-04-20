import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { CardMedia } from "@mui/material";

const PostImage = ({ postId }) => {
    const [source, setSource] = useState(null);
    useEffect(() => {
        axios
      .get(
        `http://localhost:8080/post/${postId}/content/image`,
        { responseType: 'arraybuffer' },
      )
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        setSource("data:;base64," + base64 );
      });
    },[]);
    
    return ( <CardMedia src={source} /> );
}
 
export default PostImage;