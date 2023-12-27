import { createClient, type Channel, waitForChannelReady } from 'nice-grpc';
import { SisgeaAuthzCheckerClient, SisgeaAuthzCheckerDefinition, UserCanRequest } from '../infrastructure';

export class SisgeaAuthzConnect {
  constructor(private channel: Channel) {}

  //

  async connect(timeout = 2 * 60 * 1000) {
    await waitForChannelReady(this.channel, new Date(Date.now() + timeout));
  }

  async dispose() {
    this.channel.close();
  }

  //

  static getCheckerClient(channel: Channel) {
    const client: SisgeaAuthzCheckerClient = createClient(SisgeaAuthzCheckerDefinition, channel);
    return client;
  }

  //

  get checkerClient() {
    return SisgeaAuthzConnect.getCheckerClient(this.channel);
  }

  //
}
