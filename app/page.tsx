import { Outfit } from "next/font/google";
import Button from "./components/Button";
const outfit = Outfit({ subsets: ["latin"], weight: ["300"] });
export default function Home() {
  return (
    <main>
      <section className="flex p-24">
        <h1 className="black-96 uppercase basis-[60%]">modern art gallery</h1>
        <div>
          <p className={`${outfit.className} light-22`}>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button />
        </div>
      </section>
    </main>
  );
}
