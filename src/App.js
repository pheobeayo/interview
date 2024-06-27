
import './App.css';

function App() {
  return (
    <div className="App">
      <form className='bg-white h-[50vh] mt-10'>
        <div className='mb-2'>
          <label className='text-black font-normal block  text-base mb-2'>
            Full Name

          </label>
          <input className='text-black border border-black rounded-lg mx-auto px-2'
            placeholder='name'
            id='name'
            type='text'
            required />
        </div>
        <div className='mb-2'>
          <label className='text-black font-normal block text-base mb-2'>
            Email address

          </label>
          <input className='text-black border border-black rounded-lg mx-auto px-2'
            placeholder='email'
            id='email'
            type='email'
            required />
        </div>
        <div className='mb-2'>
          <label className='text-black font-normal block  text-base mb-2'>
            Location

          </label>
          <input className='text-black border border-black rounded-lg mx-auto px-2 '
            placeholder='location'
            id='location'
            type='text'
            required />
        </div>
        <div>
          <button className='w-40 border-2 border-blue-500 rounded-lg'> Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default App;
