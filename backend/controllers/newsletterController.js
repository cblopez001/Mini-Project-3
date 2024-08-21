require('dotenv').config();
const axios = require('axios');

const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body;

  // Retrieve Mailchimp configurations from environment variables
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.LIST_ID;
  const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

  try {
    const response = await axios.post(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
      email_address: email,
      status: 'subscribed',
    }, {
      headers: {
        'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      res.status(200).send('Subscription successful');
    } else {
      res.status(response.status).send('Subscription failed');
    }
  } catch (error) {
    console.error('Mailchimp API error:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { subscribeToNewsletter };
