import { useEffect, useState } from "react";
import './Comp.css'

const Comp = () => {
  const [htmlContents, setHtmlContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/section");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const contents = data.map((item) => item.content);
      setHtmlContents(contents);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {htmlContents.map((content, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: content }} />
      ))}
    </div>
  );
};

export default Comp;
