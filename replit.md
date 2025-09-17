# Portfolio Website - Muhammad Muaz Ahmed

## Overview

This is a modern, single-page portfolio website for Muhammad Muaz Ahmed, a Full Stack Developer and Cybersecurity Enthusiast. Built as a professional showcase featuring a hero section, about section, skills display, project portfolio, work experience, and contact form. The site emphasizes clean design, responsive layout, and professional presentation of technical expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing (single-page application)
- **Styling**: Tailwind CSS with custom design system based on modern portfolio aesthetics
- **Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI
- **State Management**: React Query (TanStack Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Email Service**: Nodemailer for contact form email delivery
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot module replacement with Vite middleware integration

### Design System
- **Theme**: Dark/light mode support with CSS custom properties
- **Typography**: Inter font for clean, professional appearance
- **Color Palette**: Custom HSL-based color system with semantic naming
- **Layout**: Responsive design with mobile-first approach
- **Components**: Consistent spacing, elevation, and interaction patterns

### Data Management
- **Schema Definition**: Drizzle ORM with PostgreSQL schema definitions
- **Contact Form**: Form validation with structured data handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user data
- **Type Safety**: End-to-end TypeScript types from database to frontend

### Development Workflow
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reload**: Development server with automatic reloading
- **Path Aliases**: Clean import paths with TypeScript path mapping
- **Build Process**: Separate client and server build processes with optimized outputs

## External Dependencies

### Core Technologies
- **React 18+**: Frontend framework with hooks and concurrent features
- **TypeScript**: Static typing throughout the application
- **Express.js**: Backend API server framework
- **Node.js**: Server runtime environment

### UI Framework
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Accessible, unstyled UI primitives
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Consistent icon system

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit
- **PostgreSQL**: Primary database (configured via Neon serverless)
- **Zod**: Schema validation for runtime type checking

### Communication
- **Nodemailer**: Email service for contact form submissions
- **SMTP Configuration**: Email delivery via environment-configured SMTP server

### Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: Fast JavaScript bundler for server builds
- **PostCSS**: CSS processing with Tailwind CSS
- **Replit Integration**: Development environment integration for cloud deployment

### Deployment & Hosting
- **Environment Variables**: Configuration for database, email, and deployment settings
- **Static Asset Serving**: Optimized asset delivery in production
- **Process Management**: Production server configuration with proper error handling