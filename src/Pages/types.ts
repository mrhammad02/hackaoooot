// src/types.ts
export interface MetricData {
    occupancy: number;
    revenue: number;
  }
  
  export interface Room {
    id: number;
    number: number;
    status: string;
  }
  
  export interface Reservation {
    id: number;
    guest: string;
    status: string;
  }
  
  export interface Guest {
    id: number;
    name: string;
    email: string;
  }
  ////////////////////////////////////////



  