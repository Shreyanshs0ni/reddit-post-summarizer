export function formatPrompt({post, comments}) {
    return `
You are summarizing a Reddit discussion.

Post Title:
${post.title}

Post Content:
${post.body}

Top Comments:
- ${comments.join("\n- ")}

Instructions:
- Give a concise bullet-point summary
- Capture main opinions and disagreements
- Avoid repeating text
`;
}
