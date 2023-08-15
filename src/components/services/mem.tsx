// import React, { useState, useEffect } from 'react';
// import { MongoClient,ObjectId } from 'mongodb';
// interface Players  {
//     _id: ObjectId,
//     name: String,
//     goals: Number,
//     red: Number,
//     yellow: Number,
//     __v: Number,
// }
// function Data() {
//     const [data, setData] = useState<Players[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const client = await MongoClient.connect('mongodb://localhost:27017');
//       const db = client.db('test');
//       const collection = db.collection('players');
//       const result = await collection.find().toArray();
//       setData(result);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from MongoDB:</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item._id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Data;