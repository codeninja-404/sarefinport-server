import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import authRoutes from "./routes/auth.routes";
import aboutRoutes from "./routes/about.routes";
import skillRoutes from "./routes/skill.routes";
import projectRoutes from "./routes/project.routes";
import educationRoutes from "./routes/education.routes";
import contactRoutes from "./routes/contact.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/contact", contactRoutes);

// API Health Check (HTML)
app.get("/api/health", (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Check - SarefinPort</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0d0d0d;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            color: #d9d9d9;
        }
        .container {
            background: #1a1a1a;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
            max-width: 500px;
            width: 100%;
            text-align: center;
            border: 1px solid #2a2a2a;
        }
        .logo {
            font-size: 2rem;
            margin-bottom: 12px;
            color: #00cc88;
        }
        h1 {
            color: #ffffff;
            font-size: 1.8rem;
            margin-bottom: 12px;
        }
        .status {
            background: #1e1e1e;
            border-radius: 6px;
            padding: 12px;
            margin: 12px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid #2a2a2a;
        }
        .status-dot {
            width: 10px;
            height: 10px;
            background: #00cc88;
            border-radius: 50%;
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
        }
        .status-text {
            color: #00cc88;
            font-weight: 500;
            font-size: 0.9rem;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
            margin: 12px 0;
        }
        .info-card {
            background: #1e1e1e;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #2a2a2a;
            transition: transform 0.2s ease;
        }
        .info-card:hover {
            transform: translateY(-2px);
        }
        .info-card h4 {
            color: #a0a0a0;
            font-size: 0.75rem;
            margin-bottom: 4px;
        }
        .info-card p {
            color: #ffffff;
            font-weight: 500;
            font-size: 0.85rem;
        }
        .back-link {
            display: inline-block;
            background: #007bff;
            color: #ffffff;
            padding: 8px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 0.85rem;
            margin-top: 12px;
            transition: all 0.2s ease;
            border: 1px solid #3388ff;
        }
        .back-link:hover {
            background: #0056b3;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">⚡️</div>
        <h1>Server Health</h1>
        <div class="status">
            <div class="status-dot"></div>
            <span class="status-text">Operational</span>
        </div>
        <div class="info-grid">
            <div class="info-card">
                <h4>Status</h4>
                <p>OK</p>
            </div>
            <div class="info-card">
                <h4>Timestamp</h4>
                <p>${new Date().toISOString()}</p>
            </div>
            <div class="info-card">
                <h4>Environment</h4>
                <p>${process.env.NODE_ENV || "development"}</p>
            </div>
            <div class="info-card">
                <h4>Uptime</h4>
                <p>${process.uptime().toFixed(0)}s</p>
            </div>
        </div>
        <a href="/" class="back-link">← Home</a>
    </div>
</body>
</html>
  `;
  res.send(html);
});

// Beautiful HTML Welcome Page
app.get("/", (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SarefinPort Server</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0d0d0d;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            color: #d9d9d9;
        }
        .container {
            background: #1a1a1a;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
            max-width: 700px;
            width: 100%;
            text-align: center;
            border: 1px solid #2a2a2a;
        }
        .logo {
            font-size: 2rem;
            margin-bottom: 12px;
            color: #00cc88;
        }
        h1 {
            color: #ffffff;
            font-size: 2rem;
            margin-bottom: 8px;
        }
        .subtitle {
            color: #a0a0a0;
            font-size: 0.9rem;
            margin-bottom: 16px;
        }
        .status {
            background: #1e1e1e;
            border-radius: 6px;
            padding: 10px;
            margin: 12px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid #2a2a2a;
        }
        .status-dot {
            width: 10px;
            height: 10px;
            background: #00cc88;
            border-radius: 50%;
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
        }
        .endpoints {
            background: #1e1e1e;
            border-radius: 6px;
            padding: 16px;
            margin: 12px 0;
            text-align: left;
            border: 1px solid #2a2a2a;
        }
        .endpoint-group {
            margin-bottom: 12px;
        }
        .endpoint-group h3 {
            color: #ffffff;
            font-size: 1rem;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .endpoint {
            background: #2a2a2a;
            padding: 8px 12px;
            margin: 6px 0;
            border-radius: 6px;
            border-left: 3px solid #00cc88;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: transform 0.2s ease;
        }
        .endpoint:hover {
            transform: translateX(3px);
        }
        .method {
            background: #007bff;
            color: #ffffff;
            padding: 3px 6px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: bold;
            margin-right: 8px;
        }
        .path {
            flex-grow: 1;
            color: #d9d9d9;
            font-family: monospace;
            font-size: 0.85rem;
        }
        .description {
            color: #a0a0a0;
            font-size: 0.8rem;
        }
        .quick-links {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
            margin: 12px 0;
        }
        .link {
            background: #007bff;
            color: #ffffff;
            padding: 8px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 0.85rem;
            transition: all 0.2s ease;
            border: 1px solid #3388ff;
        }
        .link:hover {
            background: #0056b3;
            transform: translateY(-2px);
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
            margin: 12px 0;
        }
        .info-card {
            background: #1e1e1e;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #2a2a2a;
            transition: transform 0.2s ease;
        }
        .info-card:hover {
            transform: translateY(-2px);
        }
        .info-card h4 {
            color: #a0a0a0;
            font-size: 0.75rem;
            margin-bottom: 4px;
        }
        .info-card p {
            color: #ffffff;
            font-weight: 500;
            font-size: 0.85rem;
        }
        .footer {
            margin-top: 16px;
            color: #a0a0a0;
            font-size: 0.8rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">🚀</div>
        <h1>SarefinPort Server</h1>
        <div class="subtitle">Portfolio Backend API</div>
        <div class="status">
            <div class="status-dot"></div>
            <strong>Operational</strong>
        </div>
        <div class="info-grid">
            <div class="info-card">
                <h4>Environment</h4>
                <p>${process.env.NODE_ENV || "development"}</p>
            </div>
            <div class="info-card">
                <h4>Port</h4>
                <p>${PORT}</p>
            </div>
            <div class="info-card">
                <h4>Database</h4>
                <p>PostgreSQL</p>
            </div>
            <div class="info-card">
                <h4>Uptime</h4>
                <p>${process.uptime().toFixed(0)}s</p>
            </div>
        </div>
        <div class="endpoints">
            <div class="endpoint-group">
                <h3>🔐 Authentication</h3>
                <div class="endpoint">
                    <div>
                        <span class="method">POST</span>
                        <span class="path">/api/auth/login</span>
                    </div>
                    <span class="description">Admin login</span>
                </div>
                <div class="endpoint">
                    <div>
                        <span class="method">POST</span>
                        <span class="path">/api/auth/register</span>
                    </div>
                    <span class="description">Create admin account</span>
                </div>
            </div>
            <div class="endpoint-group">
                <h3>📄 Portfolio</h3>
                <div class="endpoint">
                    <div>
                        <span class="method">GET</span>
                        <span class="path">/api/about</span>
                    </div>
                    <span class="description">About information</span>
                </div>
                <div class="endpoint">
                    <div>
                        <span class="method">GET</span>
                        <span class="path">/api/skills</span>
                    </div>
                    <span class="description">Skills & technologies</span>
                </div>
                <div class="endpoint">
                    <div>
                        <span class="method">GET</span>
                        <span class="path">/api/projects</span>
                    </div>
                    <span class="description">Portfolio projects</span>
                </div>
                <div class="endpoint">
                    <div>
                        <span class="method">GET</span>
                        <span class="path">/api/education</span>
                    </div>
                    <span class="description">Education history</span>
                </div>
            </div>
            <div class="endpoint-group">
                <h3>📞 Contact</h3>
                <div class="endpoint">
                    <div>
                        <span class="method">GET</span>
                        <span class="path">/api/contact/info</span>
                    </div>
                    <span class="description">Contact information</span>
                </div>
                <div class="endpoint">
                    <div>
                        <span class="method">POST</span>
                        <span class="path">/api/contact/message</span>
                    </div>
                    <span class="description">Submit contact form</span>
                </div>
            </div>
            <div class="endpoint-group">
                <h3>⚙️ System</h3>
                <div class="endpoint">
                    <div>
                        <span class="method">GET</span>
                        <span class="path">/api/health</span>
                    </div>
                    <span class="description">Server health check</span>
                </div>
            </div>
        </div>
        <div class="quick-links">
            <a href="/api/health" class="link">Health Check</a>
            <a href="/api" class="link">API Docs</a>
            <a href="/api/about" class="link">Portfolio</a>
        </div>
        <div class="footer">
            <p>Powered by Express.js & PostgreSQL | v1.0.0</p>
        </div>
    </div>
</body>
</html>
  `;
  res.send(html);
});

