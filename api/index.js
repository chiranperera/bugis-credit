import { createServer } from '../server/index.js';

// Create the Express app
const app = createServer();

// Export as serverless function for Vercel
export default app;