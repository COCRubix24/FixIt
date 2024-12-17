
# Fixit (Consumer Complaint Solution System):

- Intuitive Platform Design: Our platform boasts an intuitive and user-friendly interface, making it a breeze for consumers to register complaints. It offers multilingual support, ensuring ease of use for everyone.

- Automated Complaint Categorization and Routing: Fixit incorporates machine learning algorithms that automatically categorize and route complaints to the relevant departments or businesses.

- Transparent Tracking System: Users can now monitor the status and progress of their complaints in real-time. Regular updates, estimated resolution timelines, and clear communication channels provide users with a comprehensive overview.

- Anonymous Complaint Submission: Submit complaints anonymously, giving consumers the freedom to voice concerns without hesitation or fear. Even anonymous complaints receive due consideration and become integral to the resolution process.

- Special mention: Fixit goes above and beyond by incorporating Blockchain functionality, adding an extra layer of security and transparency to the consumer complaint resolution process.

- Twitter Bot: This allows users to tweet their complaints using our unique keyword "complain". The bot will then fetch all tweets with this keyword, analyze them, and forward the information to the corresponding company through our backend. Subsequently, the company can address and resolve those complaints.

- Mediation Platform: Fixit features a secure and confidential mediation platform, facilitating communication between consumers and businesses. Users can engage in negotiation and confirm issue resolution, all in one place.

- Competency Leaderboard: Motivate companies to excel through a dynamic leaderboard calculated using total complaints, resolved complaints, and average resolution time, with weights assigned, normalized, and scored.

- Public Awareness: We have integrated a public awareness component to educate consumers about their rights and potential issues within specific industries.



