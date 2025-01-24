import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="About us">
      <p>사과 다판다 오렌지 다판다</p>
    </Layout>
  );
}

export const Head = () => <Seo title="ABOUT US" />;
