const Home = ({ topics }: { topics: Topic[] }) => {
  const sortTopics = sortByField(topics, "slug", 'asc');

  return (
    <>
      <Layout>
        <WrapperGrid>
          {sortTopics.map((topic) => (
            <CardTopic key={topic.slug} topic={topic} />
          ))}
        </WrapperGrid>
      </Layout>
    </>
  );
};

import fsPromises from "fs/promises";
import path from "path";
import Layout from "../components/Layout";
import { Topic } from "../interfaces/topic";
import WrapperGrid from "../components/WrapperGrid";
import CardTopic from "../components/CardTopic";
import { sortByField } from "../utils/sortByField";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./data/topics.json");
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      topics: objectData.topics,
    },
  };
}

export default Home;
