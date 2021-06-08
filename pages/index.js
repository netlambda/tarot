/** @jsx jsx */
import React from "react";
import { Flex, jsx } from "theme-ui";
import { Text, Heading, Select } from "@theme-ui/components";
import Card from "../components/Card";
import { getBySuit } from "../lib/tarotDesk";
import marked from "marked";
import IconCup from "../components/IconCup";
import IconMajorArcana from "../components/IconMajorArcana";
import IconWand from "../components/IconWand";
import IconSword from "../components/IconSword";
import IconCoin from "../components/IconCoin";
import { Button } from "@theme-ui/components";
import romanize from "../lib/romanize";
import MainNav from "../components/MainNav";
import CardDetails from "../components/CardDetails";

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
});

const spreads = [
  {
    name: "The “Three Card”",
    description: `Unlike the other spreads I have  listed, the 3-Card tarot spread is very different as there is not one  fixed purpose or meaning to each card position. Instead, it is  completely dynamic depending on the purpose of the reading, and the  question being asked. Here are a few of the many ways it can be  utilized:

1. Past/Present/Future
2. What helps you?/What hinders you?/What are your realized and unrealized potentials?
3. Current situation/Challenges/Guidance
4. What you think/What you Feel/What You Do
5. You/Your Partner/Your relationship
6. Strengths/Weaknesses/Advice
7. Mind/Body/Spirit

You can even assign your meaning to each position of the three cards you  draw. I often use this spread when I’m struggling to make a choice and I assign a decision to the first two cards, for instance, the first card  will be the outcome if I do go on holiday with my friends, the second is the outcome if I don’t go. Then, for the final card, I ask for any  help, insight, and guidance the tarot spreads can give me regarding the  decision.
    `,
    desk: [
      { id: 1, column: 1, row: 1, present: "Past" },
      { id: 2, column: 2, row: 1, present: "Present" },
      { id: 3, column: 3, row: 1, present: "Future" },
    ],
  },
  {
    name: "Cross Centric",
    description: `**#1** – The first card presents  the current condition the person the reading is about finds themselves  in. What surrounds them and what is involved in the question they are  facing?

**#2** – The  second card is placed across the first card, facing to the left and is  always read in an upright position. It shows what the core obstacle is  that needs to be overcome, or what the thing is that’s holding the  person back. If this is a positive card it may be fear or envy of the  circumstances that are depicted that are holding the person back.

**#3** – The third card reveals subconscious influences. What does the subject of the reading truly desire? These unknown influences have a powerful  effect on a person’s everyday life, especially in situations relating to the question.

NOTE: If the second card shows a positive condition and the third card shows a  negative condition the person the reading is about is creating a  negative outcome for themselves because they believe they are not good  enough to get the positive outcome shown by the second card.

**#4 –** The fourth card shows what tools the person has at their disposal and what  they can use to overcome the obstacle indicated by the second card to  reach their ultimate goal, shown by the third card.

NOTE: The fourth card can show negative aspects, but they can be used to  achieve the overall goal indicated by the third card. OR, if the second  card is positive and the third and fourth cards are negative the person  is using what is indicated by the fourth card to create the negative  outcome they subconsciously desire.

**#5** – The fifth card shows the past of the situation. What past events or  issues are presently bugging the person? A negative past may harm their  current condition and they will need to let go of it to stop it from  influencing their current condition negatively so they can overcome the  obstacle indicated by the second card. A positive past should be  acknowledged as inspiration. Even though the person may be facing a  problem at the moment the obstacle they face is a natural progression  and evolution of the positive past they had the pleasure of experiencing and once they overcome the situation things will be even better than in the past.

**#6 –** The  sixth card is the headlight. Where is the person heading? What path are  they following? If the card says there is a negative energy on the way  the five previous cards should give a good indication of why this is  coming and what can be done to avoid this condition from arising by  redirecting the person’s life to a better track.

**#7** – The seventh card represents the person’s attitude. It represents your actions, thoughts, and ideas regarding the issue at hand. This will  give you insight into whether the person’s attitude is conducive to a  desirable outcome or whether it’s time to change the way they perceive  the situation.

**#8** –  The eighth card is an energy card. What kind of energy do is the person  getting from the people surrounding them and their environment? Are the  energies helpful? Or is it time for a change of scenery?

**#9** – The ninth card symbolizes what the person wants or fears. This is a  revelation card. It signifies the things that they should know and be  aware of in their current situation as it might influence the way the  person is acting. Something they should never neglect.

**#10 –** Final card symbolizes the outcome. Based on the current energies, this will  have a strong connection with the sixth card. What does it say? Are the  energies complementing or conflicting with each other? The final card  can also indicate whether the person can avoid the immediate future  represented by the sixth card, or whether it is a necessary obstacle  they need to face.
    `,
    desk: [
      { id: 1, column: 1, row: 1, present: "The situation" },
      {
        id: 2,
        column: 2,
        row: 2,
        present: "The current challenge affecting the issue",
      },
      { id: 3, column: 2, row: 3, present: "The basis of situation" },
      { id: 4, column: 1, row: 2, present: "The past relevant to situation" },
      { id: 5, column: 2, row: 1, present: "The present" },
      { id: 6, column: 3, row: 2, present: "The near future" },
      { id: 7, column: 4, row: 4, present: "Your power in the situation" },
      { id: 8, column: 4, row: 3, present: "The effects of people around you" },
      { id: 9, column: 4, row: 2, present: "Your hopes of fears" },
      { id: 10, column: 4, row: 1, present: "The outcome" },
    ],
  },
];

