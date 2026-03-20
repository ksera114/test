---
name: audit
description: Analyze project dependencies for outdated packages, security vulnerabilities, and unnecessary bloat. Use when the user asks to audit dependencies, check for security issues, analyze package bloat, or optimize dependencies. Works with Node.js (npm/yarn/pnpm), Python (pip/poetry), Ruby (bundler), Rust (cargo), and Go projects.
---

# Dependency Audit Skill

Perform comprehensive dependency analysis to identify security vulnerabilities, outdated packages, and optimization opportunities.

## Supported Package Managers

- **Node.js**: npm, yarn, pnpm
- **Python**: pip, poetry, pipenv
- **Ruby**: bundler
- **Rust**: cargo
- **Go**: go modules
- **Java**: maven, gradle

## Workflow

Create a todo list and work through these tasks systematically.

### 1. Detect Project Type

Search for dependency manifest files:

```bash
# Node.js
ls -la package.json package-lock.json yarn.lock pnpm-lock.yaml

# Python
ls -la requirements.txt pyproject.toml Pipfile poetry.lock

# Ruby
ls -la Gemfile Gemfile.lock

# Rust
ls -la Cargo.toml Cargo.lock

# Go
ls -la go.mod go.sum

# Java
ls -la pom.xml build.gradle
```

Identify which package manager(s) are in use.

### 2. Run Security Audit

Execute appropriate security audit commands:

#### Node.js (npm)
```bash
npm audit --json > audit-report.json
npm audit  # Human-readable output
```

#### Node.js (yarn)
```bash
yarn audit --json > audit-report.json
yarn audit
```

#### Python (pip)
```bash
pip list --outdated
pip-audit --format json > audit-report.json  # If pip-audit is available
```

#### Python (poetry)
```bash
poetry show --outdated
```

#### Ruby (bundler)
```bash
bundle audit check --update
bundle outdated
```

#### Rust (cargo)
```bash
cargo audit  # If cargo-audit is installed
cargo outdated  # If cargo-outdated is installed
```

#### Go
```bash
go list -u -m all
```

### 3. Check for Outdated Packages

Run package manager-specific commands:

#### Node.js
```bash
npm outdated
# Or for detailed analysis
npx npm-check-updates --format json
```

#### Python
```bash
pip list --outdated --format=json
# Or with poetry
poetry show --outdated
```

#### Ruby
```bash
bundle outdated --strict
```

#### Rust
```bash
cargo outdated
```

### 4. Analyze Package Bloat

#### Node.js
```bash
# Check node_modules size
du -sh node_modules
du -sh node_modules/* | sort -rh | head -20

# Analyze bundle size (if applicable)
npx webpack-bundle-analyzer stats.json  # If webpack
npx source-map-explorer build/*.js  # If available
```

#### Python
```bash
# Check installed package sizes
pip list | awk '{print $1}' | xargs pip show | grep -E 'Name|Location|Size'
```

### 5. Identify Issues

Categorize findings into:

1. **Critical Security Vulnerabilities**
   - CVSS score ≥ 7.0
   - Known exploits
   - No fix available

2. **High Priority Issues**
   - CVSS score 4.0-6.9
   - Deprecated packages
   - Packages with available security fixes

3. **Outdated Packages**
   - Major version behind
   - Multiple minor versions behind
   - Breaking changes expected

4. **Bloat & Redundancies**
   - Large packages (>1MB)
   - Deprecated packages
   - Unused dependencies
   - Duplicate functionality
   - Full imports when modular available

### 6. Generate Comprehensive Report

Create a detailed markdown report: `DEPENDENCY_AUDIT_REPORT.md`

Include these sections:

