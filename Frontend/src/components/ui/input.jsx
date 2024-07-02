import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-80",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel_Email() {
  return (
    <div className="grid w-full max-w-sm items-center gap-2 m-5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
export function InputWithLabel_Name() {
  return (
    <div className="grid w-full max-w-sm items-center gap-2 m-5 ">
      <Label htmlFor="Text">Name</Label>
      <Input type="Text" id="Name" placeholder="Name" />
    </div>
  )
}
export function InputWithLabel_ph_no() {
  return (
    <div className="grid w-full max-w-sm items-center gap-2 m-5 ">
      <Label htmlFor="number">ph-number</Label>
      <Input type="number" id="ph-number" placeholder="ph-number" />
    </div>
  )
}
export function InputWithLabel_Comp_name() {
  return (
    <div className="grid w-full max-w-sm items-center gap-2 m-5">
      <Label htmlFor="text">Company Name</Label>
      <Input type="text" id="Company_name" placeholder="Company name" />
    </div>
  )
}
export function InputWithLabel_Address() {
  return (
    <div className="grid w-full max-w-sm items-center gap-2 m-5">
      <Label htmlFor="text">Address</Label>
      <Input type="text" id="Address" placeholder="Address" />
    </div>
  )
}

