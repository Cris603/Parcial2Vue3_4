import { neon } from '@netlify/neon';

export const handler = async () => {
  try {
    const sql = neon(); // usa NETLIFY_DATABASE_URL automáticamente
    const posts = await sql`SELECT * FROM posts ORDER BY id`;

    return {
      statusCode: 200,
      body: JSON.stringify(posts),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
