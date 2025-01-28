import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.FruitsQuery>) {
  return (
    <Layout title="너무 맛있어서 농부도 팔기 아까워 한 과일들">
      {/* <StaticImage
        src="https://images.unsplash.com/photo-1631209121750-a9f656d28f46?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="fuits-banner-image"
      /> */}
      <div className="flex">
        {data.allContentfulFruitPack.nodes.map((fruit) => (
          <article>
            <GatsbyImage
              image={getImage(fruit.preview?.gatsbyImageData!)!}
              alt={fruit.name ?? "상품 프리뷰 이미지"}
            />
            <Link to={`/products/${fruit.id}`}>
              <h2 style={{ fontSize: "20px" }}>{fruit.name}</h2>
              <h4 style={{ fontSize: "16px" }}>₩{fruit.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Fruits {
    allContentfulFruitPack {
      nodes {
        name
        price
        preview {
          gatsbyImageData(placeholder: DOMINANT_COLOR, height: 250)
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="HOME" />;
