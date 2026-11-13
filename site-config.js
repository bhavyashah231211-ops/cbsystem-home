/* CBS System SITE SETTINGS. Edit prices, text and slides here.
   One email address is used for everything: admin@cbsystem.co.uk
   "api" is the Supabase Edge Function (index.ts) that receives orders and enquiries. */
const SITE = {
  "comingSoon": false,
  "comingSoonTitle": "Coming soon",
  "comingSoonText": "We are updating our website. Ordering and new plans will be back shortly.",
  "api": "https://xjhkxqhomqdyxgahhtzn.supabase.co/functions/v1/cbs-home",
  "legal": {"name": "", "number": "", "address": "", "ico": "", "vat": ""},
  "email": "admin@cbsystem.co.uk",
  "orderEmail": "admin@cbsystem.co.uk",
  "currency": "£",
  "fromPrice": "3.99",
  "activation": "Your system is set up within 2 to 7 days of your order being confirmed.",
  "vatNote": "All prices exclude VAT. Setup for your menu, services, products and staff is included. More users, screens or staff can be added to any plan.",
  "trial": {"enabled": true, "days": 14, "title": "14-day free trial", "text": "Try everything free for 14 days. No card needed. Cancel any time."},
  "startupOffer": {"enabled": true, "title": "Startup offer", "text": "New business? Get launch pricing on your first year."},
  "hardware": {"title": "Hardware on request", "text": "CBS System is sold as software only. Need tills, printers, tablets, scanners or NFC tags? We can supply hardware to suit your business with a personalised deal."},
  "yearlyNote": "Pay yearly and save the equivalent of 2 months.",
  "logins": [],
  "products": [
    {
      "id": "shop", "icon": "🛒", "name": "Shop POS", "color": "#e8590c", "short": "Barcode, stock and till",
      "tagline": "Till and stock control for supermarkets and convenience stores.",
      "intro": "Sell fast at the till, receive and count stock in the back, and see profit and VAT from the owner dashboard.",
      "features": ["Touch till with barcode scanning by scanner or phone camera", "Returns, voids, discounts and cash drawer control", "Multi-location stock, transfers and stocktakes", "Low stock alerts and stock value at cost", "Owner dashboard with sales, profit, VAT and refunds", "Staff PIN login with Owner, Manager, Till and Stock roles"],
      "variations": ["1 to 2 users", "1 to 2 screens"],
      "slides": [
        ["screenshots/shop-till.jpg", "Till: product grid, basket and one-touch charge"],
        ["screenshots/shop-stock.jpg", "Stock: receive goods, transfer and stocktake"],
        ["screenshots/shop-dashboard.jpg", "Owner dashboard: sales, profit, VAT and stock value"],
        ["screenshots/shop-products.jpg", "Products: prices, barcodes and categories"],
        ["screenshots/shop-reports.jpg", "Reports: see how the business is performing"]
      ],
      "monthly": "9.99", "monthlyUnit": "per month, 1 user, 1 screen", "yearly": "99", "yearlyUnit": "per year, 1 user, 1 screen (save 2 months)",
      "oneoff": "", "oneoffUnit": "", "planFeatures": ["Barcode checkout and receipts", "Multi-location stock control", "Owner dashboard and reports"],
      "cta": "Start free trial", "payMonthly": "", "payYearly": "", "payOneoff": ""
    },
    {
      "id": "restaurant", "icon": "🍽️", "name": "Restaurant POS", "color": "#1c7ed6", "short": "Tables, kitchen and bar",
      "tagline": "Till, waiter, kitchen, bar and self-order kiosk working as one.",
      "intro": "Waiters send orders from the table, the kitchen and bar see their own tickets instantly, and the owner watches the whole floor live.",
      "features": ["Seven stations from one launcher: Till, Waiter, Kitchen, Bar, Owner, Customer display and Kiosk", "Live floor plan with Restaurant and Bar areas", "Kitchen and bar displays with order timers", "Split bills, discounts, move table and refunds", "Bookings and a voids log", "Owner dashboard with live revenue and running tabs"],
      "variations": ["1 to 2 users", "1 to 2 screens"],
      "slides": [
        ["screenshots/rest-launcher.jpg", "Seven stations, one launcher"],
        ["screenshots/rest-till.jpg", "Till: menu, tables and order in one screen"],
        ["screenshots/rest-waiter.jpg", "Waiter: pick a table and take the order"],
        ["screenshots/rest-kitchen.jpg", "Kitchen display: new, cooking and ready"],
        ["screenshots/rest-bar.jpg", "Bar display: drinks queue with done buttons"],
        ["screenshots/rest-owner.jpg", "Owner dashboard: live tables and revenue"]
      ],
      "monthly": "39.99", "monthlyUnit": "per month, 1 user, 1 screen", "yearly": "399", "yearlyUnit": "per year, 1 user, 1 screen (save 2 months)",
      "oneoff": "", "oneoffUnit": "", "planFeatures": ["Tables, kitchen and bar displays", "Split bills, discounts and refunds", "Kiosk and second screen on request"],
      "cta": "Start free trial", "payMonthly": "", "payYearly": "", "payOneoff": ""
    },
    {
      "id": "salon", "icon": "💈", "name": "Salon and Barber", "color": "#7048e8", "short": "Bookings and clients",
      "tagline": "Appointments, client records and a till for salons and barbers.",
      "intro": "Keep every client in one place, fill the diary and take payment at the chair.",
      "features": ["Appointment diary by stylist or barber", "Client records with notes and visit history", "Services, prices and staff schedules", "Appointment reminders", "Built-in till for services and products"],
      "variations": ["1 to 2 users", "1 to 2 screens"],
      "slides": [["screenshots/mock-salon.jpg", "Today's appointments by stylist", true]],
      "monthly": "14.99", "monthlyUnit": "per month, 1 user, 1 screen", "yearly": "149", "yearlyUnit": "per year, 1 user, 1 screen (save 2 months)",
      "oneoff": "", "oneoffUnit": "", "planFeatures": ["Appointment diary", "Client records", "Built-in till"],
      "cta": "Start free trial", "payMonthly": "", "payYearly": "", "payOneoff": ""
    },
    {
      "id": "pet", "icon": "🐾", "name": "Pet Care", "color": "#d6336c", "short": "Bookings and pets",
      "tagline": "Appointments, pet records and a till for pet shops, groomers and kennels.",
      "intro": "Keep every owner and pet in one place, book grooming and boarding, and remind clients when vaccinations are due.",
      "features": ["Owner and pet records with notes", "Grooming, vet and boarding appointments", "Vaccination and flea treatment tracking", "Visit reminders", "Boarding check-in and check-out", "Built-in till for products and services"],
      "variations": ["1 to 2 users", "1 to 2 screens"],
      "slides": [["screenshots/mock-pet.jpg", "Today's appointments and pet profile", true]],
      "monthly": "19.99", "monthlyUnit": "per month, 1 user, 1 screen", "yearly": "199", "yearlyUnit": "per year, 1 user, 1 screen (save 2 months)",
      "oneoff": "", "oneoffUnit": "", "planFeatures": ["Owners, pets and bookings", "Vaccination tracking", "Built-in till"],
      "cta": "Start free trial", "payMonthly": "", "payYearly": "", "payOneoff": ""
    },
    {
      "id": "clockin", "icon": "⏱️", "name": "Clock-in Staff App", "color": "#0ca678", "short": "NFC and attendance",
      "tagline": "Staff tap an NFC tag to clock in. See who is in, who is late and hours worked.",
      "intro": "Staff clock in and out with an NFC tag we provide, or from their own phone. Managers see the whole team at a glance.",
      "features": ["NFC tag clock-in, tags provided by us", "Clock in, clock out and breaks", "Live view of who is on shift, on break or late", "Timesheets and weekly totals", "Attendance reports with Excel export"],
      "variations": ["1 to 10 staff"],
      "slides": [["screenshots/mock-clockin.jpg", "Today: who is in, on break or late", true]],
      "monthly": "5.99", "monthlyUnit": "per month, up to 5 staff", "yearly": "59", "yearlyUnit": "per year, up to 5 staff (save 2 months)",
      "oneoff": "", "oneoffUnit": "", "planFeatures": ["NFC tags provided", "Timesheets and reports", "Excel export"],
      "cta": "Start free trial", "payMonthly": "", "payYearly": "", "payOneoff": ""
    }
  ],
  "custom": {
    "title": "Customised", "price": "Quote", "unit": "Built around your business",
    "bullets": ["Bundles of several products", "More users, screens or staff", "Multiple sites", "Hardware supplied to your requirement"]
  }
};
