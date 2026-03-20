# Audit Skill

A comprehensive dependency audit skill for Claude Code that analyzes projects for security vulnerabilities, outdated packages, and optimization opportunities.

## Usage

Simply invoke the skill with:

```bash
/audit
```

Or trigger it naturally by asking Claude to:
- "audit the dependencies"
- "check for security vulnerabilities"
- "analyze package bloat"
- "find outdated packages"
- "optimize dependencies"

## Supported Ecosystems

- **Node.js** (npm, yarn, pnpm)
- **Python** (pip, poetry, pipenv)
- **Ruby** (bundler)
- **Rust** (cargo)
- **Go** (go modules)
- **Java** (maven, gradle)

## What It Does

1. **Detects** your project's package manager(s)
2. **Runs** security audits for known vulnerabilities
3. **Checks** for outdated packages
4. **Analyzes** package bloat and installation size
5. **Generates** comprehensive report with recommendations
6. **Creates** fixed package files (optional)
7. **Provides** migration examples for deprecated packages

## Output

The skill creates:

- `DEPENDENCY_AUDIT_REPORT.md` - Comprehensive analysis report
- `audit-report.json` - Raw audit data
- `package.json.recommended` - Fixed package file (optional)
- Code migration examples (optional)

## Report Sections

- Executive Summary
- Critical Security Vulnerabilities
- High Priority Issues
- Outdated Packages Analysis
- Bloat & Optimization Opportunities
- Recommended Actions (prioritized)
- Impact Summary
- Implementation Checklist
- Risk Assessment Matrix

## Example Use Cases

### Security Audit
```
User: "Check this project for security vulnerabilities"
```

### Optimize Bundle Size
```
User: "My node_modules is huge, help me reduce it"
```

### Update Strategy
```
User: "What packages should I update and in what order?"
```

### Migration Planning
```
User: "I need to migrate from deprecated packages"
```

## Features

✅ Multi-language support
✅ Prioritized recommendations
✅ Risk assessment
✅ Size impact analysis
✅ Breaking change detection
✅ Migration guides
✅ Code examples
✅ Timeline suggestions

## Installation

This skill is already installed and ready to use! It's located in:
```
~/.claude/skills/audit/
```

## Customization

You can customize the skill by editing:
```
~/.claude/skills/audit/SKILL.md
```

## Tips

- Run `/audit` at the start of new projects
- Schedule regular audits (monthly/quarterly)
- Run after major version updates
- Use before production deployments
- Include audit reports in documentation

## Version

Created: 2026-01-05
Last Updated: 2026-01-05
Version: 1.0.0
