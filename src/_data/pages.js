const Firestore = require('@google-cloud/firestore'),
  slugify = require('slugify');

const db = new Firestore({
  projectId: 'cwp-11ty',
});
const collection = db.collection('cwp-pages');

module.exports = async () => {
  let pages = [];
  let s = await collection.get();
  s.forEach((doc) => {
    let d = doc.data();
    let prefix = '';
    if (d.tags.indexOf('Foundations') > -1) prefix = 'foundations';
    if (d.tags.indexOf('Builds') > -1) prefix = 'builds';
    pages.push({
      ...d,
      prefix,
      permalink: `/${prefix}/${slugify(d.title)}/`,
    });
  });
  console.log(pages);
  return pages;
};
