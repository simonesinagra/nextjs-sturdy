import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js sturdy</title>
        <meta name="description" content="Next.js projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 px-0 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">
          Welcome to <b>Next.js sturdy!</b>
        </h1>
      </main>
    </div>
  );
}
