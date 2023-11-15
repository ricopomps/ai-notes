import { Note as NoteModel } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface NoteProps {
  note: NoteModel;
}

export default function Note({
  note: { title, content, updatedAt, createdAt },
}: NoteProps) {
  const wasUpdated = updatedAt > createdAt;

  const createdUpdateAtTimestamp = (
    wasUpdated ? updatedAt : createdAt
  ).toDateString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {createdUpdateAtTimestamp}
          {wasUpdated && " (updated)"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{content}</p>
      </CardContent>
    </Card>
  );
}
