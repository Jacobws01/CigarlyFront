import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { ImStarHalf } from 'react-icons/im'
import Ourproducts from '../components/Ourproducts'
import Experienced from '../components/Experienced'
import styles from '../styles/Shop.module.css'
import Buybutton from '../components/Buybutton'
import SuperSectionB from '../components/Super'
import Counterup from '../components/Counterup'

import { fromImageToUrl, API_URL, } from '../utils/urls'

export default function Home({ products1, products2, products3, products4, products5, products6 }) {
  return (
    <div>
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="/icon-1.png" />
      </Head>
      <Ourproducts />
      <Experienced />

       <section className={styles.shopsection}>
            <div className={styles.container}>
                <div className={styles.sectitle}>
                   <span className={styles.titletag}>shop</span> 
                   <h2>exlore new strains</h2>
                </div>
                <div className={styles.shopholder}>
                    <ul className={styles.selector}>
                        <li className={styles.selectoritem}>
                            <a className={styles.selectorlink}>Torpedo Cigars</a>
                        </li>
                        <li className={styles.selectoritem}>
                            <a className={styles.selectorlink}>Belicoso Cigars</a>
                        </li>
                        <li className={styles.selectoritem}>
                            <a className={styles.selectorlink}>Pirámide Cigars</a>
                        </li>
                    </ul>
                    <div className={styles.itemholder}>
                        <div className={styles.shopitems1}>
                            <div className={styles.indgrid}>
                                <div className={styles.productimage}>
                                    <a className={styles.shopdetails} href="/">
                                        <Image className={styles.pic1} src="/01.png" width={300} height={300}/>
                                    </a>
                                    {products1.map(products => (   
                                    <div key={products.name} className={styles.shopbutton}>
                                      <Buybutton products={products} /> 
                                    </div>
                                    ))}
                                    <div className={styles.ratestars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <ImStarHalf />
                                    </div>
                                </div> 
                                {products1.map(products => (          
                                <div key={products.name} className={styles.productcontent}>
                                    <h4 className={styles.producttitle}>
                                        <a href="/">{products.name}</a>
                                    </h4>
                                    <div className={styles.productprice}>${products.price}</div>
                                    <p>{products.content}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.shopitems2}>
                            <div className={styles.indgrid}>
                                <div className={styles.productimage}>
                                    <a className={styles.shopdetails} href="/">
                                        <Image className={styles.pic1} src="/02.png" width={300} height={300}/>
                                    </a>
                                    {products2.map(products => (   
                                    <div key={products.name} className={styles.shopbutton}>
                                      <Buybutton products={products} /> 
                                    </div>
                                    ))}
                                    <div className={styles.ratestars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div> 
                              {products2.map(products => (            
                                <div key={products.name} className={styles.productcontent}>
                                    <h4 className={styles.producttitle}>
                                        <a href="/">{products.name}</a>
                                    </h4>
                                    <div className={styles.productprice}>${products.price}</div>
                                    <p>{products.content}</p>
                                </div>
                                ))}
                            </div>
                            </div>
                            <div className={styles.shopitems3}>
                            <div className={styles.indgrid}>
                                <div className={styles.productimage}>
                                    <a className={styles.shopdetails} href="/">
                                        <Image className={styles.pic1} src="/03.png" width={300} height={300}/>
                                    </a>
                                     {products3.map(products => (   
                                    <div key={products.name} className={styles.shopbutton}>
                                      <Buybutton products={products} /> 
                                    </div>
                                    ))}
                                    <div className={styles.ratestars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div> 
                              {products3.map(products => (            
                                <div key={products.name} className={styles.productcontent}>
                                    <h4 className={styles.producttitle}>
                                        <a href="/">{products.name}</a>
                                    </h4>
                                    <div className={styles.productprice}>${products.price}</div>
                                    <p>{products.content}</p>
                                </div>
                                ))}
                            </div>
                            </div>
                            <div className={styles.shopitems4}>
                            <div className={styles.indgrid}>
                                <div className={styles.productimage}>
                                    <a className={styles.shopdetails} href="/">
                                        <Image className={styles.pic1} src="/04.png" width={300} height={300}/>
                                    </a>
                                     {products4.map(products => (   
                                    <div key={products.name} className={styles.shopbutton}>
                                      <Buybutton products={products} /> 
                                    </div>
                                    ))}
                                    <div className={styles.ratestars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div> 
                              {products4.map(products => (            
                                <div  key={products.name} className={styles.productcontent}>
                                    <h4 className={styles.producttitle}>
                                        <a href="/">{products.name}</a>
                                    </h4>
                                    <div className={styles.productprice}>${products.price}</div>
                                    <p>{products.content}</p>
                                </div>
                                ))}
                            </div>
                            </div>
                            <div className={styles.shopitems5}>
                            <div className={styles.indgrid}>
                                <div className={styles.productimage}>
                                    <a className={styles.shopdetails} href="/">
                                        <Image className={styles.pic1} src="/05.png" width={300} height={300}/>
                                    </a>
                                     {products5.map(products => (   
                                    <div key={products.name} className={styles.shopbutton}>
                                      <Buybutton products={products} /> 
                                    </div>
                                    ))}
                                    <div className={styles.ratestars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <ImStarHalf />
                                    </div>
                                </div> 
                              {products5.map(products => (            
                                <div key={products.name} className={styles.productcontent}>
                                    <h4 className={styles.producttitle}>
                                        <a href="/">{products.name}</a>
                                    </h4>
                                    <div className={styles.productprice}>${products.price}</div>
                                    <p>{products.content}</p>
                                </div>
                                ))}
                            </div>
                            </div>
                            <div className={styles.shopitems6}>
                            <div className={styles.indgrid}>
                                <div className={styles.productimage}>
                                    <a className={styles.shopdetails} href="/">
                                        <Image className={styles.pic1} src="/06.png" width={300} height={300}/>
                                    </a>
                                     {products6.map(products => (   
                                    <div key={products.name} className={styles.shopbutton}>
                                      <Buybutton products={products} /> 
                                    </div>
                                    ))}
                                    <div className={styles.ratestars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div> 
                              {products6.map(products => (            
                                <div key={products.name} className={styles.productcontent}>
                                    <h4 className={styles.producttitle}>
                                        <a href="/">{products.name}</a>
                                    </h4>
                                    <div className={styles.productprice}>${products.price}</div>
                                    <p>{products.content}</p>
                                </div>
                                ))}
                            </div>
                            </div>
                      </div>
                     </div>
                     </div>
                    </section>
                    <SuperSectionB />
                    <Counterup />

    </div>
  )
}

export async function getStaticProps() {
  const products_res = await fetch(`${API_URL}/products/`)
  const productsfull = await products_res.json()
  let products1 = productsfull.filter(person1 => person1.store > 999);
  let products2 = productsfull.filter(person2 => person2.store === 500);
  let products3 = productsfull.filter(person3 => person3.store === 350);
  let products4 = productsfull.filter(person4 => person4.store === 800);
  let products5 = productsfull.filter(person5 => person5.store === 250);
  let products6 = productsfull.filter(person6 => person6.store === 600);

  return {
    props: {
        products1,
        products2,
        products3,
        products4,
        products5,
        products6
    }
  }
}