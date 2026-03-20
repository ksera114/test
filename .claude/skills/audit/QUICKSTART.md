# 🚀 Audit Skill Quick Start

## 30-Second Setup

```bash
# Install the skill (already done if you're in Claude Code!)
cp -r .claude/skills/audit ~/.claude/skills/

# Use it!
/audit
```

That's it! 🎉

## One-Line Usage

```
/audit
```

Or just ask Claude naturally:
- "Audit dependencies"
- "Check for security vulnerabilities"
- "Find outdated packages"
- "Why is my node_modules so big?"

## What You Get (in 60 seconds)

```
📊 Running dependency audit...

✅ Detected: Node.js project (npm)
✅ Security scan: 34 vulnerabilities found
✅ Outdated check: 9 packages behind
✅ Bloat analysis: 84MB total

📝 Generated:
  → DEPENDENCY_AUDIT_REPORT.md (comprehensive)
  → audit-report.json (raw data)
  → package.json.recommended (fixed)

⚠️  CRITICAL ISSUES:
  🔴 request - deprecated, SSRF vulnerability
  🟠 axios 0.21.1 - CSRF vulnerability

💡 QUICK WINS:
  Save 3.9MB: Replace moment → date-fns
  Save 1.5MB: Optimize lodash imports
  Fix 34 CVEs: Update packages
```

## Supported Languages

| Language | Package Manager | Status |
|----------|----------------|--------|
| Node.js | npm, yarn, pnpm | ✅ |
| Python | pip, poetry | ✅ |
| Ruby | bundler | ✅ |
| Rust | cargo | ✅ |
| Go | go modules | ✅ |
| Java | maven, gradle | ✅ |

## Common Commands

### Full Audit
```
/audit
```

### Security Focus
```
"Check for security vulnerabilities only"
```

### Bloat Analysis
```
"Why is my bundle so large?"
```

### Update Strategy
```
"What should I update and in what order?"
```

### Pre-Deployment Check
```
"Run security audit before deployment"
```

## Report Structure

```
DEPENDENCY_AUDIT_REPORT.md
├── 📊 Executive Summary
├── 🚨 Critical Vulnerabilities
├── 🟠 High Priority Issues
├── 📦 Outdated Packages
├── 🎯 Bloat Analysis
├── ✅ Recommendations (prioritized)
├── 💰 Impact Summary
└── 📋 Implementation Checklist
```

## Priority Levels

| Icon | Priority | Timeline | Example |
|------|----------|----------|---------|
| 🔴 | P0 - CRITICAL | Immediate | Security CVEs |
| 🟠 | P1 - HIGH | This week | Auth issues |
| 🟡 | P2 - MEDIUM | This month | Deprecated packages |
| 🟢 | P3 - LOW | This quarter | Minor updates |

## Real Example Output

```markdown
## Executive Summary
- 🔴 Critical: 2 vulnerabilities
- 🟠 High: 11 vulnerabilities
- 🟡 Moderate: 21 vulnerabilities
- 📦 Outdated: 9 major packages
- 💾 Size: 84MB (can reduce to 40MB)

## Top 3 Actions
1. ⚡ Remove request package (CRITICAL)
2. ⚡ Update axios to 1.13.2 (HIGH)
3. 💡 Replace moment with date-fns (MEDIUM)

## Impact
- 🔒 Security: Fix 34 CVEs
- 📉 Size: Save 5.9MB (89%)
- ⚡ Speed: 35% faster installs
```

## Tips

💡 **Run regularly**: Monthly or before releases
💡 **Start simple**: Fix critical issues first
💡 **Test after**: Always run tests after updates
💡 **Document**: Keep audit reports in version control
💡 **Automate**: Add to CI/CD pipeline

## Troubleshooting

### "Skill not found"
```bash
ls ~/.claude/skills/audit/
# If empty, reinstall from project
```

### "npm audit failed"
```bash
# Make sure you have package.json and package-lock.json
npm install
```

### "No vulnerabilities to report"
```bash
# Great! Your dependencies are secure 🎉
```

## Next Steps

1. **Read the full report**: `DEPENDENCY_AUDIT_REPORT.md`
2. **Check examples**: `.claude/skills/audit/EXAMPLES.md`
3. **Customize**: Edit `~/.claude/skills/audit/SKILL.md`
4. **Share**: Copy skill to other projects

## Get Help

- 📖 Full docs: `README.md`
- 📝 Examples: `EXAMPLES.md`
- ⚙️ Install: `INSTALL.md`
- 🔧 Customize: `SKILL.md`

---

**Happy Auditing! 🎯**
