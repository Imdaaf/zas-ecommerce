import React from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer({ productos }) {
  const [prods, setProds] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getFetch.then((res) => setProds(res)).catch((err) => console.log(err));
  }, []);
  console.log(id);
  return (
    <div>
      <ItemDetail prods={prods} />
    </div>
  );
}
