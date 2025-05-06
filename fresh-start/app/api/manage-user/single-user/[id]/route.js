export async function GET(req, { params }) {
  return new Response(JSON.stringify({ message: params.id }), { status: 200 });
}
