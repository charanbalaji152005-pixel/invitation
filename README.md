# InviteCraft - Invitation Card Making Store Website

A modern, vibrant, and beginner-friendly invitation card store website built using **React.js, HTML, CSS, Bootstrap, and React Icons**.

---

## 🌟 Highlights & Features

- **Strict 6 Pages Navigation**:
  1. **Home (`/`)**: High-impact landing page featuring brand identity ("InviteCraft"), hero invitation showcase banner with primary CTAs, popular category grid, featured invitation cards, and heartfelt customer reviews.
  2. **Wedding Invitations (`/wedding`)**: Rose Pink & Gold palette, responsive React carousel of royal cards, category filters (Traditional Wedding, Modern Wedding, Royal Wedding, South Indian Wedding, Engagement, Reception), and cards with price, rating, and customization triggers.
  3. **Birthday Invitations (`/birthday`)**: Vibrant Orange & Blue palette, animated carousel, categories (Kids Birthday, 1st Birthday, Teen Birthday, Adult Birthday, Surprise Party, Theme Birthday) with playful hover effects.
  4. **Other Events (`/events`)**: Fresh Green & Yellow palette, distinct category background styling (Baby Shower, Housewarming, Anniversary, Graduation, Naming Ceremony, Festival, Corporate Events) and carousel.
  5. **Card Details / Customization (`/customize`)**: Lavender & White palette, template picker, live interactive card previewer updating in real-time with React state (Celebrant Names, Event Title, Date, Time, Venue, RSVP, Color harmonies, Custom background/text/foil pickers, Fonts, Sizes, and Finishes).
  6. **Contact / Order (`/contact`)**: Dark Blue & Light Blue palette, order & enquiry form prefilled from the customizer, celebratory confetti, order confirmation modal, store address, phone, email, WhatsApp, and social media links.

---

## 📁 Project Structure

```
c:\H React.js\invitation/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── assets/
│   │   └── images/               # Card assets & imagery
│   ├── data/
│   │   ├── invitationsData.js    # Catalog of wedding, birthday, and events cards & image attributions
│   │   └── reviewsData.js        # Customer reviews and store feature items
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive header with search, cart/wishlist badges, mobile drawer
│   │   ├── Footer.jsx            # Rich footer with links, store info, social icons & Image Sources modal
│   │   ├── InvitationCard.jsx    # Reusable card with zoom hover, rating stars, and action buttons
│   │   ├── Carousel.jsx          # Interactive React carousel with auto-play, arrows, and indicators
│   │   └── CategoryCard.jsx      # Visual category showcase cards
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── Wedding.jsx           # Wedding collection with 6 categories
│   │   ├── Birthday.jsx          # Birthday collection with 6 categories
│   │   ├── Events.jsx            # Other events collection with 7 categories
│   │   ├── Customize.jsx         # Real-time live customization studio
│   │   └── Contact.jsx           # Order & enquiry form + store location details
│   ├── App.jsx                   # React Router with exactly 6 routes
│   ├── App.css                   # Theme styles, page palettes, glassmorphism, animations
│   ├── index.css                 # Typography and base resets
│   └── main.jsx                  # Entry point with Bootstrap integration
```

---

## 📸 Images Used & Attribution

In accordance with project requirements, high-resolution invitation photography and celebration graphics are sourced under copyright-safe Unsplash licenses:

| Category | Search Keywords | Image Source & Notes |
| :--- | :--- | :--- |
| **Hero Banner** | `luxury wedding invitation card` | Unsplash - Opulent gold-embossed royal suite |
| **Wedding Cards** | `Indian wedding invitation card`, `royal wedding invitation` | Unsplash - Vedic temple gopuram, velvet paisley, floral botanical |
| **Birthday Cards** | `colorful birthday invitation card`, `kids birthday invitation` | Unsplash - Jungle safari, twinkle star 1st birthday, neon cyber |
| **Baby Shower** | `baby shower invitation card` | Unsplash - Delicate pastel floral nursery motifs |
| **Housewarming** | `Indian housewarming invitation` | Unsplash - Sacred kalash and warm home entrance |
| **Graduation** | `graduation invitation card` | Unsplash - Mortarboard cap, parchment scroll, alumni crest |
| **Festivals** | `Indian festival invitation card` | Unsplash - Illuminated clay diyas and festive marigolds |

*(Note: Users can also click the "Image Sources & Attribution" button in the website footer at any time to inspect full documentation.)*

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
Local server will be available at: `http://localhost:5173/`
