import React from "react";
import { Container } from "./components/Container";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Header } from "./sections/Header";
import { Links } from "./sections/Links";
import { Education } from "./sections/Education";
import { GlobalStore } from "./store/GlobalStore";

export default function Page() {
  return (
    <GlobalStore>
      <Container styles="p-4">
        <Header />
        <Links />
        <About />
        <Experience />
        <Education />
      </Container>
    </GlobalStore>
  );
}
