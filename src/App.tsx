import './App.css'

function App() {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center flex-col bg-(--antiflash-white-2)'>
        <div className='flex gap-5 flex-col justify-center items-center text-center w-[60%] h-[50%]'>
          <p className='animate-(--animate-fade-in-1) font-(family-name:--playfair-display) font-bold text-4xl'>Simple Recipe Web</p>
          <p className='animate-(--animate-fade-in-2) font-(family-name:--playfair-display) font-normal text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi commodi, in at, eligendi, soluta ipsa provident consequuntur dolorem ipsam blanditiis unde vel cum accusantium dolore id. Laboriosam, commodi fugit!</p>
        </div>
        <div className='flex justify-center gap-5 items-center text-center'>
          <div className='animate-(--animate-fade-in-3) hover:bg-amber-400 hover:-translate-y-2 hover:text-amber-50 duration-500 ease-in-out flex justify-center flex-col items-center w-[200px] h-[250px] bg-(--antiflash-white-3) rounded-lg shadow-2xl'>
            <img className='w-[150px] -translate-y-[30px]' src="./1.png" alt="" />
            <div className='h-[100px]'>
              <p className='font-(family-name:--playfair-display) font-bold m-2'>Peyek Pake Udang</p>
              <p className='font-(family-name:--playfair-display) m-2'>Lorem ipsum dolor</p>
              <div className='size-[50px] bg-amber-400 rounded-2xl float-right'></div>
            </div>
          </div>
          <div className='animate-(--animate-fade-in-4) hover:bg-amber-400 hover:-translate-y-2 hover:text-amber-50 duration-500 ease-in-out flex justify-center flex-col items-center w-[200px] h-[250px] bg-(--antiflash-white-3) rounded-lg shadow-2xl'>
            <img className='w-[150px] -translate-y-[30px]' src="./2.png" alt="" />
            <div className='h-[100px]'>
              <p className='font-(family-name:--playfair-display) font-bold m-2'>Rujak Sayur</p>
              <p className='font-(family-name:--playfair-display) m-2'>Lorem ipsum dolor</p>
              <div className='size-[50px] bg-amber-400 rounded-2xl float-right'></div>
            </div>
          </div>
          <div className='animate-(--animate-fade-in-5) hover:bg-amber-400 hover:-translate-y-2 hover:text-amber-50 duration-500 ease-in-out flex justify-center flex-col items-center w-[200px] h-[250px] bg-(--antiflash-white-3) rounded-lg shadow-2xl'>
            <img className='w-[150px] -translate-y-[30px]' src="./3.png" alt="" />
            <div className='h-[100px]'>
              <p className='font-(family-name:--playfair-display) font-bold m-2'>Lontong Kering</p>
              <p className='font-(family-name:--playfair-display) m-2'>Lorem ipsum dolor</p>
              <div className='size-[50px] bg-amber-400 rounded-2xl float-right'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
