import clientPromise from '../../lib/mongodb';
export default async function upload(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DEPT);
  await db
    .collection('users')
    .deleteOne({ matricNumber: req.query.deleteUser });
  console.log(req.query.deleteUser);
  res.json('Successful Removed');
}
