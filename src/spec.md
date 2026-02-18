# Specification

## Summary
**Goal:** Set the production domain to `https://swamisamarth.icp.app` in site metadata via canonical and Open Graph URL tags.

**Planned changes:**
- Add a canonical URL tag in `frontend/index.html` pointing to `https://swamisamarth.icp.app`.
- Add an Open Graph `og:url` meta tag in `frontend/index.html` pointing to `https://swamisamarth.icp.app`.
- Verify the site still loads at `/` and existing routes continue to function after the metadata change.

**User-visible outcome:** When the site is shared or indexed, it consistently references `https://swamisamarth.icp.app` as the canonical/primary URL while the site continues to work normally.
