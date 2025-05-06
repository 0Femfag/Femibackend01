export async function GET(req) {
  const users = [
    { name: "Oluwafemi", email: "Femimane1@gmail.com" },
    { name: "Victoria", email: "Victoria305@gmail.com" },
    { name: "Mark", email: "Mark101@gmail.com" },
    { name: "Augustine", email: "Augustine@gmail.com" },
    { name: "David", email: "David405@gmail.com" },
  ];
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function POST(req) {
  const { name } = await req.json();
  return new Response(
    JSON.stringify({ message: `Hello ${name}, you just made a post request` }),
  );
}

export async function PUT(req) {
  const { name } = await req.json();
  return new Response(
    JSON.stringify({ message: `Hello ${name}, you've just updated your name` }),
  );
}

export async function DELETE(req) {
  const { name } = await req.json();
  return new Response(JSON.stringify({ message: "Deleted successfully" }));
}
