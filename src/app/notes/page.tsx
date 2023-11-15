import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AiNotes - Notes",
};

export default async function NotesPage() {
  const { userId } = auth();

  if (!userId) throw Error("UserId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return <div>{JSON.stringify(allNotes)}</div>;
}
