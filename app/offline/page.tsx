import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offline',
  description: 'You are currently offline.',
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <i className="bx bx-wifi-off text-6xl mb-6 text-[#152b77]" aria-hidden="true" />
      <h1 className="text-3xl font-bold mb-3">You&apos;re offline</h1>
      <p className="max-w-md text-gray-500 dark:text-gray-400 mb-8">
        It looks like you&apos;ve lost your internet connection. Pages you&apos;ve already
        visited are still available — reconnect to load anything new.
      </p>
      <a
        href="/"
        className="rounded-full bg-[#152b77] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
      >
        Back to home
      </a>
    </div>
  );
}
