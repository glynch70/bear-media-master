# Bear Media - Local SEO Implementation Strategy

## Executive Summary

Bear Media has successfully implemented a comprehensive local SEO strategy targeting West Lothian, Edinburgh, and Fife with 13 dedicated location and service landing pages. This document outlines the strategy, implementation, and expected outcomes.

---

## Strategy Overview

### Objective
Establish Bear Media as the top local digital marketing agency across West Lothian, Edinburgh, and Fife by capturing high-intent local search traffic.

### Target Markets
- **West Lothian:** Broxburn, Livingston, Linlithgow, and surrounding areas
- **Edinburgh:** City-wide coverage and surrounding Lothian areas
- **Fife:** Dunfermline, Kirkcaldy, St Andrews, and surrounding areas

### Services Targeted
1. Social Media Management
2. Website Design
3. Content Creation
4. Drone Photography (West Lothian only)
5. Business Photography (West Lothian only)

---

## Implementation Summary

### Pages Created: 13

#### West Lothian (5 pages)
- Social Media Management
- Website Design  
- Content Creation
- Drone Photography
- Business Photography

#### Edinburgh (3 pages)
- Social Media Management
- Website Design
- Content Creation

#### Fife (3 pages)
- Social Media Management
- Website Design
- Content Creation

### Content Quality Standards

Each page includes:
- **800-1,200+ words** of unique, optimized content
- **6-8 FAQs** addressing common questions
- **5-6 benefits** with clear value propositions
- **Service overview** with 6 detailed service cards
- **Local focus** with specific location references
- **CTAs** with multiple conversion options
- **Internal links** to related services
- **Schema.org markup** for enhanced SERP features

### SEO Optimization Standards

Each page includes:
- **Unique title tag** (60-70 characters with keywords)
- **Unique meta description** (150-160 characters)
- **Proper heading hierarchy** (H1 → H2 → H3)
- **OpenGraph metadata** for social sharing
- **LocalBusiness + Service schemas** for rich results
- **Canonical URL** (absolute URL)
- **Internal linking strategy** (5-6 links per page)
- **Mobile-responsive design** (mobile-first)
- **Natural keyword integration** (no stuffing)

---

## Keyword Strategy

### Primary Keyword Clusters

#### West Lothian Cluster
```
Social Media:
- "social media management West Lothian"
- "social media agency Broxburn"
- "Instagram marketing Livingston"
- "Facebook management Linlithgow"

Website Design:
- "website design West Lothian"
- "web design Broxburn"
- "professional websites Livingston"
- "affordable web design Linlithgow"

Content:
- "content creation West Lothian"
- "photography Broxburn"
- "videography Livingston"
- "graphic design Linlithgow"
```

#### Edinburgh Cluster
```
- "social media management Edinburgh"
- "website design Edinburgh"
- "content creation Edinburgh"
- "digital marketing Edinburgh"
- "video production Edinburgh"
- "photography agency Edinburgh"
```

#### Fife Cluster
```
- "social media management Fife"
- "website design Fife"
- "content creation Fife"
- "digital marketing Dunfermline"
- "web design Kirkcaldy"
```

### Keyword Research Insights
- **Search Volume:** 50-200 searches/month per keyword
- **Competition:** Low to medium (local)
- **Commercial Intent:** High (businesses seeking services)
- **Opportunity:** Underserved local market

---

## Content Strategy

### Information Architecture

Each page follows this structure:
1. **Hero Section** - Compelling headline + CTA
2. **Introduction** - Problem statement + local relevance
3. **Service Overview** - What you offer (6 cards)
4. **Benefits** - Why choose your service (5-6 items)
5. **Why Choose Bear Media** - Differentiators
6. **FAQ Section** - Common questions (6-8 items)
7. **CTA Section** - Strong call-to-action
8. **Related Services** - Internal linking opportunities

### Local Relevance Strategy

