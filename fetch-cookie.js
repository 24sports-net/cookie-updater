const axios = require('axios');
const fs = require('fs');

const url = 'https://pkll.xojiv79335.workers.dev/';

axios.get(url)
  .then(response => {
    const data = response.data;

    if (!Array.isArray(data)) {
      console.error('Expected JSON array from API.');
      process.exit(1);
    }

    const item = data[0];
    const cookie = item.cookie;

    const formatted = {
      cookieHeader: `__hdnea__=${cookie}`
    };

    fs.writeFileSync('cookie.json', JSON.stringify(formatted, null, 2));
    console.log('cookie.json updated successfully');
  })
  .catch(error => {
    console.error('Error fetching or writing data:', error);
    process.exit(1);
  });
