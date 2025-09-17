import avatar from "../assets/image/avatar.png";

export const doctorData = [
  { 
    id: 1,
    first_name: "John",
    last_name: "Smith",
    specialization: "Cardiologist",
    contact_number: "123-456-7890",
    email: "john.smith@clinic.com",
    image: avatar,
    schedules: [
      { day: "Monday", time: "9:00 AM to 12:00 PM" },
      { day: "Wednesday", time: "2:00 PM to 5:00 PM" },
      { day: "Friday", time: "10:00 AM to 1:00 PM" },
    ],
  },
  { 
    id: 2,
    first_name: "Jane",
    last_name: "Doe",
    specialization: "Dermatologist",
    contact_number: "987-654-3210",
    email: "jane.doe@clinic.com",
    image: avatar,
    schedules: [
      { day: "Tuesday", time: "1:00 PM to 4:00 PM" },
      { day: "Thursday", time: "10:00 AM to 12:00 PM" },
      { day: "Saturday", time: "9:00 AM to 11:00 AM" },
    ],
  },
  {
    id: 3,
    first_name: "Emily",
    last_name: "Johnson",
    specialization: "Pediatrician",
    contact_number: "555-123-4567",
    email: "emily.johnson@clinic.com",
    image: avatar,
    schedules: [
      { day: "Monday", time: "8:00 AM to 11:00 AM" },
      { day: "Wednesday", time: "1:00 PM to 4:00 PM" },
      { day: "Friday", time: "2:00 PM to 6:00 PM" },
    ],
  },  
  {
    id: 4, 
    first_name: "Michael",
    last_name: "Brown",
    specialization: "Orthopedic Surgeon",
    contact_number: "444-987-6543",
    email: "michael.brown@clinic.com",
    image: avatar,
    schedules: [
      { day: "Wednesday", time: "9:00 AM to 1:00 PM" },
      { day: "Friday", time: "3:00 PM to 6:00 PM" },
      { day: "Saturday", time: "10:00 AM to 3:00 PM" },
    ],
  }
];
