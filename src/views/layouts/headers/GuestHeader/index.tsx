"use client";
import { useTranslations } from "next-intl";

const GuestHeader = () => {
  const t = useTranslations();

  return (
    <header className="header">
      <h1>Live coding</h1>
    </header>
  );
};

export default GuestHeader;
