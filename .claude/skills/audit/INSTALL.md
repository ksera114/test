# Audit Skill Installation Guide

## What is the Audit Skill?

A custom Claude Code skill that performs comprehensive dependency analysis for your projects. It checks for:
- 🔒 Security vulnerabilities
- 📦 Outdated packages
- 🎯 Unnecessary bloat
- ⚡ Optimization opportunities

## Installation

### Method 1: Automatic (Recommended)

If you're using Claude Code, the skill is automatically installed in `~/.claude/skills/audit/`

### Method 2: Manual Installation

Copy the skill files to your Claude Code skills directory:

```bash
# Create skills directory
mkdir -p ~/.claude/skills/audit

# Copy skill files
cp .claude/skills/audit/* ~/.claude/skills/audit/
```

### Method 3: Symlink (for development)

Link the project skill to your global skills:

```bash
ln -s $(pwd)/.claude/skills/audit ~/.claude/skills/audit
```

## Verification

Check if the skill is installed:

```bash
ls -la ~/.claude/skills/audit/
```

You should see:
- `SKILL.md` - Main skill definition
- `README.md` - Documentation
- `EXAMPLES.md` - Usage examples

## Usage

Once installed, you can invoke the skill in Claude Code by:

### Method 1: Slash Command
```
/audit
```

### Method 2: Natural Language
```
"Audit the dependencies in this project"
"Check for security vulnerabilities"
"Analyze my package.json for issues"
"Find outdated packages"
```

### Method 3: Direct Skill Invocation
Within Claude Code, simply ask Claude to audit dependencies and it will automatically use the skill.

## Supported Project Types

- ✅ Node.js (npm, yarn, pnpm)
- ✅ Python (pip, poetry, pipenv)
- ✅ Ruby (bundler)
- ✅ Rust (cargo)
- ✅ Go (go modules)
- ✅ Java (maven, gradle)

## What You'll Get

After running `/audit`, you'll receive:

1. **DEPENDENCY_AUDIT_REPORT.md** - Comprehensive analysis including:
   - Executive summary
   - Security vulnerabilities by severity
   - Outdated packages
   - Bloat analysis
   - Prioritized recommendations
   - Implementation checklist

2. **audit-report.json** - Raw audit data

3. **Recommended files** (optional):
   - `package.json.recommended`
   - Code migration examples

## Example Output

```markdown
## Executive Summary
- Total Vulnerabilities: 34 (2 critical, 11 high, 21 moderate)
- Outdated Packages: 9 major packages
- Installation Size: 84MB
- Potential Savings: 5.9MB (89% reduction)

## Immediate Actions Required
1. 🔴 CRITICAL: Remove request package (deprecated + SSRF)
2. 🟠 HIGH: Update axios to v1.13.2 (CSRF vulnerability)
3. 🟡 MEDIUM: Replace moment.js with date-fns (save 3.9MB)
```

## Customization

Edit the skill behavior by modifying:
```bash
~/.claude/skills/audit/SKILL.md
```

## Updating the Skill

To update to the latest version:

```bash
# Pull latest changes from the project
cd /path/to/project
git pull

# Copy updated skill files
cp .claude/skills/audit/* ~/.claude/skills/audit/
```

## Troubleshooting

### Skill not found
```bash
# Verify skill directory exists
ls ~/.claude/skills/audit/

# Check SKILL.md has proper frontmatter
head -5 ~/.claude/skills/audit/SKILL.md
```

### Audit commands fail
Make sure package managers are installed:
```bash
# Node.js
npm --version

# Python
pip --version

# Ruby
bundle --version
```

## Uninstallation

To remove the skill:

```bash
rm -rf ~/.claude/skills/audit/
```

## Contributing

Found a bug or want to improve the skill?

1. Edit `.claude/skills/audit/SKILL.md` in this project
2. Test your changes
3. Submit a pull request

## Support

For issues or questions:
- Check `EXAMPLES.md` for common use cases
- Review `README.md` for detailed documentation
- Open an issue in the project repository

## Version

Current Version: 1.0.0
Created: 2026-01-05
Last Updated: 2026-03-20

## License

This skill is part of the dependency audit demo project.
