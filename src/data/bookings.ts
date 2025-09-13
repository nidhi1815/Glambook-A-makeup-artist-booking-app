export interface Booking {
  id: string;
  client: string;
  service: string;
  date: string;       
  time: string;
  price: number;
  status: "upcoming" | "completed";
}

export const bookings: Booking[] = [
  {
    id: "1",
    client: "Aditi Sharma",
    service: "Bridal Makeup",
    date: "2025-01-28",
    time: "10:00 AM",
    price: 250,
    status: "upcoming",
  },
  {
    id: "2",
    client: "Priya Nair",
    service: "Editorial Makeup",
    date: "2024-12-15",
    time: "9:00 AM",
    price: 200,
    status: "completed",
  },
  {
    id: "3",
    client: "Meera Iyer",
    service: "Evening Glam",
    date: "2025-01-30",
    time: "2:30 PM",
    price: 180,
    status: "upcoming",
  },
];

// helper function to add new booking
export function addBooking(newBooking: Booking) {
  bookings.push(newBooking);
}
