# VIBE CODING & ARCHITECTURE PROTOCOLS

## 1. THE "FAIL LOUDLY" DOCTRINE (ZERO TOLERANCE)
We do not hide errors. We do not use "safe" defaults. If data is missing, the application must crash immediately and visibly.

* **BANNED PATTERNS (Do Not Use):**
    * `try/except Exception: pass` (Never silence exceptions).
    * Returning empty fallbacks: `return data or {}`, `return value or ""` , `return count or 0`.
    * Fallback chains: `config.get('url') or os.getenv('URL') or 'http://localhost'`.
    * `allow_empty=True` flags on required data parsers.
* **REQUIRED BEHAVIOR:**
    * **Throw Explicit Errors:** If a required env var, database row, or API key is missing, raise a hard `ValueError` or `RuntimeError` immediately with a descriptive message.
    * **Crash the Build:** It is better to break the build now than to ship a silent bug.

## 2. MCP TOOL USAGE (DON'T GUESS, CHECK)
You are connected to live tools. You are forbidden from "hallucinating" schema or styles.

* **Database (@duckdb / @postgres):**
    * *Before writing SQL:* You MUST run a "Describe Table" query (using the MCP tool) to verify column names and types.
    * *No Assumptions:* Never assume a table exists. Check first.
* **Design (@figma):**
    * *Before writing CSS:* You MUST use `@figma` to read the design tokens (colors, spacing, typography) from the source file.
    * *No Magic Numbers:* Do not guess `padding: 12px`. Read the exact value from the design.
* **Codebase (@github):**
    * *Before refactoring:* Use `@github` to read the relevant issue or existing file structure.

## 3. NO MOCK DATA (REALITY ONLY)
* **Live Connections Only:** We do not use `mock_users.json` or `faker` libraries.
* **The "Pipeline" Rule:** If the database connection fails during development, fix the connection. Do not switch to a CSV fallback.
* **Testing:**
    * **End-to-End (E2E) First:** Do not write abstract unit tests. Write scripts that "act like a user."
    * **Success Criteria:** A feature is only "Done" when a script successfully inserts a record into the **live** local database and reads it back.

## 4. UI & VISUAL VERIFICATION
* **"Eyes On" Simulation:** You must code with the frontend in mind.
* **Verification:** When generating UI code, explicitly state: *"I have checked the Figma node. This code implements the [Specific Component Name] with the exact Hex code [Color]."*
* **Visibility:** Ensure error messages are surfaced to the User UI (e.g., Red Toast Notifications), not just buried in the console.

## 5. TERMINAL & HYGIENE
* **Environment:** Use Git Bash / WSL.
* **Context Reset:** If a debugging session lasts more than 5 turns, stop. Summarize the findings and request a "New Chat" to clear the context window.# Configuration and Agent Instructions

## Testing Protocol
**VERY IMPORTANT**: When testing, do NOT run the application on the local machine. You are explicitly required to push all changes to GitHub and test the application directly on Vercel.
