import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { TextareaWithLabel } from "@/components/ui/textarea"

import {  InputWithLabel_Address, InputWithLabel_Comp_name, InputWithLabel_Email, InputWithLabel_Name, InputWithLabel_ph_no } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function form(){
    return <div className="flex justify-center m-10 p-9">
        <div className='bg-slate-200 '>
            <Card>
            <CardHeader>
                <CardTitle className='flex justify-center text-4xl'>Fill this Form out</CardTitle>
                <CardDescription className='flex justify-center text-xl'>Our team will contact you shortly for payment.</CardDescription>
            </CardHeader>
            <div className="flex justify-center gap-8 m-8 pr-8">
                <CardContent className="">
                <InputWithLabel_Name className=''></InputWithLabel_Name>
                <InputWithLabel_Email></InputWithLabel_Email>
                <InputWithLabel_ph_no></InputWithLabel_ph_no>
                </CardContent>
                <CardContent>
                <InputWithLabel_Comp_name></InputWithLabel_Comp_name>
                <div className=" mt-6 mb-6 gap-2 m-5">
                <label className="mt-1.5">Services</label>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                </div>

                {/* <InputWithLabel_Address></InputWithLabel_Address> */}
                <TextareaWithLabel></TextareaWithLabel>
                <InputWithLabel_Comp_name></InputWithLabel_Comp_name>
                </CardContent>
            </div>
            <div className='flex justify-center align-top'>

            <Button >Submit</Button>
            </div>
            <CardFooter>
            </CardFooter>
        </Card>
        </div>
    </div>
}
{/* <div><input type="text" placeholder="Name" /></div> <br />
        <div> <input type="Email" placeholder="Email" /></div> <br />
        <div><input type="text" placeholder="Company name"  /></div> <br />
        <div><input type="Date" /></div> */}