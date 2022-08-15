import type { NextPage } from "next";
import Layout from "../../components/Layout";
import Table, { Td } from "../../components/Table";

const Topic: NextPage<any> = ({ topic }: { topic: TopicInformation }) => {
  const sortCards = sortByField<ICardInformation>(
    topic.data.cards,
    "name",
    "asc"
  );
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>{topic.name}</h1>
      {sortCards.length !== 0 && (
        <WrapperGrid>
          {sortCards.map((cardInformation, i: number) => (
            <CardInformation key={i} cardInformation={cardInformation} />
          ))}
        </WrapperGrid>
      )}
      {topic.data.table && topic.data?.table?.length !== 0 && (
        <div className="wrapper-center">
          <Table
            theads={["Infinite", "Simple Past", "Past Participle", "Spanish"]}
            tbody={
              <>
                {topic.data.table.map((data, i) => (
                  <tr key={i}>
                    {data.td.map((_data, index) => (
                      <Td isBold={index === 0} key={index}>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "0.5em",
                            }}
                          >
                            <p>{_data.name}</p>
                            {_data.audio_url && (
                              <Audio
                                sources={[
                                  {
                                    type: "mp3",
                                    audio_url: _data.audio_url,
                                  },
                                ]}
                              />
                            )}
                          </div>
                          {_data.name_1 && (
                            <>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>{_data.name_1}</p>
                                <Audio
                                  sources={[
                                    {
                                      type: "mp3",
                                      audio_url: _data.audio_url_1!,
                                    },
                                  ]}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </Td>
                    ))}
                  </tr>
                ))}
              </>
            }
          />
        </div>
      )}
    </Layout>
  );
};

import fsPromises from "fs/promises";
import path from "path";
import {
  ICardInformation,
  Topic,
  TopicInformation,
} from "../../interfaces/topic";
import WrapperGrid from "../../components/WrapperGrid";
import CardInformation from "../../components/CardInformation";
import { sortByField } from "../../utils/sortByField";
import Audio from "../../components/Audio";
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
