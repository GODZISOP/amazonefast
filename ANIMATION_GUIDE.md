# Global Website Scroll Animation Guide (AnimatedText)

Yeh animation system puri website (`Home`, `About`, `Services`, `Privacy Policy`, `Contact Us` etc.) ke sabhi texts ke liye standardize kar diya gaya hai.

---

## 1. Component Path
```tsx
import { AnimatedText } from "@/components/AnimatedText";
// ya
import AnimatedText from "@/components/AnimatedText";
```

File location:
`src/components/AnimatedText.tsx`

---

## 2. Animation Logic (Framer Motion Stagger Scroll)
Yeh wahi exact animation hai jo **Home Page** par lagi hui hai:
- **`initial="hidden"`**
- **`whileInView="visible"`**
- **`viewport={{ once: false, margin: "0px 0px -50px 0px" }}`** (Scroll karne par jab element screen par aata hai to har lafz (word) smooth drift & fade ke sath enter hota hai)
- **`variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}`**

---

## 3. Available Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `string` | *(Required)* | Jo text display karna hai |
| `tag` | `"h1" \| "h2" \| "h3" \| "h4" \| "p" \| "span" \| "div"` | `"h2"` | HTML semantic tag |
| `className` | `string` | `""` | Tailwind CSS styling classes |
| `stagger` | `number` | `0.05` | Har word ke darmiyan animation delay (seconds) |
| `y` | `number` | `20` | Shuruat mein niche se kitna oopar uthega |
| `delay` | `number` | `0` | Pura text animation shuru hone ka initial delay |
| `duration` | `number` | `0.4` | Har word ki animation speed |
| `once` | `boolean` | `false` | `false` = har dafa scroll par chalega; `true` = sirf pehli bar |

---

## 4. Usage Examples (Across All Pages)

### A. Main Page Headings (`h1`, `h2`)
```tsx
<AnimatedText
  text="Start & Grow Your Amazon Business"
  className="text-4xl sm:text-6xl font-bold tracking-tight text-white text-center"
  tag="h1"
  stagger={0.06}
/>
```

### B. Section Sub-headings & Headings (`h2`, `h3`)
```tsx
<AnimatedText
  text="ACCOUNT MANAGEMENT"
  className="text-3xl md:text-5xl font-semibold uppercase tracking-wide text-white"
  tag="h3"
  stagger={0.06}
/>
```

### C. Paragraphs & Body Text (`p`)
Paragraphs ke liye thora fast stagger (`0.02`) aur chota `y` offset (`10` ya `12`) rakhein taake parhne mein quick aur responsive lage:
```tsx
<AnimatedText
  text="We run your Amazon account day to day, including listings, orders and stock."
  className="text-white/80 text-base leading-relaxed"
  tag="p"
  stagger={0.02}
  y={12}
/>
```

### D. Badges / Small Pills (`span`)
```tsx
<div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
  <AnimatedText
    text="Who We Are"
    className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wide inline-block"
    tag="span"
    stagger={0.05}
  />
</div>
```

### E. Feature Cards / Principles (`h4` & `p`)
```tsx
<div className="p-8 rounded-3xl bg-[#111] border border-white/5">
  <AnimatedText
    text="Transparency"
    className="text-xl font-bold mb-3 text-white"
    tag="h4"
    stagger={0.06}
  />
  <AnimatedText
    text="No hidden fees. We tell you what we are doing and why, in simple words."
    className="text-white/50 leading-relaxed"
    tag="p"
    stagger={0.02}
    y={12}
  />
</div>
```

---

## 5. Website Consistency Rule
- Sabhi pages (`Home`, `About`, `Services`, `Contact`, `Privacy Policy`) par titles aur key paragraphs ke liye SplitText ya direct plain tags ke bajaye **`AnimatedText`** use karein.
- Is se puri website ka look & feel bilkul synchronized aur cohesive rahega.
