export function formatPrompt({ post, comments }) {
  return `
You are an expert at explaining online discussions clearly and in detail.

Summarize the following Reddit discussion so that someone who has NOT read the post
can fully understand what is being discussed, why it matters, and what people think.

Formatting rules (IMPORTANT):
- Do NOT use asterisks (*), hyphens (-), or markdown
- Use numbered points and short paragraphs only
- Write in clear, simple language
- Be detailed but not repetitive
- Make the summary easy to read in a web app
- Do not copy sentences directly from the post or comments

Use the following structure EXACTLY:

SUMMARY
1. Write 2–3 sentences explaining what the post is about and the main context.
2. Explain the core problem, question, or idea raised by the author.
3. Add important background or clarification if needed.

DETAILED DISCUSSION POINTS
1. Explain the most common or popular viewpoint in detail.
2. Explain opposing or alternative viewpoints, with reasoning.
3. Mention any recurring examples, experiences, or advice shared by users.

KEY TAKEAWAYS
1. What a reader should understand or learn from this discussion.
2. Any practical insight, warning, or conclusion users seem to agree on.

OVERALL SENTIMENT
Describe the general tone of the discussion in 1–2 clear sentences.

Now summarize the content below.

Post Title:
${post.title}

Post Content:
${post.body}

Top Comments:
${comments.map((c, i) => `${i + 1}. ${c}`).join('\n')}
`;
}
