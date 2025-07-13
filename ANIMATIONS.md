# Portfolio Animations

This portfolio now includes smooth, engaging animations powered by Framer Motion. Here's what has been implemented:

## 🎬 Animation Components

### 1. AnimatedSection
A reusable component that provides scroll-triggered animations with customizable:
- Direction (up, down, left, right)
- Delay and duration
- Distance of movement
- Fade-in effects

### 2. AnimatedText
Text animation component with three types:
- **Fade**: Smooth fade-in with slight upward movement
- **Typewriter**: Character-by-character typing effect with blinking cursor
- **Slide**: Slide-in from left with fade

### 3. AnimatedCard
Card component with:
- Entrance animations (fade + slide up)
- Hover effects (lift + scale)
- Smooth transitions

### 4. AnimatedLoader
Loading spinner with:
- Smooth rotation animation
- Customizable size and color
- Infinite loop

## 🎯 Applied Animations

### Hero Section
- **Title**: Typewriter effect for main title, staggered fade-in for highlights
- **Subtitle**: Fade-in with delay
- **Profile Image**: Scale and fade-in animation
- **Logo**: Rotation animation
- **Dots**: Scale animation
- **Current Work**: Slide-in with pulsing indicator

### Sections
- **Quote Card**: Fade-in when scrolled into view
- **Projects**: Staggered card animations with hover effects
- **Skills**: Header slide-in, skill boxes with hover effects
- **About Me**: Text slide-in, image scale animation, decorative elements
- **Contact**: Fade-in animation

### Interactive Elements
- **Buttons**: Hover scale and tap animations
- **Cards**: Hover lift and scale effects
- **Links**: Smooth hover transitions

## 🛠️ Technical Details

### Dependencies
- **Framer Motion**: v10+ for React animations
- **React**: v19+ for component structure

### Performance
- Uses `useInView` for scroll-triggered animations
- `once: true` prevents re-animation on scroll
- Optimized with `viewport` margins for better timing
- Hardware-accelerated transforms for smooth performance

### Customization
All animations can be customized through props:
- `delay`: Animation delay in seconds
- `duration`: Animation duration in seconds
- `direction`: Animation direction
- `distance`: Movement distance in pixels
- `type`: Animation type for text

## 🎨 Animation Principles

1. **Subtle**: Animations enhance without distracting
2. **Purposeful**: Each animation serves a specific purpose
3. **Smooth**: Easing functions for natural movement
4. **Progressive**: Staggered animations guide user attention
5. **Responsive**: Animations work across all screen sizes

## 🚀 Usage Examples

```tsx
// Basic section animation
<AnimatedSection delay={0.2} direction="up">
  <YourContent />
</AnimatedSection>

// Typewriter text
<AnimatedText text="Hello World" type="typewriter" delay={0.5} />

// Animated card with hover
<AnimatedCard delay={0.3} hover={true}>
  <CardContent />
</AnimatedCard>
```

## 🔧 Future Enhancements

- Page transition animations
- Scroll-triggered parallax effects
- Gesture-based animations
- Reduced motion support for accessibility
- Animation performance monitoring 