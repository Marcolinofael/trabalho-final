import Image from "next/image";
import { Apresentation } from "./components/apresentation";
import { Soueu } from "./components/soueu";
import { Testimonial } from "./components/testemunho";
import { Costumer } from "./components/costumer";
import { Contacts } from "./components/contacts";

export default function Home() {
  return (
  <div>
      <Apresentation/>
      <Soueu/>
      <Testimonial/>
      <Costumer/>
      <Contacts/>
    </div>
  );
}