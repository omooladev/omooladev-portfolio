import { getTechnologyIcon } from '@/app/utils/getTechnologyIcon';

export interface Technology {
  name: string;
  icon?: string;
  imageSrc?: string;
  colorClass?: string;
}

// A summarized product release, shown as a version timeline on the project page.
export interface Release {
  version: string;
  title: string;
  date: string; // human-readable, e.g. "Jun 2026" or "Unreleased"
  summary: string;
  category?: "feature" | "fix" | "docs" | "internal"; // colors the timeline dot
}

// An image shown in the project details gallery.
// Resize every source image to 1280x720 (16:9) so the gallery renders uniformly.
export interface GalleryImage {
  src: string;
  alt?: string; // falls back to the project name if omitted
  caption?: string; // optional label shown under the image / in the lightbox
}

// A link to an external post/write-up about the project (e.g. a LinkedIn post).
export interface SocialPost {
  title: string;
  url: string;
  date?: string;
  platform?: "linkedin" | "twitter" | "other";
}

// A brand's social media account, shown as an icon row (distinct from SocialPost,
// which is a write-up about the project rather than an account).
export interface SocialLink {
  platform: "x" | "instagram" | "linkedin" | "youtube" | "tiktok" | "facebook";
  url: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  category: string; // e.g., "news", "ecommerce", "tools", "chat", etc.
  links: {
    github: string;
    demo?: string; // optional — some projects are not deployed yet
  };
  privateRepo?: boolean; // repo is private — disable the GitHub / "View Code" buttons
  technologies: Technology[];
  thumbnail: string;
  gallery?: GalleryImage[]; // Extra screenshots shown in the details-page gallery
  websitePreview?: string; // For the hover effect showing the full website
  features?: string[];
  // Features from an earlier phase of the product (e.g. pre-launch) that are no longer
  // current but are kept visible as history rather than deleted outright.
  archivedFeatures?: string[];
  // How this project used to be described (e.g. its pre-launch positioning), kept visible
  // as history rather than deleted outright when `description`/`fullDescription` change.
  archivedDescription?: string;
  challenges?: string[];
  releases?: Release[]; // Version history, newest first
  social?: {
    posts?: SocialPost[]; // Curated list of write-ups / posts
    searchUrl?: string; // Optional "see all posts" link (e.g. a LinkedIn search)
  };
  socialLinks?: SocialLink[]; // Brand's own social media accounts, shown as an icon row
}

const getTechnology = (name: string): Technology => {
  const { technologyName, technologyIcon, technologyImageSrc } = getTechnologyIcon(name);

  // Special cases with custom images
  const specialCases: { [key: string]: Technology } = {
    "Webpack": { name: "Webpack", imageSrc: "/icons/webpack.svg" },
    "Cloudinary": { name: "", imageSrc: "/icons/cloudinary.svg" },
  };

  if (specialCases[name]) {
    return specialCases[name];
  }

  return {
    name: technologyName,
    icon: technologyIcon,
    imageSrc: technologyImageSrc,
  };
};

