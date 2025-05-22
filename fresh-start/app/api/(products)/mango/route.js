export async function GET(req) {
  return new Response(JSON.stringify({ message: "This is mango route" }), {
    status: 200,
  });
}
