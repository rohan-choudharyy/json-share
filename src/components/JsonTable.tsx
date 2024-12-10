import {format} from 'date-fns';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const JsonDataList = [
    {
        id: "fasfasfs674s5dgs",
        name: "Rohan",
        createdAt: "10-12-2024"
    },
]

export default function JsonTable(){
    return <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>CreatedAt</TableHead>
        <TableHead>
            <span className="sr-only">Share</span>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {JsonDataList.map((data) => (
            <TableRow key={data.id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{format(new Date(data.createdAt), 'MMMM d, yyyy')}</TableCell>
            </TableRow>
        ))}
    </TableBody>
  </Table>
  
}