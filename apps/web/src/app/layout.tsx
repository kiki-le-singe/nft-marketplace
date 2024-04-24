import { RootLayout } from "ui";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return <RootLayout modal={modal}>{children}</RootLayout>;
}
