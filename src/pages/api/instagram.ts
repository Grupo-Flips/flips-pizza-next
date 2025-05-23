import type { NextApiRequest, NextApiResponse } from 'next';

const TOKEN = "IGAAa1XGZCdyd1BZAE9WVHVBUG1uWDdrd29OZAGwyWTF1MWRXMEVqd2Q0TEpCUG14M1NBSnVOQ2lZAcDZAZAaEkyVXVpQ2ptdlZA0WEh4bDZATeVNlcWthb21DTnowLVY5cGpqMm9OcHJmcmFQa0dpbFNWWHNXMndKNTYzR2hfUmRkdHBrdwZDZD";
const USER_ID = "17841463227618058";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/${USER_ID}/media?fields=id,media_type,media_url,permalink,caption,timestamp&access_token=${TOKEN}`
    );
    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error });
    }

    res.status(200).json(data.data || []);
  } catch (error) {
    // Usando a variável error para não dar erro no ESLint
    console.error("Erro ao buscar imagens do Instagram:", error);
    res.status(500).json({ error: 'Erro ao buscar imagens do Instagram' });
  }
}
