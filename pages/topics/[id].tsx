import type { NextPage } from "next";
import Layout from "../../components/Layout";

const Topic: NextPage<any> = ({ topic }: { topic: TopicInformation }) => {
  const sortCards = sortByField<ICardInformation>(topic.data.cards, "name", "asc");
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>{topic.name}</h1>
      <WrapperGrid>
        {sortCards.map((cardInformation, i: number) => (
          <CardInformation key={i} cardInformation={cardInformation} />
        ))}
      </WrapperGrid>
    </Layout>
  );
};

import fsPromises from "fs/promises";
import path from "path";
import { ICardInformation, Topic, TopicInformation } from "../../interfaces/topic";
import WrapperGrid from "../../components/WrapperGrid";
import CardInformation from "../../components/CardInformation";
import { sortByField } from "../../utils/sortByField";
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const filePath = path.join(process.cwd(), "./data/topics.json");
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  // Get the paths we want to pre-render based on posts
  const paths = objectData.topics.map((topic: Topic) => ({
    params: { id: topic.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const filePath = path.join(process.cwd(), `./data/${params.id}.json`);
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  // Get the paths we want to pre-render based on posts

  return {
    props: {
      topic: objectData,
    },
  };
}

export default Topic;
