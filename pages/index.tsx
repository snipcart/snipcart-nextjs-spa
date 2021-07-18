import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import {GetServerSideProps} from "next";
import {IProduct} from "../components/Product";

interface IProductListProps {
    products: IProduct[]
}
export default function Home(props: IProductListProps) {
  return (
      <>
      <Head><title>My awesome store</title></Head>
      <main className="main">
        <ProductList products={props.products}/>
          <Contact />
      </main></>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const req = await fetch('http://localhost:3000/api/products');
    const data = await req.json();

    return {
        props: {
            products: data.products
        }
    }
}