const crosCentric = {
  name: "CROSS CENTRIC",
  desk: [
    { id: 1, column: 1, row: 1, present: "The situation" },
    {
      id: 2,
      column: 2,
      row: 2,
      present: "The current challenge affecting the issue",
    },
    { id: 3, column: 2, row: 3, present: "The basis of situation" },
    { id: 4, column: 1, row: 2, present: "The past relevant to situation" },
    { id: 5, column: 2, row: 1, present: "The present" },
    { id: 6, column: 3, row: 2, present: "The near future" },
    { id: 7, column: 4, row: 4, present: "Your power in the situation" },
    { id: 8, column: 4, row: 3, present: "The effects of people around you" },
    { id: 9, column: 4, row: 2, present: "Your hopes of fears" },
    { id: 10, column: 4, row: 1, present: "The outcome" },
  ],
};

const suits = [
  {
    name: "major",
    icon: <IconMajorArcana width={70} height={70} />,
  },
  {
    name: "wands",
    icon: <IconWand width={70} height={70} />,
  },
  {
    name: "cups",
    icon: <IconCup width={70} height={70} />,
  },
  {
    name: "swords",
    icon: <IconSword width={70} height={70} />,
  },
  {
    name: "coins",
    icon: <IconCoin width={70} height={70} />,
  },
];

