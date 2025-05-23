import type { NextApiRequest, NextApiResponse } from 'next';

const TOKEN = "IGAAa1XGZCdyd1BZAE9lVXdlV2JJT3FXU08wYkFxX01fS2xxUENrSng4Tm9rSkR2Si1fMlpkQWluNjNLT1FHc3NYOWl6bG9RN0U0Y21hUG1DNVZAQTHppUGZAiZAzNMS0N3S2RqS1pIdkVyRGRXUFllT2F0NThfSzJFTExSNjN5Tl9NdwZDZD";
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
    res.status(500).json({ error: 'Erro ao buscar imagens do Instagram' });
  }
}
