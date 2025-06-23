const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'cwp-11ty',
});
const collection = db.collection('cwp-tags');

module.exports = async () => {
  let tag_categories = [];
  let s = await collection.get();
  s.forEach((doc) => {
    let name = doc.id;
    let category = doc.data().category;
    tag_categories.push({
      name,
      category,
    });
  });
  return tag_categories;
};
