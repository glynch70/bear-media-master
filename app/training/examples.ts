export const demos = [
  {
    label: 'Emails and correspondence', title: 'Reply to a change of plans',
    scenario: 'A client wants to move a review meeting. You have two possible slots.',
    input: 'Draft a friendly reply. Thursday at 10 am or Friday at 2 pm are available. Ask them to choose before I send an invite.',
    output: [['Subject', 'New time for our review'], ['Draft reply', 'Hi, thanks for letting me know. Would Thursday at 10 am or Friday at 2 pm suit you? Once you’ve chosen a slot, I’ll send an updated invitation. Thanks!']],
  },
  {
    label: 'Meetings and notes', title: 'Make the next steps clear',
    scenario: 'You have rough notes from a planning meeting and need a short record to share.',
    input: 'Pilot agreed for one team. Operations checks staffing by Tuesday. No launch date agreed. Summarise the decision, action and open question.',
    output: [['Decision', 'Run the pilot with one team.'], ['Action', 'Operations to confirm staffing by Tuesday.'], ['Open question', 'Agree the launch date once staffing is confirmed.']],
  },
  {
    label: 'Documents and reports', title: 'Write a progress update',
    scenario: 'A manager needs a brief update for the weekly pack.',
    input: 'Of 12 workstation upgrades, 8 are complete. Four are waiting for equipment. Supplier hasn’t confirmed a delivery date. Draft a factual update.',
    output: [['Progress', '8 of 12 workstation upgrades complete.'], ['Blocker', 'Four upgrades are waiting for equipment. Delivery is unconfirmed.'], ['Next step', 'Ask the supplier for an estimated delivery date and update the schedule.']],
  },
  {
    label: 'Invoices and quotations', title: 'Prepare a draft invoice',
    scenario: 'You need to check the charges before entering an invoice in your accounts.',
    input: 'Prepare a draft for 3 hours of consultancy at £80 per hour and £25 agreed travel. Leave VAT, invoice number and payment terms for review.',
    output: [['Consultancy · 3 × £80', '£240.00'], ['Travel', '£25.00'], ['Subtotal before any applicable VAT', '£265.00'], ['Before issuing', 'Verify VAT treatment, client details, invoice number and payment terms in your accounting system.']],
  },
  {
    label: 'Suppliers and materials', title: 'Compare like with like',
    scenario: 'Two suppliers quoted for ten identical storage boxes.',
    input: 'Supplier A quoted £18 each plus £24 delivery in 3 days. Supplier B quoted £19.50 each, delivery included in 5 days. Compare on the assumption both quotes exclude VAT.',
    comparison: [['Supplier A', '3 days', '£204.00'], ['Supplier B', '5 days', '£195.00']],
    output: [['Difference', 'B costs £9 less. A is quoted two days sooner.'], ['Before ordering', 'Confirm specification, quantity, stock, delivery and whether both quotes exclude VAT.']],
  },
  {
    label: 'Planning and organisation', title: 'Put a crowded morning in order',
    scenario: 'You have three jobs to finish before a midday review.',
    input: 'Review at noon. Slides take 45 minutes. Finance needs 30 minutes to verify the figures before I can finish the slides. Supplier call takes 15 minutes. Suggest a plan from 10 am.',
    output: [['10:00', 'Send figures to Finance for verification.'], ['10:05', 'Call the supplier, then prepare the slide structure.'], ['10:35–11:20', 'Finish slides once Finance confirms the figures. Flag any unverified numbers if the review is delayed.'], ['11:20–12:00', 'Check the pack and keep the remaining time as a buffer.']],
  },
]

export const voiceExamples: {
  label: string
  audio: string
  cues: { at: number, text: string }[]
  output: [string, string | string[]][]
}[] = [
  {
    label: 'Follow up a client meeting',
    audio: '/training-audio/client-follow-up-scottish.mp3',
    cues: [
      { at: 0.58, text: "Right, I’ve just come out of that client meeting." },
      { at: 3.54, text: "We’ve agreed to start with a small pilot, and they’ll confirm who’s taking part on Friday." },
      { at: 9.25, text: "Can you pull my notes together, draft a quick follow-up and give me a list of what I need to do next?" },
    ],
    output: [['Meeting summary', 'A small pilot was agreed. The client expects to confirm participants on Friday.'], ['Draft email', 'Thanks for meeting today. I’ll outline the pilot and share the draft for review once you’ve confirmed who’ll take part.'], ['Next actions', ['Draft the pilot outline.', 'Check for the participant list on Friday.', 'Review the email before sending.']]],
  },
  {
    label: 'Organise suppliers and job requirements',
    audio: '/training-audio/supplier-enquiry.mp3',
    cues: [
      { at: 0.10, text: "Quick note on the storeroom job. We need two freestanding shelving units." },
      { at: 4.31, text: "The doorway’s narrow, and we need them delivered before Tuesday." },
      { at: 7.74, text: "Can you put together the job notes and draft a message to the supplier?" },
    ],
    output: [['Job notes', 'Storeroom fit-out. Narrow access. Preferred delivery before Tuesday. Confirm access and room dimensions.'], ['Supplier enquiry', 'Could you quote for two freestanding shelving units and confirm packed dimensions, load rating, delivery cost and earliest arrival?'], ['Materials checklist', ['Two shelving units provisionally.', 'Verify dimensions, quantity and load requirements.', 'Check total cost before ordering.']]],
  },
]

