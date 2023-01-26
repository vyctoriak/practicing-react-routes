import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Products.module.css'

const Product = () => {

  const [products, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(r => r.json())
      .then(json => setProduct(json))
  }, [])

  if(products === null) return null;

  return (
    <section className={styles.produtos + " animeLeft"}>
      <Head title={`Ranek`} description="Ranek's site description" />
      {products.map((product) => (
        <Link to={`produto/${product.id}`} key={product.id}>
          <img src={product.fotos[0].src} alt={product.fotos[0].title} />
          <h1 className={styles.name}>{product.nome}</h1>
        </Link>
      ))}
    </section>
  )
}

export default Product