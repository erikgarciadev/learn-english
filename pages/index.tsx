const Home = ({ topics }: { topics: Topic[] }) => {
  return (
    <>
      <Layout>
        <WrapperGrid>
          {topics.map((topic) => (
            <Link href={`/topics/${topic.slug}`} key={topic.slug}>
              <div
                style={{
                  borderRadius: "5px",
                  padding: "1em",
                  boxShadow: "-3px 5px 10px 1px rgba(0,0,0,0.65)",
                  cursor: "pointer",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "24px",
                  }}
                >
                  {topic.title}
                </p>
              </div>
            </Link>
          ))}
        </WrapperGrid>
      </Layout>
    </>
  );
};

import fsPromises from "fs/promises";
import path from "path";
import Link from "next/link";
import Layout from "../components/Layout";
import { Topic } from "../interfaces/topic";
import WrapperGrid from "../components/WrapperGrid";

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