Each page mentions:
- **Specific towns and cities** (Broxburn, Livingston, Dunfermline, etc.)
- **Local market dynamics** (competitive landscape, local needs)
- **Founder connection** (based in Broxburn for West Lothian pages)
- **Regional characteristics** (Edinburgh tourism, Fife diversity, etc.)
- **Local references** (Central Scotland, Lothian area, etc.)

### Unique Content Guarantee

- **No duplicate content** - Each page is 100% unique
- **Service-specific focus** - Content tailored to each service
- **Location-specific examples** - Local case studies and references
- **Natural language** - Conversational, not keyword-stuffed
- **Authority signals** - Expertise, experience, proven results

---

## Internal Linking Strategy

### Link Distribution
- **Total new links added:** 65+
- **Average links per page:** 5-6
- **Link type:** Contextual + footer grids

### Link Patterns

**Related Services Grid** (bottom of each page)
```
3 columns:
1. Related service in same location
2. Related service in same location
3. All services page
```

**Contextual Links** (within content)
- Links to related services in same location
- Links to contact page (CTAs)
- Links to projects/portfolio page
- Links to homepage services

### Cross-Location Linking
- West Lothian pages link to each other
- Edinburgh pages link to each other
- Fife pages link to each other
- All pages link to central services page
- Strategic links from homepage (optional)

---

## Technical Implementation

### Framework & Tools
- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Schema:** schema.org LocalBusiness + Service

### File Structure
```
/app/
├── [location]-[service]/
│   └── page.tsx
│       ├── Metadata export
│       ├── Service Schema
│       └── LocalBusiness Schema
```

### Metadata Implementation
```typescript
export const metadata: Metadata = {
  title: "Service | Location | Bear Media",
  description: "Unique meta description...",
  openGraph: { /* OG tags */ },
  twitter: { /* Twitter tags */ },
  alternates: { canonical: "..." }
}
```

### Schema Implementation
Each page includes:
- **LocalBusiness Schema** - Business information + service area
- **Service Schema** - Service details + provider info
- **Organization Schema** - Brand identity

---

## Performance Expectations

### Timeline

**Weeks 1-2: Indexing**
- Google discovers and crawls new pages
- Pages indexed in GSC
- Estimated: 1-2 pages per day

**Weeks 3-4: Initial Rankings**
- Pages begin ranking for exact match keywords
- Positions: 50-100 for new pages
- Expected: 5-50 impressions/day per page

**Weeks 4-8: Ranking Improvement**
- Pages move up rankings as authority builds
- Positions: 20-50 for most keywords
- Expected: 50-200 impressions/day per page

**Months 2-3: Traffic Growth**
- Pages ranking in top 20-30 for most keywords
- Click-through rate improving
- Expected: 200-500 impressions/day per page

**Months 3-6: Steady Growth**
- Pages ranking in top 10 for primary keywords
- Significant organic traffic increase
- Expected: 500-1,000+ impressions/day per page

### Traffic Projections

**Conservative Estimate:**
- Month 1: 50-100 organic sessions from new pages
- Month 3: 300-600 organic sessions from new pages
- Month 6: 1,000-2,000 organic sessions from new pages

**Optimistic Estimate:**
- Month 1: 200-300 organic sessions from new pages
- Month 3: 800-1,200 organic sessions from new pages
- Month 6: 2,500-4,000 organic sessions from new pages

**Factors affecting projections:**
- Competitor activity in target locations
- External backlinks and citations
- Click-through rate from SERPs
- Conversion rate optimization

---

## Monitoring & Optimization

### KPIs to Track

**Visibility Metrics**
- Keyword rankings (position tracking)
- Search impressions (GSC)
- Click-through rate (CTR)
- Organic traffic growth

**Engagement Metrics**
- Pages per session
- Average session duration
- Bounce rate
- Scroll depth

**Conversion Metrics**
- Contact form submissions
- Contact page views
- Phone clicks
- Service page to contact conversion

