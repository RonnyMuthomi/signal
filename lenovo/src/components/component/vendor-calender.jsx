
"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { isSameDay } from 'date-fns';

export function VendorCalender() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Photoshoot with Jane",
      date: new Date("2023-06-15"),
      time: "10:00 AM - 2:00 PM",
    },
    {
      id: 2,
      title: "Edit photos for client",
      date: new Date("2023-06-20"),
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 3,
      title: "Deadline for portfolio update",
      date: new Date("2023-06-30"),
      time: "11:59 PM",
    },
  ])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showEventModal, setShowEventModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const handleEventAdd = () => {
    setSelectedEvent(null)
    setShowEventModal(true)
  }
  const handleEventEdit = (event) => {
    setSelectedEvent(event)
    setShowEventModal(true)
  }
  const handleEventDelete = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId))
  }
  const handleEventSave = (event) => {
    if (selectedEvent) {
      setEvents(events.map((e) => (e.id === selectedEvent.id ? { ...e, ...event } : e)))
    } else {
      setEvents([...events, { ...event, id: events.length + 1 }])
    }
    setShowEventModal(false)
  }
  const eventsOnSelectedDate = events.filter((event) => isSameDay(event.date, selectedDate))
  return (
    (<div className="flex flex-col h-full">
      <header className="bg-background p-4 shadow">
        <h1 className="text-2xl font-bold">Photography Calendar</h1>
      </header>
      <div className="flex-1 grid grid-cols-[1fr_300px] gap-4 p-4">
        <div className="bg-background rounded-lg shadow">
          <Calendar
            mode="month"
            value={selectedDate}
            onValueChange={handleDateChange}
            className="p-4" />
        </div>
        <div className="bg-background rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Events</h2>
            <Button onClick={handleEventAdd}>Add Event</Button>
          </div>
          <div className="grid gap-4">
            {eventsOnSelectedDate.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date.toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.time}</p>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="ghost" onClick={() => handleEventEdit(event)}>
                    Edit
                  </Button>
                  <Button variant="destructive" onClick={() => handleEventDelete(event.id)}>
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {showEventModal && (
        <Dialog>
          <DialogContent className="w-full max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedEvent ? "Edit Event" : "Add Event"}</DialogTitle>
            </DialogHeader>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const event = {
                    title: formData.get("title"),
                    date: new Date(formData.get("date")),
                    time: formData.get("time"),
                  }
                  handleEventSave(event)
                }}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input id="title" name="title" defaultValue={selectedEvent?.title} required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      defaultValue={selectedEvent?.date.toISOString().slice(0, 10)}
                      required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      defaultValue={selectedEvent?.time}
                      required />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <Button type="button" variant="ghost" onClick={() => setShowEventModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>)
  );
}
