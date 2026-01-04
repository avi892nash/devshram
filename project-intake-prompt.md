# AI Project Intake Prompt

Use this prompt with an AI assistant to automatically extract project information for the DevShram portfolio.

---

## Prompt Template

```
I need to add a project to my portfolio website. Please analyze the following information and provide a structured JSON response that matches the required format.

[PASTE PROJECT INFORMATION HERE - can be:
- GitHub repository URL
- Project documentation
- README content
- Brief project description
- Any combination of the above]

Based on this information, please provide a JSON object with the following structure:

{
  "title": "Project name (concise, clear)",
  "description": "One-sentence description (max 100 characters, focus on what it does)",
  "technologies": ["Array", "of", "technologies", "used"],
  "category": "complete-app | small-project | blog | tool",
  "theme": "purple | green | brown | dark",
  "featured": true or false,
  "liveLink": "https://assets.devshram.com/projects/{project-name}/index.html (required if deployed)",
  "cachedLink": "Backup URL (optional)",
  "githubLink": "GitHub repository URL (optional)",
  "figmaLink": "Figma design URL (optional)",
  "image": "https://assets.devshram.com/projects/{project-name}/main.png (required)"
}

Guidelines for your response:
1. **title**: Extract or create a concise project name
2. **description**: Write a compelling one-sentence description that explains the core value/purpose
3. **technologies**: List 3-6 main technologies (prioritize frameworks/languages over tools)
4. **category**:
   - "complete-app" for full-featured applications
   - "small-project" for prototypes, experiments, or smaller tools
   - "blog" for blog posts or articles
   - "tool" for utilities, CLIs, or developer tools
5. **theme**: Choose based on project type:
   - "purple" for AI/ML, innovative projects
   - "green" for productivity, developer tools
   - "brown" for traditional web apps, general projects
   - "dark" for portfolio/meta projects
6. **featured**: Set to true only if this is a standout project (high quality, unique, or particularly impressive)
7. **liveLink**: Use format https://assets.devshram.com/projects/{project-name}/index.html where {project-name} matches the GitHub workflow YAML file name
8. **image**: ALWAYS use format https://assets.devshram.com/projects/{project-name}/main.png where {project-name} matches the GitHub workflow YAML file name
9. **Links**: Only include links that actually exist. Omit cachedLink, githubLink, and figmaLink fields if not applicable.

Please respond ONLY with the JSON object, no additional explanation.
```

---

## Usage Example

**Input to AI:**
```
I need to add a project to my portfolio website. Please analyze the following information and provide a structured JSON response that matches the required format.

Project: Real-time Collaborative Code Editor
Repository: https://github.com/user/collab-editor
Description: Built a web-based code editor that supports real-time collaboration with syntax highlighting, live cursors, and integrated chat. Uses operational transformation for conflict resolution. Deployed on Vercel with WebSocket support.
Tech Stack: Next.js, TypeScript, Socket.io, Monaco Editor, Redis, PostgreSQL

[REST OF PROMPT TEMPLATE FROM ABOVE]
```

**Expected AI Response:**
```json
{
  "title": "Collaborative Code Editor",
  "description": "Real-time code editor with live collaboration and syntax highlighting",
  "technologies": ["Next.js", "TypeScript", "Socket.io", "Monaco Editor", "Redis"],
  "category": "complete-app",
  "theme": "green",
  "featured": true,
  "liveLink": "https://assets.devshram.com/projects/collab-editor/index.html",
  "githubLink": "https://github.com/user/collab-editor",
  "image": "https://assets.devshram.com/projects/collab-editor/main.png"
}
```

---

## Quick Start

1. Copy the prompt template above
2. Replace `[PASTE PROJECT INFORMATION HERE]` with your project details
3. Send to an AI assistant (ChatGPT, Claude, etc.)
4. Copy the JSON response
5. Provide it to me and I'll add it to your portfolio

---

## Alternative: Quick Format

If you prefer a simpler approach, just provide:

```
Project URL/Info: [GitHub link or description]
Category: [complete-app/small-project/blog/tool]
Featured: [yes/no]
```

And ask the AI: "Extract portfolio project data from this information following the DevShram portfolio schema."
