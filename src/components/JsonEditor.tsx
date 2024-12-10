import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import JsonTable from "./JsonTable"
import JsonDialog from "./JsonDialog"
  

export default function JsonEditor(){
    return <Card>
    <CardHeader>
      <CardTitle>Saved JSON</CardTitle>
      <CardDescription>View and share your JSON data.</CardDescription>
    </CardHeader>
    <CardContent>
      <JsonTable/>
    </CardContent>
    <CardFooter>
      <JsonDialog/>
    </CardFooter>
  </Card>
}