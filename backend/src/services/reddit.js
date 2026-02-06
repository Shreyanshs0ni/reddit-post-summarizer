import fetch from 'node-fetch';

export async function fetchRedditData(redditUrl) {
  const res = await fetch(`${redditUrl}.json`, {
    headers: {
      'User-Agent': 'RedditSummarizer/1.0',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Reddit data');
  }

  const json = await res.json();

  const postData = json[0].data.children[0].data;
  const commentsData = json[1].data.children;

  const post = {
    title: postData.title,
    body: postData.selftext || '',
  };

  const comments = commentsData
    .filter(c => c.kind === 't1')
    .map(c => c.data)
    .filter(
      c =>
        c.body &&
        c.body !== '[deleted]' &&
        c.body !== '[removed]',
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map(c => c.body.slice(0, 500));

  return { post, comments };
}
