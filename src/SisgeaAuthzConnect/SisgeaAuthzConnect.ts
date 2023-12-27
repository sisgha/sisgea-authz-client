import { type Channel, createClient, waitForChannelReady } from 'nice-grpc';
import { SisgeaAuthzCheckerClient, SisgeaAuthzCheckerDefinition } from '../infrastructure';

export class SisgeaAuthzConnect {
  constructor(private channel: Channel) {}

  //

  get checkerClient() {
    return SisgeaAuthzConnect.getCheckerClient(this.channel);
  }

  static getCheckerClient(channel: Channel) {
    const client: SisgeaAuthzCheckerClient = createClient(SisgeaAuthzCheckerDefinition, channel);
    return client;
  }

  //

  async connect(timeout = 2 * 60 * 1000) {
    await waitForChannelReady(this.channel, new Date(Date.now() + timeout));
  }

  //

  async dispose() {
    this.channel.close();
  }

  //
}
