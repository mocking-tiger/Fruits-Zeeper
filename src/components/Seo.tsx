interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  return <title>{title} | FRUITS ZEEPER!</title>;
}
