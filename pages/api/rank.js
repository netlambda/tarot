import tarot from "../../data/tarot_interpretations.json";

export default function handle(req, res) {
  const tarotDeck = tarot.tarot_interpretations;
  const rank = req.query.rank;
  if (rank) {
    const result = tarotDeck.find(element => {
      return element.rank == rank;
    });
    res.json({ data: result });
  } else {
    res.json({ msg: "please input rank number" });
  }
}
