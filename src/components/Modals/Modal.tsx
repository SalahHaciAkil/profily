import React from "react";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

function Modal(props: Props) {
  return (
    <>
      {props.isOpen && (
        <>
          {/* <!-- Main modal --> */}
          <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center items-center backdrop-blur-sm bg-[#00000040]">
            <div className="relative w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                <button
                  onClick={props.onClose}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
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
                  <span className="sr-only">Close modal</span>
                </button>
                {/* <!-- Modal content --> */}

                <div className="px-6 py-6 lg:px-8">{props.children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
