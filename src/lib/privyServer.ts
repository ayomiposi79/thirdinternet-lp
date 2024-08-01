import { PrivyClient } from "@privy-io/server-auth";

const privyServer = new PrivyClient(
  process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
  process.env.PRIVY_APP_SECRET!,
);

export default privyServer;
