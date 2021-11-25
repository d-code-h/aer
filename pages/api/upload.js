import clientPromise from '../../lib/mongodb';
export default async function upload(req, res) {
  const data = req.query;
  const user = {
    firstName: data['firstName'],
    lastName: data['lastName'],
    middleName: data['middleName'],
    address: data['address'],
    date: data['date'],
    gender: data['gender'],
    marital: data['marital'],
    blood: data['blood'],
    genotype: data['genotype'],
    city: data['city'],
    state: data['state'],
    country: data['country'],
    nickName: data['nickName'],
    email: data['email'],
    phoneNumber: data['phoneNumber'],
    facebookId: data['facebookId'],
    hobbies: data['hobbies'],
    studentId: data['studentId'],
    matricNumber: data['matricNumber'],
    userImage: data['userImage'],
  };
  const client = await clientPromise;
  const db = client.db(process.env.DEPT);
  await db.collection('users').insertOne(user);
  res.json('Successful');
}
