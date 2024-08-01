import { getTableColumns, sql } from "drizzle-orm";
import {
  pgTable,
  serial,
  timestamp,
  text,
  integer,
  pgView,
} from "drizzle-orm/pg-core";
export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  wallet: text("wallet").unique().notNull(),
  score: integer("score").default(0).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const LeaderBoard = pgView("leader_board").as((qb) =>
  qb
    .select({
      rank: sql<number>`RANK() OVER(ORDER BY score DESC)`.as("rank"),
      totalUsers: sql<number>`count(*) over()`.as("total_users"),
      ...getTableColumns(Users),
    })
    .from(Users),
);
