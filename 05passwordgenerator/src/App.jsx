import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordRef = useRef(null);

  const CopyPasswordtoClip = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (characterAllowed) {
      str += "!@#$%^&*()_-+=<>?~|{}[]:;,.";
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, characterAllowed, PasswordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3 bg-white text-gray-700"
          placeholder="Password"
          readOnly
          ref={PasswordRef}
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={CopyPasswordtoClip}
        >
          Copy
        </button>
      </div>

      <div className='flex flex-col gap-3 text-sm'>
        <div className='flex items-center gap-x-2'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input
            type='checkbox'
            checked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor='numberInput'>Include Numbers</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input
            type='checkbox'
            checked={characterAllowed}
            id='CharactersInput'
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor='CharactersInput'>Include Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
