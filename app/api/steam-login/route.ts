import { NextRequest, NextResponse } from "next/server";
import steam from "@/steamAuth";

export const GET = async (req: NextRequest) => {
  console.log(1);
  const user = await steam.authenticate(req);
  console.log(user);

  return NextResponse.json({});
};
