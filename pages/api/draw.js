import { drawCard, drawReading } from "../../lib/tarotDesk";

export default function handle(req, res) {
  res.json(drawReading());
}
