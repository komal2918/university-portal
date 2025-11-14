import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>University Landing Pages</title>
        <meta name="description" content="University admissions portal" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              University Admissions Portal
            </h1>
            <p className="text-lg text-gray-600">
              Choose a university to explore programs and apply
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LPU Card */}
            <Link href="/lpu">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 cursor-pointer border-2 border-transparent hover:border-blue-500">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  L
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
                  Lovely Professional University
                </h2>
                <p className="text-gray-600 text-center mb-4">
                  One of Indias largest universities with 30,000+ students
                </p>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <span>200+ Programs</span>
                  <span>•</span>
                  <span>90% Placement</span>
                </div>
              </div>
            </Link>

            {/* Amity Card */}
            <Link href="/amity">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 cursor-pointer border-2 border-transparent hover:border-purple-500">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  A
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
                  Amity University
                </h2>
                <p className="text-gray-600 text-center mb-4">
                  Premier private university with global partnerships
                </p>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <span>150+ Programs</span>
                  <span>•</span>
                  <span>85% Placement</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
