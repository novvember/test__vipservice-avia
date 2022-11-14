interface Ticket {
  carrier: string;
  refundable: boolean;
  cabbinLuggage: boolean;
  luggage: boolean;
  price: number;
  fromPoint: Point;
  toPoint: Point;
}

interface Point {
  time: Date;
  city: string;
  code: string;
}

export interface SingleTicket {
  type: 'single';
  id: number;
  tickets: Ticket[];
}

export interface RoundTicket {
  type: 'round';
  id: number;
  ticketA: Ticket;
  ticketB: Ticket;
}
