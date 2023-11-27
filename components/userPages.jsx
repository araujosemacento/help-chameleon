/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { Tooltip, Switch } from "@material-tailwind/react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export function Exercicios() {
  const { user } = useAuth();

  const [buttonClicked, setButtonClicked] = useState([]);

  const handleButtonClick = (state, index) => {
    const newButtonClicked = [...buttonClicked];
    newButtonClicked[index] = state;
    setButtonClicked(newButtonClicked);
  };

  useEffect(() => {
    handleButtonClick(false, 0);
  }, []);

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div className=" flex flex-row w-full p-8 px-16 text-xl text-text-900 font-bold gap-4">
        <svg
          width="34"
          height="33"
          className="fill-text-900 h-6"
          viewBox="0 0 34 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M31.4167 12.1761L29.0833 9.87389L30.3333 8.59945L25 3.33722L23.7083 4.57056L21.3333 2.22723L22.5833 0.952781C23.2222 0.322411 24.0139 0.0140774 24.9583 0.0277811C25.9028 0.0414848 26.6944 0.363522 27.3333 0.993892L32.7083 6.29722C33.3472 6.92759 33.6667 7.70185 33.6667 8.62C33.6667 9.53815 33.3472 10.3124 32.7083 10.9428L31.4167 12.1761ZM11.4167 31.9506C10.7778 32.5809 9.99306 32.8961 9.0625 32.8961C8.13194 32.8961 7.34722 32.5809 6.70833 31.9506L1.33333 26.6472C0.694444 26.0169 0.375 25.2426 0.375 24.3244C0.375 23.4063 0.694444 22.632 1.33333 22.0017L2.58333 20.7683L4.95833 23.1117L3.66667 24.345L9.04167 29.6483L10.2917 28.3739L12.6667 30.7172L11.4167 31.9506ZM27.9583 18.1372L30.3333 15.7939L17.7083 3.33722L15.3333 5.68056L27.9583 18.1372ZM16.2917 29.6483L18.6667 27.2639L6.08333 14.8483L3.66667 17.1917L16.2917 29.6483ZM16.0417 20.0283L20.625 15.5472L17.9583 12.9161L13.4167 17.4383L16.0417 20.0283ZM18.6667 31.9506C18.0278 32.5809 17.2361 32.8961 16.2917 32.8961C15.3472 32.8961 14.5556 32.5809 13.9167 31.9506L1.33333 19.535C0.694444 18.9046 0.375 18.1235 0.375 17.1917C0.375 16.2598 0.694444 15.4787 1.33333 14.8483L3.70833 12.505C4.34722 11.8746 5.13194 11.5594 6.0625 11.5594C6.99306 11.5594 7.77778 11.8746 8.41667 12.505L11.0417 15.095L15.625 10.5728L13 8.02389C12.3611 7.39352 12.0417 6.61241 12.0417 5.68056C12.0417 4.74871 12.3611 3.9676 13 3.33722L15.375 0.993892C16.0139 0.363522 16.7986 0.0483367 17.7292 0.0483367C18.6597 0.0483367 19.4444 0.363522 20.0833 0.993892L32.7083 13.4506C33.3472 14.0809 33.6667 14.8552 33.6667 15.7733C33.6667 16.6915 33.3472 17.4657 32.7083 18.0961L30.3333 20.4394C29.6944 21.0698 28.9028 21.385 27.9583 21.385C27.0139 21.385 26.2222 21.0698 25.5833 20.4394L23 17.8494L18.4167 22.3717L21.0417 24.9617C21.6806 25.592 22 26.3663 22 27.2844C22 28.2026 21.6806 28.9769 21.0417 29.6072L18.6667 31.9506Z" />
        </svg>
        Exercícios
      </div>
      <section className="flex flex-col w-full h-full justify-start items-center gap-8">
        {Array.from({ length: 10 }, (_, i) => i).map((_, index) => (
          <div key={index}>
            <button
              className={`clicked flex rounded-[50%] w-[100px] h-[80px] shadow-[0_10px_0_0_var(--text-500)] active:translate-y-[10px] active:shadow-none transition-all bg-background-200 justify-center items-center`}
              onMouseDown={() => handleButtonClick(true, index)}
              onMouseUp={() => handleButtonClick(false, index)}
              style={{
                transform: `translateX(${parseInt(
                  -100 * Math.sin(index / 1.25)
                )}%) ${
                  buttonClicked[index] ? "translateY(10px)" : "translateY(0px)"
                }`,
              }}
            >
              <svg
                width="45"
                height="50"
                viewBox="0 0 45 50"
                className="dark:invert"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_666_667)">
                  <path
                    d="M5.625 50C4.07812 50 2.75391 49.5337 1.65234 48.6012C0.550781 47.6687 0 46.5476 0 45.2381V21.4286C0 20.119 0.550781 18.998 1.65234 18.0655C2.75391 17.1329 4.07812 16.6667 5.625 16.6667H8.4375V11.9048C8.4375 8.61111 9.80859 5.80357 12.5508 3.48214C15.293 1.16071 18.6094 0 22.5 0C26.3906 0 29.707 1.16071 32.4492 3.48214C35.1914 5.80357 36.5625 8.61111 36.5625 11.9048V16.6667H39.375C40.9219 16.6667 42.2461 17.1329 43.3477 18.0655C44.4492 18.998 45 20.119 45 21.4286V45.2381C45 46.5476 44.4492 47.6687 43.3477 48.6012C42.2461 49.5337 40.9219 50 39.375 50H5.625ZM5.625 45.2381H39.375V21.4286H5.625V45.2381ZM22.5 38.0952C24.0469 38.0952 25.3711 37.629 26.4727 36.6964C27.5742 35.7639 28.125 34.6429 28.125 33.3333C28.125 32.0238 27.5742 30.9028 26.4727 29.9702C25.3711 29.0377 24.0469 28.5714 22.5 28.5714C20.9531 28.5714 19.6289 29.0377 18.5273 29.9702C17.4258 30.9028 16.875 32.0238 16.875 33.3333C16.875 34.6429 17.4258 35.7639 18.5273 36.6964C19.6289 37.629 20.9531 38.0952 22.5 38.0952ZM14.0625 16.6667H30.9375V11.9048C30.9375 9.92064 30.1172 8.23413 28.4766 6.84524C26.8359 5.45635 24.8438 4.7619 22.5 4.7619C20.1562 4.7619 18.1641 5.45635 16.5234 6.84524C14.8828 8.23413 14.0625 9.92064 14.0625 11.9048V16.6667Z"
                    fill="#8B8B8B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_666_667"
                    x="0"
                    y="0"
                    width="45"
                    height="54"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_666_667"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        ))}
        <hr className="border-transparent w-full m-64" />
      </section>
    </div>
  );
}

