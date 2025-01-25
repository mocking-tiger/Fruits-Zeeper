import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog({ data }: PageProps<Queries.BlogTitleQuery>) {
  console.log(data);
  return (
    <Layout title="후르츠지퍼 블로그">
      <p>후르츠지퍼 새소식</p>
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitle {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="BLOG" />;
