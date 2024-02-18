"use client";

// Globals
import { ReactNode } from "react";

// Components
import Goods from "./components/goods/Goods";
import Invoice from "./components/invoice/Invoice";
import TaxPayers from "./components/taxpayers/TaxPayers";
import Customers from "./components/customers/Customers";
import Header from "./components/Header";

// static data
import content from "@/constants/content.json";

interface Tabs {
  invoice: ReactNode;
  customers: ReactNode;
  taxpayers: ReactNode;
  goods: ReactNode;
}

interface Props {
  tab:
    | ("invoice" | ["invoice", "manual", "file"])
    | "customers"
    | "goods"
    | "taxpayers";
}

const Panel = ({ tab }: Props) => {
  const {
    panel: {
      header: { navbar },
    },
  } = content;

  const tabs: Tabs = {
    invoice: <Invoice />,
    customers: <Customers />,
    goods: <Goods slugs={tab as string[]} />,
    taxpayers: <TaxPayers />,
  };

  return (
    <main className="w-full min-h-full bg-primary">
      <Header navbar={navbar} tab={Array.isArray(tab) ? tab[0] : tab} />
      <article className="text-white w-full h-[90vh]">
        {tabs[Array.isArray(tab) ? tab[0] : tab]}
      </article>
    </main>
  );
};

export default Panel;
