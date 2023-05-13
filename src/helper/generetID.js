export default function generateUniqueId() {
  const timestamp = new Date().getTime().toString(16);
  const randomNum = Math.floor(Math.random() * 16).toString(16);
  return timestamp + randomNum;
}
