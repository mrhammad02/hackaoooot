// src/ManagementDashboard.tsx
import React, { useState, useEffect } from 'react';
import { MetricData, Room, Reservation, Guest } from './types';

// Simulated API functions
const fetchMetrics = async (): Promise<MetricData> => ({
  occupancy: 75,
  revenue: 12000,
});

const fetchRooms = async (): Promise<Room[]> => ([
  { id: 1, number: 101, status: 'clean' },
  { id: 2, number: 102, status: 'dirty' },
]);

const fetchReservations = async (): Promise<Reservation[]> => ([
  { id: 1, guest: 'John Doe', status: 'checked-in' },
  { id: 2, guest: 'Jane Smith', status: 'reserved' },
]);

const fetchGuests = async (): Promise<Guest[]> => ([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]);

const ManagementDashboard: React.FC = () => {
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
    alert(`Task submitted: ${newTask}`);
    setNewTask('');
  };

  return (
    <div className="dashboard">
      <h1>Hotel Management Dashboard</h1>

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
        <h2>Housekeeping</h2>
        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ManagementDashboard;