export const teamActionPlan = {
  project: 'Livingston office handover',
  actions: [
    { owner: 'Ailsa', email: 'ailsa@example.com', task: 'Confirm Friday reception cover and update the rota.', deadline: 'Thursday, 12 noon' },
    { owner: 'Ross', email: 'ross@example.com', task: 'Check the spare keys and record who holds each set.', deadline: 'Thursday, 3 pm' },
    { owner: 'Mairi', email: 'mairi@example.com', task: 'Draft the handover note once cover and keys are confirmed.', deadline: 'Friday, 10 am' },
  ],
  decision: 'The handover time is still open. Agree it once reception cover is confirmed.',
}

export const sectors = {
  general: {
    label: 'General business and management',
    title: 'Turn a team catch-up into an action plan',
    description: 'A short catch-up in Livingston becomes a plan your team can share. Pick a Word document or an Excel workbook, then preview the individual task email for each owner.',
    input: 'Ailsa will confirm Friday reception cover by Thursday lunchtime. Ross to check the spare keys by Thursday at 3. Mairi will draft the handover note by Friday at 10, once both are confirmed. Handover time still to agree.',
  },
  property: {
    label: 'Property and estate agency',
    title: 'Turn handwritten visit notes into a digital property record',
    description: 'After a visit in Linlithgow, bring measurements, paperwork and follow-up questions into one shared record for the team.',
    input: 'Hall cupboard is about 1.2 metres wide. Seller says the boiler was serviced last autumn. Latest Home Report is in the shared folder. Need permission to use the garden photos.',
    result: [['Property record', 'Storage: hall cupboard, approx. 1.2 m. Confirm the measurement on the next visit.'], ['Link to source documents', 'Add the approved Home Report link from the shared folder. Attach the boiler service record when received.'], ['Before publishing', 'Verify the service date and check permission to use the garden photos.']],
  },
  legal: {
    label: 'Legal and professional services',
    title: 'Turn a dictated note into a file note and draft letter',
    description: 'A solicitor in Edinburgh dictates the administrative next steps after a call. The team can review both drafts in its approved case file.',
    input: 'Client has a signed copy of the agreement and a letter dated last Monday. Ask them to upload both using our secure link. We’ll confirm the next meeting once we’ve reviewed the papers.',
    result: [['Digital file note', 'Documents requested: signed agreement and the letter dated last Monday. Meeting date pending document review.'], ['Draft letter for review', 'Thank you for speaking with me. Please upload the signed agreement and the letter dated last Monday via our secure link. Once we’ve reviewed the papers, we’ll be in touch to arrange the next meeting.']],
  },
  finance: {
    label: 'Finance and accountancy',
    title: 'Turn a file review into a clear records request',
    description: 'An accountancy practice in Falkirk prepares a short checklist for a client before the bookkeeping file goes for review.',
    input: 'April business bank statement missing. Two card transactions still need receipts: £48 on 12 April and £26 on 19 April. Ask for uploads via the client portal.',
    result: [['Client checklist', 'Upload the April business bank statement and receipts for £48 on 12 April and £26 on 19 April via the client portal.'], ['Practitioner review', 'Match each document to the bookkeeping record and check for any other gaps before closing the review.']],
  },
  construction: {
    label: 'Construction and trades',
    title: 'Update the job plan when a delivery slips',
    description: 'A delivery change on a Bathgate fit-out becomes a short site update with clear checks before the team rebooks work.',
    input: 'Fixtures move from Tuesday to Thursday. Fitter was pencilled in for Wednesday. The stairwell is narrow and the delivery slot hasn’t been confirmed.',
    result: [['Supplier follow-up', 'Confirm Thursday’s delivery slot and packed dimensions.'], ['Site checks', 'Check the access route and ask the fitter for revised availability.'], ['Draft team update', 'Fixture delivery is expected Thursday. Wednesday fitting is on hold until the site lead confirms access and agrees the revised sequence.']],
  },
}

export const products = [
  { label: 'ChatGPT', title: 'Work something through in conversation', description: 'Brainstorm, write, summarise, plan or learn by asking follow-up questions and refining drafts.', workflow: 'Share non-sensitive bullet points → ask for a customer update → check details and adjust the tone.' },
  { label: 'ChatGPT Work', title: 'Work through a task with several steps', description: 'Use supported tools and permitted connections to gather information and prepare a deliverable across several steps.', workflow: 'Choose approved project notes → ask for a briefing and decisions list → review the deliverable and approve external actions where required.' },
  { label: 'Microsoft Copilot', title: 'Get help within Microsoft 365', description: 'Use AI assistance in supported Microsoft 365 apps with the organisational access your account allows.', workflow: 'Open an eligible Word document → ask Copilot to summarise the main points → verify the summary against the document.' },
]

export const timeline = [
  ['08:30', 'Review priorities and emails', 'Pull actions from three messages. Put the reply due at noon first and check the deadlines against the original emails.'],
  ['09:45', 'Prepare meeting notes', 'Turn yesterday’s decisions into an agenda. Carry over the two unresolved questions for discussion.'],
  ['11:30', 'Organise supplier information', 'Compare prices, lead times and delivery on the same basis. Check VAT and stock with each supplier.'],
  ['13:00', 'Create a draft invoice', 'Turn agreed hours and expenses into a draft for review before entering anything in the accounts.'],
  ['15:30', 'Capture tasks and prepare follow-ups', 'Dictate a recap after a meeting and draft an email. Check owners, dates and commitments before sending.'],
  ['17:00', 'Review outstanding actions', 'Group open items into tomorrow’s tasks, decisions to confirm and replies you’re waiting for.'],
]
