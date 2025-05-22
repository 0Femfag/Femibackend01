export async function GET(req) {
  return new Response(
    JSON.stringify({ message: "this is the teachers route" }),
    { status: 200 },
  );
}
