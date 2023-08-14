"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";

function LoginView() {
  const [passInputType, setpassInputType] = React.useState("password");
  const [showIcon, setshowIcon] = React.useState(true);
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex justify-around bg-gray-100">
      <div className="justify-center flex flex-1 max-md:hidden ">
        <svg
          className="mt-28"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          width="400px"
          height="400px"
          viewBox="0 0 951.23547 632.16225"
        >
          <path
            d="M465.59076,496.88433c32.59906-57.34523,94.78224-101.37694,160.60838-97.13517a303.91886,303.91886,0,0,0-79.93135,192.74415c-1.08086,27.64353.5953,58.50234-17.75918,79.20149-11.42033,12.87974-28.87664,19.11743-46.04,20.426-17.16419,1.30818-34.32439-1.79287-51.25919-4.88078l-4.108,1.261C425.53748,622.55617,432.9917,554.22955,465.59076,496.88433Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#f0f0f0"
          />
          <path
            d="M626.29714,401.1298C577.6195,424.56328,536.113,463.69962,510.63332,511.42944c-5.50863,10.31908-10.19864,21.26636-12.24449,32.84118-2.04677,11.58-.61712,22.60314,3.3381,33.60164,3.61588,10.05484,8.47891,19.92112,9.58764,30.67984,1.16866,11.34025-3.00384,21.94364-10.51467,30.359-9.18971,10.29644-21.531,16.67682-33.81667,22.49689-13.64084,6.46206-27.9118,12.958-37.57338,25.01857-1.17064,1.46131-3.36964-.44057-2.20077-1.89967,16.8095-20.9833,45.58314-24.92774,65.53614-41.8308,9.31043-7.88728,16.30035-18.62816,15.85922-31.21353-.38575-11.00537-5.39185-21.18385-9.141-31.33295-3.93666-10.65673-5.89983-21.37183-4.48809-32.73356,1.44413-11.62241,5.716-22.77612,10.93669-33.19077,11.77384-23.48755,27.88681-45.05091,46.345-63.69115a264.37529,264.37529,0,0,1,73.0986-52.15542c1.68149-.80947,2.612,1.94689.9415,2.75108Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <path
            d="M518.09691,495.47812a38.97361,38.97361,0,0,1-11.76083-49.07724c.85125-1.66563,3.47954-.42109,2.62716,1.24676a36.0887,36.0887,0,0,0,11.03334,45.62971c1.51533,1.097-.393,3.29149-1.89967,2.20077Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <path
            d="M499.22208,573.01552A75.11847,75.11847,0,0,0,546.7827,545.9063c1.17577-1.45711,3.37512.44432,2.20077,1.89967A78.13447,78.13447,0,0,1,499.435,575.915c-1.85547.26565-2.05831-2.63524-.21291-2.89944Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <path
            d="M574.90706,432.68514a22.06094,22.06094,0,0,0,19.71762,7.02965c1.85119-.289,2.05205,2.6123.21291,2.89945a24.7211,24.7211,0,0,1-21.8302-7.72833,1.50247,1.50247,0,0,1-.15055-2.05022,1.461,1.461,0,0,1,2.05022-.15055Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <path
            d="M757.17329,580.65231c-1.15078.21336-2.30157.42671-3.46287.66229a290.53033,290.53033,0,0,0-45.42472,12.55654c-1.14909.4-2.30759.82272-3.44279,1.25493a306.28393,306.28393,0,0,0-96.32923,58.62179,297.4401,297.4401,0,0,0-31.20006,32.695c-13.1961,16.12271-26.22121,34.65379-43.46521,45.16611a51.02756,51.02756,0,0,1-5.552,3.00981l-99.33786-41.204c-.17876-.20694-.368-.39178-.54786-.59918l-4.04148-1.46379c.45079-.63649.932-1.28694,1.38279-1.92343.26-.3703.542-.73142.802-1.10173.18032-.244.36179-.48759.51056-.718.05971-.08143.12054-.16239.1709-.22127.14877-.23046.31142-.42872.45078-.63649q4.01975-5.46492,8.13029-10.89234c.00941-.02268.00941-.02268.041-.03619,20.95061-27.51625,44.38244-53.52519,71.017-75.1508.80155-.65037,1.61141-1.32388,2.45834-1.95543a283.82353,283.82353,0,0,1,38.36428-25.95136,250.912,250.912,0,0,1,22.75777-11.25342A208.65167,208.65167,0,0,1,633.669,545.38918c43.43148-4.033,87.66932,5.869,120.97979,33.15354C755.50038,579.24131,756.33106,579.931,757.17329,580.65231Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#f0f0f0"
          />
          <path
            d="M756.427,581.82048c-52.975-10.597-109.67838-4.3386-158.75909,18.43049-10.61113,4.92262-20.94686,10.83971-29.5492,18.84981-8.60619,8.01369-14.10139,17.67579-17.56522,28.83879-3.16664,10.20524-5.224,21.0108-10.81619,30.26856-5.89451,9.75817-15.61,15.71225-26.6736,17.90941-13.53663,2.6883-27.23193.35234-40.5454-2.39747-14.78206-3.05312-30.08763-6.45857-45.06315-2.64583-1.81449.462-2.42521-2.38053-.61346-2.8418,26.05484-6.63351,51.40382,7.5408,77.512,6.05773,12.18255-.692,24.23036-5.0596,31.45541-15.37391,6.318-9.01942,8.449-20.16039,11.566-30.52112,3.27289-10.87894,8.15663-20.61632,16.12437-28.838,8.15056-8.41037,18.27673-14.744,28.71548-19.91633,23.54187-11.66483,49.38981-19.18084,75.35035-22.95093a264.37547,264.37547,0,0,1,89.76631,2.36722c1.82993.36606.91338,3.1271-.9046,2.76343Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <path
            d="M613.231,592.00833a38.97358,38.97358,0,0,1,20.15752-46.26626c1.68249-.81741,3.03174,1.75871,1.347,2.5772a36.0887,36.0887,0,0,0-18.66273,43.0756c.54944,1.78822-2.2955,2.39145-2.84179.61346Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <path
            d="M551.4776,642.55365a75.11849,75.11849,0,0,0,54.29611,6.98958c1.81607-.45552,2.42734,2.38682.61346,2.8418a78.13454,78.13454,0,0,1-56.48524-7.38815c-1.64143-.905-.05685-3.34334,1.57567-2.44323Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <path
            d="M696.3964,576.07528a22.06092,22.06092,0,0,0,11.51107,17.48415c1.65209.88377.06567,3.32125-1.57567,2.44324a24.7211,24.7211,0,0,1-12.7772-19.31393,1.50248,1.50248,0,0,1,1.11417-1.72763,1.461,1.461,0,0,1,1.72763,1.11417Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <path
            d="M567.94141,648.63076c-13.912-67.2669-31.302-89.69385-31.302-89.69385l-6.64343-5.15185-7.98926-6.20581.03858-.79785-1.8949-.64411-.44513-.34576-.72943-.56006-.11731.126-.24768.25647-36.15234-12.2887-45.86536-15.57934L415.35455,490.14a36.7343,36.7343,0,0,0-29.38672-14.33386l-67.82916.50189a36.73449,36.73449,0,0,0-24.70972,9.80127l-44.58306,41.35412-69.469,33.17786-.11725-.11725-.72949.52106-10.73358,5.13232.44293,2.30561-6.64343,4.79376s-17.39,20.868-31.30206,83.459c-3.53907,15.926-5.28113,50.08979-5.90992,92.1883a16.06908,16.06908,0,0,0,16.06244,16.30737H511.49408v-.00006H557.8056a16.0717,16.0717,0,0,0,16.06262-16.29071C573.25409,703.131,571.51269,665.902,567.94141,648.63076Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#3f3d56"
          />
          <path
            d="M615.54847,191.73153a54.43073,54.43073,0,1,0,0,108.86146H1021.187a54.43073,54.43073,0,0,0,0-108.86146Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#e5e5e5"
          />
          <path
            d="M615.54847,202.74727a43.415,43.415,0,1,0,0,86.83H1021.187a43.415,43.415,0,0,0,0-86.83Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#fff"
          />
          <circle
            id="e096411a-cdc3-4e6d-bbd4-4630e1fee17e"
            data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b"
            cx="238.3229"
            cy="228.39206"
            r="88.86282"
            fill="#9e616a"
          />
          <path
            d="M339.97228,445.973q-.56945-1.25376-1.13574-2.51618c.14551.00466.28954.02559.435.0294Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#2f2e41"
          />
          <path
            d="M271.37112,276.63954c4.49445-3.5853,9.74736-6.88419,15.49373-6.69877,5.74613.18519,11.57324,5.37507,10.38275,10.99974a91.31784,91.31784,0,0,1,109.89524-41.20778c14.28183,5.03874,28.28737,15.1192,31.56809,29.90415.8422,3.79533,1.023,7.95689,3.39274,11.03885,2.98786,3.88573,8.70455,4.76475,13.41179,3.3978q.07062-.0205.141-.04154a4.1986,4.1986,0,0,1,5.07324,5.92695l-4.041,7.5365a32.38317,32.38317,0,0,0,15.428-.3281,4.195,4.195,0,0,1,4.45469,6.52819c-13.32473,18.29415-35.58607,30.10755-58.30327,29.96873-16.14591-.09846-32.45814-5.66309-48.17179-1.95012a41.84383,41.84383,0,0,0-28.14382,58.74019c-4.82733-5.28005-14.159-4.03-19.097,1.147-4.93774,5.177-6.21612,12.90385-5.71853,20.04085.76077,10.91577,5.03759,21.20144,9.5463,31.21221-37.80123-1.19-73.555-27.707-85.58977-63.57189C229.00827,343.26738,241.674,300.32986,271.37112,276.63954Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#2f2e41"
          />
          <polygon
            points="87.464 495.253 112.388 630.86 127.343 632.162 87.464 495.253"
            opacity="0.2"
          />
          <polygon
            points="362.007 485.026 337.083 630.762 322.128 632.162 362.007 485.026"
            opacity="0.2"
          />
          <path
            d="M292.62933,231.00135c-4.77882,1.99547-9.76532-.19144-11.85656-5.19961-2.12322-5.08476-.14017-10.24648,4.71525-12.27393,4.85588-2.02764,9.75359.1646,11.911,5.33137C299.52417,223.94845,297.5627,228.94135,292.62933,231.00135Zm-9.15419-27.482-3.79972,1.58663a4.09911,4.09911,0,0,1-5.20612-1.90948l-.1879-.36761c-4.08846-7.37337-4.5566-16.33467-1.384-26.62094,2.939-9.22731,4.1597-15.71683,1.70477-21.596-2.83836-6.79741-8.8993-8.92671-16.62838-5.84218-2.99769,1.25173-3.95159,1.23179-6.31064,3.572a5.4161,5.4161,0,0,1-3.92122,1.59344,5.2354,5.2354,0,0,1-3.74713-1.643,5.34757,5.34757,0,0,1-.03684-7.29733,41.53525,41.53525,0,0,1,14.04574-9.64413c16.60647-6.93429,24.96626,3.3032,28.79182,12.46479,3.74183,8.96108,1.637,17.27546-1.745,28.04341-2.83416,8.94752-2.66908,15.57751.55033,22.16977a4.08088,4.08088,0,0,1-2.12565,5.49059Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#6c63ff"
          />
          <path
            d="M705.14883,272.122h-80.707a1.944,1.944,0,1,1,0-3.88791h80.707a1.944,1.944,0,0,1,0,3.88791Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#6c63ff"
          />
          <path
            d="M807.53044,272.76994h-80.707a1.944,1.944,0,1,1,0-3.88791h80.707a1.944,1.944,0,1,1,0,3.88791Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#6c63ff"
          />
          <path
            d="M909.91205,273.41793H829.205a1.944,1.944,0,0,1,0-3.88791h80.707a1.944,1.944,0,1,1,0,3.88791Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#6c63ff"
          />
          <path
            d="M1012.29367,274.06591h-80.707a1.944,1.944,0,0,1,0-3.88791h80.707a1.944,1.944,0,0,1,0,3.88791Z"
            transform="translate(-124.38226 -133.06928)"
            fill="#6c63ff"
          />
          <circle cx="540.23547" cy="106.16225" r="15" fill="#6c63ff" />
          <circle cx="643.23547" cy="106.16225" r="15" fill="#6c63ff" />
          <circle cx="746.23547" cy="106.16225" r="15" fill="#6c63ff" />
          <circle cx="849.23547" cy="106.16225" r="15" fill="#6c63ff" />
        </svg>
      </div>

      <div className="w-2/6	bg-white max-md:w-full max-md:bg-slate-50">
        <div className="mt-20 mx-auto w-9/12">
          <h2 className="text-2xl font-semibold mb-1.5 text-zinc-600">
            Welcome to Materio! 👋🏻
          </h2>
          <h6 className=" text-zinc-400 w-9/12 text-sm mb-4">
            Please sign-in to your account and start the adventure
          </h6>
          <form className="mt-5">
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
            <div className="mb-6 relative">

              <input
              placeholder="Password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                  setpassInputType("password");
                }}
                className="w-full px-3 py-3 border rounded-md focus:ring focus:ring-indigo-200"
                type={passInputType}
                id="password"
                name="password"
                value={user.password}
                required
              />

              {showIcon ? (
                <svg
                  className="w-4 h-6 text-gray-300 absolute	top-3 right-4 hover:cursor-pointer"
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
                  className="w-4 h-6 text-gray-300 absolute	top-3 right-4 hover:cursor-pointer"
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
                className="w-4 h-4 text-purple-700 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-sm flex-1 font-medium text-gray-900 dark:text-gray-400"
              >
                Remember Me{" "}
              </label>
              {/* TODO ADD LINK */}
              <Link className="text-sm text-purple-700" href={""}>
                Forgot Password?
              </Link>
            </div>
            <button
              onClick={onLogin}
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
              type="button"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center gap-1 items-center mt-10">
            <p className="text-xs text-gray-400">New on our platform?</p>
            <Link className="text-purple-700 text-sm" href="/signup">
              Create new account
            </Link>
          </div>
          <div className="flex items-center justify-center gap-3 mt-10">
            <hr className="w-2/5 border-gray-300" />
            <p>or</p>
            <hr className="w-2/5 border-gray-300" />
          </div>
          <div className="flex justify-center items-center gap-7 mb-20 mt-8">
            <Link className="hover:bg-gray-50 p-2 rounded-full " href={""}>
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

            <Link className="hover:bg-gray-50 p-2 rounded-full" href={""}>
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
            <Link className=" hover:bg-gray-50 p-2  rounded-full" href={""}>
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
            <Link className="hover:bg-gray-50	 p-2  rounded-full" href={""}>
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
  );
}

export default LoginView;
