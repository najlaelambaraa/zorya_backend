import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.sendStatus(200);
}
export async function POST(req: MedusaRequest, res: MedusaResponse) {
  
}

export async function PUT(req: MedusaRequest, res: MedusaResponse) {
  
}