"use client"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    service: "",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("https://scaos-964i-git-main-pradyumn1710s-projects.vercel.app/index", formData)
      
      if (response.status === 200) {
        setIsDialogOpen(true) // Show success dialog
        setFormData({ name: "", phone: "", company: "", email: "", service: "" }) // Reset form
      }
    } catch (error) {
      console.error("Error sending email:", error)
    }
  }

  return (
    <section id="quote" className="my-16">
      <div className="container mx-auto px-4">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="relative z-10 md:w-1/2 p-8 lg:p-12" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Transform Your Space Today!</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="service">Service</Label>
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Cleaning</SelectItem>
                      <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                      <SelectItem value="specialized">Specialized Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Get Your Free Quote
                </Button>
              </form>
            </div>
            <div
              className="absolute inset-0 md:relative md:w-1/2 bg-no-repeat bg-contain bg-center"
              style={{ backgroundImage: `url("/Main/Contact us-amico.png")` }}
            >
              <div className="absolute inset-0 bg-blue-600/10 md:bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>Our team will contact you shortly to discuss your cleaning needs.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}
