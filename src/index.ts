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
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: #e0e0e0;
        }

        .container {
            background: #2a2a4a;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            max-width: 600px;
            width: 100%;
            text-align: center;
            border: 1px solid #3a3a5a;
        }

        .logo {
            font-size: 3.5rem;
            margin-bottom: 20px;
            color: #00ff88;
        }

        h1 {
            color: #ffffff;
            margin-bottom: 15px;
            font-size: 2.2rem;
            text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
        }

        .status {
            background: #1e3a8a;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            border: 1px solid #3b82f6;
        }

        .status-dot {
            width: 14px;
            height: 14px;
            background: #00ff88;
            border-radius: 50%;
            animation: pulse 2s infinite;
            box-shadow: 0 0 15px #00ff88;
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
        }

        .status-text {
            color: #00ff88;
            font-weight: 600;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }

        .info-card {
            background: #3a3a5a;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #4a4a6a;
            transition: transform 0.3s ease;
        }

        .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 255, 136, 0.2);
        }

        .info-card h4 {
            color: #a0a0c0;
            font-size: 0.9rem;
            margin-bottom: 8px;
        }

        .info-card p {
            color: #ffffff;
            font-weight: 500;
            font-size: 1rem;
        }

        .back-link {
            display: inline-block;
            background: #3b82f6;
            color: #ffffff;
            padding: 12px 30px;
            border-radius: 25px;
            text-decoration: none;
            margin-top: 20px;
            transition: all 0.3s ease;
            border: 1px solid #60a5fa;
        }

        .back-link:hover {
            background: #2563eb;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">⚡️</div>
        <h1>Server Health Check</h1>
        <div class="status">
            <div class="status-dot"></div>
            <span class="status-text">Server is running smoothly</span>
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
        <a href="/" class="back-link">← Back to Home</a>
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
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: #e0e0e0;
        }

        .container {
            background: #2a2a4a;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            width: 100%;
            text-align: center;
            border: 1px solid #3a3a5a;
        }

        .logo {
            font-size: 3.5rem;
            margin-bottom: 20px;
            color: #00ff88;
        }

        h1 {
            color: #ffffff;
            margin-bottom: 10px;
            font-size: 2.5rem;
            text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
        }

        .subtitle {
            color: #a0a0c0;
            font-size: 1.2rem;
            margin-bottom: 30px;
        }

        .status {
            background: #1e3a8a;
            border-radius: 12px;
            padding: 15px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border: 1px solid #3b82f6;
        }

        .status-dot {
            width: 14px;
            height: 14px;
            background: #00ff88;
            border-radius: 50%;
            animation: pulse 2s infinite;
            box-shadow: 0 0 15px #00ff88;
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
        }

        .endpoints {
            background: #3a3a5a;
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            text-align: left;
            border: 1px solid #4a4a6a;
        }

        .endpoint-group {
            margin-bottom: 20px;
        }

        .endpoint-group h3 {
            color: #ffffff;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .endpoint {
            background: #4a4a6a;
            padding: 12px 15px;
            margin: 8px 0;
            border-radius: 8px;
            border-left: 4px solid #00ff88;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: transform 0.3s ease;
        }

        .endpoint:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0, 255, 136, 0.2);
        }

        .method {
            background: #3b82f6;
            color: #ffffff;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-right: 10px;
        }

        .path {
            flex-grow: 1;
            color: #e0e0e0;
            font-family: monospace;
        }

        .description {
            color: #a0a0c0;
            font-size: 0.9rem;
        }

        .quick-links {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
            margin: 25px 0;
        }

        .link {
            background: #3b82f6;
            color: #ffffff;
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 1px solid #60a5fa;
        }

        .link:hover {
            background: #2563eb;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 25px 0;
        }

        .info-card {
            background: #3a3a5a;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #4a4a6a;
            transition: transform 0.3s ease;
        }

        .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 255, 136, 0.2);
        }

        .info-card h4 {
            color: #a0a0c0;
            font-size: 0.9rem;
            margin-bottom: 8px;
        }

        .info-card p {
            color: #ffffff;
            font-weight: 500;
            font-size: 1rem;
        }

        .footer {
            margin-top: 30px;
            color: #a0a0c0;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">🚀</div>
        <h1>SarefinPort Server</h1>
        <div class="subtitle">Personal Portfolio Backend API</div>

        <div class="status">
            <div class="status-dot"></div>
            <strong>Server is running smoothly</strong>
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
            <a href="/api" class="link">API Documentation</a>
            <a href="/api/about" class="link">View Portfolio</a>
        </div>

        <div class="footer">
            <p>🚀 Powered by Express.js & PostgreSQL | SarefinPort Server v1.0.0</p>
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
    <title>API Documentation - SarefinPort</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            padding: 40px 20px;
            color: #e0e0e0;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .header {
            background: #2a2a4a;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 20px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid #3a3a5a;
        }

        .logo {
            font-size: 3.5rem;
            margin-bottom: 15px;
            color: #00ff88;
        }

        h1 {
            color: #ffffff;
            margin-bottom: 10px;
            text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
        }

        .subtitle {
            color: #a0a0c0;
            font-size: 1.1rem;
        }

        .docs-container {
            background: #2a2a4a;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid #3a3a5a;
        }

        .section {
            margin-bottom: 30px;
        }

        .section h2 {
            color: #ffffff;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #4a4a6a;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .endpoint {
            background: #3a3a5a;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 15px;
            border-left: 4px solid #00ff88;
            transition: transform 0.3s ease;
        }

        .endpoint:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0, 255, 136, 0.2);
        }

        .endpoint-header {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }

        .method {
            background: #3b82f6;
            color: #ffffff;
            padding: 6px 12px;
            border-radius: 6px;
            font-weight: bold;
            margin-right: 15px;
            min-width: 80px;
            text-align: center;
        }

        .path {
            font-family: monospace;
            font-size: 1.1rem;
            color: #e0e0e0;
            flex-grow: 1;
        }

        .description {
            color: #a0a0c0;
            margin-bottom: 10px;
        }

        .auth-badge {
            background: #ff3e3e;
            color: #ffffff;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            margin-left: 10px;
        }

        .back-link {
            display: inline-block;
            background: #3b82f6;
            color: #ffffff;
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            margin-top: 20px;
            transition: all 0.3s ease;
            border: 1px solid #60a5fa;
        }

        .back-link:hover {
            background: #2563eb;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">📚</div>
            <h1>API Documentation</h1>
            <div class="subtitle">SarefinPort Server - Complete API Reference</div>
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

            <a href="/" class="back-link">← Back to Home</a>
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
    <title>Page Not Found - SarefinPort</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: #e0e0e0;
        }

        .container {
            background: #2a2a4a;
            border-radius: 16px;
            padding: 50px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            max-width: 500px;
            width: 100%;
            border: 1px solid #3a3a5a;
        }

        .emoji {
            font-size: 4rem;
            margin-bottom: 20px;
            color: #ff3e3e;
        }

        h1 {
            color: #ffffff;
            margin-bottom: 15px;
            text-shadow: 0 0 10px rgba(255, 62, 62, 0.3);
        }

        p {
            color: #a0a0c0;
            margin-bottom: 25px;
            line-height: 1.6;
        }

        .path {
            background: #3a3a5a;
            padding: 10px;
            border-radius: 8px;
            font-family: monospace;
            margin: 15px 0;
            color: #e0e0e0;
            border: 1px solid #4a4a6a;
        }

        .link {
            display: inline-block;
            background: #3b82f6;
            color: #ffffff;
            padding: 12px 30px;
            border-radius: 25px;
            text-decoration: none;
            margin: 10px 5px;
            transition: all 0.3s ease;
            border: 1px solid #60a5fa;
        }

        .link:hover {
            background: #2563eb;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="emoji">🔍</div>
        <h1>Page Not Found</h1>
        <p>The requested URL was not found on this server.</p>
        <div class="path">${req.method} ${req.path}</div>
        <div>
            <a href="/" class="link">Go Home</a>
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
