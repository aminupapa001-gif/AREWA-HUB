import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async () => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "AREWA HUB Paystack Transfer Function is working",
      mode: "test",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
});
