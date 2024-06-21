import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Blog = () => {
  const navigate = useNavigate();

  const onJeffreychenhaTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutMeTextClick = useCallback(() => {
    navigate("/about-me");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start box-border">
      <Header currentPage="blog" jeffreychenhaColor="text-darkslategray" />
      <div className="self-stretch flex flex-row items-start justify-center max-w-full">
      {/* <h1 className="m-0 flex-1 relative tracking-[-0.02em] leading-[120%] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-19xl mq450:leading-[46px] mq1050:text-32xl mq1050:leading-[61px] ml-8"> */}
        <h1 className="m-0">
          <p className="m-0">404 Not found</p>
          <p className="m-0">Will add something here soon</p>
        </h1>
      </div>
    </div>
  );
};

export default Blog;
