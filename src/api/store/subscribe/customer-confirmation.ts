import { 
    type SubscriberConfig, 
    type SubscriberArgs,
    CustomerService,
  } from "@medusajs/medusa"
  
  export default async function handleCustomerCreated({ 
    data, eventName, container, pluginOptions, 
  }: SubscriberArgs<Record<string, string>>) {
    const sendGridService = container.resolve("sendgridService")

  sendGridService.sendEmail({
    templateId: process.env.SENDGRID_ORDER_PLACED_ID,
    from: process.env.SENDGRID_FROM_EMAIL,
    to: data.email,
    dynamic_template_data: {
     
      first_name: data.first_name,
      last_name: data.last_name,
    },
  })
  }
  
  export const config: SubscriberConfig = {
    event: CustomerService.Events.CREATED,
    context: {
      subscriberId: process.env.SENDGRID_API_KEY,
    },
  }