import { useState } from 'react';

function App() {
  const [redirecting, setRedirecting] = useState(false);

  return (
    <div className='App'>
      {redirecting && <p>redirecting...</p>}
      {!redirecting && (
        <button
          onClick={async () => {
            setRedirecting(true);
            setTimeout(
              () => (window.location.href = 'https://finverse.com'),
              3000
            );
          }}
        >
          Click to redirect
        </button>
      )}
    </div>
  );
}

export default App;
