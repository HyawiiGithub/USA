import React, { useState } from 'react';

// Mock user database for GitHub Pages compatibility
const MOCK_USERS = [
  { email: 'enigma@cabinet.gov', password: 'P7r$En1gmA-K1ngM4cD0n4ld$Tr3asUr3!', name: 'Enigma', title: 'President' },
  { email: 'kingofmcdonalds@cabinet.gov', password: 'V1c3Pr3s-K1ngM4cD0n4ld$ArCh1u$St4t3$B3nn1!', name: 'king of mcdonalds', title: 'Vice President' },
  { email: 'hyawii@cabinet.gov', password: 'WhCh13f-Hy4w11$St4t3ArCh1u$Tr34sUr3B3nn1$D3f3n$3!', name: 'Hyawii', title: 'WH Chief of Staff' },
  { email: 'archiusdornius@cabinet.gov', password: 'St4t3ArCh1u$D0rn1u$Tr3a$Ur3B3nn1$Sh4m3l3s$!', name: 'ArchiusDornius', title: 'Secretary of State' },
  { email: 'benni@cabinet.gov', password: 'Tr345Ur3B3nn1$Sh4m3l3s$AtT0rn3yG3n3r4l$F3r14n!', name: 'Benni', title: 'Secretary of the Treasury' },
  { email: 'shameless@cabinet.gov', password: '4tT0rn3yG3n-Sh4m3l3s$F3r14nD3f3n$3$T3chSyn!', name: 'Shameless', title: 'Attorney General' },
  { email: 'ferian@cabinet.gov', password: 'D3f3n$3F3r14n$T3chn0cr4t1c$SynD1c4l1sT$TrvT!', name: 'Ferian', title: 'Secretary of Defense' },
  { email: 'technocraticsyndicalist@cabinet.gov', password: 'Int3r10rT3chSyn$TrvTk0$4gr1cuLtur3$3m4n0n!', name: 'TechnocraticSyndicalist', title: 'Secretary of the Interior' },
  { email: 'trvtko@cabinet.gov', password: '4gr1CuL-TrvTk0$3m4n0nC0mm3rc3$Kl0b1$!', name: 'Trvtko', title: 'Secretary of Agriculture' },
  { email: 'emanon@cabinet.gov', password: 'C0mm3rc3-3m4n0n$Kl0b1$kuM$Un4mbB1g1r0n!', name: 'Emanon', title: 'Secretary of Commerce' },
  { email: 'klobiskum@cabinet.gov', password: 'H34lthKl0b1$kuM$Hy4w11$Tr4n$Sp0rtF3nt4nyl!', name: 'Klobiskum', title: 'Secretary of Health' },
  { email: 'fentanyl@cabinet.gov', password: 'Tr4n$Sp0rtF3nt4nyl$S4mw1$3$Epa4dm1n!', name: 'fentanyl', title: 'Secretary of Transportation' },
  { email: 'samwise@cabinet.gov', password: '3p4-S4mw1$3$3n3rGyJ3n$0$1m4t3!', name: 'Samwise', title: 'Administrator of the EPA' },
  { email: 'jens@cabinet.gov', password: '3n3rGyJ3n$0$1m4t3EduC4t10n$F4lk3n!', name: 'Jens', title: 'Secretary of Energy' },
  { email: 'osimate@cabinet.gov', password: '3duC4t10n0$1m4t3$F4lk3nH0m3L4nd!', name: 'Osimate', title: 'Secretary of Education' },
  { email: 'falken@cabinet.gov', password: 'H0m3L4ndF4lk3n$Squ33dDni$Th0rGr1m!', name: 'falken', title: 'Secretary of Homeland Security' },
  { email: 'bigiron@cabinet.gov', password: 'Un4mbB1g1r0n$Squ33dD1r3ct0rN4t10n4l!', name: 'Big Iron', title: 'Ambassador to the UN' },
  { email: 'squeed@cabinet.gov', password: 'Dn1-Squ33d$Th0rGr1mC14D1r3ct0r!', name: 'Squeed', title: 'Director of National Intelligence' },
  { email: 'thorgrim@cabinet.gov', password: 'C14Th0rGr1m$D1r3ct0r0fC3nTr4l1nt3ll!', name: 'Thorgrim', title: 'Director of the Central Intelligence Agency' }
];

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      const user = MOCK_USERS.find(u => 
        u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        const { password, ...userWithoutPassword } = user;
        onLogin(userWithoutPassword);
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg px-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">US Cabinet Portal</h1>
          <p className="text-gray-600 mt-2">Secure access to member directory</p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={credentials.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={credentials.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Signing in...
              </>
            ) : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Demo Access:</h3>
          <p className="text-xs text-gray-600">
            Use any cabinet member's email and corresponding password
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
