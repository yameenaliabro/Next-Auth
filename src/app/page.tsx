import { Signup } from "@src/components/auth";
import NextAuthUi from "@src/components/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NextAuthUi />
    </main>
  );
}
