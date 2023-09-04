export default function handler(request, response) {
  //   console.log("test");
  if (request.method == "POST") {
    return response.status(200).json(request.body);
  }
}
