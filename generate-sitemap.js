const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://www.advikdvira.com' });

const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

// Add your pages here
sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/research', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/publications', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.4 });

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('Sitemap created!');
});