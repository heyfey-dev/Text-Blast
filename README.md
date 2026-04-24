📱 Bulk SMS Platform — Frontend

The client-side application for the Bulk SMS Platform, built with Next.js and TypeScript. This dashboard allows users to manage contacts, draft campaigns, and visualize delivery data.
🔗 Backend Repository:
🌐 Live Demo: https://text-blast.vercel.app/


⚡ Project Status: Under Development 🚧
Currently implementing the campaign creation wizard and integrating the API layer with the Express backend.

  🛠 Frontend Tech Stack
Framework: Next.js 14+ (App Router)
Language: TypeScript (Strict Mode)
Styling: Tailwind CSS
Data Fetching: TanStack Query (React Query) for efficient caching and synchronization.
Forms: React Hook Form with Zod validation.
Components: Headless UI / Lucide Icons.


✨ Key UI Features
Responsive Dashboard: A mobile-first administrative interface for managing SMS on the go.
Dynamic Contact Management: Interface to sort, filter, and categorize large contact lists.
Campaign Wizard: A multi-step form to guide users through drafting and scheduling broadcasts.
Real-time Feedback: Toast notifications and loading states for a seamless user experience.


⚙️ Architecture Highlights
Separation of Concerns: The UI is completely decoupled from the backend logic, communicating via a RESTful API.
Type Safety: Shared interfaces to ensure the frontend data structures match the backend API responses.
Optimized Performance: Leveraging Next.js Server Components where possible to reduce client-side JavaScript.


🚀 How to Run Locally
Clone the repo:
git clone https://github.com

Install dependencies:
npm install

Environment Setup:
Create a .env.local file and add your backend API URL:
env
NEXT_PUBLIC_API_URL=http://localhost:5000

Start the development server:
npm run dev


Developed by Okandeji Efemena Daniel  — Focused on building performant, type-safe web applications.
