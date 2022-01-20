import { ChildType } from "./index.d";
const LocalJson = {
  FLEX: [
    {
      title: "",
      content: [
        {
          title: "CRM",
          description:
            "Revolutionize your customer journey management as well as your own - starting all the way from the lead stage but not just ending at move-in. BOSS helps you manage all your accounts, interactions, and minute details during the entire tenancy, ensuring a gratifying customer experience, boosting retention and raising efficiency with a seamless workflow across your teams.",
          list: [
            "Customer management",
            "Lead & opportunity management",
            "Agency management",
          ],
          imageUrl: "flex-0.jpg",
        },
        {
          title: "Contract Management",
          description:
            "With BOSS, the contract stage being painful process becomes a thing of the past. Easily tailor contracts to fit you and your tenant's needs. Fixed-term or subcription? No problem. Get reminders and notifications for renewals, signing and terminations. Have billing, space access and permissions automated from the contract. Use our integrated e-signature process to expedite everything, ensuring everything is smooth-sailing.",
          list: [
            "Full range of contract types",
            "Contract lifecycle management",
            "Automate contract-based billing",
            "e-Signatures",
            "Streamline space access control",
          ],
          imageUrl: "flex-1.jpg",
        },
        {
          title: "Approval Workflows",
          description:
            "Configure your own contract approval workflow and make sure your company's rules are fool-proof.  Once your workflow is set up, the approval process will be passed seamlessly from approver to approver.  Say goodbye to human error.  Be prepared to hear endless 'Thank yous'.",
          list: ["Configurable workflows", "Visual workflows"],
          imageUrl: "flex-2.jpg",
        },
        {
          title: "Inventory & Floor Plan Management",
          description:
            "BOSS makes it easy to self-service to create and manage spaces on floor plans. Search inventory on floor plans including product info, capacity, contract info, etc. Easily check the occupancy status of products on floor plans that are based on contract data. Add a floor visually to a building easily by uploading the floor plan then selecting an area. ",
          list: [
            "Self-service product & inventory management",
            "Streamline Products for sales or booking",
            "Visual floor plans",
          ],
          imageUrl: "flex-3.jpg",
          child: ChildType.carousel,
        },
        {
          title: "Tenant App",
          description:
            "The BOSS App can be white-labeled and customized to your branding.  It is your hand-held tool to engage with your customers. Through your app, your customers can view announcements, get notified about special events as well as make real-time bookings. The easy-to-use app also lets them make service requests and check invoices and make online payments.  Your app can be published in the App Store or Google Play store. ",
          list: ["Tenant engagement", "White-label app", "Available to public"],
          imageUrl: "flex-4.jpg",
        },
        {
          title: "Tenant Experience Management",
          description:
            "BOSS equips you with all the magic you need in ONE tool to manage your customers' journeys. Starting with move-in to move-out management, centralized view for all account management, topped off with tenant engagement through the app.  BOSS also streamlines less visible items such as IT services and credits services that ultimately elevates your tenants' experience​.",
          list: [
            "Tenant lifecycle management",
            "App content management",
            "Tenant survey",
            "Add-on services",
            "Streamline IT services",
          ],
          imageUrl: "flex-5.jpg",
        },
        {
          title: "Room Booking",
          description:
            "Use the BOSS App to let tenants and non-tenants to make real-time bookings for rooms and desks based on their need-locations, amenities, and pricing across all your buildings and locations.  Multiple payment options, cancellation and refunds are supported by the BOSS App. ",
          list: [
            "Tenants book on mobile app",
            "Streamline e-booking management",
            "Allow public users to book",
          ],
          imageUrl: "flex-6.jpg",
          child: ChildType.contcat,
        },
        {
          title: "Billing & Payments",
          description:
            "With BOSS, all your billing and payment woes are gone with the ONE and the SAME system.  Automate invoices for lease add-on services, late fees, credits, amount balances, and billing cycles. Manage multiple-entities under one account.  All types of payments accepted in one stream.  Track payments in real-time.  Set up automatic payment reminders to customers.  Your finance team will thank you. ",
          list: ["Automate billing and invoicing", "Collect payments 24/7"],
          imageUrl: "flex-7.jpg",
        },
        {
          title: "User & Permissions",
          description:
            "BOSS empowers users to review and manage user permissions without IT.   Assign specific roles and grant and restrict permissions to your staff.  Prevent users from viewing confidential data and keep your business data secure. Locate all users within seconds and deactivate users with one click. ",
          list: [
            "Flexible & secure user permissions",
            "Streamlined permission granting",
          ],
          imageUrl: "flex-8.jpg",
        },
        {
          title: "Available to Public",
          description:
            "Public users can self-sign up, book spaces, purchase add-on services, and pay directly on the App using their personal payment. You can select inventory and set different pricing and rules for public users to book these spaces. They can also view perks, events, and announcements.",
          list: [
            "Self-service app signup",
            "Meeting room booking",
            "Add-on services",
          ],
          imageUrl: "flex-9.jpg",
        },
        {
          title: "Multi-company Scalability",
          description:
            "Use BOSS to manage your multi-company enterprise across cities and countries. No need for separate systems in separate locations. Easily create and add inventory in any city.  Localize billing, multi-currency accounting, and contract workflows to fit different business units with different rules, clauses and branding. ",
          list: ["Multiple businesses management", "International markets"],
          imageUrl: "flex-10.jpg",
        },
        {
          title: "Dashboards",
          description:
            "BOSS provides you with a bespoke dashboard for you to customize so you can see what data matters most to you.  Our dashboard provides both historical and real-time data that includes Sales, Occupancy, Member Engagement, and Billing and Payment so that you can operate and optimize your business to the highest degree.",
          list: ["Personalize dashboard", "Key business insights"],
          imageUrl: "flex-11.jpg",
        },
      ],
    },
  ],
  TEA: [
    {
      title: "Tenant Engage Portal",
      content: [
        {
          title: "Content Management System “CMS”",
          description:
            "A rich content editor with multiple attachments, images, and links to power the following engagement features.",
          list: [
            "Building guide info.",
            "Announcement management",
            "Event management",
            "Perks management",
            "News management",
          ],
          imageUrl: "tea-0.jpg",
        },
        {
          title: "Meeting Room Booking",
          description:
            "A flexible booking configuration which will help you to provide a streamlined booking experience and allow both tenants and the public to make real-time meeting room bookings in App.",
          list: [
            "Meeting room configuration",
            "Flexible pricing rules",
            "Booking permission control",
            "Interactive booking on portal",
            "Exportable booking usage",
            "Booking credit module",
            "Multiple payment options",
            "Multiple booking channels",
            "Public booking",
          ],
          imageUrl: "tea-1.jpg",
        },
        {
          title: "Tenant Management",
          description:
            "A central place to manage the tenant company info, tenant accounts and permission as well as all the activities happened.",
          list: ["Account management", "Access control on app"],
          imageUrl: "tea-2.jpg",
        },
        {
          title: "Add-on Services Management",
          description:
            "A place for you to manage add-on services which will help to generate additional revenue. You can customize or add more add-on services when needed.",
          list: ["Add-on a list of services", "One-off & recurring charge"],
          imageUrl: "tea-3.jpg",
        },
        {
          title: "Billing & Payments",
          description:
            "BOSS has already integrated with Stripe to make payments easier. Set up automatic payment reminders to ensure customers pay on time.  Enable permitted tenants to check monthly invoices online with self-service and make in-app payments via credit or debit card directly anytime and anywhere.",
          list: ["Payment receipts", "Payment gateway integration (Stripe)"],
          imageUrl: "tea-4.jpg",
        },
        {
          title: "Reports & Analytics",
          description:
            "A bespoke and real-time dashboard has been provided in BOSS which includes Occupancy, Tenant Engagement reports so that you can operate and optimize your business to the highest degree.",
          list: [
            "Tenant engagement chart",
            "Occupancy & utilization chart",
            "Customizable dashboard",
            "Interactive booking on portal",
            "Exportable to spreadsheet (future)",
          ],
          imageUrl: "tea-5.jpg",
        },
        {
          title: "Account Permission Control",
          description:
            "You are empowered to review and manage user permissions without IT. Locate all users within seconds and deactivate users with one click.",
          list: ["Role based access control", "Portal data permission control"],
          imageUrl: "tea-6.jpg",
        },
      ],
    },
    {
      title: "Tenant App",
      content: [
        {
          title: "White-label App",
          funcList: [
            {
              title: "Brand Design",
              description:
                "Both the App icon and color scheme can be customized to your brand.",
            },
          ],
          imageUrlInLeft: "tea-7.jpg",
        },
        {
          title: "Community Experience",
          funcList: [
            {
              title: "Building Guide",
              description:
                "View details of the building such as contact info, available amenities & facilities, how to get there, etc.",
            },
            {
              title: "Appealing Engagement Content",
              description:
                "All the engagement content (announcements, events, perks, news) that you publish in the admin portal will be displayed in the App for your tenants to see.",
            },
          ],
          imageUrlInLeft: "tea-8.jpg",
        },
        {
          title: "Meeting Room Booking",
          funcList: [
            {
              title: "Real-time Inventory Booking",
              description:
                "Tenants can search spaces and directly make real-time bookings directly on the App.",
            },
            {
              title: "Multiple Booking Payment Options",
              description:
                "Tenants can use booking credits to complete the booking, or the balance will included in their monthly invoice. An immediate payment is required for public users to make a booking.",
            },
          ],
          imageUrlInLeft: "tea-9.jpg",
        },
        {
          title: "Invoicing & Payments",

          funcList: [
            {
              title: "Invoice Check",
              description:
                "Tenants will be able to check all their invoices on the App.",
            },
            {
              title: "Restricted Permission",
              description:
                "Only those accounts that have been granted permission by the tenant can view the invoice.",
            },
            {
              title: "Online Payments",
              description: "Tenants can pay their balances online via Stripe.",
            },
          ],
          imageUrlInLeft: "tea-10.jpg",
        },
        {
          title: "Integration-based Service Requests",
          funcList: [
            {
              title: "Zendesk Integration",
              description:
                "BOSS already integrated with Zendesk to provide a smooth service request process for tenants to submit problems and issues.",
            },
            {
              title: "Ticket Status Tracking",
              description:
                "Tenants will be able to submit a service request and track the update of all their requests.",
            },
            {
              title: "Ticket Communications",
              description:
                "Tenants can provide more details by leaving messages under each ticket and get replies as well. ",
            },
          ],
          imageUrlInLeft: "tea-11.jpg",
        },
        {
          title: "Public User Experience",
          funcList: [
            {
              title: "Self-registration",
              description:
                "Public users are allowed to register an App account.",
            },
            {
              title: "Engagement",
              description:
                "Community content can be available to non-tenants to browse on the App.",
            },
            {
              title: "Meeting Room Booking",
              description:
                "Public users can make meeting room bookings according to your rules. Online payment is required for the public to confirm a booking.",
            },
          ],
          imageUrlInLeft: "tea-12.jpg",
        },
      ],
    },
  ],
};
export default LocalJson;
