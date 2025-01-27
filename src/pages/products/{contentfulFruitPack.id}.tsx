import { graphql, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  console.log(data);
  const image = getImage(data.contentfulFruitPack?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulFruitPack?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulFruitPack?.name!} />
      <h2>₩{data.contentfulFruitPack?.price}</h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String!) {
    contentfulFruitPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 250)
      }
    }
  }
`;
