export async function GET(req) {
  return new Response(JSON.stringify({ message: "This is my orange route" }), {
    status: 200,
  });
}
