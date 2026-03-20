# Audit Skill Examples

## Example 1: Basic Node.js Audit

### User Request
```
"Audit the dependencies in this project"
```

### What the Skill Does
1. Detects `package.json` and `package-lock.json`
2. Runs `npm audit` and `npm outdated`
3. Analyzes `node_modules` size
4. Generates comprehensive report
5. Creates recommendations

### Sample Output
```markdown
## Executive Summary
- Total Vulnerabilities: 34 (2 critical, 11 high, 21 moderate)
- Outdated Packages: 9 major packages
- Total Dependencies: 934 (125 production, 814 dev)
- Installation Size: 84MB

## Critical Issues
1. **request** (CRITICAL) - Deprecated, SSRF vulnerability
2. **axios** (HIGH) - CSRF and DoS vulnerabilities

## Recommendations
1. IMMEDIATE: Remove request package
2. THIS WEEK: Update axios to v1.13.2
3. THIS MONTH: Replace moment.js with date-fns (save 3.9MB)
```

## Example 2: Python Project Audit

### User Request
```
"Check my Python dependencies for security issues"
```

### What the Skill Does
1. Detects `requirements.txt` or `pyproject.toml`
2. Runs `pip list --outdated`
3. Checks for known vulnerabilities
4. Suggests version pins

### Sample Output
```markdown
## Python Dependency Audit

### Outdated Packages
- django: 3.2.0 → 5.0.2 (security fixes)
- requests: 2.25.1 → 2.31.0 (bug fixes)
- pillow: 8.1.0 → 10.2.0 (security critical)

### Security Issues
1. Pillow 8.1.0 has CVE-2023-XXXX (arbitrary code execution)
2. Django 3.2.0 is EOL, upgrade to LTS version

### Recommendations
- Pin all versions in requirements.txt
- Create requirements-lock.txt or use Poetry
- Upgrade Django to 4.2 LTS
```

## Example 3: Bloat Analysis

### User Request
```
"Why is my node_modules folder so large?"
```

### What the Skill Does
1. Analyzes `node_modules` size
2. Identifies largest packages
3. Finds redundancies
4. Suggests optimizations

### Sample Output
```markdown
## Bundle Bloat Analysis

Total Size: 234MB

### Largest Packages
1. moment.js - 4.4MB (DEPRECATED)
2. lodash - 1.7MB (can be optimized)
3. @babel/core - 9.1MB (may not be needed)

### Optimization Opportunities
- Replace moment → date-fns: **Save 3.9MB**
- Use lodash modular imports: **Save 1.5MB**
- Remove unused Babel preset: **Save 5MB**

**Total Potential Savings: 10.4MB (44%)**
```

## Example 4: Multi-Language Project

### User Request
```
"Audit all dependencies in this monorepo"
```

### What the Skill Does
1. Detects multiple package managers
2. Audits each workspace separately
3. Finds cross-cutting issues
4. Generates unified report

### Sample Output
```markdown
## Monorepo Dependency Audit

### Frontend (Node.js)
- 23 vulnerabilities found
- React 17 → 18 recommended

### Backend (Python)
- Django security patch available
- 5 outdated packages

### Mobile (React Native)
- 12 vulnerabilities in native deps
- Expo SDK update available

### Common Issues
- All workspaces using outdated TypeScript
- Shared ESLint config needs update
```

## Example 5: Migration Planning

### User Request
```
"Help me migrate from moment.js to date-fns"
```

### What the Skill Does
1. Analyzes current usage
2. Provides code migration examples
3. Shows before/after
4. Estimates effort

### Sample Output
```markdown
## Migration Guide: moment.js → date-fns

### Current Usage (5 files)
```javascript
// Before
const moment = require('moment');
const formatted = moment().format('YYYY-MM-DD');
const added = moment().add(7, 'days');
```

### Recommended Replacement
```javascript
// After
const { format, addDays } = require('date-fns');
const formatted = format(new Date(), 'yyyy-MM-dd');
const added = addDays(new Date(), 7);
```

### Migration Steps
1. Install date-fns: `npm install date-fns`
2. Update 5 files (list provided)
3. Test date formatting
4. Remove moment: `npm uninstall moment`

**Estimated Time: 2 hours**
**Bundle Size Reduction: 3.9MB**
```

## Example 6: Pre-Deployment Audit

### User Request
```
"Run a security audit before we deploy"
```

### What the Skill Does
1. Focuses on production dependencies
2. Checks for critical/high issues only
3. Blocks if critical issues found
4. Provides deploy checklist

### Sample Output
```markdown
## Pre-Deployment Security Audit

### ⛔ DEPLOYMENT BLOCKED

**Critical Issues Found: 2**

1. **express-jwt** v5.3.3 - Authentication bypass (CVE-2024-XXXX)
   - Fix: Update to v8.4.1
   - Command: `npm install express-jwt@latest`

2. **jsonwebtoken** v8.5.1 - Signature verification bypass
   - Fix: Update to v9.0.2
   - Command: `npm install jsonwebtoken@latest`

### Pre-Deployment Checklist
- [ ] Fix 2 critical vulnerabilities
- [ ] Re-run audit
- [ ] Test authentication flows
- [ ] Update dependencies lockfile
- [x] All tests passing
- [x] No high severity issues in production deps

**Recommendation: DO NOT DEPLOY until critical issues are resolved**
```

## Example 7: Regular Maintenance

### User Request
```
"Give me a quarterly update plan for dependencies"
```

### What the Skill Does
1. Categorizes updates by risk
2. Creates phased rollout plan
3. Estimates effort per phase
4. Provides testing strategy

### Sample Output
```markdown
## Q1 2026 Dependency Update Plan

### Phase 1: Security Patches (Week 1)
**Risk: Low | Effort: 2 hours**
- Update axios: 0.21.1 → 1.13.2
- Update validator: 13.5.2 → 13.13.0
- Testing: Run integration tests

### Phase 2: Minor Updates (Week 2-3)
**Risk: Low-Medium | Effort: 1 day**
- Update Express: 4.17.1 → 4.22.1
- Update Jest: 26.6.3 → 30.2.0
- Testing: Full test suite + manual QA

### Phase 3: Major Migrations (Week 4-8)
**Risk: High | Effort: 1 week**
- Migrate moment → date-fns
- Update webpack 4 → 5
- Testing: Full regression + performance

### Phase 4: Optimization (Ongoing)
**Risk: Low | Effort: 2 days**
- Optimize lodash imports
- Remove unused dependencies
- Bundle size analysis

**Total Estimated Effort: 2 weeks**
**Expected Benefits: 34 vulnerabilities fixed, 5.9MB smaller bundle**
```

## Pro Tips

### Tip 1: Schedule Regular Audits
```
/audit
# Run monthly or after any major dependency changes
```

### Tip 2: Focus on Production First
```
"Audit only production dependencies"
# Prioritize what ships to users
```

### Tip 3: Automate with CI/CD
Add to your pipeline:
```yaml
- name: Security Audit
  run: npm audit --audit-level=high
```

### Tip 4: Document Decisions
Keep audit reports in your repo:
```
/audit
# Then commit DEPENDENCY_AUDIT_REPORT.md
```

### Tip 5: Test After Updates
```
"Audit dependencies, then run tests"
# Verify updates don't break functionality
```
