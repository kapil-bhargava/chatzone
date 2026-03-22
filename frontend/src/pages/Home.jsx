import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Welcome to ChatZone</h1>
        <p className="text-blue-600 text-sm mb-8">Connect instantly with anyone, anywhere.</p>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/createroom')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl transition duration-300"
          >
            Create Room
          </button>
          <button
            onClick={() => navigate('/joinroom')}
            className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-6 rounded-2xl transition duration-300"
          >
            Join Room
          </button>
        </div>

        <div className="mt-10 text-xs text-blue-400">
          Built with ❤️ by Kapil
        </div>
      </div>
    </div>
  );
}
