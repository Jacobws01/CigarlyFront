import Head from 'next/head'

import { fromImageToUrl, API_URL } from '../../utils/urls'
import Buybutton from '../../components/Buybutton'


const Product = ({product}) => {
  return (
    <div>

        <Head>
            {product.meta_title &&
                <title>{product.meta_title}</title>
            }
            {product.meta_description &&
                <meta name="description" 
                content={product.meta_description}
                />
            }
        
        </Head>

        <h3>{product.name}</h3>
        <img src={fromImageToUrl(product.image)} />
        <h3>{product.name}</h3>
        <p>${product.price} <Buybutton product={product} /></p>

      <p>
        {product.content}
      </p>
    </div>
  )
}

export async function getStaticProps({params: {slug}}) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
  const found = await product_res.json()

  return {
    props: {
        product: found[0]
    }
  }
}

export async function getStaticPaths() {
    // Get external data from the file system, API, DB, etc.
    const products_res = await fetch(`${API_URL}/products`)
    const products = await products_res.json()
    return {
        paths: products.map(el => ({
            params: {slug: String(el.slug)}
        })),
        fallback: false
    };
}
  
export default Product