import Hero from "@/components/hero";
import Text from "@/components/text";

export default function Page() {
  return (
    <div className="relative">
      <Hero />
      <div className="flex flex-col max-w-[60rem] left-1/2 -translate-x-1/2 gap-10 bg-transparent absolute z-10 bottom-[50rem]">
        <Text />
      </div>
    </div>
  );
}
