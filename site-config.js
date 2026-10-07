/* CBSystem SITE SETTINGS
   Software only. Hardware supplied on request with a personalised deal.
   To change prices again, open admin.html on your computer. */
const SITE = {
  "comingSoon": false,
  "comingSoonTitle": "Coming soon",
  "comingSoonText": "We are updating our website. Ordering and new plans will be back shortly.",
  "legal": {
    "name": "",
    "number": "",
    "address": "",
    "ico": "",
    "vat": ""
  },
  "email": "info@cbsystem.co.uk",
  "currency": "£",
  "activation": "Start your free trial today. Your system is set up within 2 to 7 days of your order being confirmed.",
  "orderEmail": "orders@cbsystem.co.uk",
  "vatNote": "All prices exclude VAT. Setup for your menu, products and staff is included.",

  "trial": {
    "enabled": true,
    "days": 14,
    "title": "14-day free trial",
    "text": "Try everything free for 14 days. No card needed. Cancel any time."
  },
  "startupOffer": {
    "enabled": true,
    "title": "Startup offer",
    "text": "New business? Get launch pricing on your first year. Ask us for details."
  },
  "hardware": {
    "title": "Hardware on request",
    "text": "CBSystem is sold as software only. Need tills, printers, tablets, scanners or NFC tags? We can supply hardware to suit your business, with a personalised deal. Just ask."
  },
  "yearlyNote": "Pay yearly and save the equivalent of 2 months.",

  "logins": [],

  "products": [
    {
      "id": "shop",
      "short": "Barcode · Stock · Till",
      "icon": "🛒",
      "name": "Shop POS",
      "color": "#ff6b35",
      "tagline": "Supermarket and convenience store till with built-in stock control. Software only.",
      "intro": "CBSystem Market is a complete till and inventory system for supermarkets, convenience stores and retail counters. Sell fast at the till, receive and count stock in the back, and see profit and VAT from the owner dashboard.",
      "features": [
        "Touch till with product grid, categories and search",
        "Barcode scanning by scanner or phone camera",
        "Basket with quantity buttons, discounts and payment method",
        "Returns, voids and cash drawer control",
        "Multi-location stock: Main Store, Stockroom and Cold Store",
        "Stock intake, transfers between locations and stocktakes",
        "Low stock alerts and stock value at cost price",
        "Owner dashboard: sales, net revenue, gross profit, items sold, VAT collected, discounts and refunds",
        "Top products and recent transactions",
        "Products, customers and promotions management",
        "Customer-facing display",
        "Staff PIN login with Owner, Manager, Till and Stock roles"
      ],
      "slides": [
        ["screenshots/shop-till.jpg", "Till: product grid, basket and one-touch charge"],
        ["screenshots/shop-stock.jpg", "Stock: receive goods, transfer and stocktake"],
        ["screenshots/shop-dashboard.jpg", "Owner dashboard: sales, profit, VAT and stock value"],
        ["screenshots/shop-products.jpg", "Products: prices, barcodes and categories"],
        ["screenshots/shop-reports.jpg", "Reports: see how the business is performing"]
      ],
      "monthly": "9.99",
      "monthlyUnit": "per month, one till",
      "yearly": "99",
      "yearlyUnit": "per year, one till (save 2 months)",
      "oneoff": "",
      "oneoffUnit": "",
      "planFeatures": [
        "Barcode checkout and receipts",
        "Multi-location stock control",
        "Owner dashboard and reports"
      ],
      "cta": "Start free trial",
      "payMonthly": "",
      "payYearly": "",
      "payOneoff": ""
    },
    {
      "id": "restaurant",
      "short": "Tables · Kitchen · Bar",
      "icon": "🍽️",
      "name": "Restaurant and Bar POS",
      "color": "#4a9eff",
      "tagline": "Till, waiter, kitchen, bar and self-order kiosk working as one. Software only.",
      "intro": "CBSystem PRO connects every station in a restaurant, bar or takeaway. Waiters send orders from the table, the kitchen and bar see their own tickets instantly, and the owner watches the whole floor live.",
      "features": [
        "Seven stations from one launcher: Till, Waiter, Kitchen, Bar, Owner, Customer display and Self-order kiosk",
        "Live floor plan for 20 tables, with Restaurant and Bar areas",
        "Full menu with categories, search and one-tap items",
        "Covers, eat-in and takeaway orders",
        "Send items to the Kitchen and Bar separately",
        "Kitchen display with New, Cooking and Ready columns and order timers",
        "Bar display with pending drinks and done buttons",
        "Split bills, discounts, move table and refunds",
        "Cash and card payment, with a voids log",
        "Bookings",
        "Owner dashboard: revenue, running tabs, average cover, kitchen and bar queue, voids and recent transactions",
        "Self-order kiosk and customer-facing display",
        "Staff PIN login with roles"
      ],
      "slides": [
        ["screenshots/rest-launcher.jpg", "Seven stations, one launcher"],
        ["screenshots/rest-till.jpg", "Till: menu, tables and order in one screen"],
        ["screenshots/rest-waiter.jpg", "Waiter: pick a table and take the order"],
        ["screenshots/rest-kitchen.jpg", "Kitchen display: new, cooking and ready"],
        ["screenshots/rest-bar.jpg", "Bar display: drinks queue with done buttons"],
        ["screenshots/rest-owner.jpg", "Owner dashboard: live tables and revenue"]
      ],
      "monthly": "19.99",
      "monthlyUnit": "per month, one till",
      "yearly": "199",
      "yearlyUnit": "per year, one till (save 2 months)",
      "oneoff": "",
      "oneoffUnit": "",
      "planFeatures": [
        "Tables, kitchen and bar displays",
        "Split bills, discounts and refunds",
        "Kiosk and second screen available on request"
      ],
      "cta": "Start free trial",
      "payMonthly": "",
      "payYearly": "",
      "payOneoff": ""
    },
    {
      "id": "clockin",
      "short": "NFC · Shifts · Attendance",
      "icon": "⏱️",
      "name": "Clock-in Staff App",
      "color": "#2dd4a0",
      "tagline": "Staff tap an NFC tag to clock in. Know who is in, who is late and how many hours were worked.",
      "intro": "Staff clock in and out with an NFC tag that we provide, or from their own phone. Managers see the whole team at a glance and hours are ready for payroll.",
      "features": [
        "NFC tag clock-in: tags provided by us",
        "Clock in, clock out and breaks",
        "Live view of who is on shift, on break or late",
        "Timesheets for every employee",
        "Hours today and weekly totals",
        "Attendance reports with Excel export",
        "Hours pass straight to Payroll"
      ],
      "slides": [
        ["screenshots/mock-clockin.jpg", "Today: who is in, on break or late", true]
      ],
      "monthly": "2.99",
      "monthlyUnit": "per month, up to 5 staff",
      "yearly": "29",
      "yearlyUnit": "per year, up to 5 staff (save 2 months)",
      "oneoff": "",
      "oneoffUnit": "",
      "planFeatures": [
        "NFC tags provided",
        "Timesheets and reports",
        "Excel export"
      ],
      "cta": "Start free trial",
      "payMonthly": "",
      "payYearly": "",
      "payOneoff": ""
    },
    {
      "id": "holidays",
      "short": "Requests · Calendar",
      "icon": "🏖️",
      "name": "Holiday Management",
      "color": "#ffd700",
      "tagline": "Replace holiday spreadsheets with requests, approvals and a team calendar.",
      "intro": "Employees request time off, managers approve in one tap, and the team calendar shows who is away so shifts are never left short.",
      "features": [
        "Staff request leave from their phone",
        "Approve or decline in one tap",
        "Remaining allowance always visible",
        "Team calendar with clash warnings",
        "Sickness and other absence types",
        "Yearly allowance settings per employee"
      ],
      "slides": [
        ["screenshots/mock-holidays.jpg", "Team calendar with pending requests", true]
      ],
      "monthly": "2.49",
      "monthlyUnit": "per month, up to 5 staff",
      "yearly": "24",
      "yearlyUnit": "per year, up to 5 staff (save 2 months)",
      "oneoff": "",
      "oneoffUnit": "",
      "planFeatures": [
        "Requests and approvals",
        "Team calendar",
        "Allowance tracking"
      ],
      "cta": "Start free trial",
      "payMonthly": "",
      "payYearly": "",
      "payOneoff": ""
    },
    {
      "id": "payroll",
      "short": "Pay runs · Payslips",
      "icon": "💷",
      "name": "Payroll and HR",
      "color": "#a78bfa",
      "tagline": "UK payroll and employee records in one secure place.",
      "intro": "CBSystem HR+ keeps employee records, hours and pay together. Run payroll from clock-in hours and give each employee a clear payslip.",
      "features": [
        "Employee profiles and documents",
        "Pay runs from clock-in hours",
        "Income tax, National Insurance and pension lines on payslips",
        "Payslips for every employee",
        "Separate, secure space for each organisation",
        "Payroll reports and export"
      ],
      "slides": [
        ["screenshots/mock-payroll.jpg", "Pay run: gross, tax, NI and net for the team", true],
        ["screenshots/mock-payslip.jpg", "Payslip: earnings and deductions", true]
      ],
      "monthly": "7.99",
      "monthlyUnit": "per month plus £1.49 per employee",
      "yearly": "79",
      "yearlyUnit": "per year plus £14 per employee (save 2 months)",
      "oneoff": "",
      "oneoffUnit": "",
      "planFeatures": [
        "Employee profiles",
        "Pay runs and payslips",
        "Hours from clock-in"
      ],
      "cta": "Start free trial",
      "payMonthly": "",
      "payYearly": "",
      "payOneoff": ""
    },
    {
      "id": "pet",
      "short": "Bookings · Pets",
      "icon": "🐾",
      "name": "Pet Care",
      "color": "#f472b6",
      "tagline": "Appointments, pet records and a till for pet shops, groomers and kennels.",
      "intro": "Keep every owner and pet in one place, book grooming and boarding, and remind clients when vaccinations are due.",
      "features": [
        "Owner and pet records with notes",
        "Grooming, vet and boarding appointments",
        "Vaccination and flea treatment tracking",
        "Visit reminders",
        "Boarding check-in and check-out",
        "Built-in till for products and services"
      ],
      "slides": [
        ["screenshots/mock-pet.jpg", "Today's appointments and pet profile", true]
      ],
      "monthly": "19.99",
      "monthlyUnit": "per month",
      "yearly": "199",
      "yearlyUnit": "per year (save 2 months)",
      "oneoff": "",
      "oneoffUnit": "",
      "planFeatures": [
        "Owners, pets and bookings",
        "Vaccination tracking",
        "Built-in till"
      ],
      "cta": "Start free trial",
      "payMonthly": "",
      "payYearly": "",
      "payOneoff": ""
    },
    {
      "id": "production",
      "short": "Shifts · Cost per kg",
      "icon": "🏭",
      "name": "Production Dashboard",
      "color": "#22d3ee",
      "tagline": "See output and cost per kilo by shift, straight from your Excel data.",
      "intro": "Built for food manufacturers. Upload shift data from Excel and get clear charts of output, tonnage and cost per kilo.",
      "features": [
        "Upload shift data from Excel",
        "Output and tonnage by shift",
        "Cost per kilo by shift",
        "Downtime overview",
        "Weekly and monthly comparison"
      ],
      "slides": [
        ["screenshots/mock-production.jpg", "Output and cost per kilo by shift", true]
      ],
      "monthly": "24.99",
      "monthlyUnit": "per month",
      "yearly": "249",
      "yearlyUnit": "per year (save 2 months)",
      "oneoff": "",
      "oneoffUnit": "",
      "planFeatures": [
        "Excel upload",
        "Shift charts",
        "Cost per kilo"
      ],
      "cta": "Start free trial",
      "payMonthly": "",
      "payYearly": "",
      "payOneoff": ""
    }
  ],
  "custom": {
    "title": "Custom",
    "price": "Quote",
    "unit": "Personalised deals, including hardware",
    "bullets": [
      "Bundles of several products",
      "Multiple sites",
      "Hardware supplied to your requirement",
      "Tools built around your business"
    ]
  }
};
