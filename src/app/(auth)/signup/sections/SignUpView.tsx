"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

function SignUpView() {
  const [passInputType, setpassInputType] = React.useState("password");
  const [showIcon, setshowIcon] = React.useState(true);
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <div className="bg-white p-8 rounded shadow-md w-80">
    //     <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
    //     <form>
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-medium mb-2"
    //           htmlFor="username"
    //         >
    //           Username
    //         </label>
    //         <input
    //           className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200"
    //           type="text"
    //           onChange={(e) => setUser({ ...user, username: e.target.value })}
    //           id="username"
    //           name="username"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-medium mb-2"
    //           htmlFor="email"
    //         >
    //           Email
    //         </label>
    //         <input
    //           className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200"
    //           type="email"
    //           onChange={(e) => setUser({ ...user, email: e.target.value })}
    //           id="email"
    //           name="email"
    //           required
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label
    //           className="block text-gray-700 text-sm font-medium mb-2"
    //           htmlFor="password"
    //         >
    //           Password
    //         </label>
    //         <input
    //           className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200"
    //           type="password"
    //           onChange={(e) => setUser({ ...user, password: e.target.value })}
    //           id="password"
    //           name="password"
    //           required
    //         />
    //       </div>
    //       <button
    //         onClick={onSignup}
    //         className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
    //         type="button"
    //       >
    //         Sign Up
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <>
      <div className="flex justify-around bg-white h-full">
        <div className="justify-center basis-2/3 hidden sm:flex ">
          <svg
            className="mt-28 "
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="400px"
            height="400px"
            viewBox="0 0 708 555.86743"
          >
            <path
              id="b10fb2cf-c586-4c5f-9fbf-e678f5ffa3db-177"
              data-name="Path 133"
              d="M890.46523,679.51478a211.72219,211.72219,0,0,1-46.19649,37.27045c-.39154.24069-.7897.4667-1.18925.70031l-27.639-24.46263c.29035-.26957.61188-.57235.95806-.90494C836.99246,672.563,939.22932,535.83823,946.042,502.54351,945.57186,505.31735,952.18923,614.09419,890.46523,679.51478Z"
              transform="translate(-246 -172.06628)"
              fill="#f0f0f0"
            />
            <path
              id="a32c10c7-75df-4179-a648-6a8d2a687209-178"
              data-name="Path 134"
              d="M849.6017,721.5053c-.52265.12466-1.0544.24137-1.58764.34772l-20.7355-18.35251c.40524-.14119.87883-.30927,1.42046-.49568,8.89662-3.15026,35.39436-12.66026,61.76413-23.49189,28.33447-11.64369,56.53311-24.79986,62.59765-33.227C951.75986,648.244,911.68646,707.62224,849.6017,721.5053Z"
              transform="translate(-246 -172.06628)"
              fill="#f0f0f0"
            />
            <path
              d="M890.08181,317.64639h-2.95289V236.75278a46.819,46.819,0,0,0-46.819-46.81906H668.92579a46.819,46.819,0,0,0-46.81911,46.81891v443.7888a46.819,46.819,0,0,0,46.819,46.81906H840.30972a46.819,46.819,0,0,0,46.81915-46.81888V375.22785h2.95294Z"
              transform="translate(-246 -172.06628)"
              fill="#3f3d56"
            />
            <path
              d="M877.1627,237.07439V680.21716a34.95659,34.95659,0,0,1-34.9693,34.95674H669.98426a34.95435,34.95435,0,0,1-34.957-34.95674V237.07439a34.95435,34.95435,0,0,1,34.957-34.95674h20.89839a16.61888,16.61888,0,0,0,15.38341,22.87963h98.18146a16.60126,16.60126,0,0,0,15.384-22.87963H842.1934A34.95659,34.95659,0,0,1,877.1627,237.07439Z"
              transform="translate(-246 -172.06628)"
              fill="#fff"
            />
            <path
              d="M823.59459,467.3551H672.22789a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h151.3667a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,823.59459,467.3551Z"
              transform="translate(-246 -172.06628)"
              fill="#f0f0f0"
            />
            <path
              d="M823.59459,510.26233H672.22789a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h151.3667a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,823.59459,510.26233Z"
              transform="translate(-246 -172.06628)"
              fill="#f0f0f0"
            />
            <path
              d="M831.16637,457.75891H679.79967a10.512,10.512,0,0,1-10.5-10.5v-4.97754a10.512,10.512,0,0,1,10.5-10.5h151.3667a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,831.16637,457.75891Zm-151.3667-23.97754a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h151.3667a8.50951,8.50951,0,0,0,8.5-8.5v-4.97754a8.50951,8.50951,0,0,0-8.5-8.5Z"
              transform="translate(-246 -172.06628)"
              fill="#3f3d56"
            />
            <path
              d="M831.16637,500.66614H679.79967a10.512,10.512,0,0,1-10.5-10.5V485.1886a10.512,10.512,0,0,1,10.5-10.5h151.3667a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,831.16637,500.66614ZM679.79967,476.6886a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h151.3667a8.50951,8.50951,0,0,0,8.5-8.5V485.1886a8.50951,8.50951,0,0,0-8.5-8.5Z"
              transform="translate(-246 -172.06628)"
              fill="#3f3d56"
            />
            <path
              d="M877.1627,237.07439V333.4641A103.53895,103.53895,0,0,1,747.28027,233.38945q0-4.24023.34076-8.39217h56.82649a16.60126,16.60126,0,0,0,15.384-22.87963H842.1934A34.95659,34.95659,0,0,1,877.1627,237.07439Z"
              transform="translate(-246 -172.06628)"
              fill="#f0f0f0"
            />
            <path
              d="M722.04076,709.15425c0,2.03176-.0758,4.03834-.23971,6.01965H669.98426a34.95435,34.95435,0,0,1-34.957-34.95674v-47.3998a77.07339,77.07339,0,0,1,87.01347,76.33689Z"
              transform="translate(-246 -172.06628)"
              fill="#c163ff"
            />
            <path
              d="M304.12133,625.985a6.00681,6.00681,0,0,0,7.911-3.0669l46.67932-105.79394a13.3793,13.3793,0,0,0-17.0774-17.876h-.00012a13.19944,13.19944,0,0,0-6.75012,5.78027,13.64886,13.64886,0,0,0-.65442,1.293l-46.67932,105.794a5.99964,5.99964,0,0,0,3.06738,7.91162Z"
              transform="translate(-246 -172.06628)"
              fill="#c163ff"
            />
            <path
              d="M356.79528,560.55725l-46.17176-10.26074,11.428-30.23193a31.94972,31.94972,0,0,1,34.299-23.62793l.44483.04931Z"
              transform="translate(-246 -172.06628)"
              fill="#2f2e41"
            />
            <path
              d="M450.055,627.49817a7.02814,7.02814,0,0,1-6.41186-4.17676L396.964,517.52747a14.38052,14.38052,0,0,1,25.60937-12.99707v-.00049a14.61775,14.61775,0,0,1,.70264,1.38818l46.6792,105.794a7.00007,7.00007,0,0,1-3.57862,9.23l-13.96142,6.15966-.00708-.01562A6.94406,6.94406,0,0,1,450.055,627.49817Z"
              transform="translate(-246 -172.06628)"
              fill="#c163ff"
            />
            <path
              d="M385.48546,591.16907a6.00671,6.00671,0,0,0-6,6V720.18323a6.00672,6.00672,0,0,0,6,6H400.245a6.00672,6.00672,0,0,0,6-6V597.16907a6.00671,6.00671,0,0,0-6-6Z"
              transform="translate(-246 -172.06628)"
              fill="#c163ff"
            />
            <path
              d="M356.29308,591.16907a6.00671,6.00671,0,0,0-6,6V720.18323a6.00672,6.00672,0,0,0,6,6h14.75976a6.00672,6.00672,0,0,0,6-6V597.16907a6.00671,6.00671,0,0,0-6-6Z"
              transform="translate(-246 -172.06628)"
              fill="#c163ff"
            />
            <circle cx="131.82814" cy="239.22404" r="51" fill="#c163ff" />
            <path
              d="M394.79994,432.69926c3.30591-.09179,7.42029-.20654,10.59-2.522a8.13272,8.13272,0,0,0,3.20008-6.07275,5.47082,5.47082,0,0,0-1.86036-4.49315c-1.65551-1.39894-4.073-1.72707-6.67822-.96144l2.69922-19.72559-1.98144-.27148L397.596,421.84282l1.65466-.75928c1.91834-.87988,4.55164-1.32764,6.188.05518a3.51513,3.51513,0,0,1,1.15271,2.8955,6.14689,6.14689,0,0,1-2.38123,4.52784c-2.46667,1.80175-5.74621,2.03418-9.46582,2.13818Z"
              transform="translate(-246 -172.06628)"
              fill="#2f2e41"
            />
            <rect
              x="166.54982"
              y="228.55925"
              width="10.77161"
              height="2"
              fill="#2f2e41"
            />
            <rect
              x="132.54982"
              y="228.55925"
              width="10.77161"
              height="2"
              fill="#2f2e41"
            />
            <path
              d="M428.36168,628.11938l-18.356-134a6.00013,6.00013,0,0,0-5.94482-5.18566H390.20543a6.02466,6.02466,0,0,0,.08985-1v-5a6.00015,6.00015,0,0,0-6-6h-12a6.00014,6.00014,0,0,0-6,6v5a6.02466,6.02466,0,0,0,.08984,1H352.52965a6.00049,6.00049,0,0,0-5.94482,5.18566l-18.356,134a6,6,0,0,0,5.94434,6.81434h88.24414A6,6,0,0,0,428.36168,628.11938Z"
              transform="translate(-246 -172.06628)"
              fill="#2f2e41"
            />
            <path
              d="M399.79528,560.55725V496.486l.44482-.04931a31.96115,31.96115,0,0,1,34.31543,23.68017l11.41138,30.17969Z"
              transform="translate(-246 -172.06628)"
              fill="#2f2e41"
            />
            <path
              d="M375.25992,463.88179l-35.27546-13.69192c-5.76827-2.23892-11.56878-4.40968-17.30651-6.72569a19.72637,19.72637,0,0,1-6.66153-3.92617,13.09008,13.09008,0,0,1-3.32111-6.42695c-1.22347-5.17132-1.00226-10.82516-.915-16.10249a122.69927,122.69927,0,0,1,1.42174-17.24065,83.28557,83.28557,0,0,1,10.65027-30.38043c9.89272-16.23155,26.93718-28.44363,46.5429-27.469,9.07668.4512,18.20557,3.70824,24.94937,9.914a15.75138,15.75138,0,0,0,2.35507,2.28248,3.26776,3.26776,0,0,0,1.87567.12592q1.23442-.07942,2.47088-.12124a51.04308,51.04308,0,0,1,8.56551.35928,27.12111,27.12111,0,0,1,14.13035,5.86736c3.37014,2.89908,6.11233,6.99171,6.39451,11.53986a13.65989,13.65989,0,0,1-4.6143,11.15057c-4.20852,3.54694-10.2131,2.30024-15.26138,2.03278l-18.49376-.97979-9.37018-.49642c-1.92935-.10222-1.92373,2.89808,0,3l24.90494,1.31945c4.00221.212,8.127.73168,12.13244.49169a13.57368,13.57368,0,0,0,8.33317-3.35238,16.62754,16.62754,0,0,0,5.03664-15.60115c-1.284-6.13755-5.85183-11.21468-11.20665-14.23511-7.28613-4.1098-15.988-4.50357-24.14076-3.896l1.06066.43934c-9.22224-9.89816-23.34855-14.07733-36.61026-12.61482-14.00229,1.54417-26.45612,9.35584-35.40409,20.03753-9.97644,11.90941-15.413,26.75957-17.52653,42.02983a139.839,139.839,0,0,0-1.082,24.87973,31.35039,31.35039,0,0,0,1.85228,10.75107,15.39035,15.39035,0,0,0,7.22512,7.74612,103.39756,103.39756,0,0,0,11.46784,4.71084L342.436,454.3438l25.52829,9.90863,6.49811,2.5222c1.80087.699,2.581-2.2006.79752-2.89284Z"
              transform="translate(-246 -172.06628)"
              fill="#2f2e41"
            />
            <path
              d="M319.79528,361.93372a15.5,15.5,0,1,1,15.5-15.5A15.51744,15.51744,0,0,1,319.79528,361.93372Zm0-28a12.5,12.5,0,1,0,12.5,12.5A12.51408,12.51408,0,0,0,319.79528,333.93372Z"
              transform="translate(-246 -172.06628)"
              fill="#2f2e41"
            />
            <rect
              x="528.17702"
              y="440.81546"
              width="42.23651"
              height="42.23651"
              transform="translate(147.61407 -410.75474) rotate(37.40978)"
              fill="#f0f0f0"
            />
            <path
              d="M389.29528,228.93372a33.94883,33.94883,0,0,1,27.27734,13.70214l19.58984-25.6137-58.77881-44.95588-44.95556,58.779,25.33349,19.37585A34.003,34.003,0,0,1,389.29528,228.93372Z"
              transform="translate(-246 -172.06628)"
              fill="#f0f0f0"
            />
            <path
              d="M953,727.93372H247a1,1,0,0,1,0-2H953a1,1,0,0,1,0,2Z"
              transform="translate(-246 -172.06628)"
              fill="#3f3d56"
            />
            <path
              d="M780.68737,562.00305H708.8253a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h71.86207a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,780.68737,562.00305Z"
              transform="translate(-246 -172.06628)"
              fill="#c163ff"
            />
            <path
              d="M788.25939,552.40735H716.39708a10.512,10.512,0,0,1-10.5-10.5v-4.97754a10.512,10.512,0,0,1,10.5-10.5h71.86231a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,788.25939,552.40735Zm-71.86231-23.97754a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h71.86231a8.50951,8.50951,0,0,0,8.5-8.5v-4.97754a8.50951,8.50951,0,0,0-8.5-8.5Z"
              transform="translate(-246 -172.06628)"
              fill="#3f3d56"
            />
          </svg>
        </div>

        <div className="max-sm:basis-full basis-1/3 bg-gray-100 flex flex-col justify-center items-center">
          <div className="mt-20 mx-auto w-9/12">
            <h2 className="text-2xl font-semibold mb-1.5 text-zinc-600">
              Adventure starts here 🚀
            </h2>

            <h6 className=" text-zinc-400  text-sm mb-4">
              Make your app management easy and fun!{" "}
            </h6>

            <form className="mt-5">
              <div className="mb-4">
                <input
                  placeholder="Username"
                  className="w-full px-3 py-3 border rounded-md focus:ring focus:ring-indigo-200"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="text"
                  id="username"
                  name="username"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  placeholder="Email"
                  className="w-full px-3 py-3 border rounded-md focus:ring focus:ring-indigo-200"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="text"
                  id="username"
                  name="username"
                  required
                />
              </div>
              <div className="mb-4 relative	">
                <input
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                    setpassInputType("password");
                  }}
                  className="w-full px-3 py-3 border rounded-md focus:ring focus:ring-indigo-200"
                  type={passInputType}
                  id="password"
                  name="password"
                  value={user.password}
                  placeholder="Password"
                  required
                />

                {showIcon ? (
                  <svg
                    className="w-5 h-6 text-gray-300 absolute	top-3 right-4 hover:cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    onClick={(eo) => {
                      setpassInputType("text");
                      setshowIcon(false);
                    }}
                  >
                    <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
                    <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                    <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-6 text-gray-300 absolute	top-3 right-4 hover:cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 14"
                    onClick={() => {
                      setpassInputType("password");
                      setshowIcon(true);
                    }}
                  >
                    <g
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                    </g>
                  </svg>
                )}
              </div>
              <div className="flex items-center mb-6">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-primary-100 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                />
                <label
                  htmlFor="checked-checkbox"
                  className="ml-2 text-sm  font-medium text-gray-900 dark:text-gray-400"
                >
                  I agree to
                </label>
                {/* TODO ADD LINK */}
                <Link className="text-xs font-bold text-primary-100 ml-1" href={""}>
                  privacy policy & terms{" "}
                </Link>
              </div>
              <button
                //TODO: onclick??
                //  onClick={onLogin}
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-primary-100 transition duration-300"
                type="button"
              >
                SIGN UP{" "}
              </button>
            </form>
            <div className="flex justify-center gap-1 items-center mt-10">
              <p className="text-sm text-gray-400">Already have an account?</p>
              <Link className="text-primary-100 text-sm" href="/login">
                Sign in instead{" "}
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3 mt-10">
              <hr className="w-2/5 border-gray-300" />
              <p>or</p>
              <hr className="w-2/5 border-gray-300" />
            </div>
            <div className="flex justify-center items-center gap-7 mb-10 mt-8">
              <Link className="hover:bg-slate-200 p-2  rounded-full" href={""}>
                <svg
                  className="w-6 h-6 text-blue-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>

              <Link className=" hover:bg-slate-200 p-2  rounded-full" href={""}>
                <svg
                  className="w-6 h-6 text-blue-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              {/* TODO: ADD LINK */}
              <Link className=" hover:bg-slate-200 p-2  rounded-full" href={""}>
                <svg
                  className="w-6 h-6 text-black-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
              {/* TODO add link */}
              <Link className="hover:bg-slate-200 p-2  rounded-full" href={""}>
                <svg
                  className="w-6 h-6 text-gray-800 items-center mb-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpView;
