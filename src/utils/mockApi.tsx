import FormValues from '../types/FormValues';
import { RoundTicket, SingleTicket } from '../types/Ticket';

class MockApi {
  async search(query: FormValues): Promise<SingleTicket[] | RoundTicket[]> {
    let tickets: SingleTicket[] | RoundTicket[];
    if (query['date-back']) {
      tickets = this._generateRoundTickets(query);
    } else {
      tickets = this._generateSingleTickets(query);
    }

    await this._setTimeout(2500);
    return tickets;
  }

  private _generateSingleTickets(query: FormValues): SingleTicket[] {
    const tickets: SingleTicket[] = [];

    // const ticket: SingleTicket = {
    //   type: 'single',
    //   ticket: {
    //     carrier: 'S7 Airlines',
    //     refundable: false,
    //     cabbinLuggage: true,
    //     luggage: true,
    //     price: 14150,
    //     fromPoint: {
    //       time: Date,
    //       city: query.from,
    //       code: 'SVO',
    //     },
    //     toPoint: {
    //       time: Date,
    //       city: query.to,
    //       code: 'DME',
    //     },
    //   }
    // };

    return tickets;
  }

  private _generateRoundTickets(query: FormValues): RoundTicket[] {
    const tickets: RoundTicket[] = [];

    return tickets;
  }

  private _setTimeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

const mockApi = new MockApi();

export default mockApi;
