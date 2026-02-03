import { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div className="flex items-center flex-col justify-center w-full mt-20">
      <label className="input input-neutral bg-gray-800 text-gray-100 validator input-xl rounded-full w-[30vw]">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </g>
        </svg>
        <input
          onChange={e => setValue(e.target.value)}
          type="url"
          required
          placeholder="Enter Reddit Post URL Here..."
          value={value}
          pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
          title="Must be valid URL"
        />
      </label>
      <p className="validator-hint">Must be valid URL</p>
      <button
        onClick={handleClick}
        className="btn btn-soft btn-xl rounded-full btn-neutral hover:text-red-500 bg-gray-800 text-gray-100 mt-10"
      >
        Summarize
      </button>
    </div>
  );
};

export default Input;
