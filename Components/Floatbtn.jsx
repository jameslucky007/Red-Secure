import { useRouter } from 'next/router';
import { ArrowUpRight } from 'lucide-react';

export default function FloatingHomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
    >
      <ArrowUpRight size={24} />
    </button>
  );
}
