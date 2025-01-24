import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog() {
  return (
    <Layout title="후르츠지퍼 블로그">
      <p>후르츠지퍼 새소식</p>
    </Layout>
  );
}

export const Head = () => <Seo title="BLOG" />;
