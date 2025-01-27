import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, Link, PageProps } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.FruitsQuery>) {
  return (
    <Layout title="신선함으로 가득한 과일, 당신의 일상을 달콤하게!">
      <StaticImage
        src="https://images.unsplash.com/photo-1631209121750-a9f656d28f46?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="fuits-banner-image"
      />
      {data.allContentfulFruitPack.nodes.map((fruit) => (
        <article>
          <GatsbyImage
            image={getImage(fruit.preview?.gatsbyImageData!)!}
            alt={fruit.name ?? "상품 프리뷰"}
          />
          <Link to={`/products/${fruit.id}`}>
            <h2>{fruit.name}</h2>
            <h4>₩{fruit.price}</h4>
          </Link>
        </article>
      ))}
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
          gatsbyImageData(placeholder: DOMINANT_COLOR, height: 450)
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="HOME" />;