export function Nivel() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div className=" flex flex-row w-full pt-8 px-16 text-xl text-text-900 font-bold gap-4">
        <svg
          width="30"
          height="34"
          className="fill-text-900 h-6"
          viewBox="0 0 30 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.33333 34.0003C2.41667 34.0003 1.63194 33.6739 0.979167 33.0212C0.326389 32.3684 0 31.5837 0 30.667V7.33366C0 6.41699 0.326389 5.63227 0.979167 4.97949C1.63194 4.32671 2.41667 4.00033 3.33333 4.00033H10.2917C10.5972 3.0281 11.1944 2.22949 12.0833 1.60449C12.9722 0.979492 13.9444 0.666992 15 0.666992C16.1111 0.666992 17.1042 0.979492 17.9792 1.60449C18.8542 2.22949 19.4444 3.0281 19.75 4.00033H26.6667C27.5833 4.00033 28.3681 4.32671 29.0208 4.97949C29.6736 5.63227 30 6.41699 30 7.33366V30.667C30 31.5837 29.6736 32.3684 29.0208 33.0212C28.3681 33.6739 27.5833 34.0003 26.6667 34.0003H3.33333ZM3.33333 30.667H26.6667V7.33366H23.3333V12.3337H6.66667V7.33366H3.33333V30.667ZM15 7.33366C15.4722 7.33366 15.8681 7.17394 16.1875 6.85449C16.5069 6.53505 16.6667 6.13921 16.6667 5.66699C16.6667 5.19477 16.5069 4.79894 16.1875 4.47949C15.8681 4.16005 15.4722 4.00033 15 4.00033C14.5278 4.00033 14.1319 4.16005 13.8125 4.47949C13.4931 4.79894 13.3333 5.19477 13.3333 5.66699C13.3333 6.13921 13.4931 6.53505 13.8125 6.85449C14.1319 7.17394 14.5278 7.33366 15 7.33366Z" />
        </svg>
        Nível
      </div>
      <section className="flex flex-col w-full h-full justify-evenly items-center p-10">
        <div className="flex flex-row w-1/2 p-6 px-20 font-bold text-2xl justify-center bg-background-200 rounded-3xl my-6">
          <p className="text-center uppercase">Iniciante</p>
        </div>
        <div className="flex flex-col p-6 w-3/4 font-semibold text-justify text-sm md:text-lg m-4">
          <p>
            O seu nível de conhecimento atual é Iniciante. Você pode refazer o
            teste e subir de nível, tendo mais conquistas e desafios a espera.
          </p>
          <br />
          <p>
            Reserve um tempo para responder algumas perguntas que nos ajudarão a
            avaliar o seu nível de conhecimento em programação!
          </p>
        </div>
        <button
          onClick={() => router.push("/nivelamento")}
          className="p-2 px-4 text-center font-bold text-lg bg-accent-500 rounded-2xl transition shadow-[0_5px_0_0_var(--accent-700)] hover:shadow-[0_5px_0_0_var(--accent-500)] hover:bg-accent-400 active:translate-y-[5px] active:shadow-none text-white self-end"
        >
          Refazer Teste de Nível
        </button>
      </section>
    </div>
  );
}