```markdown
# Dependency Audit Report
*Generated: [DATE]*

## Executive Summary
- Total vulnerabilities: X (breakdown by severity)
- Outdated packages: X
- Total dependencies: X production, X dev
- Installation size: XMB

## Critical Security Vulnerabilities
For each critical issue:
- Package name and current version
- Vulnerability description (CVE if available)
- CVSS score
- Impact assessment
- Fix available? (version number or "no fix")
- Recommendation

## High Priority Issues
[Similar structure to critical]

## Outdated Packages
Table format:
| Package | Current | Latest | Versions Behind | Breaking Changes? |

## Unnecessary Bloat
- Deprecated packages
- Large packages with lighter alternatives
- Full imports that could be modular
- Size impact analysis

## Recommended Actions

### Immediate (This Week)
- [ ] Action items with P0 priority

### Short-Term (This Month)
- [ ] Action items with P1-P2 priority

### Long-Term (This Quarter)
- [ ] Action items with P3 priority

## Impact Summary
- Security: X vulnerabilities resolved
- Bundle size: Estimated XMB reduction
- Performance: Expected improvements

## Implementation Checklist
- [ ] Specific actionable steps

## Additional Resources
- Links to migration guides
- Documentation
- Security advisories
```

### 7. Create Recommended Package File (Optional)

If the user wants, create a `.recommended` version of the package manifest with all fixes applied:

#### Node.js
Create `package.json.recommended` with:
- Updated vulnerable packages
- Removed deprecated packages
- Optimized dependencies

#### Python
Create `requirements.txt.recommended` or updated `pyproject.toml`

### 8. Provide Code Migration Examples

If packages are being replaced (e.g., moment → date-fns, lodash → native), create:
- `<filename>.recommended` with updated code
- Clear migration comments showing before/after

### 9. Calculate Impact

Provide metrics:
- **Security**: Number of vulnerabilities fixed
- **Size**: Estimated bundle size reduction (MB and %)
- **Performance**: Expected improvements
- **Maintenance**: Reduced technical debt

### 10. Risk Assessment Matrix

Create a priority matrix:

| Issue | Risk Level | Priority | Timeline |
|-------|-----------|----------|----------|
| Package X | 🔴 CRITICAL | P0 | Immediate |
| Package Y | 🟠 HIGH | P1 | This week |
| Package Z | 🟡 MEDIUM | P2 | This month |

## Output Format

Present findings to the user with:

1. **Quick Summary** (3-5 bullet points)
   - Total vulnerabilities
   - Critical issues requiring immediate attention
   - Potential improvements (size, security, performance)

2. **Key Recommendations** (prioritized list)
   - Top 5 actions ordered by priority
   - Timeline for each

3. **Files Created**
   - DEPENDENCY_AUDIT_REPORT.md (comprehensive analysis)
   - audit-report.json (raw data)
   - package.json.recommended (optional)
   - Code migration examples (optional)

4. **Next Steps**
   - Clear action items
   - Commands to run
   - Migration guides

## Best Practices

- **Be Thorough**: Check all package managers if multiple are present
- **Be Specific**: Provide exact version numbers and commands
- **Be Practical**: Prioritize based on risk and effort
- **Be Helpful**: Include migration guides and code examples
- **Be Realistic**: Note breaking changes and migration effort
- **Don't Over-Engineer**: Focus on actual issues, not hypothetical ones

## Common Patterns to Flag

### Node.js
- `moment` → Replace with `date-fns` or `luxon`
- `request` → Deprecated, use `axios` or `node-fetch`
- Full `lodash` → Use modular imports or native methods
- `webpack` v4 → Migrate to v5
- Old `express` → Update to latest

### Python
- `httplib2` → Use `requests` or `httpx`
- Unpinned versions in requirements.txt
- Missing `poetry.lock` or `Pipfile.lock`

### Ruby
- Gems with known security issues
- Rails version EOL

## Error Handling

If audit commands fail:
1. Check if the package manager is installed
2. Try alternative commands
3. Verify lockfiles exist
4. Check for network issues
5. Inform user of limitations

## Edge Cases

- **Monorepos**: Audit each workspace separately
- **Private packages**: Note that audit may be incomplete
- **Mixed package managers**: Audit all that are present
- **No lockfile**: Recommend creating one first
- **Development-only issues**: Lower priority than production

## Success Criteria

A successful audit includes:
✅ Security vulnerabilities identified and prioritized
✅ Outdated packages catalogued with versions
✅ Bloat analysis with size impact
✅ Actionable recommendations with timeline
✅ Migration guides for major changes
✅ Clear priority and risk assessment

## Notes

- This skill focuses on analysis and recommendations
- It does NOT automatically apply fixes unless requested
- Breaking changes should be clearly flagged
- Consider both security AND functionality when recommending updates
- Always test recommendations in a non-production environment first
