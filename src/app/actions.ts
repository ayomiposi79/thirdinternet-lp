"use server";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import * as schema from "@/db/schema";
import { revalidatePath } from "next/cache";
import { QuestionsRes } from "@/types";

export async function addUserIfNotInDB({ wallet }: { wallet: string }) {
  const [data] = await db
    .select()
    .from(schema.LeaderBoard)
    .where(eq(schema.LeaderBoard.wallet, wallet))
    .limit(1);

  if (!data) {
    const [user] = await db.insert(schema.Users).values({ wallet }).returning();
    const [data] = await db
      .select()
      .from(schema.LeaderBoard)
      .where(eq(schema.LeaderBoard.id, user.id));
    return data;
  }
  return data;
}

export async function getTop5UsersWithHighestScores() {
  const data = await db.select().from(schema.LeaderBoard).limit(5);
  // revalidatePath("/base-test");
  return data;
}
export async function getUserRank({ wallet }: { wallet: string }) {
  const [data] = await db
    .select()
    .from(schema.LeaderBoard)
    .where(eq(schema.LeaderBoard.wallet, wallet));
  // revalidatePath("/base-test");

  return data;
}

export async function updateScore({
  wallet,
  score,
}: {
  wallet: string;
  score: number;
}) {
  const [user] = await db
    .select()
    .from(schema.Users)
    .where(eq(schema.Users.wallet, wallet))
    .limit(1);
  const updatedScore = user.score + score;
  await db
    .update(schema.Users)
    .set({ score: updatedScore })
    .where(eq(schema.Users.wallet, wallet))
    .returning();
  const [data] = await db
    .select()
    .from(schema.LeaderBoard)
    .where(eq(schema.LeaderBoard.wallet, wallet))
    .limit(1);
  return data;
}

export async function getSubjects() {
  const res = await fetch(
    `${process.env.PAST_QUESTIONS_BASE_URL}/v2/q-subjects`,
    {
      headers: {
        AccessToken: process.env.PAST_QUESTIONS_ACCESS_TOKEN!,
      },
    },
  );
  const data = (await res.json()) as QuestionsRes;
  const structuredData = Object.values(data.subjects);
  return structuredData;
}

export async function getSubjectQuestions(subject: string) {
  const res = await fetch(
    `${process.env.PAST_QUESTIONS_BASE_URL}/v2/m?subject=${subject}`,
    {
      headers: {
        AccessToken: process.env.PAST_QUESTIONS_ACCESS_TOKEN!,
      },
    },
  );
  const data = (await res.json()) as QuestionsRes;

  return data;
}
