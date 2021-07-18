import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import {GetStaticProps} from "next";
import {IProduct} from "../components/Product";
import {products} from "./api/products";

interface IProductListProps {
    products: IProduct[]
}
export default function Home({ products }: IProductListProps) {
  return (
      <>
      <Head><title>My awesome store</title></Head>
      <main className="main">
        <ProductList products={products}/>
          <Contact />
      </main></>
  )
}
export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}
