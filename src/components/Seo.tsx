import { graphql, useStaticQuery } from "gatsby";

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  // 스태틱 쿼리는 빌드단계에서 html을 만들때 생성됨
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
