// src/Managemen tDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Grid, List, ListItem, TextField, Button } from '@mui/material';
import { MetricData, Room, Reservation, Guest } from './types';

// Simulated API functions (same as before)
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

const Customer: React.FC = () => {
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
    <Container>
      <Typography variant="h2" gutterBottom>
        Hotel Management Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Metrics</Typography>
              <Typography variant="body1">
                Occupancy Rate: {metrics?.occupancy ?? 'Loading...'}%
              </Typography>
              <Typography variant="body1">
                Revenue: ${metrics?.revenue ?? 'Loading...'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Rooms</Typography>
              <List>
                {rooms.length ? rooms.map(room => (
                  <ListItem key={room.id}>
                    Room {room.number}: {room.status}
                  </ListItem>
                )) : <ListItem>Loading...</ListItem>}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Reservations</Typography>
              <List>
                {reservations.length ? reservations.map(reservation => (
                  <ListItem key={reservation.id}>
                    Reservation {reservation.id} - {reservation.guest} ({reservation.status})
                  </ListItem>
                )) : <ListItem>Loading...</ListItem>}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Guests</Typography>
              <List>
                {guests.length ? guests.map(guest => (
                  <ListItem key={guest.id}>
                    {guest.name} - {guest.email}
                  </ListItem>
                )) : <ListItem>Loading...</ListItem>}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Housekeeping</Typography>
              <form onSubmit={handleTaskSubmit}>
                <TextField
                  fullWidth
                  label="New Task"
                  value={newTask}
                  onChange={(e : any) => setNewTask(e.target.value)}
                  margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Customer;
