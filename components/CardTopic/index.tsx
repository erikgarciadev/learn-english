import Link from "next/link";
import React from "react";
import { Topic } from "../../interfaces/topic";
import styles from "./CardTopic.module.scss";

const CardTopic = ({ topic }: { topic: Topic }) => {
  return (
    <Link href={`/topics/${topic.slug}`}>
      <div className={styles.wrapper}>
        <p>{topic.title}</p>
      </div>
    </Link>
  );
};

export default CardTopic;
