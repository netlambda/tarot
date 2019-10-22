import { suits } from "../../lib/tarotDesk";

export default function handle(req, res) {
  res.json(suits);
  // const rank = req.query.rank;
  // if (rank) {
  //   res.json({ data: result });
  // } else {
  //   res.json({ msg: "please input rank number" });
  // }
}
