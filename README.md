# Inspirame

This is a multilingual, mobile-friendly website built using **Next.js (App Router)**. It leverages **TypeScript** for type safety, **Tailwind CSS** for styling, and **Framer Motion** for engaging animations. The site is deployed on **Vercel** and integrates with various services like **Cloudinary** (media hosting) and **I18Nexus** (translation management).

---

## Tech Stack & Services

1. **Next.js (App Router) + TypeScript**
   - App Router provides enhanced layouts, component colocation, better file organization, and built-in data fetching at the component level.
   - TypeScript offers compile-time type checking, making the code more robust and maintainable.

2. **Deployment: Vercel**
   - Seamless deployment and hosting with automatic builds from the connected repository.
   - Integration with Vercel Analytics for real-time traffic and performance insights.

3. **Styling: Tailwind CSS**
   - Utility-first CSS framework for faster UI development and consistent styling.
   - Easily configurable for custom themes or design systems.

4. **Animations: Framer Motion**
   - Library used to add smooth, performant animations and transitions.
   - Helps create interactive elements and improve user experience.

5. **Internationalization: I18Nexus**
   - Manages translation strings, enabling easy updates to text in multiple languages.
   - Integrates with Next.js to serve localized content.

6. **Cloud Media Hosting: Cloudinary**
   - Hosts and optimizes images and videos, allowing on-the-fly transformations (e.g., resizing, format conversion).
   - Reduces bandwidth usage and speeds up media delivery.

---

## Project Features

1. **Enhanced Layouts (Next.js App Router)**
   - Shared UI components (e.g., header, footer) are defined in layout files, making it straightforward to structure and maintain the site.

2. **Component-Level Data Fetching**
   - Fetching data at the component level helps reduce page load times and improve performance, especially for partial updates.

3. **Framer Motion Animations**
   - Smooth transitions and interactive elements for an engaging user experience.

4. **Tailwind CSS**
   - Rapid, consistent styling with utility classes; easily custom-tailored to project needs.

5. **High Lighthouse Score**
   - Optimized for performance, accessibility, best practices, and SEO.

6. **Lightweight (~100kb First Load)**
   - Focus on minimal bundle size to ensure fast loading times on desktop and mobile devices.

7. **Mobile-Friendly**
   - Fully responsive layout with Tailwind’s responsive utilities, tested across devices.

8. **Font Optimization with `next/font`**
   - Loads fonts from Google or custom providers in a more efficient manner.

9. **SEO & Sitemaps**
   - Properly structured metadata, canonical URLs, and automatically generated sitemaps for search engine discovery.

10. **Multi-language Support**
    - Uses I18Nexus to manage translation strings across multiple locales.
    - Automatic language detection and localized routes.

11. **Cloudinary for Image & Video**
    - High-performance media optimization, with transformations applied on the fly.
    - Simplifies asset management, ensuring minimal overhead when dealing with large or numerous files.

12. **Vercel Analytics**
    - Lightweight, real-time analytics to monitor traffic and performance without impacting page speed significantly.

---

## Getting Started

Below are the steps to set up and run the project locally:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Ced97110/Inspirame.git