export const projects: Project[] = [
  {
    id: 'daylight',
    name: 'Daylight',
    description:
      "The official diary app of Knowli — an AI-powered journaling PWA, publicly live since August 2026. Write entries that autosave as you type, get an AI-generated title or a rewrite on request, export or import your diary, and install it as an app on your phone or desktop.",
    fullDescription:
      "Daylight lets people document their lives without overthinking the day. It shipped in stages: a pre-launch waitlist landing page, then a private preview for invited waitlist testers, then a full public launch on August 10, 2026 that opened registration to everyone — no invite required. Since launch it's kept shipping: email verification, a one-time \"we're live\" announcement email to waitlist signups, usage-stat tracking for its AI features, and — most recently — a full internal `/admin` dashboard (replacing the old developer-only panel) for reviewing support and feedback, managing the waitlist and referral program, and approving new admin accounts. Today's diary itself covers writing with autosave, AI-generated titles and AI entry refine (both free, not subscription-gated), export/import, password-protected entry sharing, a referral program, in-app notifications, and full PWA support.",
    category: 'productivity',
    links: {
      github: 'https://github.com/knowlihq/knowli-diary',
      demo: 'https://daylight.knowli.xyz',
    },
    privateRepo: true,
    technologies: [
      getTechnology('Next.js'),
      getTechnology('React'),
      getTechnology('Typescript'),
      getTechnology('Tailwind CSS'),
      getTechnology('MongoDB'),
      getTechnology('Mongoose'),
      getTechnology('Node.js'),
      getTechnology('Zod'),
      getTechnology('Google Gemini'),
      getTechnology('Resend'),
      getTechnology('Sentry'),
    ],
    thumbnail: '/project-images/daylight.png',
    // No websitePreview: daylight.knowli.xyz sends X-Frame-Options: DENY and a
    // frame-ancestors 'none' CSP (deliberate security hardening), so it can never
    // render inside this page's iframe embed. Visit Live Site / Live Demo still work.
    // Daylight's footer links to the same shared Knowli brand accounts as the parent site
    // (see brand-accounts.md) — not separate Daylight-only handles.
    socialLinks: [
      { platform: 'x', url: 'https://x.com/knowlihq' },
      { platform: 'instagram', url: 'https://www.instagram.com/knowlihq/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/knowlihq/' },
      { platform: 'youtube', url: 'https://www.youtube.com/@knowlihq' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@knowlihq' },
      { platform: 'facebook', url: 'https://www.facebook.com/share/18tUPC9wkS/?mibextid=wwXIfr' },
    ],
    // Add more screenshots here (resized to 1280x720). Drop the files in
    // public/project-images/gallery/daylight/ and reference them with a lowercase path.
    gallery: [
      { src: '/project-images/gallery/daylight/home-page.jpg', alt: 'Daylight home page', caption: 'Home page' },
      { src: '/project-images/gallery/daylight/register-page.jpg', alt: 'Daylight register page', caption: 'Create an account page' },
      { src: '/project-images/gallery/daylight/login-page.jpg', alt: 'Daylight login page', caption: 'Login page' },
      { src: '/project-images/gallery/daylight/help-page.jpg', alt: 'Daylight help center page', caption: 'Help Center' },
      { src: '/project-images/gallery/daylight/feedback-page.jpg', alt: 'Daylight feedback page', caption: 'Feedback page' },
      { src: '/project-images/gallery/daylight/support-page.jpg', alt: 'Daylight support page', caption: 'Support page' },
    ],
    features: [
      'Write diary entries that autosave as you type, with a live "Saved"/"Saving…" status — never a Save button to remember',
      'AI-generated entry titles and AI entry refine on request, free for every account, not gated behind a subscription',
      'Choose an AI assistant persona (Sol, Lumi, or Ray) at onboarding, changeable anytime',
      'Export entries to a downloadable file, or import a diary from another app',
      'Share a single entry via a password-protected link',
      'Email verification via a 6-digit code or a one-click link that works from any device',
      'Referral program with shareable links and a leaderboard-tracked points system',
      'In-app notifications and an in-app feedback/support system open to every account',
      'Install as a PWA on phone or desktop, with offline access to the installed app',
      'Account tools: usage stats, active-session management (sign out any device remotely), full account deletion',
      'Internal `/admin` dashboard — role-based staff access (admin / super admin) for support & feedback review, waitlist/referral tools, and launch-announcement sends',
    ],
    // How Daylight was described pre-launch, kept visible as history rather than deleted.
    archivedDescription:
      "Pre-launch positioning (through Aug 2026): \"The official diary app of Knowli — an upcoming AI-powered journaling PWA. Currently pre-launch: the live site is a waitlist landing page so early visitors can be notified at launch.\" Daylight will let people document their lives without overthinking the day — write entries by text or voice, have the AI advise, motivate, or roast on request, and export or import diaries from other apps. None of that is public yet: right now the only thing live is a pre-launch waitlist landing page, gated behind a `WAITLIST_ENABLED` flag so the site can be deployed ahead of the actual product. The waitlist itself is a full feature in its own right — duplicate signups are treated as a non-event rather than an error, and every signup is tagged with first-touch campaign attribution (UTM params or a referrer-hostname fallback) captured in Next.js's proxy layer before the page even renders, so campaign channels can be judged by real signups instead of clicks.",
    // Pre-launch-era work — no longer how the product behaves today, kept visible as history rather than deleted.
    archivedFeatures: [
      'Pre-launch waitlist landing page, toggled on/off with a `WAITLIST_ENABLED` flag rather than a code change',
      'First-touch campaign attribution — UTM params or a referrer-hostname fallback captured server-side in the proxy, stored in an HTTP-only cookie, and saved against each waitlist signup',
      'Duplicate waitlist signups resolved as "already on the list" instead of an error',
      'Private-preview invite gate — a per-person signed token that let invited waitlist testers into the real production app and database ahead of public launch',
      'Public countdown to launch day on the coming-soon home page',
    ],
    challenges: [
      'Capturing accurate waitlist attribution with zero client-side dependency — read entirely from the raw Referer header and UTM params in the Next.js proxy, so it still worked even if the visitor\'s browser never ran page JS',
      'Choosing first-touch over last-touch attribution for the waitlist, since a pre-launch site cares about which channel first earned someone\'s interest, not what they clicked last',
      'Gating a real, invite-only preview of the live production app/database to a handful of waitlist testers with a per-person revocable token, instead of a single shared password that can\'t be attributed to whoever leaked it',
      'Closing a critical auth bug where a pre-verification "pending" token and a real session token were structurally identical JWTs and could be replayed as each other — fixed by adding an explicit `purpose` claim checked on every verification',
      'Migrating every capability off the old password-gated `/dev` panel onto a real `/admin` dashboard with two-tier, self-service-with-approval role-based access, then retiring `/dev` outright rather than running both in parallel',
    ],
    releases: [
      {
        version: 'v2.4.0',
        title: 'Admin Dashboard',
        date: 'Aug 2026',
        category: 'feature',
        summary:
          'A proper admin dashboard at /admin replaced the old developer-only panel — account approval, user lookup, support/feedback review, waitlist and referral tools, and direct user notifications.',
      },
      {
        version: 'v2.3.2',
        title: 'Feedback Prompts Stop Repeating',
        date: 'Aug 2026',
        category: 'fix',
        summary: "Fixed feedback prompts re-asking about things already answered, including after switching devices or clearing browser data, and made multi-note feedback submissions more reliable.",
      },
      {
        version: 'v2.3.1',
        title: 'Search Visibility & Tab Title Fix',
        date: 'Aug 2026',
        category: 'fix',
        summary: "Fixed browser tab titles showing \"Daylight\" twice, and made Daylight's public pages easier for search engines to discover and index.",
      },
      {
        version: 'v2.3.0',
        title: 'Public Launch, Usage Stats & Feedback for Everyone',
        date: 'Aug 2026',
        category: 'feature',
        summary:
          "Daylight opened to everyone — no invite needed. Settings now shows AI usage totals, and quick feedback prompts became available to every account instead of just private-preview testers.",
      },
      {
        version: 'v2.2.0',
        title: 'Email Verification & Expanded Help Center',
        date: 'Aug 2026',
        category: 'feature',
        summary: 'New accounts now confirm their email via a 6-digit code or one-click link, and the Help Center grew into 8 organized articles.',
      },
      {
        version: 'v2.1.2',
        title: 'Reliability Fix',
        date: 'Aug 2026',
        category: 'fix',
        summary: 'Fixed intermittent dashboard errors, unexpected logouts across multiple tabs, and stale login-state buttons on public pages.',
      },
      {
        version: 'v2.1.1',
        title: 'Reliability Fix',
        date: 'Aug 2026',
        category: 'fix',
        summary: 'Fixed a rare error page some people saw right after opening the installed PWA from their home screen.',
      },
      {
        version: 'v2.1.0',
        title: 'Preview Email Reliability',
        date: 'Aug 2026',
        category: 'fix',
        summary: 'Fixed preview invite/login/reminder emails showing a confusing "expires in 0 days" when sent on the link\'s own expiry date.',
      },
      {
        version: 'v2.0.0',
        title: 'A Countdown to Launch',
        date: 'Aug 2026',
        category: 'feature',
        summary: 'The public coming-soon page gained a live countdown to launch day, replacing the open-ended "coming soon" message.',
      },
      {
        version: 'v1.0.0',
        title: 'Never Hit Save Again',
        date: 'Aug 2026',
        category: 'feature',
        summary:
          'The first release: accounts, autosaving diary entries with search/export/import, account/session management, and PWA install support.',
      },
    ],
    social: {
      posts: [
        {
          title: "Daylight is live — no more waitlist, no invite needed",
          url: 'https://www.linkedin.com/feed/update/urn:li:activity:7492932162216718336',
          date: 'Aug 2026',
          platform: 'linkedin',
        },
      ],
      searchUrl:
        'https://www.linkedin.com/search/results/content/?keywords=daylight&origin=GLOBAL_SEARCH_HEADER&sortBy=%5B%22date_posted%22%5D&fromOrganization=%5B%22136055745%22%5D',
    },
  },
  {
    id: 'knowli',
    name: 'Knowli',
    description:
      'The parent brand behind Daylight and Knowli Quiz. A marketing site that introduces the Knowli studio, explains the idea tying its products together, and links out to each live product.',
    fullDescription:
      "Knowli is the parent brand behind a growing family of products — Daylight (the diary app, now publicly live) and Knowli Quiz — with more learning and productivity products planned. This site is the brand's home: a header with smooth-scroll navigation, a hero, a section explaining the idea behind Knowli (one idea, expressed as different products, each free to look and feel like itself), a products section linking straight to each live product, a values section (data ownership, honesty about what's built vs. coming), an about section, and a footer with social links, a Products list, and a direct studio email.",
    category: 'brand',
    links: {
      github: 'https://github.com/knowlihq/knowli',
      demo: 'https://www.knowli.xyz',
    },
    privateRepo: true,
    technologies: [getTechnology('Next.js'), getTechnology('React'), getTechnology('Typescript'), getTechnology('Tailwind CSS')],
    thumbnail: '/project-images/knowli.png',
    websitePreview: 'https://www.knowli.xyz',
    socialLinks: [
      { platform: 'x', url: 'https://x.com/knowlihq' },
      { platform: 'instagram', url: 'https://www.instagram.com/knowlihq/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/knowlihq/' },
      { platform: 'youtube', url: 'https://www.youtube.com/@knowlihq' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@knowlihq' },
      { platform: 'facebook', url: 'https://www.facebook.com/share/18tUPC9wkS/?mibextid=wwXIfr' },
    ],
    features: [
      'Header with smooth-scroll navigation to Products, Principles, and About',
      'Products section linking directly to each live product — Daylight and Knowli Quiz',
      'Idea section explaining the philosophy behind the studio: one idea, many products, each with its own identity',
      'Values section — data ownership and honesty about what is built vs. what is coming',
      'About section with a direct studio contact email',
      'Footer with a Products list, social channels (X, Instagram, LinkedIn, YouTube, GitHub), and the studio email shown directly',
    ],
    challenges: [
      'Introducing a multi-product brand before every product has its own finished visual identity — Knowli Quiz still borrows the shared Knowli mark, while Daylight already has its own',
      'Writing brand copy that stays honest about what is live versus planned, rather than reading as marketing filler',
      "Updating the brand site's product links and copy the moment a product's own status changes (e.g. Daylight going from waitlist to live) so the parent site never lags behind reality",
    ],
    releases: [
      {
        version: 'v1.1.0',
        title: 'Daylight Is Live',
        date: 'Aug 2026',
        category: 'feature',
        summary:
          "Daylight's product card now says \"Visit\" and links straight to the live app instead of a waitlist signup. The footer also gained a Products list (Daylight, Knowli Quiz) and shows the studio email directly instead of a generic \"Contact\" link.",
      },
      {
        version: 'v1.0.0',
        title: 'The Knowli House Opens',
        date: 'Jul 2026',
        category: 'feature',
        summary:
          "Knowli's home on the web went live — a place to learn what the brand is about and find your way to its products, Daylight and Knowli Quiz, with idea, values, and about sections plus social links in the footer.",
      },
    ],
  },
  {
    id: 'knowli-quiz',
    name: 'Knowli Quiz',
    description:
      'A public quiz platform where anyone signs up, builds a short quiz about themselves, and shares a personal link with friends. Friends answer, see how well they really know the creator, share their score on WhatsApp, and open a thank-you gift — no account needed to play.',
    fullDescription:
      'Knowli Quiz started as a single-person quiz ("How well do you know me?") and grew, over 15+ releases, into a full multi-user product, now living at quiz.knowli.xyz under the Knowli parent brand. Every user is now a creator with their own quiz at /u/<username>, a dashboard with stat cards and an activity feed, per-recipient gifts, and creator self-tests kept separate from real player results. It ships a complete platform layer: self-service signup, multi-admin auth gated behind super-admin approval, database-driven free-tier limits with creator tiers and email verification, an in-app notification system, limit-increase requests with an admin approval queue, and Google Analytics — all backed by a real v1→v2 data migration run against the live database.',
    category: 'platform',
    links: {
      github: 'https://github.com/knowlihq/knowli-quiz',
      demo: 'https://quiz.knowli.xyz',
    },
    privateRepo: true,
    technologies: [getTechnology('Next.js'), getTechnology('React'), getTechnology('Typescript'), getTechnology('Tailwind CSS'), getTechnology('MongoDB'), getTechnology('Node.js')],
    thumbnail: '/project-images/knowli-quiz.png',
    // Add more screenshots here (resized to 1280x720). Drop the files in
    // public/project-images/ and reference them with a lowercase path.
    gallery: [
      { src: '/project-images/gallery/knowli/home-page.png', alt: 'Knowli home page', caption: 'Home page' },
      { src: '/project-images/gallery/knowli/signup-page.png', alt: 'Knowli sign-up page', caption: 'Create an account page' },
      { src: '/project-images/gallery/knowli/login-page.png', alt: 'Knowli login page', caption: 'Login page' },
      { src: '/project-images/gallery/knowli/creator-dashboard.png', alt: 'Knowli creator dashboard', caption: 'Creator dashboard' },
      { src: '/project-images/gallery/knowli/dashboard-overview.jpg', alt: 'Knowli dashboard overview', caption: 'Dashboard overview' },
      { src: '/project-images/gallery/knowli/quiz-page.jpg', alt: 'Knowli quiz page', caption: 'Quiz page' },
      { src: '/project-images/gallery/knowli/quiz-start-page.jpg', alt: 'Knowli quiz start page', caption: 'Quiz start page' },
      { src: '/project-images/gallery/knowli/quiz-question-page.jpg', alt: 'Knowli quiz question page', caption: 'Quiz question page' },
      { src: '/project-images/gallery/knowli/quiz-result-page.png', alt: 'Knowli quiz result page', caption: 'Quiz result page' },
      { src: '/project-images/gallery/knowli/quiz-gift-page.png', alt: 'Knowli quiz gift page', caption: 'Quiz gift page' },
      { src: '/project-images/gallery/knowli/notifications-page.png', alt: 'Knowli notifications page', caption: 'Notifications page' },
      { src: '/project-images/gallery/knowli/live-notification.jpeg', alt: 'Knowli live notification', caption: 'Live notification' },
      { src: '/project-images/gallery/knowli/live-notification-page.jpeg', alt: 'Knowli live notification page', caption: 'Live notification page' },
      { src: '/project-images/gallery/knowli/result-details-page.png', alt: 'Knowli result details page', caption: 'Result details page' },
      { src: '/project-images/gallery/knowli/settings-page.png', alt: 'Knowli settings page', caption: 'Settings page' },
      { src: '/project-images/gallery/knowli/limits-request-section.jpeg', alt: 'Knowli limits request section', caption: 'Limits request section' },
      { src: '/project-images/gallery/knowli/limits-boosted-page.jpeg', alt: 'Knowli boosted limits page', caption: 'Boosted limits page' },
      { src: '/project-images/gallery/knowli/admin-panel.jpg', alt: 'Knowli admin panel', caption: 'Admin panel' },
      { src: '/project-images/gallery/knowli/admin-approval-granted.jpg', alt: 'Knowli admin approval granted', caption: 'Admin approval granted' },
      { src: '/project-images/gallery/knowli/analytics.jpg', alt: 'Knowli analytics', caption: 'Analytics' },
      { src: '/project-images/gallery/knowli/github-actions-deployment.jpg', alt: 'Knowli GitHub Actions deployment', caption: 'GitHub Actions deployment' },
    ],
    websitePreview: 'https://quiz.knowli.xyz',
    features: [
      'Self-service creator signup — build your own quiz and share it at /u/<username>',
      'Play with no account — just enter the name the creator knows you by',
      'Server-side grading; correct answers are never sent to the browser',
      'Per-recipient thank-you gifts with save-as-image and WhatsApp lead capture',
      'Creator dashboard with stat cards, activity feed, and per-submission breakdowns',
      'Creator tiers + free email verification to raise free-tier limits',
      'In-app notification system with a live unread badge and per-category preferences',
      'Multi-admin oversight gated behind a super-admin approval step',
      'Community-ranked suggested questions to seed a new quiz in one click',
    ],
    challenges: [
      'Opening a single-owner v1 app into a multi-tenant platform via an expand → migrate → contract database migration, run idempotently against the live v1 data',
      "Resolving each creator's real limits from three layers — global defaults, tier/verification, and per-creator overrides — consistently across every page",
      'Keeping creator self-tests fully isolated from real player results so testing never skews popularity, analytics, or archiving',
    ],
    releases: [
      {
        version: 'v2.10.0',
        title: 'Google Analytics',
        date: 'Jun 2026',
        category: 'feature',
        summary: "Added Google Analytics to understand real usage, with a transparent new Analytics section in the privacy policy disclosing exactly what's collected.",
      },
      {
        version: 'v2.9.0',
        title: 'Request Higher Limits & Boosted Caps',
        date: 'Jun 2026',
        category: 'feature',
        summary: 'Verified creators can request a manual limit increase from the dashboard, with a full admin review/approval queue and "Boosted" indicators on manually raised caps.',
      },
      {
        version: 'v2.8.0',
        title: 'Smarter Suggestions & Local Times',
        date: 'Jun 2026',
        category: 'feature',
        summary: "Suggested questions now rank by community popularity, and every date/time renders in the visitor's own time zone instead of UTC.",
      },
      {
        version: 'v2.7.2',
        title: 'Correct Content Limits',
        date: 'Jun 2026',
        category: 'fix',
        summary: "The Questions and Gifts pages now show and enforce each creator's real cap (tier + verification + overrides) instead of the basic free-tier number.",
      },
      {
        version: 'v2.7.1',
        title: 'Dashboard Header Mobile Fix',
        date: 'Jun 2026',
        category: 'fix',
        summary: 'Restructured the dashboard header so the notification bell no longer overflows on small screens.',
      },
      {
        version: 'v2.7.0',
        title: 'Notifications',
        date: 'Jun 2026',
        category: 'feature',
        summary:
          'A full in-app notification system: a dashboard bell with a live unread badge, a notifications page, per-category preferences, and alerts on quiz plays, email changes, and tier updates.',
      },
      {
        version: 'v2.6.0',
        title: 'Friendly Error Pages',
        date: 'Jun 2026',
        category: 'fix',
        summary: 'Errors now show a friendly page with a "Try again" option instead of a blank or broken screen.',
      },
      {
        version: 'v2.5.0',
        title: 'Creator Tiers & Email Verification',
        date: 'Jun 2026',
        category: 'feature',
        summary:
          'Creators raise their free limits by verifying an email via a 6-digit code — more questions, gifts, and responses at no cost. Early creators sit on higher Founder / Top Founder tiers, with a full limits explainer.',
      },
      {
        version: 'v2.4.1',
        title: 'Signed-in Users Skip Auth Pages',
        date: 'Jun 2026',
        category: 'fix',
        summary: 'Logged-in creators and admins now land straight on their dashboard instead of seeing the home or sign-in screens.',
      },
      {
        version: 'v2.4.0',
        title: 'Suggested Questions & "Create Your Own Quiz" CTA',
        date: 'Jun 2026',
        category: 'feature',
        summary: 'New creators get a curated pool of suggested questions to seed their quiz in one click; players who finish a quiz are invited to create their own.',
      },
      {
        version: 'v2.3.0',
        title: 'Per-Result Detail & Scaffold Cleanup',
        date: 'Jun 2026',
        category: 'feature',
        summary: 'Creators can open any submission for a question-by-question breakdown of what a player picked versus the correct answer. Also removed leftover Next.js starter branding.',
      },
      {
        version: 'v2.2.0',
        title: 'AppSettings Collection Rename',
        date: 'Jun 2026',
        category: 'internal',
        summary: 'Internal cleanup — the global-settings document moved to a self-describing appsettings collection. No user-facing change.',
      },
      {
        version: 'v2.1.0',
        title: 'Global Defaults & Limits',
        date: 'Jun 2026',
        category: 'internal',
        summary: 'Platform staff can set global free-tier caps and default question counts from the CLI, with no deploy needed.',
      },
      {
        version: 'v2.0.0',
        title: 'Public, Multi-User Platform',
        date: 'Jun 2026',
        category: 'feature',
        summary:
          'The big one: Knowli became a platform. Anyone signs up, builds their own quiz, and shares /u/<username>. Adds the creator dashboard, per-recipient gifts, self-tests, multi-admin auth with super-admin approval, DB-driven free-tier limits, privacy/terms, and a live v1→v2 data migration.',
      },
      {
        version: 'v1.1.0',
        title: 'Documentation & Testing Groundwork',
        date: 'Jun 2026',
        category: 'docs',
        summary: 'Docs-only: a proper README front door and a plain-language, page-by-page testing checklist anyone can follow. No behaviour change.',
      },
      {
        version: 'v1.0.0',
        title: 'How Well Do You Know Me?',
        date: 'Jun 2026',
        category: 'feature',
        summary:
          'The first release: My friends take my quiz from one shared link, get a score, share it on WhatsApp, and open a thank-you gift — no account needed. A private admin area manages questions and gifts and reviews submissions, with CSV bulk-import.',
      },
    ],
    social: {
      posts: [
        {
          title: 'Knowli v2 — from a one-person quiz to a public platform',
          url: 'https://www.linkedin.com/posts/omosuyiolawole_httpswwwknowlixyz-built-with-nextjs-activity-7473426589549015041-vrB2',
          date: 'Jun 2026',
          platform: 'linkedin',
        },
        {
          title: 'The Story Behind Building Knowli',
          url: 'https://www.linkedin.com/posts/omosuyiolawole_i-built-a-small-side-project-called-knowli-activity-7470203067863572480-Mlq6',
          date: 'Jun 2026',
          platform: 'linkedin',
        },
      ],
      // A public URL can't hard-filter to only your posts (that needs your numeric
      // member URN + a logged-in viewer). Adding your name biases results toward you.
      searchUrl:
        'https://www.linkedin.com/search/results/content/?keywords=knowli%20olawole%20omosuyi&origin=FACETED_SEARCH&sortBy=%5B%22date_posted%22%5D&fromMember=%5B%22ACoAAD1PEhIBBih9hYSgbykhWw8O5iUkU24BQ_o%22%5D',
    },
  },
  {
    id: 'omocollege',
    name: 'OmoCollege',
    description:
      'A web platform for Omo College secondary school that lets students take tests and exams online, submit assignments, and view their results — while giving admins full control to create content and track student performance.',
    fullDescription:
      'OmoCollege is a full-stack school platform built with Next.js 16 and MongoDB. Students self-register (with an auto-generated Student ID) and can log in only after an admin approves their account. Authentication is fully built — JWT sessions, role-based route protection, and login via surname or Student ID — with a separate protected admin area. Admins approve or reject students, view student lists and details, and upload per-subject results with flexible CA components and an exam score that auto-computes the total and grade; students then view their own results read-only. The online test/exam and assignment systems are the next major areas of work.',
    category: 'education',
    links: {
      github: 'https://github.com/omooladev/omocollege',
      demo: 'https://omocollege.vercel.app',
    },
    privateRepo: true,
    technologies: [getTechnology('Next.js'), getTechnology('React'), getTechnology('Typescript'), getTechnology('Tailwind CSS'), getTechnology('MongoDB'), getTechnology('Node.js')],
    thumbnail: '/project-images/omocollege.png',
    websitePreview: 'https://omocollege.vercel.app',
    features: [
      'Student self-registration with an auto-generated Student ID',
      'Admin approval workflow — only active accounts can sign in (pending/rejected are blocked)',
      'JWT-based authentication with role-based route protection',
      'Login via surname or Student ID',
      'Separate protected admin area with its own login and CLI-created admins',
      'Per-subject result upload with flexible CA components and auto total/grade',
      'Read-only student results dashboard',
      'Env-controlled maintenance mode ("opening soon" gate)',
    ],
    challenges: [
      'Designing a role-based access model that keeps students, admins, and pending accounts strictly separated at the route level',
      'Building a flexible results model that supports varying continuous-assessment components while auto-computing totals and grades',
      'Generating collision-free, human-readable Student IDs at registration time',
    ],
  },
  {
    id: 'flownews',
    name: 'FlowNews',
    description:
      'An interactive news platform that provides users with up-to-date global news and offers registration for contributors. This feature enables users to share their own content and local events, ensuring continuous updates for all.',
    fullDescription:
      'FlowNews is a comprehensive news platform built with the MERN stack. It allows users to browse the latest news from around the world while also giving them the ability to become contributors and share their own stories. The platform features user authentication, a rich text editor for creating articles, and a responsive design that works seamlessly across all devices.',
    category: 'news',
    links: {
      github: 'https://github.com/omooladev/flownews',
      demo: 'https://flownews.netlify.app',
    },
    technologies: [
      getTechnology('HTML5'),
      getTechnology('CSS3'),
      getTechnology('Sass'),
      getTechnology('Javascript'),
      getTechnology('React'),
      getTechnology('Node.js'),
      getTechnology('ExpressJS'),
      getTechnology('MongoDB'),
    ],
    thumbnail: '/project-images/flownews.PNG',
    websitePreview: 'https://flownews.netlify.app',
    features: [
      'Real-time news updates from global sources',
      'User authentication and authorization',
      'Contributor registration system',
      'Rich text editor for article creation',
      'Responsive design for all devices',
      'Search and filter functionality',
    ],
    challenges: ['Implementing real-time updates without overwhelming the server', 'Designing an intuitive content management system', 'Ensuring secure user authentication and data protection'],
  },
  {
    id: 'shopcommerce',
    name: 'ShopCommerce',
    description: 'An e-commerce platform enabling users to browse and purchase products, with administrative capabilities for adding, editing, and deleting products',
    fullDescription:
      'ShopCommerce is a full-featured e-commerce solution that provides both customer and admin interfaces. Customers can browse products, add items to their cart, and complete purchases securely. Administrators have access to a comprehensive dashboard for managing products, orders, and inventory with image upload capabilities via Cloudinary.',
    category: 'ecommerce',
    links: {
      github: 'https://github.com/omooladev/ShopCommerce',
      demo: 'https://shopcommerce.onrender.com',
    },
    technologies: [
      getTechnology('HTML5'),
      getTechnology('CSS3'),
      getTechnology('Sass'),
      getTechnology('Javascript'),
      getTechnology('Typescript'),
      getTechnology('EJS'),
      getTechnology('Node.js'),
      getTechnology('ExpressJS'),
      getTechnology('MongoDB'),
      getTechnology('Cloudinary'),
    ],
    thumbnail: '/project-images/shopcommerce.PNG',
    websitePreview: 'https://shopcommerce.onrender.com',
    features: [
      'Product browsing and search',
      'Shopping cart functionality',
      'Secure checkout process',
      'Admin dashboard for product management',
      'Image upload and optimization with Cloudinary',
      'Order tracking and management',
      'User authentication and profiles',
    ],
    challenges: ['Implementing secure payment processing', 'Managing product inventory in real-time', 'Optimizing image uploads and storage with Cloudinary'],
  },
  {
    id: 'cropify',
    name: 'Cropify',
    description:
      'Cropify allows you to effortlessly crop any image in your collection, regardless of format. It takes the hassle out of image cropping, making it accessible to everyone, regardless of technical expertise.',
    fullDescription:
      'Cropify is a user-friendly image cropping tool built with modern web technologies. It leverages the Cropper.js library to provide professional-grade image cropping capabilities directly in the browser. The application is bundled with Webpack for optimal performance and supports various image formats.',
    category: 'tools',
    links: {
      github: 'https://github.com/omooladev/Cropify',
      demo: 'https://cropify.vercel.app/',
    },
    technologies: [getTechnology('HTML5'), getTechnology('CSS3'), getTechnology('Sass'), getTechnology('Javascript'), getTechnology('Webpack'), getTechnology('Cropper.Js')],
    thumbnail: '/project-images/cropify.PNG',
    websitePreview: 'https://cropify.vercel.app/',
    features: [
      'Support for multiple image formats',
      'Intuitive drag-and-resize interface',
      'Aspect ratio presets',
      'Real-time preview',
      'High-quality image export',
      'No server-side processing - everything runs in the browser',
    ],
    challenges: ['Maintaining image quality during cropping', 'Handling large image files efficiently', 'Creating an intuitive user interface for technical and non-technical users'],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.id === slug);
};

export const getSimilarProjects = (currentProjectId: string, limit: number = 3): Project[] => {
  const currentProject = projects.find(p => p.id === currentProjectId);
  if (!currentProject) return projects.filter(p => p.id !== currentProjectId).slice(0, limit);

  // First, get projects from the same category
  const sameCategory = projects.filter(
    p => p.id !== currentProjectId && p.category === currentProject.category
  );

  // If we have enough projects from same category, return them
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Otherwise, fill remaining slots with other projects
  const otherProjects = projects.filter(
    p => p.id !== currentProjectId && p.category !== currentProject.category
  );

  return [...sameCategory, ...otherProjects].slice(0, limit);
};
