import NavBar from './components/NavBar.jsx';
import Input from './components/Input.jsx';

const app = () => {
  return (
    <>
      <NavBar />
      <div className=" inset-0 -z-10 h-[92vh] bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] flex flex-col items-center ">
        <h1 className="text-[50px] font-bold text-gray-800 text-center pt-30">
          Instantly summarize Reddit posts and comments <br />
          without the noise.
        </h1>
        <Input />
      </div>
    </>
  );
};

export default app;
