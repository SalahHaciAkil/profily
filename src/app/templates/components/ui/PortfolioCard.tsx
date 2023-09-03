/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const PortfolioCard = () => {
  const [position, setPosition] = useState(false);
  const [heartIcon, setHeartIcon] = useState(true);
  const [text, setText] = useState(true);
  const iconFunc = () => {
    setHeartIcon(!heartIcon);
    setText(!text);
  };
  return (
    <div className=" w-[90%] md:w-[45%] mx-auto lg:mx-auto lg:w-[31%] h-1/5 rounded-xl mt-10 shadow-boxShadow transition ease-in-out bg-gradient-none  dark:bg-black dark:border-none dark:shadow-darkBoxShadow dark:hover:bg-none duration-500">
      <div className="flex flex-col space-y-7 w-full h-full px-[1.4rem] py-10 transition ease-in-out shadow-insetBoxShadow dark:group-hover:shadow-hoverInsetDarkBoxShadow group-hover:shadow-none dark:shadow-insetDarkBoxShadow duration-300">
        <div className="border-x-4 flex justify-center">
          <svg
            className="w-4/5 h-1/5  transition  hover:scale-[1.08] duration-300"
            onClick={() => {
              setPosition(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="1139.17088"
            height="654.54324"
            viewBox="0 0 1139.17088 654.54324"
          >
            <title>progressive_app</title>
            <circle cx="246.82682" cy="521.76476" r="59.24334" fill="#f2f2f2" />
            <circle cx="256.45989" cy="513.095" r="59.24334" fill="#c77fff" />
            <rect
              x="304.17137"
              y="447.54324"
              width="732.99951"
              height="2"
              fill="#3f3d56"
            />
            <path
              d="M714.20735,141.38055H454.03775v-5.36232h-117.971v5.36232H74.82467a17.5985,17.5985,0,0,0-17.59852,17.59851V515.23125a17.59856,17.59856,0,0,0,17.59852,17.59858H714.20735a17.59856,17.59856,0,0,0,17.59852-17.59858V158.97906A17.5985,17.5985,0,0,0,714.20735,141.38055Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <rect
              x="50.4058"
              y="49.75362"
              width="627.3913"
              height="353.91304"
              fill="#c77fff"
            />
            <circle cx="363.56522" cy="33.66667" r="6.43478" fill="#c77fff" />
            <polygon
              points="498.374 403.667 50.406 403.667 50.406 49.754 498.374 403.667"
              opacity="0.1"
            />
            <circle cx="148.57375" cy="316.87641" r="60.3068" fill="#f2f2f2" />
            <rect
              x="509.95272"
              y="240.62175"
              width="58.6052"
              height="12.24586"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="145.27896"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="161.89834"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="178.51773"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="195.13711"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="439.10165"
              y="211.7565"
              width="200.30733"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="614.91726"
              y="56.9338"
              width="24.49173"
              height="24.49173"
              fill="#f2f2f2"
            />
            <path
              d="M681.1947,215.52507h-29.74v-29.74h29.74Zm-28.44691-1.293h27.15387V187.07816H652.74779Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M749.42165,519.96024H688.19234v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H652.32945v-4.41153a.87467.87467,0,0,0-.8747-.87471H630.46184a.87468.87468,0,0,0-.8747.87471v4.41153H616.46657v-4.41153a.87468.87468,0,0,0-.8747-.87471H594.599a.87468.87468,0,0,0-.87471.87471v4.41153H580.60369v-4.41153a.87468.87468,0,0,0-.87471-.87471H558.73607a.87468.87468,0,0,0-.8747.87471v4.41153H544.7408v-4.41153a.87468.87468,0,0,0-.8747-.87471H522.87319a.87467.87467,0,0,0-.8747.87471v4.41153H508.87792v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H473.015v-4.41153a.87468.87468,0,0,0-.8747-.87471H307.69588a.87468.87468,0,0,0-.8747.87471v4.41153H293.70061v-4.41153a.87468.87468,0,0,0-.8747-.87471H271.833a.87467.87467,0,0,0-.8747.87471v4.41153H257.83773v-4.41153a.87468.87468,0,0,0-.87471-.87471h-20.9929a.87468.87468,0,0,0-.87471.87471v4.41153H221.97484v-4.41153a.87467.87467,0,0,0-.8747-.87471H200.10723a.87468.87468,0,0,0-.8747.87471v4.41153H186.112v-4.41153a.87468.87468,0,0,0-.8747-.87471H164.24435a.87468.87468,0,0,0-.87471.87471v4.41153H150.24908v-4.41153a.87468.87468,0,0,0-.87471-.87471H128.38146a.87468.87468,0,0,0-.8747.87471v4.41153H114.38619v-4.41153a.87468.87468,0,0,0-.8747-.87471H92.51858a.87467.87467,0,0,0-.8747.87471v4.41153H51.40747a20.99293,20.99293,0,0,0-20.99291,20.99291v9.4925A20.99291,20.99291,0,0,0,51.40747,571.4385H749.42165a20.9929,20.9929,0,0,0,20.99291-20.99285v-9.4925A20.99292,20.99292,0,0,0,749.42165,519.96024Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M193.58593,477.27162a76,76,0,1,1,76-76A76.08614,76.08614,0,0,1,193.58593,477.27162Zm0-150a74,74,0,1,0,74,74A74.08385,74.08385,0,0,0,193.58593,327.27162Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <rect
              x="586.17137"
              y="32.54324"
              width="254.99951"
              height="2"
              fill="#3f3d56"
            />
            <rect
              x="406.17137"
              y="560.54324"
              width="732.99951"
              height="2"
              fill="#3f3d56"
            />
            <rect
              x="192.67161"
              y="652.54324"
              width="254.99951"
              height="2"
              fill="#3f3d56"
            />
            <rect x="471" y="550" width="28" height="28" fill="#c77fff" />
            <path
              d="M546.41456,684.72838h-34v-34h34Zm-32.52174-1.47826H544.9363V652.20664H513.89282Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <rect x="796" y="22" width="28" height="28" fill="#c77fff" />
            <path
              d="M871.41456,156.72838h-34v-34h34Zm-32.52174-1.47826H869.9363V124.20664H838.89282Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <rect x="1078" y="550" width="28" height="28" fill="#c77fff" />
            <path
              d="M1153.41456,684.72838h-34v-34h34Zm-32.52174-1.47826h31.04348V652.20664h-31.04348Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M1087.58593,354.6866h-2.37862V289.525a37.71374,37.71374,0,0,0-37.71385-37.71377H909.44A37.71373,37.71373,0,0,0,871.72613,289.525V647.00639A37.71374,37.71374,0,0,0,909.44,684.72017h138.05348a37.71374,37.71374,0,0,0,37.71385-37.71378V401.06969h2.37862Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M1077.176,291.74159v356.96a28.16523,28.16523,0,0,1-28.16016,28.17H910.296a28.16511,28.16511,0,0,1-28.16-28.17v-356.96a28.163,28.163,0,0,1,28.16-28.16h16.83a13.3792,13.3792,0,0,0,12.39,18.43h79.09a13.37908,13.37908,0,0,0,12.38995-18.43h18.02A28.16308,28.16308,0,0,1,1077.176,291.74159Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#c77fff"
            />
            <rect
              x="928.57968"
              y="376.21769"
              width="41.32357"
              height="12.24586"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="280.8749"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="297.49429"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="314.11367"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="330.73306"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="878.62133"
              y="347.35244"
              width="141.24028"
              height="5.24823"
              fill="#3f3d56"
            />
            <rect
              x="929.68352"
              y="211.17873"
              width="24.49173"
              height="24.49173"
              fill="#f2f2f2"
            />
            <path
              d="M969.47386,340.03163v29.74h29.74v-29.74Zm28.45,28.45h-27.16v-27.16h27.16Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M1077.176,610.58162v38.12a28.16523,28.16523,0,0,1-28.16016,28.17H910.296a28.16511,28.16511,0,0,1-28.16-28.17v-192.21l116.87,92.33,2,1.58,21.74,17.17,2.03,1.61Z"
              transform="translate(-30.41456 -122.72838)"
              opacity="0.1"
            />
            <circle cx="937.24147" cy="498.70691" r="43.86783" fill="#f2f2f2" />
            <path
              d="M350.58593,777.27162a87,87,0,1,1,87-87A87.09858,87.09858,0,0,1,350.58593,777.27162Zm0-172a85,85,0,1,0,85,85A85.09629,85.09629,0,0,0,350.58593,605.27162Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
            <path
              d="M980.58593,655.27162a55,55,0,1,1,55-55A55.06223,55.06223,0,0,1,980.58593,655.27162Zm0-108a53,53,0,1,0,53,53A53.05963,53.05963,0,0,0,980.58593,547.27162Z"
              transform="translate(-30.41456 -122.72838)"
              fill="#3f3d56"
            />
          </svg>
        </div>

        <div className="text-2xl font-semibold flex justify-between transition ease-in-out tracking-tight text-gray-900 dark:text-white duration-500">
          <p className="text-sm text-primary-200">GALLERY</p>
          <button
            onClick={iconFunc}
            className="flex items-center gap-1 hover:bg-slate-200 p-1 rounded-xl dark:hover:bg-black"
          >
            {heartIcon ? (
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 19"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-red-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
            )}
            <p className="text-sm"> 300</p>
          </button>
        </div>

        <div className="group flex flex-col gap-5 relative">
          <a
            href="/1"
            className="text-2xl text-black group-hover:text-primary-300 font-bold transition ease-in-out dark:text-gray-400 duration-500"
          >
            NFT Dashboard Application Development.
          </a>
          <div className="anima absolute right-40 top-[56%] ">
            <svg
              className="scale-0 -rotate-45 transition ease-in-out group-hover:scale-100 w-[1.2rem] h-6 text-primary-300 duration-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>

        {position && (
          <div
            className={`fixed overflow-y-scroll transition ease-in-out group top-[-29px] bottom-0 right-0 left-0  bg-[#000000d4] z-40  duration-500`}
          >
            <div className="bg-zinc-100 md:w-3/5 mt-5 h-fit mx-auto rounded-lg px-12 py-8 flex flex-col gap-4 relative animate-wigglee dark:bg-black">
              <button
                className="text-black absolute transition ease-in hover:bg-slate-200 rounded-full p-2 top-1 hover:rotate-90 right-2.5 dark:text-slate-100  dark:hover:bg-black"
                onClick={() => {
                  setPosition(false);
                }}
              >
                <svg
                  className="w-4 h-4 text-black dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>

              <img
                className=" border-4 border-gray-300 rounded-lg"
                src="/modalImg1.jpg"
                alt="drr"
              />

              <p className="text-xs dark:text-slate-400">August 18, 2022</p>
              <h1 className="text-3xl font-bold dark:text-slate-200">
                What I Learned From Being a Broke, Unemployed Graduate.
              </h1>
              <p className="dark:text-slate-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn’t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat predefined chunks.
              </p>
              <img
                className=" border-4 border-gray-300 rounded-lg"
                src="/modalImg2.jpg"
                alt=""
              />

              <p className="text-center	font-bold dark:text-slate-400">
                Image Caption
              </p>
              <p className="dark:text-slate-400">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly
              </p>
              <h1 className="font-bold text-xl dark:text-slate-200">
                First, solve the problem. Then write the code.
              </h1>

              <p className="flex justify-between gap-5 bg-gray-300 p-10 rounded-lg dark:text-slate-200 dark:bg-zinc-700">
                <svg
                  className=" hidden lg:block w-12 h-12 text-primary-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                </svg>

                <p className="dark:text-slate-300 ">
                  {" "}
                  A programming language is for thinking about programs, not for
                  expressing programs you’ve already thought of. It should be a
                  pencil, not a pen
                </p>
              </p>

              <p className="dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo .
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PortfolioCard;
