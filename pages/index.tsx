
import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { Grid, Hero, Marquee } from "@components/ui"
import ProductCard from "@components/product/ProductCard"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Hero
       headline="GLOOOWY Brand"
       description="We strive to be a global leader in fashion-knit and fashion outerwear by empowering innovation and design to provide total customer satisfaction.
                    To innovate, to lead, to enhance, to provide best-value products and services to global customers. 
                    To make a difference through our branding to stay ahead of fashion trends,
                    market changes and the latest technology."
      />
      <Marquee>
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
      <Grid layout="B">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Marquee variant="secondary">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
