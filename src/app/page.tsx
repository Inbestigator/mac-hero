import Hero from "@/components/hero";

export default function MainPage() {
  return (
    <main className="h-[500vh] mb-[70vh]">
      <div className="sticky flex flex-col items-center justify-center top-0 left-0 h-screen w-full">
        <Hero />
      </div>
    </main>
  );
}
