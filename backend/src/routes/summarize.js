import express from "express";
import {fetchRedditData} from "../services/reddit.js";
import {summarizeWithGemini} from "../services/gemini.js";
import {formatPrompt} from "../utils/format.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const {url} = req.body;

    if (!url) {
        return res.status(400).json({error: "Missing Reddit URL"});
    }

    try {
        const redditData = await fetchRedditData(url);
        const prompt = formatPrompt(redditData);
        const summary = await summarizeWithGemini(prompt);

        res.json({summary});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Failed to summarize post"});
    }
});

export default router;
