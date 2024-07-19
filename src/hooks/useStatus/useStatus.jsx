import { useState } from 'react';

const useStatus = () => {
  const [status, setStatus] = useState({
    status: 'idle',
    message: null,
  });
  const showStatus = status.status !== 'idle';

  const setError = (message, persistent = false) => {
    setStatus({ status: 'error', message });
    if (!persistent) {
      setTimeout(() => {
        clearStatus();
      }, 3000); // Resets the status after 3 seconds only if not persistent
    }
  };
  const setSuccess = (message, persistent = false) => {
    setStatus({ status: 'success', message });
    if (!persistent) {
      setTimeout(() => {
        clearStatus();
      }, 3000); // Resets the status after 3 seconds only if not persistent
    }
  }
  const clearStatus = () => {
    setStatus({ status: 'idle', message: null });
  };
  

  return { status, setError, setSuccess, clearStatus, showStatus };
}

export default useStatus;