/* ============================================================
   EDIT YOUR CONTENT HERE. Everything on the page is driven by
   the objects below. All claims are taken from your CVs; add
   exact numbers (%, AED saved, hours saved) where you have them.
   ============================================================ */

const JOBS = {
  cloud: { when: "03/2023 – Present", title: "Office Manager", co: "Cloud Networks Solutions DMCC · Dubai" },
  fendale: { when: "03/2022 – 12/2022", title: "Finance & Administrative Coordinator", co: "Fendale Cargo Services · Dubai" },
  infinity: { when: "06/2021 – 02/2022", title: "HR & Operations Officer", co: "Infinity Group · Dubai" },
  indu: { when: "11/2020 – 03/2021", title: "Receptionist & Admin Assistant", co: "Indu Maritime & Logistics · JAFZA" },
  almoe: { when: "12/2014 – 08/2020", title: "HR & Administration Officer", co: "Almoe Group · Dubai" },
  mineral: { when: "03/2013 – 11/2014", title: "Receptionist & Executive Assistant", co: "Mineral Circles Bearings FZE · Dubai" }
};

const FOCUS = {
  hr: {
    label: "HR Operations",
    heroLead: "Full-cycle HR for multi-branch and multicultural teams: recruitment, onboarding, employee relations, leave, payroll coordination and UAE Labor Law and free-zone compliance.",
    headline: "HR Operations",
    summary: "I have run HR end to end, from a 200+ employee, 7-branch operation at Almoe Group to being the primary HR function and key HR advisor to the General Manager at Cloud Networks.",
    results: [
      { metric: "200+", title: "Employees across 7 branches", text: "Led HR, payroll and workforce administration for a 200-employee operation across 7 regional locations.", where: "Almoe Group, 2014–2020" },
      { metric: "48 hrs", title: "Paperwork turnaround standard", text: "Introduced a 48-hour paperwork process and a shared branch logbook to track documents, attendance and compliance requirements.", where: "Almoe Group" },
      { metric: "1 → HR", title: "Sole HR function", text: "Served as the primary HR function in the absence of an internal HR department, advising the GM and team leaders on employee relations, performance and policy.", where: "Cloud Networks Solutions" },
      { metric: "Zoho", title: "Leave workflow rebuilt", text: "Implemented leave request, approval and balance tracking in Zoho People, improving leave record accuracy and payroll input.", where: "Cloud Networks Solutions" },
      { metric: "4", title: "Compliance regimes managed", text: "Directed compliance across DMCC, TECOM, RAKIA and Mainland Dubai: trade licenses, establishment cards, visas and fitness certificates.", where: "Almoe Group" },
      { metric: "200", title: "Employee engagement events", text: "Designed multi-branch engagement initiatives and corporate events for up to 200 personnel, managing budgets, vendors and logistics.", where: "Almoe Group" }
    ],
    scope: {
      "Employee lifecycle": ["Full-cycle recruitment and offer generation", "Onboarding and offboarding workflows", "Personnel files and confidential records", "Final settlements and terminations"],
      "Employee relations & performance": ["Investigations and disciplinary actions", "Performance reviews, KPI concerns and warnings", "Conflict resolution and manager advisory", "HR policy and employee handbook development"],
      "Compliance & admin": ["UAE Labor Law alignment", "Employment visas and renewals", "Group health insurance administration", "Leave, attendance and payroll input"]
    },
    jobs: ["cloud", "infinity", "almoe"],
    bullets: {
      cloud: ["Built the company handbook and HR procedures aligned with UAE requirements.", "Managed recruitment, onboarding and offboarding, plus employee relations, investigations and final settlements.", "Partnered with managers on performance reviews, documentation and follow-up actions.", "Tracked visas, licenses, tenancy and group health insurance renewals."],
      infinity: ["Developed HR policies aligned with UAE labor law.", "Ran end-to-end recruitment: sourcing, interviews, offers and onboarding.", "Maintained HR records, leave balances and employee files; handled PRO visa processing."],
      almoe: ["Co-managed HR and admin for 200+ employees across 7 branches.", "Supervised administrative staff across branches and set the 48-hour paperwork standard.", "Coordinated health insurance applications, renewals and cancellations.", "Processed corporate visas and expatriate relocation."]
    }
  },

  exec: {
    label: "Executive Support",
    heroLead: "Trusted right hand to senior leadership: calendars, travel and visas, confidential correspondence, briefings and follow-through, with the discretion to act when the boss is unavailable.",
    headline: "Executive Support",
    summary: "From supporting a CEO to supporting a General Manager across Dubai and Russia, I keep leadership organised, informed and moving.",
    results: [
      { metric: "GM", title: "Day-to-day executive partner", text: "Coordinated the General Manager's calendar, priorities, business travel, accommodation, visas and confidential correspondence.", where: "Cloud Networks Solutions" },
      { metric: "2 offices", title: "Dubai–Russia coordination", text: "Arranged travel, logistics and documentation between the Dubai office and the company's Russia office.", where: "Cloud Networks Solutions" },
      { metric: "Cover", title: "Decisions in the GM's absence", text: "Supported management with operational follow-ups and administrative decisions when the GM was unavailable.", where: "Cloud Networks Solutions" },
      { metric: "CEO", title: "C-level support", text: "Managed calendars, correspondence, meeting arrangements and priority tasks for the CEO, including briefing decks and meeting minutes.", where: "Mineral Circles Bearings" },
      { metric: "Tenders", title: "Pre-sales document support", text: "Supported technical and pre-sales teams by collecting, preparing and reviewing tender documents for complete, timely submission.", where: "Cloud Networks Solutions" },
      { metric: "GITEX", title: "Exhibitions & events", text: "Organised company events and exhibitions such as GITEX and GISEC, coordinating venues, catering, suppliers, logistics and budgets.", where: "Cloud Networks Solutions" }
    ],
    scope: {
      "Calendar & communication": ["Calendar and meeting coordination", "Confidential correspondence and memos", "Company-wide announcements", "Call and email screening"],
      "Travel & logistics": ["Flights, hotels and itineraries", "Business visa applications", "Embassy and travel agency coordination", "Cross-office travel logistics"],
      "Leadership enablement": ["Executive briefings, decks and minutes", "Follow-up on actions and deadlines", "Event and exhibition coordination", "Stakeholder liaison"]
    },
    jobs: ["cloud", "mineral", "almoe"],
    bullets: {
      cloud: ["Provided administrative and executive support to the General Manager.", "Prepared management correspondence, executive memos and company-wide announcements.", "Coordinated communication between management, departments and external stakeholders.", "Introduced structured tracking of deadlines, renewals and outstanding tasks."],
      mineral: ["Supported the CEO with calendars, correspondence and priority tasks.", "Managed international and domestic travel: flights, hotels, visas and itineraries.", "Prepared executive briefing decks, summaries, presentations and meeting minutes.", "Handled confidential information with discretion."],
      almoe: ["Scheduled and managed domestic and international travel for employees and senior leaders.", "Planned meeting and corporate event logistics."]
    }
  },

  office: {
    label: "Office & Workplace Operations",
    heroLead: "Running the workplace so the business runs smoothly: facilities, vendors, procurement, budgets, compliance renewals, safety and events.",
    headline: "Office & Workplace Management",
    summary: "I manage the full operations picture of a Dubai office: landlords and suppliers, purchasing controls, license and insurance renewals, and engagement events.",
    results: [
      { metric: "PO ✓", title: "Stronger purchasing controls", text: "Verified purchase orders and vendor details and matched invoices to approved orders before payment and management approval.", where: "Cloud Networks Solutions" },
      { metric: "5", title: "Renewal trackers maintained", text: "Maintained trackers for visas, trade licenses, tenancy contracts, group health insurance and fitness certificates to keep renewals on time.", where: "Cloud Networks Solutions" },
      { metric: "Quotes", title: "Vendor negotiation", text: "Compared quotations, negotiated pricing and coordinated orders and deliveries across multiple vendors.", where: "Cloud Networks Solutions" },
      { metric: "Fleet", title: "Corporate fleet & insurance", text: "Managed vehicle registrations, fines, driver scheduling and fuel programs, plus Health, Liability, Property, Motor and Workmen's Comp insurance renewals.", where: "Almoe Group" },
      { metric: "OFC", title: "Safety certificates", text: "Assisted annual Operational Fitness Certificate renewals and EHS requirements through TRAKHEES.", where: "Mineral Circles Bearings" },
      { metric: "200", title: "Large-scale events", text: "Delivered corporate events and engagement initiatives for up to 200 personnel, managing budgets, vendors and logistics.", where: "Almoe Group" }
    ],
    scope: {
      "Facilities": ["Maintenance, cleaning, utilities and equipment", "Landlord and building management liaison", "Contractor and service-provider coordination", "Health, safety and EHS compliance"],
      "Procurement & budgets": ["Quotations, POs and vendor management", "Invoice checking and payment coordination", "Expense and budget monitoring", "Inventory and supplies control"],
      "Compliance & events": ["Trade license and establishment card renewals", "Visas, tenancy and insurance tracking", "DMCC, TECOM, RAKIA and Mainland liaison (PRO)", "Corporate events and exhibitions"]
    },
    jobs: ["cloud", "almoe", "mineral"],
    bullets: {
      cloud: ["Managed daily office operations: facilities, maintenance, utilities, cleaning and equipment.", "Coordinated building management, landlords, suppliers and contractors to resolve issues.", "Managed procurement and inventory, comparing quotations and negotiating pricing.", "Managed trade license, establishment card, visa and insurance administration.", "Organised events and exhibitions such as GITEX/GISEC."],
      almoe: ["Oversaw office facilities, procurement, equipment maintenance and utility accounts (DEWA, district cooling, telecom).", "Managed group vehicle fleet operations and corporate insurance portfolio.", "Governed trade license renewals, establishment cards and operational fitness certificates."],
      mineral: ["Coordinated office and warehouse maintenance, pest control, waste removal and equipment servicing.", "Arranged forklift servicing and maintained service records.", "Monitored supplies and consumables to maintain stock levels."]
    }
  },

  admin: {
    label: "Administration & Front Desk",
    heroLead: "Organised, reliable administrative backbone: front desk, records, documentation, invoicing support and day-to-day coordination across teams.",
    headline: "Administration, Admin Support & Front Desk",
    summary: "From reception and visitor management to petty cash, filing and invoicing, I keep information and processes tidy and traceable.",
    results: [
      { metric: "7", title: "Admin staff supervised", text: "Supervised a team of 7 administrative staff across branches, with a 48-hour deadline for paperwork, attendance sheets and employee records.", where: "Almoe Group" },
      { metric: "JAFZA", title: "Gate pass & visitor management", text: "Created and managed visitor and gate passes through the JAFZA portal and kept visitor and call logs.", where: "Indu Maritime & Logistics" },
      { metric: "Docs", title: "Sales documentation", text: "Prepared sales quotations, proforma and commercial invoices and packing lists.", where: "Indu Maritime & Logistics" },
      { metric: "AP/AR", title: "Finance admin support", text: "Handled payables, receivables, collections follow-up, petty cash and reconciliations, with journal entries in Sage ERP.", where: "Fendale Cargo Services" },
      { metric: "Files", title: "Confidential records", text: "Maintained employee, contractual, supplier and company records in an organised, accessible way for authorised stakeholders.", where: "Cloud Networks Solutions" },
      { metric: "Stock", title: "Inventory & access control", text: "Controlled stationery and consumables to avoid stockouts and managed parking allocation, building access and courier distribution.", where: "Mineral Circles Bearings" }
    ],
    scope: {
      "Front desk": ["Visitor and call handling", "Mail, courier and deliveries", "Gate passes and building access", "First point of contact for guests"],
      "Documentation": ["Filing, audit documentation and receipts", "Quotations, invoices and packing lists", "Personnel file maintenance", "Reports, summaries and schedules"],
      "Admin finance": ["Supplier invoice processing", "Petty cash and reimbursements", "Reconciliations and month-end support", "Excel PivotTables and VLOOKUP reporting"]
    },
    jobs: ["indu", "fendale", "almoe", "mineral"],
    bullets: {
      indu: ["Managed front desk, visitor and call logs, mail and courier.", "Created visitor and gate passes via the JAFZA portal.", "Prepared quotations, proforma and commercial invoices and packing lists."],
      fendale: ["Processed and verified supplier payments and invoices.", "Managed petty cash, expense tracking and reimbursements.", "Supported monthly, quarterly and annual closings and audit preparation.", "Used Excel PivotTables and VLOOKUP for variance analysis and reporting."],
      almoe: ["Supervised the receptionist and branch admin staff.", "Introduced the shared branch logbook to track documents and attendance."],
      mineral: ["Ran reception and visitor arrangements.", "Maintained administrative records, receipts and audit documentation.", "Managed stationery inventory, mail and courier distribution."]
    }
  }
};

