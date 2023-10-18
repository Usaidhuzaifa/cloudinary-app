"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { AiFillFolderAdd } from "react-icons/ai"
import { FolderCreate } from "./action"

const AlbumDialog = ({imageData}:{imageData:string}) => {
    const [album,setAlbum] = useState("")
    const [open, setOpen]  = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant ="ghost" className="p-0 m-0">
        <AiFillFolderAdd className="h-6 w-6  text-white cursor-pointer hover:text-yellow-300 duration-200"/>
        </Button>
      </DialogTrigger>
      <DialogContent className ="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export to Album </DialogTitle>
          <DialogDescription>
           Write the Album name you want to enter and Click the Export button.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
          <div className="flex items-center gap-4">
            <Label htmlFor="Album-name" className="text-right">
            Name
            </Label>
            <Input
              id={album}
              onChange={(e)=>{setAlbum(e.target.value)}}
                placeholder="Enter Your album name ..."            
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={async () =>
            {
                setOpen(false)
                    await FolderCreate(album,imageData)
            } }>Export</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AlbumDialog
