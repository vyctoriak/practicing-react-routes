import React from 'react';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <section className={styles.product + ' animeLeft'}>
      <Head
        title={`Ranek | ${product.nome}`}
        description={`Ranek | This is a product: ${product.nome}`}
      />
      <div>
        {product.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.preco}>R$ {product.preco}</span>
        <p className={styles.descricao}>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
