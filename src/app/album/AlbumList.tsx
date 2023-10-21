import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { folderType } from "./page"
import Link from "next/link"

const AlbumList = ({folder}:{folder:folderType}) => {
  return (
    <div>
      <Card className="w-[350px] bg-slate-300">
      <CardHeader>
        <CardTitle>{folder.name.toLocaleUpperCase()}</CardTitle>
        <CardDescription>Click on view Button</CardDescription>
      </CardHeader>
      
      <CardFooter className="flex justify-end">
       <Link href={`/album/${folder.name}`}>
        <Button>View Album</Button></Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default AlbumList
