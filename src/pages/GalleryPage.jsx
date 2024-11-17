import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../utils/init-firebase";
import { Layout } from "../components/Layout";

export default function GalleryPage() {
  const { userId } = useParams(); // Get the userId from the URL
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const userFolderRef = ref(storage, `${userId}/`); // Assuming each user's images are stored in a folder named by their uid
        const fileList = await listAll(userFolderRef);
        const urls = await Promise.all(
          fileList.items.map((itemRef) => getDownloadURL(itemRef))
        );
        setImages(urls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages().then(r => {});
  }, [userId]);

  if (loading) {
    return <Layout>Loading images...</Layout>;
  }

  return (
    <Layout>
      <h1>User's Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {images.length > 0 ? (
          images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Gallery item ${index + 1}`}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          ))
        ) : (
          <p>No images found for this user.</p>
        )}
      </div>
    </Layout>
  );
}
