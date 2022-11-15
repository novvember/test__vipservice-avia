import FormValues from '../types/FormValues';
import { RoundTicket, SingleTicket } from '../types/tickets';

class MockApi {
  async search(query: FormValues): Promise<SingleTicket[] | RoundTicket[]> {
    let tickets: SingleTicket[] | RoundTicket[];
    if (query['date-back']) {
      tickets = this._generateRoundTickets(
        query.from,
        query.to,
        new Date(Date.parse(query['date-to'])),
        new Date(Date.parse(query['date-back'])),
      );
    } else {
      tickets = this._generateSingleTickets(
        query.from,
        query.to,
        new Date(Date.parse(query['date-to'])),
      );
    }

    await this._setTimeout(2500);
    return tickets;
  }

  private _setTimeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private _generateSingleTickets(
    from: string,
    to: string,
    date: Date,
  ): SingleTicket[] {
    const tickets: SingleTicket[] = [
      {
        type: 'single',
        id: 1,
        flights: [
          {
            id: 401,
            carrier: 'S7 Airlines',
            refundable: true,
            cabbinLuggage: true,
            luggage: false,
            price: 6700,
            fromPoint: {
              time: new Date(+date + 7 * 60 * 60 * 1000 + 55 * 60 * 1000),
              city: from,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+date + 9 * 60 * 60 * 1000 + 37 * 60 * 1000),
              code: 'XYZ',
              city: to,
            },
          },
        ],
      },
      {
        type: 'single',
        id: 2,
        flights: [
          {
            id: 402,
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: true,
            price: 4150,
            fromPoint: {
              time: new Date(+date + 9 * 60 * 60 * 1000 + 20 * 60 * 1000),
              city: from,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+date + 11 * 60 * 60 * 1000 + 5 * 60 * 1000),
              code: 'XYZ',
              city: to,
            },
          },
          {
            id: 403,
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: true,
            price: 4150,
            fromPoint: {
              time: new Date(+date + 10 * 60 * 60 * 1000 + 10 * 60 * 1000),
              city: from,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+date + 12 * 60 * 60 * 1000 + 15 * 60 * 1000),
              code: 'XYZ',
              city: to,
            },
          },
          {
            id: 405,
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: true,
            price: 4150,
            fromPoint: {
              time: new Date(+date + 11 * 60 * 60 * 1000 + 45 * 60 * 1000),
              city: from,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+date + 13 * 60 * 60 * 1000 + 7 * 60 * 1000),
              code: 'XYZ',
              city: to,
            },
          },
        ],
      },
      {
        type: 'single',
        id: 3,
        flights: [
          {
            id: 406,
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: false,
            luggage: false,
            price: 6700,
            fromPoint: {
              time: new Date(+date + 19 * 60 * 60 * 1000 + 55 * 60 * 1000),
              city: from,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+date + 22 * 60 * 60 * 1000 + 7 * 60 * 1000),
              code: 'XYZ',
              city: to,
            },
          },
        ],
      },
    ];

    return tickets;
  }

  private _generateRoundTickets(
    from: string,
    to: string,
    dateTo: Date,
    dateBack: Date,
  ) {
    const tickets: RoundTicket[] = [
      {
        type: 'round',
        id: 101,
        flights: [
          {
            id: 501,
            carrier: 'S7 Airlines',
            refundable: true,
            cabbinLuggage: true,
            luggage: true,
            price: 4100,
            fromPoint: {
              time: new Date(+dateTo + 22 * 60 * 60 * 1000 + 57 * 60 * 1000),
              city: from,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(
                +dateTo + (24 + 11) * 60 * 60 * 1000 + 5 * 60 * 1000,
              ),
              code: 'XYZ',
              city: to,
            },
          },
          {
            id: 502,
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: false,
            price: 4200,
            fromPoint: {
              time: new Date(+dateBack + 17 * 60 * 60 * 1000 + 11 * 60 * 1000),
              city: to,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+dateBack + 22 * 60 * 60 * 1000 + 0 * 60 * 1000),
              code: 'XYZ',
              city: from,
            },
          },
        ],
      },
      {
        type: 'round',
        id: 104,
        flights: [
          {
            id: 5010,
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: false,
            price: 4850,
            fromPoint: {
              time: new Date(+dateTo + 17 * 60 * 60 * 1000 + 10 * 60 * 1000),
              city: from,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+dateTo + 18 * 60 * 60 * 1000 + 25 * 60 * 1000),
              code: 'XYZ',
              city: to,
            },
          },
          {
            id: 5011,
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: false,
            price: 4116,
            fromPoint: {
              time: new Date(+dateBack + 0 * 60 * 60 * 1000 + 0 * 60 * 1000),
              city: to,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+dateBack + 2 * 60 * 60 * 1000 + 15 * 60 * 1000),
              code: 'XYZ',
              city: from,
            },
          },
        ],
      },
      {
        type: 'round',
        id: 102,
        flights: [
          {
            id: 504,
            carrier: 'S7 Airlines',
            refundable: true,
            cabbinLuggage: true,
            luggage: true,
            price: 5600,
            fromPoint: {
              time: new Date(+dateTo + 17 * 60 * 60 * 1000 + 7 * 60 * 1000),
              city: from,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(
                +dateTo + (24 + 0) * 60 * 60 * 1000 + 28 * 60 * 1000,
              ),
              code: 'XYZ',
              city: to,
            },
          },
          {
            id: 505,
            carrier: 'S7 Airlines',
            refundable: true,
            cabbinLuggage: true,
            luggage: true,
            price: 5400,
            fromPoint: {
              time: new Date(+dateBack + 5 * 60 * 60 * 1000 + 19 * 60 * 1000),
              city: to,
              code: 'ABC',
            },
            toPoint: {
              time: new Date(+dateBack + 11 * 60 * 60 * 1000 + 5 * 60 * 1000),
              code: 'XYZ',
              city: from,
            },
          },
        ],
      },
    ];

    return tickets;
  }
}

const mockApi = new MockApi();

export default mockApi;
