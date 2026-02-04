import NavBar from './components/NavBar.jsx';
import Input from './components/Input.jsx';
import Footer from './components/Footer.jsx';

const app = () => {
  return (
    <>
      <NavBar />
      <div className=" inset-0 -z-10 h-[92vh] bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] flex flex-col items-center ">
        <h1 className="md:text-[40px] lg:text-[50px] text-[20px] font-bold text-gray-800 text-center pt-30">
          Instantly summarize <span className="text-red-500">Reddit</span> posts
          and comments <br />
          without the noise.
        </h1>
        <Input />
        <Footer />
      </div>
    </>
  );
};

export default app;
