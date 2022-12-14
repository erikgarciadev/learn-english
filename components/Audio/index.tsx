import React, {  useRef } from "react";
import { ISource } from "../../interfaces/topic";
import AudioIcon from "../Icon/audioIcon";
import styles from './Audio.module.scss'

export const Audio = ({
  sources,
}: {
  sources: ISource[];
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = async () => {
    const audioCurrent = audioRef.current
    if(audioCurrent){
       await audioCurrent.play()
    }
  }

  return (
    <>
      <AudioIcon color='#1B85E5' cursor={'pointer'} fontSize={'35px'} onClick={handlePlayAudio} />
      <audio
        // className={styles.audio}
        // controls
        ref={audioRef}
        preload="none"
        controlsList="nodownload"
      >
        {sources.map((source, i) => (
          <source
            key={i}
            type={`audio/${source.type}`}
            src={`${source.audio_url}`}
          />
        ))}
        {/* <source type="audio/mp3" src={`${cardInformation.audio_url}.mp3`} />
        <source type="audio/ogg" src={`${cardInformation.audio_url}.ogg`} />\ */}
      </audio>
    </>
  );
};

export default Audio;