function index() {
  const [state, setState] = React.useState({
    name: spreads[0].name,
    desk: spreads[0].desk,
    description: spreads[0].description,
    selectedDeskSlot: spreads[0].desk[0],
    selectedSuit: suits[0],
    suggest: [],
  });
  const [readMode, setReadMode] = React.useState(false);

  const handleCardClick = (deskSlot) => {
    setState({ ...state, selectedDeskSlot: deskSlot });
    if (!state.selectedDeskSlot.card) {
      setReadMode(false);
    } else {
      setReadMode(true);
    }
  };
  const handleSelecSuit = (suit) => {
    setState({ ...state, selectedSuit: suit });
  };
  const handleSetDeskSlot = (card) => {
    const selectedSlotIndex = state.desk.findIndex(
      (i) => i.id === state.selectedDeskSlot.id
    );
    const result = [...state.desk];
    result[selectedSlotIndex] = { ...state.desk[selectedSlotIndex], card };

    setState({
      ...state,
      desk: result,
      selectedDeskSlot: { ...state.selectedDeskSlot, card: card },
    });
    setReadMode(true);
  };
  const handleChangeSpread = (spread) => {
    console.log("🚀 ~ file: index.js ~ line 172 ~ index ~ spread", spread);
    setState({ ...state, ...spread, selectedDeskSlot: spread?.desk[0] });
  };

  React.useEffect(() => {
    setState({ ...state, suggest: getBySuit(state.selectedSuit.name) });
  }, [state.selectedSuit]);

  React.useEffect(() => {
    if (!state.selectedDeskSlot.card) {
      setReadMode(false);
    }
  }, [state.selectedDeskSlot.id]);

  const rowArr = state.desk.map((i) => i.row);
  const row = Math.max(...rowArr) * 3;
  const columnArr = state.desk.map((i) => i.column);
  const column = Math.max(...columnArr) * 2;

  const handleSelectSpread = (e) => {
    const name = e.target.value;
    const selectedSpread = spreads.find((i) => i.name === name);
    handleChangeSpread(selectedSpread);
  };

  return (
    <Flex
      sx={{ flexDirection: "column", bg: "background", minHeight: "100vh" }}
    >
      <MainNav />

      <Flex sx={{ py: 3, px: 3, alignItems: "center", bg: "gray.3" }}>
        <Flex sx={{ width: 500, mr: 3, alignItems: "center" }}>
          <Flex sx={{ mr: 3 }}>
            <Text sx={{ fontSize: 0 }}>Spread: </Text>
          </Flex>

          <Select sx={{ fontSize: 0 }} onChange={handleSelectSpread}>
            {spreads.map((i) => (
              <option
                onClick={() => handleChangeSpread(i)}
                sx={{ mr: 3, cursor: "pointer" }}
                key={i.name}
                value={i.name}
              >
                {/* <Button variant="secondary">{i.name}</Button> */}
                {i.name}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex sx={{ justifyContent: "center", py: 3 }}>
          <Heading sx={{ fontSize: 5, fontFamily: "sans" }}>
            {state.name}
          </Heading>
        </Flex>
      </Flex>

      <Flex
        sx={{
          p: 3,
          mb: 4,
        }}
      >
        <Flex sx={{ flexDirection: "column", maxWidth: 500, mr: 4 }}>
          <Flex
            sx={{
              bg: "dark",
              px: 3,
              py: 4,
              borderRadius: "lg",
              flexDirection: "column",
            }}
          >
            <div
              sx={{
                display: "grid",
                gridTemplateColumns: `repeat(${column}, 50px [col-start])`,
                gridTemplateRows: `repeat(${row}, 50px [row-start])`,
                gridGap: "8px",
                justifyContent: "center",
              }}
              id="desk-grid"
            >
              {state.desk.map((i) => (
                <Card
                  key={i.id}
                  {...i}
                  onClick={() => handleCardClick(i)}
                  onSetReadMode={(val) => {
                    setReadMode(val);
                    setState({ ...state, selectedDeskSlot: i });
                  }}
                  isActive={state.selectedDeskSlot.id === i.id}
                >
                  {i.id}
                </Card>
              ))}
            </div>
          </Flex>

          <Flex
            sx={{ flexDirection: "column" }}
            dangerouslySetInnerHTML={{
              __html: marked(state.description || ""),
            }}
          ></Flex>
        </Flex>

        {readMode ? (
          <CardDetails data={state.selectedDeskSlot} />
        ) : (
          <Flex>
            <Flex sx={{ flexDirection: "column", flex: 1 }}>
              <Flex
                sx={{
                  bg: "gray.3",
                  borderRadius: "default",
                  px: 3,
                  py: 3,
                  flexDirection: "column",
                  mb: 3,
                }}
              >
                <Text sx={{ fontSize: 3 }}>
                  Set card for slot:{" "}
                  <span sx={{ fontWeight: "bold", color: "primary" }}>
                    {state.selectedDeskSlot.id} -{" "}
                    {state.selectedDeskSlot.present}
                  </span>
                </Text>

                <Flex sx={{ py: 3 }}>
                  {suits.map((i) => (
                    <Flex
                      onClick={() => handleSelecSuit(i)}
                      sx={{
                        mr: 3,
                        cursor: "pointer",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        sx={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          color:
                            state.selectedSuit.name === i.name ? "primary" : "",
                        }}
                      >
                        {i.name}
                      </Text>
                      {React.cloneElement(i.icon, {
                        sx: {
                          color:
                            state.selectedSuit.name === i.name ? "primary" : "",
                        },
                      })}
                    </Flex>
                  ))}
                </Flex>
              </Flex>

              <Flex sx={{ flexWrap: "wrap" }}>
                {state.suggest.map((i) => (
                  <Flex sx={{ flexDirection: "column" }}>
                    {/* <Text>{i.name}</Text> */}
                    <img
                      width="100"
                      src={i.image}
                      alt={i.name}
                      sx={{ objectFit: "cover", px: 1, cursor: "pointer" }}
                      onClick={() => handleSetDeskSlot(i)}
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default index;