export function Desafios() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div className=" flex flex-row w-full items-center py-8 px-16 text-xl text-text-900 font-bold gap-4">
        <svg
          width="34"
          height="34"
          className="fill-text-900 h-6"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.0002 33.6663C14.6946 33.6663 12.5279 33.2288 10.5002 32.3538C8.47238 31.4788 6.7085 30.2913 5.2085 28.7913C3.7085 27.2913 2.521 25.5275 1.646 23.4997C0.770996 21.4719 0.333496 19.3052 0.333496 16.9997C0.333496 14.6941 0.770996 12.5275 1.646 10.4997C2.521 8.4719 3.7085 6.70801 5.2085 5.20801C6.7085 3.70801 8.47238 2.52051 10.5002 1.64551C12.5279 0.770508 14.6946 0.333008 17.0002 0.333008C19.3057 0.333008 21.4724 0.770508 23.5002 1.64551C25.5279 2.52051 27.2918 3.70801 28.7918 5.20801C30.2918 6.70801 31.4793 8.4719 32.3543 10.4997C33.2293 12.5275 33.6668 14.6941 33.6668 16.9997C33.6668 19.3052 33.2293 21.4719 32.3543 23.4997C31.4793 25.5275 30.2918 27.2913 28.7918 28.7913C27.2918 30.2913 25.5279 31.4788 23.5002 32.3538C21.4724 33.2288 19.3057 33.6663 17.0002 33.6663ZM17.0002 30.333C20.7224 30.333 23.8752 29.0413 26.4585 26.458C29.0418 23.8747 30.3335 20.7219 30.3335 16.9997C30.3335 13.2775 29.0418 10.1247 26.4585 7.54134C23.8752 4.95801 20.7224 3.66634 17.0002 3.66634C13.2779 3.66634 10.1252 4.95801 7.54183 7.54134C4.9585 10.1247 3.66683 13.2775 3.66683 16.9997C3.66683 20.7219 4.9585 23.8747 7.54183 26.458C10.1252 29.0413 13.2779 30.333 17.0002 30.333ZM17.0002 26.9997C14.2224 26.9997 11.8613 26.0275 9.91683 24.083C7.97238 22.1386 7.00016 19.7775 7.00016 16.9997C7.00016 14.2219 7.97238 11.8608 9.91683 9.91634C11.8613 7.9719 14.2224 6.99967 17.0002 6.99967C19.7779 6.99967 22.1391 7.9719 24.0835 9.91634C26.0279 11.8608 27.0002 14.2219 27.0002 16.9997C27.0002 19.7775 26.0279 22.1386 24.0835 24.083C22.1391 26.0275 19.7779 26.9997 17.0002 26.9997ZM17.0002 23.6663C18.8335 23.6663 20.4029 23.0136 21.7085 21.708C23.0141 20.4025 23.6668 18.833 23.6668 16.9997C23.6668 15.1663 23.0141 13.5969 21.7085 12.2913C20.4029 10.9858 18.8335 10.333 17.0002 10.333C15.1668 10.333 13.5974 10.9858 12.2918 12.2913C10.9863 13.5969 10.3335 15.1663 10.3335 16.9997C10.3335 18.833 10.9863 20.4025 12.2918 21.708C13.5974 23.0136 15.1668 23.6663 17.0002 23.6663ZM17.0002 20.333C16.0835 20.333 15.2988 20.0066 14.646 19.3538C13.9932 18.7011 13.6668 17.9163 13.6668 16.9997C13.6668 16.083 13.9932 15.2983 14.646 14.6455C15.2988 13.9927 16.0835 13.6663 17.0002 13.6663C17.9168 13.6663 18.7016 13.9927 19.3543 14.6455C20.0071 15.2983 20.3335 16.083 20.3335 16.9997C20.3335 17.9163 20.0071 18.7011 19.3543 19.3538C18.7016 20.0066 17.9168 20.333 17.0002 20.333Z" />
        </svg>
        Desafios
      </div>
      <section className="flex flex-row w-full h-full justify-center mb-10 pb-10 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-1/2 sm:w-4/5 h-full lg:px-10 gap-16">
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-accent-300">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-accent-700"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  1
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-accent-500 shadow-[0_5px_0_0_var(--accent-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">10 min</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-success-400">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-amber-500"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  2
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-success-500 shadow-[0_5px_0_0_var(--success-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">10 min</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-success-400">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-amber-500"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  3
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-success-500 shadow-[0_5px_0_0_var(--success-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">10 min</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-accent-300">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-accent-700"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  4
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-accent-500 shadow-[0_5px_0_0_var(--accent-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">20 min</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-success-400">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-amber-500"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  5
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-success-500 shadow-[0_5px_0_0_var(--success-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">10 min</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-accent-300">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-accent-700"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  6
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-accent-500 shadow-[0_5px_0_0_var(--accent-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">10 min</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-text-200">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-text-500"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  7
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-text-500 shadow-[0_5px_0_0_var(--text-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">30 min</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-text-200">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-text-500"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  8
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-text-500 shadow-[0_5px_0_0_var(--text-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">30 min</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-64">
            <div className="flex flex-col h-4/5 place-content-center rounded-t-2xl bg-text-200">
              <div className="flex relative justify-center">
                <svg
                  width="204"
                  height="204"
                  className="w-28 h-28 fill-text-500"
                  viewBox="0 0 204 204"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_576_671)">
                    <path d="M45.75 203.25V180.75H90.75V145.875C81.5625 143.813 73.3594 139.922 66.1406 134.203C58.9219 128.484 53.625 121.312 50.25 112.687C36.1875 111 24.4219 104.859 14.9531 94.2656C5.48438 83.6719 0.75 71.25 0.75 57V45.75C0.75 39.5625 2.95313 34.2656 7.35938 29.8594C11.7656 25.4531 17.0625 23.25 23.25 23.25H45.75V0.75H158.25V23.25H180.75C186.938 23.25 192.234 25.4531 196.641 29.8594C201.047 34.2656 203.25 39.5625 203.25 45.75V57C203.25 71.25 198.516 83.6719 189.047 94.2656C179.578 104.859 167.813 111 153.75 112.687C150.375 121.312 145.078 128.484 137.859 134.203C130.641 139.922 122.437 143.813 113.25 145.875V180.75H158.25V203.25H45.75ZM45.75 88.5V45.75H23.25V57C23.25 64.125 25.3125 70.5469 29.4375 76.2656C33.5625 81.9844 39 86.0625 45.75 88.5ZM158.25 88.5C165 86.0625 170.437 81.9844 174.562 76.2656C178.687 70.5469 180.75 64.125 180.75 57V45.75H158.25V88.5Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_576_671"
                      x="0.75"
                      y="0.75"
                      width="202.5"
                      height="202.5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_576_671"
                      />
                    </filter>
                  </defs>
                </svg>
                <p className="absolute text-white text-4xl self-center mb-8">
                  9
                </p>
              </div>
            </div>
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-text-500 shadow-[0_5px_0_0_var(--text-700)]">
              <div className="flex flex-row w-full gap-2 justify-center items-center p-2">
                <svg
                  width="33"
                  height="42"
                  className="w-5 h-5"
                  viewBox="0 0 33 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white">30 min</p>
              </div>
            </div>
          </div>
          <footer className="h-[1px]"></footer>
        </div>
      </section>
    </div>
  );
}

export function Ranking() {
  const { user, signOut } = useAuth();
  const [activaded, setActivaded] = useState(false);

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div className=" flex flex-row w-full p-8 px-16 text-xl text-text-900 font-bold gap-4">
        <svg
          width="30"
          height="30"
          className="fill-text-900 h-6"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.66667 30V26.6667H13.3333V21.5C11.9722 21.1944 10.7569 20.6181 9.6875 19.7708C8.61806 18.9236 7.83333 17.8611 7.33333 16.5833C5.25 16.3333 3.50694 15.4236 2.10417 13.8542C0.701389 12.2847 0 10.4444 0 8.33333V6.66667C0 5.75 0.326389 4.96528 0.979167 4.3125C1.63194 3.65972 2.41667 3.33333 3.33333 3.33333H6.66667V0H23.3333V3.33333H26.6667C27.5833 3.33333 28.3681 3.65972 29.0208 4.3125C29.6736 4.96528 30 5.75 30 6.66667V8.33333C30 10.4444 29.2986 12.2847 27.8958 13.8542C26.4931 15.4236 24.75 16.3333 22.6667 16.5833C22.1667 17.8611 21.3819 18.9236 20.3125 19.7708C19.2431 20.6181 18.0278 21.1944 16.6667 21.5V26.6667H23.3333V30H6.66667ZM6.66667 13V6.66667H3.33333V8.33333C3.33333 9.38889 3.63889 10.3403 4.25 11.1875C4.86111 12.0347 5.66667 12.6389 6.66667 13ZM15 18.3333C16.3889 18.3333 17.5694 17.8472 18.5417 16.875C19.5139 15.9028 20 14.7222 20 13.3333V3.33333H10V13.3333C10 14.7222 10.4861 15.9028 11.4583 16.875C12.4306 17.8472 13.6111 18.3333 15 18.3333ZM23.3333 13C24.3333 12.6389 25.1389 12.0347 25.75 11.1875C26.3611 10.3403 26.6667 9.38889 26.6667 8.33333V6.66667H23.3333V13Z" />
        </svg>
        Ranking
      </div>
      <section className="flex flex-row w-full h-full justify-center items-start">
        <div className="flex flex-col w-3/4 gap-10">
          <div className="flex flex-row w-full px-8 items-center justify-end text-sm md:text-base text-text-900 font-bold">
            Ligar modo ranqueado
            <Tooltip
              content="Ligue o modo ranqueado para competir com os outros alunos"
              placement="bottom"
              className="p-2 max-w-[250px] text-center"
            >
              <img
                src="https://api.iconify.design/material-symbols:help-outline-rounded.svg?color=%23ffffff"
                alt="info"
                className="w-5 h-5 mx-2 invert dark:invert-0"
              />
            </Tooltip>
            <Switch
              ripple={false}
              checked={activaded}
              onChange={() => setActivaded(!activaded)}
              className="h-full w-full checked:bg-accent-500"
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>
          <div
            className={`flex ${
              activaded ? "flex-col-reverse" : "flex-col"
            } w-full h-full gap-8`}
          >
            {activaded
              ? Array.from({ length: 10 }, (_, i) => i).map((_, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-4 md:flex-row w-full p-4 rounded-full font-semibold justify-between text-lg transition-all duration-500 border-2 ${
                      index === 6
                        ? "bg-accent-200 border-accent-500 text-accent-500 hover:bg-primary-100"
                        : "border-transparent hover:bg-background-200"
                    }`}
                  >
                    <div className="flex flex-row h-full gap-6 items-center">
                      <span
                        className={`text-2xl px-2 ${
                          index === 0 ? "mx-1" : "mx-2"
                        }`}
                      >
                        {10 - index}
                      </span>
                      <img
                        src={`${
                          index === 6
                            ? user?.photoURL
                            : `https://i.pravatar.cc/${index * 5 + 55}`
                        }`}
                        alt="avatar"
                        className="rounded-full w-12 h-12"
                      />
                      {index === 6 ? user?.displayName : "Nome Sobrenome"}
                    </div>
                    <div
                      className={`flex flex-row h-full self-center w-[75%] md:w-auto justify-center md:justify-normal border-2 border-text-900 md:border-transparent md:bg-transparent md:hover:bg-transparent rounded-full ${
                        index === 6
                          ? "bg-primary-200 hover:bg-primary-300"
                          : "bg-background-200 hover:bg-background-400"
                      } tansition-all duration-500`}
                    >
                      {index * 50 + 550}XP
                    </div>
                  </div>
                ))
              : Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-row w-full p-8 bg-background-200 rounded-full"
                  ></div>
                ))}
          </div>
          <hr className="border-transparent" />
        </div>
      </section>
    </div>
  );
}

export function Perfil() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div className=" flex flex-row w-full pt-8 px-16 text-xl text-text-900 font-bold gap-4">
        <svg
          width="34"
          height="34"
          className="fill-text-900 h-6"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.41683 26.083C8.05572 24.9071 9.7409 23.9974 11.4724 23.3538C13.2039 22.7103 15.0465 22.3886 17.0002 22.3886C18.9539 22.3886 20.8011 22.7103 22.5418 23.3538C24.2826 23.9974 25.9724 24.9071 27.6113 26.083C28.7502 24.7034 29.5812 23.2636 30.1043 21.7636C30.6275 20.2636 30.8891 18.6756 30.8891 16.9997C30.8891 13.083 29.5534 9.78902 26.8821 7.11772C24.2108 4.44641 20.9168 3.11076 17.0002 3.11076C13.0835 3.11076 9.78951 4.44641 7.11821 7.11772C4.4469 9.78902 3.11125 13.083 3.11125 16.9997C3.11125 18.6756 3.37745 20.2636 3.90987 21.7636C4.44229 23.2636 5.27794 24.7034 6.41683 26.083ZM16.995 18.3886C15.3781 18.3886 14.0164 17.8336 12.9099 16.7237C11.8034 15.6138 11.2502 14.2503 11.2502 12.6334C11.2502 11.0165 11.8051 9.65477 12.915 8.5483C14.025 7.4418 15.3884 6.88855 17.0053 6.88855C18.6222 6.88855 19.984 7.44352 21.0905 8.55347C22.1969 9.66338 22.7502 11.0268 22.7502 12.6437C22.7502 14.2607 22.1952 15.6224 21.0853 16.7288C19.9753 17.8353 18.6119 18.3886 16.995 18.3886ZM17.0132 33.6663C14.7175 33.6663 12.5557 33.2288 10.528 32.3538C8.50018 31.4788 6.73165 30.2867 5.22237 28.7775C3.71312 27.2682 2.521 25.5018 1.646 23.4784C0.770996 21.4549 0.333496 19.2929 0.333496 16.9923C0.333496 14.6917 0.770996 12.5321 1.646 10.5136C2.521 8.49505 3.71312 6.73116 5.22237 5.22188C6.73165 3.71263 8.49801 2.52051 10.5215 1.64551C12.5449 0.770508 14.7069 0.333008 17.0075 0.333008C19.3082 0.333008 21.4678 0.770508 23.4863 1.64551C25.5048 2.52051 27.2687 3.71263 28.778 5.22188C30.2872 6.73116 31.4793 8.49535 32.3543 10.5145C33.2293 12.5336 33.6668 14.691 33.6668 16.9867C33.6668 19.2824 33.2293 21.4441 32.3543 23.4719C31.4793 25.4997 30.2872 27.2682 28.778 28.7775C27.2687 30.2867 25.5045 31.4788 23.4854 32.3538C21.4663 33.2288 19.3089 33.6663 17.0132 33.6663ZM17.0002 30.8886C18.5094 30.8886 19.9677 30.6687 21.3752 30.2288C22.7826 29.789 24.1391 29.0645 25.4446 28.0552C24.1391 27.1201 22.778 26.4048 21.3613 25.9094C19.9446 25.414 18.4909 25.1663 17.0002 25.1663C15.5094 25.1663 14.0557 25.414 12.639 25.9094C11.2224 26.4048 9.86126 27.1201 8.55571 28.0552C9.86126 29.0645 11.2177 29.789 12.6252 30.2288C14.0326 30.6687 15.4909 30.8886 17.0002 30.8886ZM17.0002 15.6108C17.8705 15.6108 18.5835 15.333 19.1391 14.7775C19.6946 14.2219 19.9724 13.5089 19.9724 12.6386C19.9724 11.7682 19.6946 11.0552 19.1391 10.4997C18.5835 9.94412 17.8705 9.66634 17.0002 9.66634C16.1298 9.66634 15.4168 9.94412 14.8612 10.4997C14.3057 11.0552 14.0279 11.7682 14.0279 12.6386C14.0279 13.5089 14.3057 14.2219 14.8612 14.7775C15.4168 15.333 16.1298 15.6108 17.0002 15.6108Z" />
        </svg>
        Perfil
      </div>
      <section className="flex flex-col-reverse lg:flex-row w-full items-center justify-between p-8 px-16">
        <div className="flex flex-col gap-3 text-justify w-full md:w-[40vw]">
          <h2 className="text-accent-600 text-2xl font-bold">{`${
            user ? user.displayName : "Usuário"
          }`}</h2>
          <p className="text-text-900 font-semibold">
            Nível: <span className="text-primary-600">Iniciante</span>
          </p>
          <p className="text-text-900">
            We try not to sting. It&apos;s usually fatal for us. So you have to
            watch your temper. Very carefully. You kick a wall, take a walk,
            write an angry letter and throw it out. Work through it like any
            emotion.
          </p>
        </div>
        <img
          src={`${user ? user.photoURL : "https://i.pravatar.cc/300"}`}
          alt="Avatar"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-40 md:h-40 lg:w-36 lg:h-36 rounded-full m-8 mt-0"
        />
      </section>
      <hr className="my-2 border-accent-600 w-5/6 self-center" />
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-8 px-16">
        <div className="flex flex-row gap-3 w-full h-24 bg-background-200 shadow-lg rounded-full items-center p-4">
          <div className="flex flex-col relative">
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129.44 149.34"
            >
              <g id="Camada_2" data-name="Camada 2">
                <g id="Camada_1-2" data-name="Camada 1">
                  <path
                    className="fill-[#656567]"
                    d="M31.12,1C35.15-.78,40.83.34,45,.34l22,0,16.66,0c6.23,0,12-2,16.44,3.4,7.79,9.32,14.75,19.47,22.7,28.6,3.32,3.83,5.9,7.53,6.51,12.74,1,8.42-3.07,17.53-4.91,25.66-1.9,8.35-3.3,16.77-4.87,25.18-.62,3.31-.88,13.38-4.09,15.2-13.29,7.51-26.68,14.84-39.81,22.62-7.17,4.26-13.72,4.44-21,.2-14-8.17-28.36-15.88-42.56-23.78-.48-1.75-1.09-3.47-1.42-5.25-3.18-17-6.3-34.11-9.58-51.16C.37,50.23-.31,46.63.15,43.07.68,38.9,3,36.63,5.52,33.6c3.25-3.89,6.19-8.16,9.27-12.19C19.4,15.39,23.55,8.7,28.47,3A7.51,7.51,0,0,1,31.12,1ZM50.7,13.45a37.18,37.18,0,0,1-4.48,0c-5.86-.71-10.07,1.37-13.48,6.36C27.68,27.19,22,34.19,16.6,41.34c-1.89,2.49-3,5.1-2.35,8.33q4.37,23.53,8.59,47.1A8.36,8.36,0,0,0,27.31,103q16.82,9.26,33.57,18.64a7.5,7.5,0,0,0,8,.07q15.8-9,31.67-18a9.67,9.67,0,0,0,4.88-7.1c3.12-15.82,6.24-31.64,9.48-47.44A8.86,8.86,0,0,0,113,41.31c-6.17-7.63-12.36-15.23-18.36-23a9.87,9.87,0,0,0-8.56-4.09C74.29,14.3,62.49,14.32,50.7,13.45Z"
                  />
                  <path
                    className="fill-[#4c4b4e]"
                    d="M58.62,148.71c-6.4-1.86-11.85-6.78-17.52-10.15-6.59-3.92-13.2-7.81-19.9-11.56s-9.55-9.34-9.15-16.83c14.2,7.9,28.52,15.61,42.56,23.78,7.28,4.24,13.83,4.06,21-.2,13.13-7.78,26.89-15.36,40.17-22.87-.09,7.79-3.91,13.53-10.79,17.46-5,2.85-10,5.69-15,8.58-4.78,2.77-9.14,6.34-14.14,8.85C70.55,148.45,64.48,150.41,58.62,148.71Z"
                  />
                  <path
                    className="fill-[#bd1e0f]"
                    d="M50.7,13.45c11.79.87,23.59.85,35.39.78a9.87,9.87,0,0,1,8.56,4.09c6,7.76,12.19,15.36,18.36,23a8.86,8.86,0,0,1,1.91,7.88c-3.24,15.8-6.36,31.62-9.48,47.44a9.67,9.67,0,0,1-4.88,7.1q-15.89,8.91-31.67,18a7.5,7.5,0,0,1-8-.07Q44.14,112.21,27.31,103a8.36,8.36,0,0,1-4.47-6.21q-4.23-23.56-8.59-47.1c-.6-3.23.46-5.84,2.35-8.33C22,34.19,27.68,27.19,32.74,19.78c3.41-5,7.62-7.07,13.48-6.36A37.18,37.18,0,0,0,50.7,13.45Z"
                  />
                </g>
              </g>
            </svg>
            <img
              src="Poké_Ball_icon.svg"
              alt="pokéball"
              className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-text-900 font-bold justify-self-center">
              Maestria Metódica
            </p>
            <p className="text-xs text-text-700">
              Conquistou a habilidade de implementar métodos
            </p>
          </div>
        </div>
        {Array.from({ length: 14 }, (_, i) => i + 1).map((item, index) => (
          <div
            className="flex flex-row gap-3 w-full h-24 bg-background-200 shadow-lg rounded-full items-center p-4"
            key={index}
          >
            {index % 2 === 0 ? (
              <svg
                className="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 132.44 137.79"
              >
                <g id="Camada_2" data-name="Camada 2">
                  <g id="Camada_2-2" data-name="Camada 2">
                    <path
                      className="fill-[#656567]"
                      d="M47.86,1.29A164.78,164.78,0,0,1,96.56,2.4q5.46,1,10.82,2.4c4.56,1.21,25.06,5.42,25.06,11.76,0,40.7-12.43,81-48.48,104.09-10.93,7-21.09,6.95-32.1.36C34,110.33,21.45,93.44,13.43,74.5A178.17,178.17,0,0,1,4.16,45.05C2.63,38.36-3.46,22,2.7,16.56c7.89-7,17.87-9.88,28-12.22A171.42,171.42,0,0,1,47.86,1.29ZM68,13.49c-15.78-.62-30.87,2.36-45.75,6.94-4.19,1.29-5.81,3.71-5.68,8a120.23,120.23,0,0,0,7.11,37.09C30,82.92,40.09,97.27,55.78,107.61c8.74,5.76,16.6,5.77,24.58-.83.38-.32.81-.58,1.2-.89,26-19.84,36.08-47.16,37-78.81.11-3.9-2.2-5.54-5.53-6.59C98.3,15.84,83.39,12.78,68,13.49Z"
                    />
                    <path
                      className="fill-[#4c4b4e]"
                      d="M62.21,137.32c-14.3-2.79-25-14.62-33-26.17C19.68,97.37,15,82.67,10.46,66.87c2.53,6.48,3.8,9.56,4.71,11.57a37.53,37.53,0,0,0,2.54,4.71c14.85,23.6,17,25.87,32.3,36.57a36.23,36.23,0,0,0,4.51,2.72c10.1,5,19.39,4.65,29.44-1.79,16.44-10.54,27.57-23.74,35.89-41.26C121,76.87,122.21,74,124.12,69c-2.46,6.43-3.63,13.37-6.2,19.83a99.16,99.16,0,0,1-21.06,32.54C90.54,127.82,82.92,134,74.18,136.7A24.13,24.13,0,0,1,62.21,137.32Z"
                    />
                    <path
                      className="fill-[#4e4e4d]"
                      d="M68,13.49c15.36-.71,30.27,2.35,45,7,3.33,1.05,5.64,2.69,5.53,6.59-.87,31.65-10.94,59-36.95,78.81-.39.31-.82.57-1.2.89-8,6.6-15.84,6.59-24.58.83C40.09,97.27,30,82.92,23.71,65.56A120.23,120.23,0,0,1,16.6,28.47c-.13-4.33,1.49-6.75,5.68-8C37.16,15.85,52.25,12.87,68,13.49Z"
                    />
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                className="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 129.44 149.34"
              >
                <g id="Camada_2" data-name="Camada 2">
                  <g id="Camada_1-2" data-name="Camada 1">
                    <path
                      className="fill-[#656567]"
                      d="M31.12,1C35.15-.78,40.83.34,45,.34l22,0,16.66,0c6.23,0,12-2,16.44,3.4,7.79,9.32,14.75,19.47,22.7,28.6,3.32,3.83,5.9,7.53,6.51,12.74,1,8.42-3.07,17.53-4.91,25.66-1.9,8.35-3.3,16.77-4.87,25.18-.62,3.31-.88,13.38-4.09,15.2-13.29,7.51-26.68,14.84-39.81,22.62-7.17,4.26-13.72,4.44-21,.2-14-8.17-28.36-15.88-42.56-23.78-.48-1.75-1.09-3.47-1.42-5.25-3.18-17-6.3-34.11-9.58-51.16C.37,50.23-.31,46.63.15,43.07.68,38.9,3,36.63,5.52,33.6c3.25-3.89,6.19-8.16,9.27-12.19C19.4,15.39,23.55,8.7,28.47,3A7.51,7.51,0,0,1,31.12,1ZM50.7,13.45a37.18,37.18,0,0,1-4.48,0c-5.86-.71-10.07,1.37-13.48,6.36C27.68,27.19,22,34.19,16.6,41.34c-1.89,2.49-3,5.1-2.35,8.33q4.37,23.53,8.59,47.1A8.36,8.36,0,0,0,27.31,103q16.82,9.26,33.57,18.64a7.5,7.5,0,0,0,8,.07q15.8-9,31.67-18a9.67,9.67,0,0,0,4.88-7.1c3.12-15.82,6.24-31.64,9.48-47.44A8.86,8.86,0,0,0,113,41.31c-6.17-7.63-12.36-15.23-18.36-23a9.87,9.87,0,0,0-8.56-4.09C74.29,14.3,62.49,14.32,50.7,13.45Z"
                    />
                    <path
                      className="fill-[#4c4b4e]"
                      d="M58.62,148.71c-6.4-1.86-11.85-6.78-17.52-10.15-6.59-3.92-13.2-7.81-19.9-11.56s-9.55-9.34-9.15-16.83c14.2,7.9,28.52,15.61,42.56,23.78,7.28,4.24,13.83,4.06,21-.2,13.13-7.78,26.89-15.36,40.17-22.87-.09,7.79-3.91,13.53-10.79,17.46-5,2.85-10,5.69-15,8.58-4.78,2.77-9.14,6.34-14.14,8.85C70.55,148.45,64.48,150.41,58.62,148.71Z"
                    />
                    <path
                      className="fill-[#4e4e4d]"
                      d="M50.7,13.45c11.79.87,23.59.85,35.39.78a9.87,9.87,0,0,1,8.56,4.09c6,7.76,12.19,15.36,18.36,23a8.86,8.86,0,0,1,1.91,7.88c-3.24,15.8-6.36,31.62-9.48,47.44a9.67,9.67,0,0,1-4.88,7.1q-15.89,8.91-31.67,18a7.5,7.5,0,0,1-8-.07Q44.14,112.21,27.31,103a8.36,8.36,0,0,1-4.47-6.21q-4.23-23.56-8.59-47.1c-.6-3.23.46-5.84,2.35-8.33C22,34.19,27.68,27.19,32.74,19.78c3.41-5,7.62-7.07,13.48-6.36A37.18,37.18,0,0,0,50.7,13.45Z"
                    />
                  </g>
                </g>
              </svg>
            )}
            <div className="flex flex-col">
              <p className="text-text-900 font-bold justify-self-center">
                {index % 2 === 0 ? "Conquista X" : "Conquista Y"}
              </p>
              <p className="text-xs text-text-700">Realizou determinada ação</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
