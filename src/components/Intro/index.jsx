import { Button, Drawer, Typography, Tooltip } from "antd";
import { useState } from "react";
import { GENRES } from "utility/genres";
const { Title } = Typography;

const Intro = ({ genre }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Tooltip title="learn more" placement="right">
        <Button type="text" onClick={showDrawer} ghost>
          ?
        </Button>
      </Tooltip>
      <Drawer
        title="Some background history..."
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
      >
        <Intros genre={genre}></Intros>
      </Drawer>
    </div>
  );
};
export default Intro;

const Intros = ({ genre }) => {
  switch (genre) {
    case GENRES.HIPHOP:
      return (
        <>
          <Title level={3}>
            Originated in New York City in the 1970s, hip hop started as a
            cultural exchange between different races. It is a genre of music
            often characterized by a strong, rhythmic beat and a rapping vocal
            track. The 4 main pillars of hiphop are: DJing, rapping,
            breakdancing and graffiti.
          </Title>
          <Title level={4}>Types of Hip Hop Music Explored:</Title>
          <Title level={5}>
            1. Old School Hip Hop: Tend to have more rap, with stronger bass and
            clearer beats. Typically has 2-3 beats overlapping each other,
            making it easier to comprehend the beats.
          </Title>
          <Title level={5}>
            2. New School Hip Hop: Transitions into lesser rap, more singing,
            and layering of beats. Typically has 6-8 beats per track along with
            ad-libs, thus the beats are less consistent and less predictable,
            making it harder to freestyle to.
          </Title>
        </>

        //source: https://www.masterclass.com/articles/hip-hop-guide#
      );

    case GENRES.HEELS:
      return (
        <>
          <Title level={4}>How it started:</Title>
          <Title level={5}>
            Women have danced in heels for centuries, especially in genres like
            latin or classic court dances. Women danced in low heels or other
            structured shoes. During the Jazz Age of the 1920s, Josephone Baker
            became an entertainment sensation dancing in theaters and in film in
            low heels. One of the more well known heels performance for us would
            probably be Beyoncé's "Single Ladies" choreography. Gaston, the
            choreographer, describes heels as "something different, she acts
            different and stands different".
          </Title>
          <Title level={4}>How it Grew:</Title>
          <Title level={5}>
            Pussycat Dolls contributed greatly to the rise of heels, they
            performed with heels in many of their songs, and they were wildly
            popular. This gave rise to the first wave of heels instructors, many
            of which have connections to Beyoncé, either as a performer,
            choreographer or movement coach. They described heels to be
            versatile, "There's hiphop in heels, there's contemporary, there's
            jazz, there's stripper. It's not just one thing anymore".
          </Title>
          <Title level={4}>How it is today:</Title>
          <Title level={5}>
            Classes are designed as welcoming spaces dedicated to celebrating
            inner-confidence and sensuality for all movers. With the rise of
            filming in dance classes, heels represents an opportunity for
            dancers to dress up and star in their own personal music video.
            There's both men and women in heels, as it is a safe environment for
            all to express their sexuality.
          </Title>
        </>
        //https://www.dancemagazine.com/heels-dance-popularity/#:~:text=Women%20have%20danced%20in%20heels,in%20film%20in%20low%20heels.
      );

    case GENRES.POLE:
      return (
        <>
          <Title level={3}>Influences from around the world:</Title>
          <Title level={4}>1. Chinese Pole</Title>
          <Title level={5}>
            Dating back to prior the 12th century, professionals of the era
            would use a pole, about 3-9m in height, laced with a rubber material
            and wear full body customes. Chinese acrobats would display
            climbing, sliding down, stretching and holding position using acute
            strength and skill. Performers of this time would regularly have
            burn marks on their shoulders from performing and training which
            became a way for them to identify and have respect for one another
            within this art form.
          </Title>
          <Title level={4}>2. Indian Pole</Title>
          <Title level={5}>
            Their form was referred to as "Pole Mallakhamb" which translates to
            "wrestler of pole" as it was an intended for wrestlers to train. The
            Indians would play competitively, using a smooth wooden pole, laced
            with castor oil to avoid friction. They would wear little clothing
            and no shoes to allow better skin to pole grip. Pole Mallakhamb was
            used to develop speed, reflexes, concentration and co-ordination.
            Training in this form helped increase stamina, strength and
            endurance. This was a male dominated environment in which women do
            not participate.
          </Title>
          <Title level={3}>How it is today:</Title>
          <Title level={5}>
            The US, Europe, Australia and Asia quickly followed with pole
            dancing and pole fitness classes. Modern pole is a combination of
            the above old techniques and has evolved into a modern day form that
            relies heavily on dance as well as fitness skills. The fusion of the
            circus performer skills of the Chinese and the acrobatic skills of
            the Indians are what make up pole dancing today.
          </Title>
        </>
        //https://polefitnessstudio.com/history-of-pole
      );
    case GENRES.STREETJAZZ:
      return (
        <>
          <Title level={4}>A Sub Genre of Older Genres...</Title>
          <Title level={5}>
            Street Jazz dance evolved from informal dancing in nightclubs,
            schools and on the street. Street jazz dance was inspired by
            traditional dance performed outside of professional studios. Jazz,
            modern Hip Hop and Funk make up Street Jazz dance. Street Jazz can
            be identified by a performer's fast and intricate footwork, refined
            spins and acrobatic flips and moves.
          </Title>
        </>
      );

    case GENRES.OPEN:
      return (
        <>
          <Title level={5}>A blend of different genres!</Title>
        </>
      );
    default:
      return "";
  }
};
