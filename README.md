# Environment Variables Setup Guide

This guide will help you set up the necessary environment variables for this Next.js project. Follow these steps to obtain and configure each required variable.

## Database URL (MongoDB)

1. Sign up for a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) if you haven't already.
2. Create a new cluster or use an existing one.
3. In the Atlas dashboard, click on "Connect" for your cluster.
4. Choose "Connect your application".
5. Select "Node.js" as your driver and choose the appropriate version.
6. Copy the connection string provided. It will look something like this:
   ```
   mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
   ```
7. Replace `<username>` and `<password>` with your MongoDB Atlas database user credentials.
8. Replace `<database-name>` with the name of your database.
9. Set `DATABASE_URL` in your `.env` file to this complete connection string.

## UploadThing Configuration

1. Go to [UploadThing](https://uploadthing.com/) and create an account.
2. Create a new project in the UploadThing dashboard.
3. In your project settings, find the `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID`.
4. Copy these values to your `.env` file.

## NextAuth Configuration

1. Generate a secure random string for `NEXTAUTH_SECRET`. You can use a tool like [generate-secret.vercel.app](https://generate-secret.vercel.app/).
2. Set `NEXTAUTH_URL` to your application's base URL (e.g., `http://localhost:3000` for local development or your deployed URL for production).

## GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers).
2. Click "New OAuth App".
3. Fill in the application details:
   - Application name: Your app's name
   - Homepage URL: Your app's URL
   - Authorization callback URL: `{NEXTAUTH_URL}/api/auth/callback/github`
4. After creating the app, you'll see the `Client ID` and `Client Secret`.
5. Set `GITHUB_CLIENT_ID` and `GITHUB_SECRET` with these values.

## Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Go to "APIs & Services" > "Credentials".
4. Click "Create Credentials" > "OAuth client ID".
5. Set the application type to "Web application".
6. Add authorized redirect URIs: `{NEXTAUTH_URL}/api/auth/callback/google`
7. After creating, you'll get the `Client ID` and `Client Secret`.
8. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` with these values.

Remember to never commit your `.env` file to version control. Add it to your `.gitignore` file to prevent accidental exposure of sensitive information.
# project-management
