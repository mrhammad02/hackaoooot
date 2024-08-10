// src/CustomManagementDashboard.tsx
import React, { useState, useEffect } from 'react';
import { MetricData, Room, Reservation, Guest } from './types';

// Simulated API functions
const fetchMetrics = async (): Promise<MetricData> => ({
  occupancy: 80,
  revenue: 15000,
});

const fetchRooms = async (): Promise<Room[]> => ([
  { id: 1, number: 101, status: 'clean' },
  { id: 2, number: 102, status: 'dirty' },
]);

const fetchReservations = async (): Promise<Reservation[]> => ([
  { id: 1, guest: 'Alice Johnson', status: 'checked-in' },
  { id: 2, guest: 'Bob Brown', status: 'reserved' },
]);

const fetchGuests = async (): Promise<Guest[]> => ([
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Brown', email: 'bob@example.com' },
]);

const Hotel: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricData | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [guests, setGuests] = useState<Guest[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [metricsData, roomsData, reservationsData, guestsData] = await Promise.all([
          fetchMetrics(),
          fetchRooms(),
          fetchReservations(),
          fetchGuests(),
        ]);
        setMetrics(metricsData);
        setRooms(roomsData);
        setReservations(reservationsData);
        setGuests(guestsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    loadData();
  }, []);

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`New task: ${newTask}`);
    setNewTask('');
  };

  return (
    <div className="custom-dashboard">
      <h1>Custom Hotel Management Dashboard</h1>

      <section>
        <h2>Metrics</h2>
        <p>Occupancy Rate: {metrics?.occupancy ?? 'Loading...'}%</p>
        <p>Revenue: ${metrics?.revenue ?? 'Loading...'}</p>
      </section>

      <section>
        <h2>Rooms</h2>
        <ul>
          {rooms.length ? rooms.map(room => (
            <li key={room.id}>Room {room.number}: {room.status}</li>
          )) : <li>Loading...</li>}
        </ul>
      </section>

      <section>
        <h2>Reservations</h2>
        <ul>
          {reservations.length ? reservations.map(reservation => (
            <li key={reservation.id}>Reservation {reservation.id} - {reservation.guest} ({reservation.status})</li>
          )) : <li>Loading...</li>}
        </ul>
      </section>

      <section>
        <h2>Guests</h2>
        <ul>
          {guests.length ? guests.map(guest => (
            <li key={guest.id}>{guest.name} - {guest.email}</li>
          )) : <li>Loading...</li>}
        </ul>
      </section>

      <section>
        <h2>Housekeeping Tasks</h2>
        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e : any) => setNewTask(e.target.value)}
            placeholder="Enter a new task..."
            required
          />
          <button type="submit">Add Task</button>
        </form>
      </section>
    </div>
  );
};

export default Hotel;
