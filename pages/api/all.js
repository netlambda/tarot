import fs from "fs";
import tarot from "../../data/tarot_interpretations.json";

export default function handle(req, res) {
  res.json(tarot.tarot_interpretations);
}
