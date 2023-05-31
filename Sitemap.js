const express = require('express');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createReadStream } = require('fs');

const app = express();

app.get('/sitemap.xml', async (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Content-Disposition', 'attachment; filename=sitemap.xml');

  try {
    const links = [
      { url: '/', changefreq: 'daily', priority: 0.8 },
      { url: '/about', changefreq: 'weekly', priority: 0.7 },
      { url: '/contact', changefreq: 'monthly', priority: 0.5 },
    ];

    const stream = new SitemapStream({ hostname: 'https://example.com' }); // Replace with your own domain

    links.forEach((link) => {
      stream.write(link);
    });

    stream.end();

    const xmlString = await streamToPromise(stream).then((sm) => sm.toString());
    res.send(xmlString);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});