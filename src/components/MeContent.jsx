import PropTypes from "prop-types";

const AboutMeContent = ({ className = "" }) => {
  return (
    <section
      className={`w-[90%] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[140px] max-w-full text-left text-45xl text-black font-inter mq450:gap-[17px] mq725:gap-[35px] mq1025:gap-[70px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full font-newsreader">
          <h1 className="m-0 w-[602px] relative text-inherit tracking-[-0.02em] leading-[67px] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-19xl mq450:leading-[40px] mq975:text-32xl mq975:leading-[54px]">
            Jeffrey Jer-Shen Chen
          </h1>
        </div>
        <h2 className="m-0 w-72 relative text-9xl tracking-[0.04em] leading-[45px] uppercase font-semibold font-inherit inline-block mq450:text-3xl mq450:leading-[36px]">
          About
        </h2>
        <div className="self-stretch relative text-xl leading-[120%] text-graymq450:text-base mq450:leading-[25px]">
          <p className="m-0">
          Hi there 👋  I'm Jeffrey, a quantitative researcher and software developer from 🇹🇼 and currently locate @ NYC. 
          I recently just completed my <b>Marine service</b> at Taiwan Marine Corp, so I guess I'm a veteran now. (It was really tough tho, no joke)
          <br/>
          I'm passionate about exploring novel ideas and building innovative solutions for challenging problems, mostly finance and tech area. 
          I enjoy being involved in the end to end process of trading, portfolio management and data science research, from initial concept to production deployment.
          </p>
          <p className="m-0 pt-8">
            My interest circle around quantitative finance area, including
            <li>developing advanced algorithms/optimization and quantitative models</li>
            <li>researching novel machine learning models for finacial data and large-scale/unstructured data analysis </li>
            <li>building alpha generation, statistical arbitrage, and asset allocation models.</li>
            <li>investing in crypto assets (DeFi&CeFi).</li>
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-9xl">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
          <img
            className="h-[300px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/page11.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h2 className="m-0 w-72 relative text-inherit tracking-[0.04em] leading-[45px] uppercase font-semibold font-inherit inline-block mq450:text-3xl mq450:leading-[36px]">
            Get in Touch
          </h2>
          <div className="self-stretch relative text-xl leading-[160%] text-gray mq450:text-base mq450:leading-[26px]">
          <p className="m-0">
            My recent focus is on building a <b>tech + education startup</b>. Still in stealth mode. 
            Will update more in future!
            <b>Exciting!!! </b>
          </p>
            <p className="m-0 pt-4">
              I’d love to collaborate so don’t hesitate to connect with me
              whether it’s a new project or just to share and explore
              ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutMeContent.propTypes = {
  className: PropTypes.string,
};

export default AboutMeContent;
