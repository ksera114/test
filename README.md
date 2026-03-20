# Dependency Audit Demo

This project demonstrates comprehensive dependency auditing and includes a custom Claude Code skill for automated dependency analysis.

## 📋 What's Included

1. **Sample Node.js Project** - Demonstrates common dependency issues
2. **Comprehensive Audit Report** - See `DEPENDENCY_AUDIT_REPORT.md`
3. **Custom `/audit` Skill** - Automated dependency analysis for Claude Code

## 🚀 Quick Start

### Run the Sample App

```bash
npm install
npm start
```

Visit http://localhost:3000 to see the demo server.

### Run the Audit Skill

If you have Claude Code installed:

```bash
/audit
```

Or ask Claude: "Audit the dependencies in this project"

## 🔍 Audit Report Highlights

This sample project intentionally includes:

- **34 Security Vulnerabilities**
  - 2 Critical (request package)
  - 11 High (axios, webpack, nodemon)
  - 21 Moderate (jest ecosystem)

- **9 Outdated Packages**
  - express, axios, uuid, dotenv, eslint, webpack, jest, nodemon

- **84MB node_modules**
  - Potential savings: 5.9MB (89% reduction)

See `DEPENDENCY_AUDIT_REPORT.md` for full analysis.

## 🛠️ The Audit Skill

This project includes a custom Claude Code skill for dependency auditing.

### Installation

```bash
# Copy skill to your Claude skills directory
cp -r .claude/skills/audit ~/.claude/skills/
```

See `.claude/skills/audit/INSTALL.md` for detailed installation instructions.

### Features

- ✅ Multi-language support (Node.js, Python, Ruby, Rust, Go, Java)
- ✅ Security vulnerability detection
- ✅ Outdated package analysis
- ✅ Bundle bloat identification
- ✅ Prioritized recommendations
- ✅ Code migration examples
- ✅ Risk assessment matrix

### Usage Examples

```bash
# Basic audit
/audit

# Or use natural language
"Check for security vulnerabilities"
"Analyze package bloat"
"Find outdated dependencies"
```

## 📁 Project Structure

```
.
├── DEPENDENCY_AUDIT_REPORT.md    # Comprehensive audit report
├── package.json                   # Original (vulnerable) dependencies
├── package.json.recommended       # Fixed dependencies
├── index.js                       # Original code
├── index.js.recommended           # Updated code with modern packages
├── audit-report.json             # Raw npm audit data
└── .claude/
    └── skills/
        └── audit/                # Custom audit skill
            ├── SKILL.md          # Skill definition
            ├── README.md         # Skill documentation
            ├── EXAMPLES.md       # Usage examples
            └── INSTALL.md        # Installation guide
```

## 📊 Key Findings

### Critical Issues

1. **request** - Deprecated with SSRF vulnerability
2. **axios 0.21.1** - CSRF and DoS vulnerabilities
3. **webpack 4** - Multiple security issues

### Recommended Actions

**Immediate (This Week)**
- Remove `request` package
- Update `axios` to v1.13.2+
- Run `npm audit fix`

**Short-Term (This Month)**
- Replace `moment.js` with `date-fns` (save 3.9MB)
- Optimize `lodash` usage (save 1.5MB)
- Update `jest` to v30+

**Long-Term (This Quarter)**
- Migrate to `webpack` 5
- Update to `express` 5 when stable

## 🎯 Impact Summary

**Security Improvements:**
- Fix all 34 vulnerabilities
- Eliminate 2 critical CVEs
- Remove deprecated packages

**Performance Gains:**
- ~5.9MB bundle size reduction (89%)
- ~35% faster install times
- Better tree-shaking with modern packages

## 📚 Documentation

- `DEPENDENCY_AUDIT_REPORT.md` - Full audit analysis
- `.claude/skills/audit/README.md` - Skill documentation
- `.claude/skills/audit/EXAMPLES.md` - Usage examples
- `.claude/skills/audit/INSTALL.md` - Installation guide

## 🔧 Development

### Using the Recommended Configuration

```bash
# View the fixed package.json
cat package.json.recommended

# View updated code
cat index.js.recommended

# To apply recommendations:
cp package.json.recommended package.json
cp index.js.recommended index.js
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

This project serves as both a demonstration and a template for dependency auditing. Feel free to:

- Use the audit skill in your own projects
- Extend the skill for additional package managers
- Submit improvements or bug fixes

## 📝 License

This is a demo project for educational purposes.

## 🔗 Resources

- [npm audit documentation](https://docs.npmjs.com/cli/v9/commands/npm-audit)
- [Webpack 5 Migration Guide](https://webpack.js.org/migrate/5/)
- [You Don't Need Moment.js](https://github.com/you-dont-need/You-Dont-Need-Momentjs)
- [Snyk - Open Source Security](https://snyk.io/)
