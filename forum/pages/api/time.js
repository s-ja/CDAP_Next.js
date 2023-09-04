export default function Time(request, response) {
  let now = new Date();
  return response.status(200).json(now);
}
