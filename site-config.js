/* CBSYSTEM SITE SETTINGS - created by the website editor.
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
  "activation": "Your system is activated within 2 days to 7 days of your order being confirmed and payment received.",
  "orderEmail": "orders@cbsystem.co.uk",
  "vatNote": "All prices exclude VAT. Setup for your menu, products and staff is included.",
  "logins": [
    {
      "name": "Shop POS",
      "url": "https://shop.cbsystem.co.uk/admin",
      "icon": "🛒",
      "color": "#ff6b35",
      "note": "Till, stock and owner"
    },
    {
      "name": "Restaurant POS",
      "url": "https://restaurant.cbsystem.co.uk/admin",
      "icon": "🍽️",
      "color": "#4a9eff",
      "note": "Till, waiter, kitchen and bar"
    },
    {
      "name": "Staff App",
      "url": "https://staff.cbsystem.co.uk/admin",
      "icon": "👥",
      "color": "#2dd4a0",
      "note": "Staff sign in"
    },
    {
      "name": "Pet Care",
      "url": "https://https://pet.cbsystem.co.uk/admin/",
      "icon": "🔗",
      "color": "#9a9ab8",
      "note": ""
    },
    {
      "name": "New app",
      "url": "https://",
      "icon": "🔗",
      "color": "#9a9ab8",
      "note": "",
      "hidden": true
    }
  ],
  "products": [
    {
      "id": "shop",
      "short": "Barcode · Stock · Till",
      "icon": "🛒",
      "name": "Shop POS",
      "color": "#ff6b35",
      "tagline": "Supermarket and convenience store till with built-in stock control.",
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
        [
          "screenshots/shop-till.jpg",
          "Till: product grid, basket and one-touch charge"
        ],
        [
          "screenshots/shop-stock.jpg",
          "Stock: receive goods, transfer and stocktake"
        ],
        [
          "screenshots/shop-dashboard.jpg",
          "Owner dashboard: sales, profit, VAT and stock value"
        ],
        [
          "screenshots/shop-products.jpg",
          "Products: prices, barcodes and categories"
        ],
        [
          "screenshots/shop-reports.jpg",
          "Reports: see how the business is performing"
        ]
      ],
      "monthly": "24.99",
      "monthlyUnit": "per month, one till",
      "oneoff": "349",
      "oneoffUnit": "one-off, one till",
      "planFeatures": [
        "Barcode checkout and receipts",
        "Multi-location stock control",
        "Owner dashboard and reports"
      ],
      "cta": "Get Shop POS",
      "payMonthly": "",
      "payOneoff": ""
    },
    {
      "id": "restaurant",
      "short": "Tables · Kitchen · Bar",
      "icon": "🍽️",
      "name": "Restaurant and Bar POS",
      "color": "#4a9eff",
      "tagline": "Till, waiter, kitchen, bar and self-order kiosk working as one.",
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
        [
          "screenshots/rest-launcher.jpg",
          "Seven stations, one launcher"
        ],
        [
          "screenshots/rest-till.jpg",
          "Till: menu, tables and order in one screen"
        ],
        [
          "screenshots/rest-waiter.jpg",
          "Waiter: pick a table and take the order"
        ],
        [
          "screenshots/rest-kitchen.jpg",
          "Kitchen display: new, cooking and ready"
        ],
        [
          "screenshots/rest-bar.jpg",
          "Bar display: drinks queue with done buttons"
        ],
        [
          "screenshots/rest-owner.jpg",
          "Owner dashboard: live tables and revenue"
        ]
      ],
      "monthly": "34.99",
      "monthlyUnit": "per month, one till",
      "oneoff": "499",
      "oneoffUnit": "one-off, one till",
      "planFeatures": [
        "Tables, kitchen and bar displays",
        "Split bills, discounts and refunds",
        "Kiosk and second screen from £99 each"
      ],
      "cta": "Get Restaurant POS",
      "payMonthly": "",
      "payOneoff": ""
    },
    {
      "id": "clockin",
      "short": "Shifts · Attendance",
      "icon": "⏱️",
      "name": "Clock-in",
      "color": "#2dd4a0",
      "tagline": "Know who is in, who is late and how many hours were worked.",
      "intro": "Staff clock in and out on a shared terminal or their own phone. Managers see the whole team at a glance and hours are ready for payroll.",
      "features": [
        "Clock in, clock out and breaks",
        "Live view of who is on shift, on break or late",
        "Timesheets for every employee",
        "Hours today and weekly totals",
        "Attendance reports with Excel export",
        "Hours pass straight to Payroll"
      ],
      "slides": [
        [
          "screenshots/mock-clockin.jpg",
          "Today: who is in, on break or late",
          true
        ]
      ],
      "monthly": "4.99",
      "monthlyUnit": "per month, up to 5 staff",
      "oneoff": "149",
      "oneoffUnit": "one-off, up to 5 staff",
      "planFeatures": [
        "Terminal and mobile clock-in",
        "Timesheets and reports",
        "Excel export"
      ],
      "cta": "Get Clock-in",
      "payMonthly": "",
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
        [
          "screenshots/mock-holidays.jpg",
          "Team calendar with pending requests",
          true
        ]
      ],
      "monthly": "3.99",
      "monthlyUnit": "per month, up to 5 staff",
      "oneoff": "99",
      "oneoffUnit": "one-off, up to 5 staff",
      "planFeatures": [
        "Requests and approvals",
        "Team calendar",
        "Allowance tracking"
      ],
      "cta": "Get Holidays",
      "payMonthly": "",
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
        [
          "screenshots/mock-payroll.jpg",
          "Pay run: gross, tax, NI and net for the team",
          true
        ],
        [
          "screenshots/mock-payslip.jpg",
          "Payslip: earnings and deductions",
          true
        ]
      ],
      "monthly": "9.99",
      "monthlyUnit": "per month plus £1.99 per employee",
      "oneoff": "",
      "oneoffUnit": "UK tax rules change every April",
      "planFeatures": [
        "Employee profiles",
        "Pay runs and payslips",
        "Hours from clock-in"
      ],
      "cta": "Ask about Payroll",
      "payMonthly": "",
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
        [
          "screenshots/mock-pet.jpg",
          "Today's appointments and pet profile",
          true
        ]
      ],
      "monthly": "29.99",
      "monthlyUnit": "per month",
      "oneoff": "399",
      "oneoffUnit": "one-off",
      "planFeatures": [
        "Owners, pets and bookings",
        "Vaccination tracking",
        "Built-in till"
      ],
      "cta": "Get Pet Care",
      "payMonthly": "",
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
        [
          "screenshots/mock-production.jpg",
          "Output and cost per kilo by shift",
          true
        ]
      ],
      "monthly": "39.99",
      "monthlyUnit": "per month",
      "oneoff": "499",
      "oneoffUnit": "one-off",
      "planFeatures": [
        "Excel upload",
        "Shift charts",
        "Cost per kilo"
      ],
      "cta": "Get Production Dashboard",
      "payMonthly": "",
      "payOneoff": ""
    }
  ],
  "custom": {
    "title": "Custom",
    "price": "Quote",
    "unit": "Priced to your requirement",
    "bullets": [
      "Bundles of several products",
      "Multiple sites",
      "Tools built around your business"
    ]
  }
};
