import Hero from "@/components/hero";

export default function MainPage() {
  return (
    <div className="h-[500vh] sticky-container mb-[70vh]">
      <div className="sticky flex flex-col items-center justify-center top-0 left-0 h-screen w-full sticky-content">
        <Hero />
      </div>
    </div>
  );
}
