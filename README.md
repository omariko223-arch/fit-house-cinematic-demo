# FitHouse Cinematic Demo

Build a premium, cinematic demo website for Fit House Gym in El Seyahia El Rabaa, 6th of October, Egypt. This is a sales demo for the real gym, not a generic fitness template.

Visual identity: electric/lime green + near-black + white. The brand feel is gritty, energetic, cinematic, motivational, urban, modern, and highly organized. Avoid obvious AI-template aesthetics, generic gradients, identical rounded cards, cheesy fitness slogans, or fake luxury styling. Use strong condensed display typography, oversized editorial headlines, dark training imagery/video placeholders, green edge lighting/glow, distressed textures, subtle grain, masked text, layered athlete imagery, and controlled scroll-based motion. The site should feel like FitHouse's existing Instagram visual identity translated into a premium digital product.

Core homepage structure:
1. Fullscreen cinematic hero with dark training footage placeholder, FitHouse branding, headline such as “YOUR FITNESS COMMUNITY.” with COMMUNITY in electric green, subline “OPEN 24/7 · 6TH OF OCTOBER”, primary CTA JOIN FITHOUSE and secondary CTA EXPLORE TRAINING.
2. Scroll transition into a massive “BUILT ON CONSISTENCY.” statement with dynamic typography and training footage transitions.
3. Training disciplines section with visually distinct compositions for Strength, Calisthenics, Kickboxing & MMA, Classes, Personal Training, and Kids Fitness. Hover interactions should feel premium and motion-rich.
4. Community / transformation section using testimonial and transformation placeholders only. Do not invent real claims or metrics.
5. Membership section titled “CHOOSE YOUR MEMBERSHIP.” with polished plan cards, a demo trainer promo-code field, discount interaction, and a prominent Join Now CTA. Do NOT invent actual FitHouse prices; use labels like “Current plan details available from FitHouse” or demo placeholder values clearly marked as demo.
6. Trainers section titled “MEET THE HOUSE.” with cinematic trainer profile cards, specialty placeholders, credentials placeholders clearly marked “to be supplied by FitHouse”, and a “Train With Me” CTA.
7. Classes schedule section that looks like a real responsive schedule rather than an image poster. Include placeholder schedule data clearly marked as demo.
8. 24/7 section with strong copy and dark/green visual treatment: “NO EXCUSES. WE’RE OPEN 24/7.”
9. Location/contact section with El Seyahia El Rabaa / 6th of October, WhatsApp CTA, directions CTA, Instagram CTA, and footer.

Interaction and motion requirements:
- Smooth scroll-based reveals and section transitions.
- Parallax or layered movement where tasteful.
- Hover-triggered media/visual changes for training categories.
- Animated membership promo-code interaction.
- Subtle number/text reveals, masked headline animations, and video-scale transitions.
- Respect prefers-reduced-motion.
- Keep mobile extremely polished and performant; animations must degrade gracefully.

Functional demo behavior:
- Membership selection works in the UI.
- Promo code demo field can accept a sample code such as FH10 and visibly apply a demo discount, but label this behavior as demo-only.
- Trainer cards open profile detail views or modal/drawer panels.
- Classes schedule is filterable by class type or day.
- WhatsApp/contact buttons work with placeholder or clearly marked links if real details are unavailable.

Important constraints:
- Do not fabricate FitHouse trainer credentials, membership prices, testimonials, transformation claims, or statistics.
- Do not make this look like Nike, Gymshark, Equinox, or a generic American gym. It must feel like FitHouse's own brand.
- Do not overuse cards. Every major section should have its own visual composition.
- Use reusable React components and clean Tailwind/shadcn structure.
- This first version is a visually convincing sales demo, not a production checkout system yet.

Project name should be FitHouse Digital Demo. Build the full responsive homepage now and make it presentation-ready.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/494d3e33-cb17-46ae-ad68-8e59f6e5322a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