const TOOLS = [
  ["Zoho People", "leave & HR records"], ["Zoho Books", "invoices & POs"], ["Sage ERP", "journals & ledgers"],
  ["Microsoft Excel", "PivotTables, VLOOKUP"], ["Microsoft 365", "Word, PowerPoint, Outlook"], ["Google Workspace", ""],
  ["ClickUp", ""], ["Zapier", ""], ["Canva", ""], ["AI productivity tools", ""]
];

/* ------------------- rendering (no need to edit) ------------------- */
const $ = id => document.getElementById(id);
const tabs = $("tabs");
let current = "hr";

Object.entries(FOCUS).forEach(([key, f]) => {
  const b = document.createElement("button");
  b.className = "tab"; b.role = "tab"; b.textContent = f.label; b.dataset.key = key;
  b.onclick = () => select(key, true);
  tabs.appendChild(b);
});

function select(key, push) {
  if (!FOCUS[key]) key = "hr";
  current = key;
  const f = FOCUS[key];
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.key === key));
  $("hero-lead").textContent = f.heroLead;
  $("focus-panel").innerHTML = `<h3>${f.headline}</h3><p>${f.summary}</p>`;
  $("results-cards").innerHTML = f.results.map(r =>
    `<div class="card"><div class="metric">${r.metric}</div><h4>${r.title}</h4><p>${r.text}</p><div class="where">${r.where}</div></div>`).join("");
  $("scope-grid").innerHTML = Object.entries(f.scope).map(([g, items]) =>
    `<div class="group"><h4>${g}</h4><ul>${items.map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("");
  $("exp-sub").textContent = `Roles and responsibilities most relevant to ${f.label}.`;
  $("timeline").innerHTML = f.jobs.map(j => {
    const job = JOBS[j];
    return `<div class="job"><div class="when">${job.when}</div><h4>${job.title}</h4><div class="co">${job.co}</div><ul>${f.bullets[j].map(b => `<li>${b}</li>`).join("")}</ul></div>`;
  }).join("");
  if (push) history.replaceState(null, "", `?focus=${key}#focus`);
}

$("tools-chips").innerHTML = TOOLS.map(([n, s]) => `<span class="chip">${n}${s ? `<small>${s}</small>` : ""}</span>`).join("");
$("yr").textContent = new Date().getFullYear();
select(new URLSearchParams(location.search).get("focus") || "hr", false);