### Directory Structure

        Directory structure:
        └── COCRubix24-FixIt
            ├── flaskback
            │   ├── app.py
            │   ├── ocr.py
            │   ├── spacy_app.py
            │   ├── images
            │   └── requirements.txt
            ├── backend
            │   ├── controllers
            │   │   ├── contact.js
            │   │   ├── ocrAi.js
            │   │   ├── Lawyer.js
            │   │   ├── user.js
            │   │   ├── auth.js
            │   │   ├── company.js
            │   │   └── complain.js
            │   ├── server.js
            │   ├── package.json
            │   ├── models
            │   │   ├── contact.js
            │   │   ├── Lawyer.js
            │   │   ├── User.js
            │   │   ├── Complain.js
            │   │   └── Company.js
            │   ├── config
            │   │   └── cloudinary.js
            │   ├── routes
            │   │   ├── users.js
            │   │   ├── contact.js
            │   │   ├── Lawyer.js
            │   │   ├── auth.js
            │   │   ├── ocrAI.js
            │   │   ├── company.js
            │   │   └── complain.js
            │   ├── package-lock.json
            │   └── utils
            │       ├── error.js
            │       └── verifyToken.js
            ├── frontend
            │   ├── .gitignore
            │   ├── public
            │   │   ├── manifest.json
            │   │   ├── index.html
            │   │   └── robots.txt
            │   ├── package.json
            │   ├── package-lock.json
            │   ├── README.md
            │   └── src
            │       ├── setupTests.js
            │       ├── Components
            │       │   ├── CaseDeets.js
            │       │   ├── NegotiationComponent.js
            │       │   ├── Chat.css
            │       │   ├── Navbar
            │       │   │   ├── Navbar.css
            │       │   │   ├── Contactus.css
            │       │   │   ├── Contactus.jsx
            │       │   │   ├── Navbarlist.jsx
            │       │   │   ├── Blog.css
            │       │   │   ├── Blog.jsx
            │       │   │   └── Navbar.jsx
            │       │   ├── ComplaintComponent.js
            │       │   ├── CaseDeets.css
            │       │   ├── Chat.js
            │       │   ├── MediaComponent.js
            │       │   ├── ResolutionComponent.js
            │       │   ├── SupportComponent.js
            │       │   ├── landing page
            │       │   │   ├── Contact.jsx
            │       │   │   ├── Work.jsx
            │       │   │   ├── all.css
            │       │   │   ├── Home.jsx
            │       │   │   └── About.jsx
            │       │   └── Footer
            │       │       ├── Footer.js
            │       │       └── Footer.css
            │       ├── index.css
            │       ├── context
            │       │   ├── CompanyContext.js
            │       │   └── UserContext.js
            │       ├── assets
            │       ├── App.js
            │       ├── reportWebVitals.js
            │       ├── Pages
            │       │   └── Login
            │       │       ├── DisplayCaseDetailsPage.js
            │       │       ├── LoginB.js
            │       │       ├── Documents.css
            │       │       ├── ChatEngine.js
            │       │       ├── dashboard for user
            │       │       │   ├── Headeruser.jsx
            │       │       │   ├── Sidebaruser.jsx
            │       │       │   ├── SidebarB.js
            │       │       │   ├── Tracking
            │       │       │   │   ├── Tracking.css
            │       │       │   │   └── Tracking.jsx
            │       │       │   ├── Dashboarduser.jsx
            │       │       │   ├── TrackingPage.jsx
            │       │       │   ├── CaseLists.js
            │       │       │   ├── Dashboard.css
            │       │       │   ├── CaseListP.js
            │       │       │   ├── Complainthistory.css
            │       │       │   ├── DashboardB.js
            │       │       │   ├── complaint history
            │       │       │   │   ├── ComplainthistoryPage.jsx
            │       │       │   │   ├── Complainthistory.jsx
            │       │       │   │   └── Complainthistory.css
            │       │       │   ├── Mainuser.jsx
            │       │       │   └── CaseListsB.js
            │       │       ├── Help.css
            │       │       ├── LP.js
            │       │       ├── Login.css
            │       │       ├── LP.css
            │       │       ├── Documents.js
            │       │       ├── LeaderBoard.js
            │       │       ├── dashboard for buiness
            │       │       │   ├── Category.css
            │       │       │   ├── CustomerService.js
            │       │       │   ├── Header.jsx
            │       │       │   ├── Dept.css
            │       │       │   ├── CaseListsb.js
            │       │       │   ├── Main.jsx
            │       │       │   ├── ComplaintBox.css
            │       │       │   ├── Category.js
            │       │       │   ├── Dashboard.css
            │       │       │   ├── ComplaintList.js
            │       │       │   ├── Sidebar.jsx
            │       │       │   ├── ComplaintBox.js
            │       │       │   ├── CaseListB.js
            │       │       │   ├── CategoryPage.js
            │       │       │   ├── ComplaintList.css
            │       │       │   ├── Dashboard.jsx
            │       │       │   └── Dept.js
            │       │       ├── Ask.js
            │       │       ├── Thanks.js
            │       │       ├── Login.js
            │       │       ├── LeaderBoard.css
            │       │       ├── DisplayCaseDetailsPage.css
            │       │       └── Help.js
            │       ├── App.css
            │       ├── App.test.js
            │       └── index.js
            └── README.md


# DEMO 
---
![WhatsApp Image 2024-03-19 at 12 17 27 AM](https://github.com/COCRubix24/Rubix24_COC/assets/110057532/3eb337ea-26fe-4873-996a-7e58db4ff672)
---

![WhatsApp Image 2024-03-19 at 12 17 27 AM (1)](https://github.com/COCRubix24/Rubix24_COC/assets/110057532/4469ba21-7dcb-43a3-b065-40e978d34c74)
---
![WhatsApp Image 2024-03-19 at 12 17 28 AM](https://github.com/COCRubix24/Rubix24_COC/assets/110057532/9212dc6f-bb7b-4ca2-a22b-cca6e8b7e084)
---
![WhatsApp Image 2024-03-19 at 12 17 28 AM (1)](https://github.com/COCRubix24/Rubix24_COC/assets/110057532/451be756-7430-4c8d-8a80-754027f8b7ca)
---

![WhatsApp Image 2024-03-19 at 12 17 29 AM (1)](https://github.com/COCRubix24/Rubix24_COC/assets/110057532/52f73937-5b91-429f-92ee-57f0598a8104)
---
![WhatsApp Image 2024-03-19 at 12 17 29 AM (2)](https://github.com/COCRubix24/Rubix24_COC/assets/110057532/fb1f82e3-2e0e-41fb-a2ba-4264e5dec245)
---
![WhatsApp Image 2024-03-19 at 12 17 30 AM](https://github.com/COCRubix24/Rubix24_COC/assets/110057532/a0ee27ae-3a9a-458c-9966-cb3823e50be2)
