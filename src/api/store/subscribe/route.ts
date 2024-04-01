import type { 
    MedusaRequest, 
    MedusaResponse,
  } from "@medusajs/medusa"
  
  export const POST = async (
    req: MedusaRequest, 
    res: MedusaResponse
  ) => {
    const mailchimpService = req.scope.resolve(
      "mailchimpService"
    )
  
    try {
      await mailchimpService.subscribeNewsletter("example@gmail.com");
      res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Subscription failed" });
    }
    
    
  }