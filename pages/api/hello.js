export default function handler(req, res) {
  res.status(200).json({ name: 'Pratham Kumar',
age: 22, company: "RapidAPI", degree: "computer science", place: "New Delhi" })
}