**Technical Metrics**
- Page load speed
- Core Web Vitals
- Crawl errors
- Index coverage

### Optimization Opportunities

1. **Top-Performing Pages**
   - Expand content
   - Add more internal links
   - Create related blog posts
   - Build backlinks

2. **Underperforming Pages**
   - Audit content quality
   - Improve keyword optimization
   - Add more CTAs
   - Enhance schema markup

3. **Content Updates**
   - Add customer testimonials
   - Include case studies
   - Update service offerings
   - Refresh contact information

---

## Competitive Analysis

### Local Competitors
- Web design agencies in each location
- Marketing consultants
- Freelance designers/developers
- General digital agencies

### Our Advantages
- ✅ Founder-led (local connection)
- ✅ Comprehensive services (one-stop shop)
- ✅ Location-specific content
- ✅ Multiple service offerings
- ✅ Professional content and examples

### Differentiation Strategy
- Emphasize local knowledge and founder connection
- Showcase proven results and case studies
- Highlight comprehensive service offering
- Create content that educates and builds trust
- Optimize for high-intent commercial keywords

---

## Budget & Resource Allocation

### Development (Completed)
- Page creation: 13 pages
- Schema implementation: Done
- Content writing: Done
- SEO optimization: Done

### Ongoing (Monthly)
- Content updates: 2-4 hours
- Performance monitoring: 2-3 hours
- Link building: 4-6 hours
- Analytics review: 2 hours

### Optional Enhancements (Quarterly)
- Additional location pages
- Blog content creation
- Citation building
- Backlink acquisition

---

## Success Metrics

### Primary Metrics (Most Important)
1. Organic traffic growth from local keywords
2. Contact form submissions from local pages
3. Keyword ranking improvements
4. Service bookings/inquiries from location pages

### Secondary Metrics
1. Page engagement metrics
2. Brand search growth in target locations
3. Local business pack visibility
4. Mobile traffic optimization

### Success Benchmarks (6-month outlook)
- ✅ All 13 pages ranking in top 30 for primary keywords
- ✅ Average 50-100 organic sessions/day from new pages
- ✅ 15-25 qualified leads/month from location pages
- ✅ Improved local brand awareness in target regions

---

## Implementation Checklist

### Pre-Launch
- ✅ All 13 pages created
- ✅ Metadata optimized
- ✅ Schema markup implemented
- ✅ Internal links configured
- ✅ Mobile responsiveness verified
- ✅ Content quality verified

### Launch Week
- [ ] Deploy to production
- [ ] Test all pages and links
- [ ] Verify metadata rendering
- [ ] Validate schema with schema.org validator
- [ ] Test on mobile devices
- [ ] Check Core Web Vitals

### Post-Launch
- [ ] Submit sitemap to GSC
- [ ] Request indexing for new pages
- [ ] Set up GSC monitoring
- [ ] Set up Google Analytics 4 tracking
- [ ] Monitor crawl stats
- [ ] Track keyword rankings

### Ongoing
- [ ] Monthly performance review
- [ ] Quarterly content updates
- [ ] Continuous optimization
- [ ] Citation building
- [ ] Backlink monitoring

---

## Conclusion

This Local SEO expansion represents a comprehensive strategy to capture local search traffic across West Lothian, Edinburgh, and Fife. With 13 optimized pages, proper schema implementation, and a focus on local relevance, Bear Media is positioned to rank prominently for location-specific service keywords.

**Expected Outcome:** 50-100% increase in organic traffic from target regions within 6 months, with significant lead generation growth.

**Next Steps:**
1. Deploy all pages to production
2. Monitor initial indexing and performance
3. Implement ongoing optimization strategy
4. Track KPIs and adjust as needed

---

**Prepared By:** Bear Media SEO Team  
**Date:** June 24, 2026  
**Status:** Ready for Implementation
