<h1 align="center">Chatbot Your Files - Repo</h1>

## Original Repository

This project was originally forked from [supabase-community/chatgpt-your-files](https://github.com/supabase-community/chatgpt-your-files).

## 💽 Clone

1. **Clone repo:** Clone this repo:

   ```shell
   git clone https://github.com/RonyTrespalacios/chatbot-your-files.git
   ```

   This will automatically clone our starting point.

## 🧱 Pre-req’s

- Unix-based OS (if Windows, WSL2)
- Docker
- Node.js 18+
- Deno 

## 💿 Sample Data

This repository includes 3 sample markdown files that we'll use to test the app:

[`./sample-files/file1.md`](./sample-files/file1.md)

[`./sample-files/file2.md`](./sample-files/file2.md)

[`./sample-files/file3.md`](./sample-files/file3.md)




### `Step 1` - Install dependencies

#### Install dependencies

First install NPM dependencies.

```bash
npm i
```

#### Setup Supabase stack

When developing a project in Supabase, you can choose to develop locally or directly on the cloud.

1. Start a local version of Supabase _(runs in Docker)_. This will start the supabase at 54323 port.

   ```shell
   npx supabase start
   ```

1. Store the Supabase URL & public anon key in `.env.local` for Next.js.

   ```bash
   npx supabase status -o env \
     --override-name api.url=NEXT_PUBLIC_SUPABASE_URL \
     --override-name auth.anon_key=NEXT_PUBLIC_SUPABASE_ANON_KEY |
       grep NEXT_PUBLIC > .env.local
   ```

1.  If developing locally, open a new terminal and serve the edge functions.

    ```bash
    npx supabase functions serve
    ```

    _Note: Local Edge Functions are automatically served as part of `npx supabase start`, but this command allows us to also monitor their logs._

    If you're developing directly on the cloud, deploy your edge function:

    ```shell
    npx supabase functions deploy
    ```

1.  If you want to reset your supabase local data.

    ```bash
    npx supabase db reset
    ```

1.  How to apply the migration to our local database.

    ```bash
    npx supabase migration up
    ```

    or if you are developing directly on the cloud, push your migrations up:

    ```
    npx supabase db push
    ```

1.  Install frontend dependencies

    ```bash
    npm i @xenova/transformers ai
    ```

    We'll use [Transformers.js](https://github.com/xenova/transformers.js) to perform inference directly in the browser.

1.  Generate an API key from [OpenAI](https://platform.openai.com/account/api-keys) and save it in `supabase/functions/.env`.

    ```bash
    cat > supabase/functions/.env <<- EOF
    OPENAI_API_KEY=<your-api-key>
    EOF
    ```

1.  Run frontend at 3000 port.

    ```bash
    npm run dev
    ```

## 🔗 Supabase Vector resources

- [Supabase AI & Vector](https://supabase.com/docs/guides/ai)
- [pgvector Columns](https://supabase.com/docs/guides/ai/vector-columns)
- [pgvector Indexes](https://supabase.com/docs/guides/ai/vector-indexes)
- [Generate Embeddings using Edge Functions](https://supabase.com/docs/guides/ai/quickstarts/generate-text-embeddings)
- [Going to Production](https://supabase.com/docs/guides/ai/going-to-prod)
