# Local Development Setup

## 1. Environment Variables
Create a `.env` file in the root directory with the following variables:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Database
DATABASE_URL=your-local-database-url

# Session secret (if needed)
SESSION_SECRET=your-random-session-secret
```

## 2. Install Dependencies
```
npm install
```

## 3. Run the App
```
npm run dev
```

The app will be available at http://localhost:5000 