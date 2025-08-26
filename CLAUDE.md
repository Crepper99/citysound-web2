# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a CitySound website - a React/TypeScript application built with Vite.

### Architecture Overview

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom CitySound color palette (green, red, blue variants)
- **Routing**: React Router DOM for multi-page navigation
- **Icons**: Lucide React

### Key Directories

- `src/components/` - Reusable UI components (Header, Footer, HeroSection, etc.)
- `src/pages/` - Route-level page components (HomePage, ContactPage, ServicesPage, etc.)
- `src/hooks/` - Custom React hooks (useCounter for animated counters)
- `src/types/` - TypeScript type definitions
- `src/assets/` - Static assets (logos, images)
- `public/` - Public static assets

### Component Architecture

Pages are composed of section components:
- HomePage combines: Header → HeroSection → ReferencesSection → ProcessSection → ServicesSection → BenefitsSection → ContactSection → Footer
- Each page auto-scrolls to top on mount
- Custom hooks like `useCounter` provide intersection-observer based animations

### Styling System

- Custom Tailwind config with CitySound brand colors
- Custom animations: fade-in, slide-up, scale-in
- Font family: Inter

## Development Commands

### Essential Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Workflow

1. The project uses strict TypeScript configuration
2. ESLint is configured for React hooks and refresh
3. No test framework is currently configured