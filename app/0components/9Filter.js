import Link from "next/link";
export default function Filter() {
  return (
    <div className="w-full text-orange-500 flex text-xl justify-between">
      <Link href="/all">All posts</Link>
      <Link href="/pisho">Psihoterapie</Link>
      <Link href="/neruofeedback">Neruofeedback</Link>
      <Link href="/dezvoltare">Dezvoltare peronala</Link>
      <Link href="/self">Self teaching</Link>
      <Link href="/copii">Copii</Link>
      <Link href="/multe">Mai multe</Link>
    </div>
  );
}
