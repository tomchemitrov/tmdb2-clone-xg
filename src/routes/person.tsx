import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/person")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useSearch() as { id: number };

  return (
    <div>
      <Header />
      <h1>{id}</h1>

      <Footer />
    </div>
  );
}
