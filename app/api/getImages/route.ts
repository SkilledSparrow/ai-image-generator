export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const response = await fetch(
    "https://ai-image-generator-abhishek.azurewebsites.net/api/getimages",
    {
      cache: "no-store",
    }
  );

  const blob = await response.blob();
  const textData = await blob.text();

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
