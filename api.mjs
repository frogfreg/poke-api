import express from "express";
import db from "./db.mjs";

const router = express.Router();

router.get("/:pokemon", (req, res) => {
  const { pokemon } = req.params;
  if (!pokemon) {
    res.json({ error: "Pokemon not found!" });
  }

  db.serialize(() => {
    db.get("SELECT * FROM pokemon WHERE name = ?", [pokemon], (err, row) => {
      if (err) {
        throw new Error("Somtheing went wrong inside the query");
      }
      const response = { ...row };

      if (!response.name) {
        res.json({ error: "No pokemon with that name in our database" });
      } else {
        response["image"] = `${req.protocol}://${req.get(
          "host"
        )}/images/${pokemon}.png`;
        res.json(response);
      }
    });
  });
});

export default router;
