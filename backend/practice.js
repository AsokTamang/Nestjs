//playground file
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.development.local.openapikey,
  dangerouslyAllowBrowser: false,
});
const messages = [
  {
    role: 'system',
    content:
      'You are a trading guru. Given data on share prices over the past 3 days, write a report of no more than 150 words describing the stocks performance and recommending whether to buy, hold or sell.',
  },
  {
    role: 'user',
    content: 'Random api',
  },
];
const response = await client.completions.create({
  model: 'gpt-3.5-turbo-instruct',
  messages: messages,
});
return response