// API Documentation Page (HTML)
app.get("/api", (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Docs - SarefinPort</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0d0d0d;
            min-height: 100vh;
            padding: 16px;
            color: #d9d9d9;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        .header {
            background: #1a1a1a;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 12px;
            text-align: center;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
            border: 1px solid #2a2a2a;
        }
        .logo {
            font-size: 2rem;
            margin-bottom: 8px;
            color: #00cc88;
        }
        h1 {
            color: #ffffff;
            font-size: 1.8rem;
            margin-bottom: 8px;
        }
        .subtitle {
            color: #a0a0a0;
            font-size: 0.9rem;
        }
        .docs-container {
            background: #1a1a1a;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
            border: 1px solid #2a2a2a;
        }
        .section {
            margin-bottom: 16px;
        }
        .section h2 {
            color: #ffffff;
            font-size: 1.2rem;
            margin-bottom: 12px;
            padding-bottom: 6px;
            border-bottom: 1px solid #2a2a2a;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .endpoint {
            background: #2a2a2a;
            border-radius: 6px;
            padding: 10px;
            margin-bottom: 8px;
            border-left: 3px solid #00cc88;
            transition: transform 0.2s ease;
        }
        .endpoint:hover {
            transform: translateX(3px);
        }
        .endpoint-header {
            display: flex;
            align-items: center;
            margin-bottom: 6px;
        }
        .method {
            background: #007bff;
            color: #ffffff;
            padding: 3px 10px;
            border-radius: 4px;
            font-weight: bold;
            font-size: 0.75rem;
            margin-right: 10px;
            min-width: 70px;
            text-align: center;
        }
        .path {
            font-family: monospace;
            font-size: 0.9rem;
            color: #d9d9d9;
            flex-grow: 1;
        }
        .description {
            color: #a0a0a0;
            font-size: 0.8rem;
        }
        .auth-badge {
            background: #ff3333;
            color: #ffffff;
            padding: 3px 6px;
            border-radius: 4px;
            font-size: 0.7rem;
            margin-left: 8px;
        }
        .back-link {
            display: inline-block;
            background: #007bff;
            color: #ffffff;
            padding: 8px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 0.85rem;
            margin-top: 12px;
            transition: all 0.2s ease;
            border: 1px solid #3388ff;
        }
        .back-link:hover {
            background: #0056b3;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">📚</div>
            <h1>API Documentation</h1>
            <div class="subtitle">SarefinPort Server - API Reference</div>
        </div>
        <div class="docs-container">
            <div class="section">
                <h2>🔐 Authentication Endpoints</h2>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">POST</span>
                        <span class="path">/api/auth/login</span>
                    </div>
                    <div class="description">Authenticate admin user and receive JWT token</div>
                </div>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">POST</span>
                        <span class="path">/api/auth/register</span>
                    </div>
                    <div class="description">Create initial admin account (first-time setup)</div>
                </div>
            </div>
            <div class="section">
                <h2>👤 Portfolio Endpoints</h2>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">GET</span>
                        <span class="path">/api/about</span>
                    </div>
                    <div class="description">Get about me information with stats and social links</div>
                </div>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">PUT</span>
                        <span class="path">/api/about</span>
                        <span class="auth-badge">Admin</span>
                    </div>
                    <div class="description">Update about me information</div>
                </div>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">GET</span>
                        <span class="path">/api/skills</span>
                    </div>
                    <div class="description">Get all skills categorized with individual skill items</div>
                </div>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">POST</span>
                        <span class="path">/api/skills</span>
                        <span class="auth-badge">Admin</span>
                    </div>
                    <div class="description">Create new skill category</div>
                </div>
            </div>
            <div class="section">
                <h2>📞 Contact Endpoints</h2>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">GET</span>
                        <span class="path">/api/contact/info</span>
                    </div>
                    <div class="description">Get contact information</div>
                </div>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">POST</span>
                        <span class="path">/api/contact/message</span>
                    </div>
                    <div class="description">Submit contact form message</div>
                </div>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">GET</span>
                        <span class="path">/api/contact/messages</span>
                        <span class="auth-badge">Admin</span>
                    </div>
                    <div class="description">Get all contact messages (admin only)</div>
                </div>
            </div>
            <div class="section">
                <h2>⚙️ System Endpoints</h2>
                <div class="endpoint">
                    <div class="endpoint-header">
                        <span class="method">GET</span>
                        <span class="path">/api/health</span>
                    </div>
                    <div class="description">Check server health and status</div>
                </div>
            </div>
            <a href="/" class="back-link">← Home</a>
        </div>
    </div>
</body>
</html>
  `;
  res.send(html);
});

// 404 Handler with HTML
app.use((req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - SarefinPort</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0d0d0d;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            color: #d9d9d9;
        }
        .container {
            background: #1a1a1a;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
            max-width: 400px;
            width: 100%;
            border: 1px solid #2a2a2a;
        }
        .emoji {
            font-size: 2.5rem;
            margin-bottom: 12px;
            color: #ff3333;
        }
        h1 {
            color: #ffffff;
            font-size: 1.8rem;
            margin-bottom: 12px;
        }
        p {
            color: #a0a0a0;
            font-size: 0.9rem;
            margin-bottom: 16px;
            line-height: 1.4;
        }
        .path {
            background: #1e1e1e;
            padding: 8px;
            border-radius: 6px;
            font-family: monospace;
            margin: 12px 0;
            color: #d9d9d9;
            font-size: 0.85rem;
            border: 1px solid #2a2a2a;
        }
        .link {
            display: inline-block;
            background: #007bff;
            color: #ffffff;
            padding: 8px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 0.85rem;
            margin: 6px;
            transition: all 0.2s ease;
            border: 1px solid #3388ff;
        }
        .link:hover {
            background: #0056b3;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="emoji">🔍</div>
        <h1>404 Not Found</h1>
        <p>The requested URL was not found on this server.</p>
        <div class="path">${req.method} ${req.path}</div>
        <div>
            <a href="/" class="link">Home</a>
            <a href="/api/health" class="link">Health Check</a>
        </div>
    </div>
</body>
</html>
  `;
  res.status(404).send(html);
});

// Error handling middleware
app.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Unhandled error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
);

app.listen(PORT, () => {
  console.log(`
  🚀 SarefinPort Server Started Successfully!
  📍 Local: http://localhost:${PORT}
  🔧 Environment: ${process.env.NODE_ENV || "development"}
  🗄️  Database: PostgreSQL
  ⏰ Started: ${new Date().toISOString()}
  📚 Available Routes:
  🌐 Home: http://localhost:${PORT}
  📊 Health: http://localhost:${PORT}/api/health
  📖 API Docs: http://localhost:${PORT}/api
  ⚡ Server is ready to handle requests!
  `);
});
