import React from "react";
import { Container } from "./components/Container";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Header } from "./sections/Header";
import { Links } from "./sections/Links";
import { GlobalStore } from "./store/GlobalStore";
import { SettingsBar } from "./components/SettingsBar";
import { Footer } from "./sections/Footer";
import { Personal } from "./sections/Personal";
import { Languagues } from "./sections/Languages";
import { SkillsSection } from "./sections/Skills";

export default function Page() {
  return (
    <GlobalStore>
      <Container styles="p-0">
        <SettingsBar />
        <Header />
        <Links />
        <About />
        <Languagues />
        <SkillsSection />
        <Experience type="experience" />
        <Experience type="education" />
        <Personal />
      </Container>
      <Footer />
    </GlobalStore>
  );
}
