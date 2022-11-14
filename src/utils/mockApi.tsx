import FormValues from '../types/FormValues';
import { RoundTicket, SingleTicket } from '../types/Ticket';

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
        tickets: [
          {
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: false,
            price: 6700,
            fromPoint: {
              time: new Date(
                date.getDate() + 7 * 60 * 60 * 1000 + 55 * 60 * 1000,
              ),
              city: from,
              code: 'DME',
            },
            toPoint: {
              time: new Date(
                date.getDate() + 9 * 60 * 60 * 1000 + 37 * 60 * 1000,
              ),
              code: 'SVO',
              city: to,
            },
          },
        ],
      },
      {
        type: 'single',
        tickets: [
          {
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: true,
            price: 4150,
            fromPoint: {
              time: new Date(
                date.getDate() + 9 * 60 * 60 * 1000 + 20 * 60 * 1000,
              ),
              city: from,
              code: 'DME',
            },
            toPoint: {
              time: new Date(
                date.getDate() + 11 * 60 * 60 * 1000 + 5 * 60 * 1000,
              ),
              code: 'SVO',
              city: to,
            },
          },
          {
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: true,
            price: 4150,
            fromPoint: {
              time: new Date(
                date.getDate() + 10 * 60 * 60 * 1000 + 20 * 60 * 1000,
              ),
              city: from,
              code: 'DME',
            },
            toPoint: {
              time: new Date(
                date.getDate() + 12 * 60 * 60 * 1000 + 5 * 60 * 1000,
              ),
              code: 'SVO',
              city: to,
            },
          },
          {
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: true,
            luggage: true,
            price: 4150,
            fromPoint: {
              time: new Date(
                date.getDate() + 11 * 60 * 60 * 1000 + 20 * 60 * 1000,
              ),
              city: from,
              code: 'DME',
            },
            toPoint: {
              time: new Date(
                date.getDate() + 13 * 60 * 60 * 1000 + 5 * 60 * 1000,
              ),
              code: 'SVO',
              city: to,
            },
          },
        ],
      },
      {
        type: 'single',
        tickets: [
          {
            carrier: 'S7 Airlines',
            refundable: false,
            cabbinLuggage: false,
            luggage: false,
            price: 6700,
            fromPoint: {
              time: new Date(
                date.getDate() + 19 * 60 * 60 * 1000 + 55 * 60 * 1000,
              ),
              city: from,
              code: 'DME',
            },
            toPoint: {
              time: new Date(
                date.getDate() + 22 * 60 * 60 * 1000 + 7 * 60 * 1000,
              ),
              code: 'SVO',
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
        ticketA: {
          carrier: 'S7 Airlines',
          refundable: false,
          cabbinLuggage: true,
          luggage: true,
          price: 4100,
          fromPoint: {
            time: new Date(
              dateTo.getDate() + 22 * 60 * 60 * 1000 + 57 * 60 * 1000,
            ),
            city: from,
            code: 'DME',
          },
          toPoint: {
            time: new Date(
              dateTo.getDate() + (24 + 11) * 60 * 60 * 1000 + 5 * 60 * 1000,
            ),
            code: 'SVO',
            city: to,
          },
        },
        ticketB: {
          carrier: 'S7 Airlines',
          refundable: false,
          cabbinLuggage: true,
          luggage: true,
          price: 4200,
          fromPoint: {
            time: new Date(
              dateBack.getDate() + 17 * 60 * 60 * 1000 + 11 * 60 * 1000,
            ),
            city: to,
            code: 'DME',
          },
          toPoint: {
            time: new Date(
              dateBack.getDate() + 22 * 60 * 60 * 1000 + 0 * 60 * 1000,
            ),
            code: 'SVO',
            city: from,
          },
        },
      },
    ];

    return tickets;
  }
}

const mockApi = new MockApi();

export default mockApi;
