import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Document } from "mongodb";

interface Props {
  data: Document[];
}

export const DataTable = ({ data }: Props) => {
  return (
    <Table>
      <TableCaption>A list of users and number of chats!</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr. no</TableHead>
          <TableHead>UserId</TableHead>
          <TableHead>Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={item.invoice}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{item._id}</TableCell>
            <TableCell>{item.count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
