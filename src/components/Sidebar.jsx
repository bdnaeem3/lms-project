import Logo from '../assets/logo.svg'
import Navbar from './Navbar'
import Button from '../theme/button/Button';

export default () => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen z-50 bg-black w-[290px] p-[20px] flex flex-col items-between justify-between flex-shrink-0`}
    >
      <div>
        <div className='flex items-center'>
          <img src={Logo} alt="Logo" />
          <h3 className='text-[18px] font-extrabold leading-[22.36px] tracking-[-0.02em] text-white pl-3'>
            Rosturn Education
          </h3>
        </div>

        <div className='mt-[35px]'>
          <Navbar />
        </div>
      </div>

      <div>
        <Button type="button" icon="clock">
          1:29 AM GMT+11
        </Button>
        <div className='mt-5'>
        <Button type="logout"/>
        </div>
      </div>
    </div>
  );
}