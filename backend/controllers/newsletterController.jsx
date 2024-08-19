const axios = require('axios');

const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body;

  // Replace with your Mailchimp API key and list ID
  const MAILCHIMP_API_KEY = 'Y2f9fffa693610744f94c04974ce433e2-us10';
  const LIST_ID = 'YOf826d9d778';
  const MAILCHIMP_SERVER_PREFIX = 'us10'; // e.g., 'us10'

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
