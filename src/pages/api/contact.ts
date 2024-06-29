import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const { sender, message } = req.body;
  if (!sender || !message) return res.status(400).send("Bad Request");

  const params = {
    embeds: [
      {
        title: sender,
        description: message,
        color: 15258703,
      },
    ],
  };

  try {
    fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }

  res.status(200).send("OK");
}
