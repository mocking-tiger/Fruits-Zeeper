import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data);
  return (
    <Layout title="후르츠지퍼 블로그">
      <p>후르츠지퍼 새소식</p>
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article
            key={index}
            style={{ border: "1px solid black", marginBottom: "10px" }}
          >
            <h3>{file.frontmatter?.title}</h3>
            <h5>
              {file.frontmatter?.author} in : {file.frontmatter?.category}
            </h5>
            <h6>{file.frontmatter?.date}</h6>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "YYYY.MM.DD")
          title
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="BLOG" />;
