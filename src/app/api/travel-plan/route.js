import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(req) {
  try {
    const { destination, travelDates, interests } = await req.json();

    if (!destination || !travelDates || !interests) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: destination, travelDates, or interests.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const prompt = `
Plan a detailed travel itinerary for a trip to ${destination} from ${travelDates}.
The traveler is interested in: ${interests}.
Include specific activities, restaurants, and must-see attractions.
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', 
      messages: [{ role: 'user', content: prompt }],
    });
    const plan = completion.choices[0]?.message?.content?.trim();

    if (!plan) {
      throw new Error('Empty response from OpenAI');
    }

    console.log('Generated plan:', plan); // Debugging log

    return new Response(JSON.stringify({ plan }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    if (error.code === 'insufficient_quota') {
      console.error('Insufficient quota for OpenAI API. Please check your account.');
      return { error: 'Insufficient quota. Please try again later or contact support.' };
    }
    console.error('An unexpected error occurred:', error);
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}
