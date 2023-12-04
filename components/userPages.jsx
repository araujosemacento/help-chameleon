/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { useMobile } from "@/context/MobileContext";
import { Tooltip, Switch } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { Sair, SairTrigger, SairContent } from "@/components/Sair";
import { Pop, PopTrigger, PopContent } from "@/components/ExerciciosPop";
import { updateProfile } from "firebase/auth";

export function Exercicios() {
  const { user } = useAuth();
  const { windowSize } = useMobile();

  const [buttonClicked, setButtonClicked] = useState([]);

  const imagemRef = useRef();
  const [larguraDaImagem, setLarguraDaImagem] = useState(null);
  const [alturaDaImagem, setAlturaDaImagem] = useState(null);

  useEffect(() => {
    const handleImageLoad = () => {
      const currentImageRef = imagemRef.current;

      // Verifica se a imagem carregou corretamente
      if (currentImageRef && currentImageRef.complete) {
        setLarguraDaImagem(currentImageRef.width);
        setAlturaDaImagem(currentImageRef.height);
      }
    };

    // Adiciona um ouvinte de evento para detectar quando a imagem é carregada
    const currentImageRef = imagemRef.current;
    if (currentImageRef) {
      currentImageRef.addEventListener("load", handleImageLoad);
      window.addEventListener("resize", handleImageLoad);

      // Remove o ouvinte de evento quando o componente é desmontado
      return () => {
        currentImageRef.removeEventListener("load", handleImageLoad);
        window.removeEventListener("resize", handleImageLoad);
      };
    }
  }, [windowSize]);

  //console.log(larguraDaImagem);
  //console.log(alturaDaImagem);

  // const handleButtonClick = (state, index) => {
  //   const newButtonClicked = [...buttonClicked];
  //   newButtonClicked[index] = state;
  //   setButtonClicked(newButtonClicked);
  // };

  // useEffect(() => {
  //   handleButtonClick(false, 0);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <section className="flex flex-col relative w-full h-full justify-start items-center gap-8">
        <img
          ref={imagemRef}
          src="/background_exercicios.jpg"
          alt="background"
          className="absolute w-full"
        />

        <div
          style={{
            transform: `translate(${larguraDaImagem * -0.175}px, ${
              alturaDaImagem * 0.23
            }px)`,
          }}
        >
          <Pop>
            <PopTrigger>
              <button
                className={`clicked flex rounded-[50%] w-[8vw] h-[5.5vw] shadow-[0_0.75vw_0_0_color(var(--success-600))] md:active:shadow-none bg-success-300 justify-center items-center transition-all active:translate-y-[0.75vw]`}
              >
                <svg
                  width="65"
                  height="45"
                  className="w-[3.75vw] fill-success-500"
                  viewBox="0 0 75 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_733_114)">
                    <path d="M27.2618 45L0 24.54L13.71 14.6937L27.4105 24.9765L61.4386 0L75 9.95541L27.2618 45Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_733_114"
                      x="0"
                      y="0"
                      width="75"
                      height="49"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                        values="0 0 0 0 0.266667 0 0 0 0 0.533333 0 0 0 0 0.2 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_733_114"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </PopTrigger>
            <PopContent
              state={"completado"}
              caminho={"/exercicios/1"}
              titulo={"Exercício 1"}
              descricao={
                "Neste exercício você irá praticar a criação de objetos e atribuição de propriedades."
              }
            />
          </Pop>
        </div>

        <div
          style={{
            transform: `translate(${larguraDaImagem * -0.245}px, ${
              alturaDaImagem * 0.245
            }px)`,
          }}
        >
          <Pop>
            <PopTrigger>
              <button
                className={`clicked flex rounded-[50%] w-[8vw] h-[5.5vw] shadow-[0_0.75vw_0_0_color(var(--accent-600))] md:active:shadow-none bg-accent-300 justify-center items-center transition-all active:translate-y-[0.75vw]`}
              >
                <svg
                  width="59"
                  height="47"
                  className="w-[3.75vw] aspect-square fill-accent-600"
                  viewBox="0 0 59 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_733_669)">
                    <path d="M27.1838 1.70294C28.0281 -0.376073 30.9719 -0.376068 31.8162 1.70294L37.286 15.1702C37.6688 16.1129 38.5848 16.7295 39.6022 16.7295H55.8885C58.4424 16.7295 59.3528 20.1075 57.1448 21.3909L44.9995 28.4501C43.9229 29.0759 43.471 30.3986 43.9396 31.5523L48.7887 43.4916C49.6856 45.7 47.2769 47.7915 45.2161 46.5937L30.7563 38.1892C29.9796 37.7377 29.0204 37.7377 28.2437 38.1892L13.7839 46.5937C11.7231 47.7915 9.31437 45.7 10.2113 43.4916L15.0604 31.5523C15.529 30.3986 15.0771 29.0759 14.0005 28.4501L1.85525 21.3909C-0.352778 20.1075 0.55763 16.7295 3.11154 16.7295H19.3978C20.4152 16.7295 21.3312 16.1129 21.714 15.1702L27.1838 1.70294Z" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_733_669"
                      x="0.607422"
                      y="0.143555"
                      width="57.7852"
                      height="50.7998"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                        result="effect1_innerShadow_733_669"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </PopTrigger>
            <PopContent
              state={"habilitado"}
              caminho={"/exercicios/2"}
              titulo={"Exercício 2"}
              descricao={
                "Neste exercício você irá praticar a implementação de métodos em objetos."
              }
            />
          </Pop>
        </div>
      </section>
    </div>
  );
}

export function Nivel({ redirect }) {
  const { user } = useAuth();
  const router = useRouter();

  const handleRedirect = () => {
    redirect("refazer");
  };

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
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
          onClick={handleRedirect}
          className="p-2 px-4 text-center font-bold text-lg bg-accent-500 rounded-2xl transition shadow-[0_5px_0_0_color(var(--accent-700))] hover:shadow-[0_5px_0_0_color(var(--accent-500))] hover:bg-accent-400 active:translate-y-[5px] active:shadow-none text-white self-center"
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-accent-500 shadow-[0_5px_0_0_color(var(--accent-700))]">
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-success-500 shadow-[0_5px_0_0_color(var(--success-700))]">
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-success-500 shadow-[0_5px_0_0_color(var(--success-700))]">
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-accent-500 shadow-[0_5px_0_0_color(var(--accent-700))]">
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-success-500 shadow-[0_5px_0_0_color(var(--success-700))]">
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-accent-500 shadow-[0_5px_0_0_color(var(--accent-700))]">
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-text-500 shadow-[0_5px_0_0_color(var(--text-700))]">
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-text-500 shadow-[0_5px_0_0_color(var(--text-700))]">
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
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <div className="flex flex-row h-1/5 place-content-center rounded-b-2xl bg-text-500 shadow-[0_5px_0_0_color(var(--text-700))]">
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
  const [activaded, setActivaded] = useState([]);

  useEffect(() => {
    setActivaded(localStorage.getItem("ranking") === "ativado");
  }, []);

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
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
              onChange={() => {
                localStorage.setItem(
                  "ranking",
                  !activaded ? "ativado" : "desativado"
                );
                setActivaded(!activaded);
              }}
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
                    className={`flex flex-col gap-4 md:flex-row w-full p-4 rounded-3xl font-semibold justify-between text-lg transition-all duration-500 border-2 ${
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

  const [editarUsuario, setEditarUsuario] = useState(false);
  const [editarBiografia, setEditarBiografia] = useState(false);

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <section className="flex flex-col-reverse lg:flex-row w-full items-center justify-between p-8 px-16">
        <div className="flex flex-col gap-3 text-justify w-full md:w-[40vw]">
          <h2
            contentEditable={editarUsuario}
            className="relative text-3xl font-bold mb-1"
          >
            {user && user.displayName}
            <span
              onClick={() => setEditarUsuario(!editarUsuario)}
              className="material-symbols-outlined absolute right-0 top-0 scale-75 aspect-square text-text-900 hover:text-accent-500 rounded-lg p-1 active:bg-accent-700/25 text-[36px]"
            >
              edit
            </span>
          </h2>
          <p className="font-semibold text-lg">Nível: Iniciante</p>
          <p className="text-text-900 font-semibold text-lg">
            Pontuação: 850XP
          </p>
          <p
            contentEditable={editarBiografia}
            className="relative font-medium text-base"
          >
            {localStorage.getItem("biografia")}
            <span
              onClick={() => setEditarBiografia(!editarBiografia)}
              className="material-symbols-outlined absolute right-0 top-0 scale-75 aspect-square text-text-900 hover:text-accent-500 rounded-lg p-1 active:bg-accent-700/25 text-[36px]"
            >
              edit
            </span>
          </p>
        </div>
        <img
          src={`${user ? user.photoURL : "https://i.pravatar.cc/300"}`}
          alt="Avatar"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-40 md:h-40 lg:w-36 lg:h-36 rounded-full m-8 mt-0"
        />
      </section>
      <hr className="my-2 border-accent-950 w-[calc(100%-128px)] self-center" />
      <p className="ml-16 mt-8 text-xl font-bold">Conquistas</p>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-8 px-16">
        <div className="flex flex-row gap-3 w-full h-24 bg-background-200 rounded-2xl items-center p-4">
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
              src="Poké_Ball_icon.svg.png"
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
        {Array.from({ length: 11 }, (_, i) => i + 1).map((item, index) => (
          <div
            className="flex flex-row gap-3 w-full h-24 bg-gray-200 rounded-2xl items-center p-4"
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
                {index === 0
                  ? "Corporação Cápsula"
                  : index === 1
                  ? "Mestre Pokémon"
                  : index === 2
                  ? "Instinto Superior"
                  : index === 3
                  ? "Mestre dos Magos"
                  : index === 4
                  ? "Super Saiyajin"
                  : index === 5
                  ? "Batalha Galáctica"
                  : index === 6
                  ? "Satoru Gojou"
                  : index === 7
                  ? "O Espadachim Negro"
                  : index === 8
                  ? "”Você não tem inimigos”"
                  : index === 9
                  ? "Rei dos piratas"
                  : "O Herói Número 1"}
              </p>
              <p className="text-xs text-text-700">
                {index === 0
                  ? "Domine o conceito de encapsulamento."
                  : index === 1
                  ? "Conclua todos os exercícios da trilha Pokémon."
                  : index === 2
                  ? "Conclua todos os exercícios da trilha de Dragon Ball."
                  : index === 3
                  ? "Conclua todos os exercícios da trilha de Caverna do Dragão."
                  : index === 4
                  ? "Quebre seus limites subindo seu nível."
                  : index === 5
                  ? "Participe do Ranking."
                  : index === 6
                  ? "Fique em primeiro lugar no Ranking."
                  : index === 7
                  ? "Gaste as três vidas em um desafio."
                  : index === 8
                  ? "Desative o Ranking."
                  : index === 9
                  ? "Conclua todos os desafios."
                  : "Atinja o nível avançado."}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export function Refazer({ redirect }) {
  const router = useRouter();

  const [primeiraVez, setPrimeiraVez] = useState([]);

  useEffect(() => {
    setPrimeiraVez(localStorage.getItem("primeiroTesteDeNivel") === "true");
  }, []);

  const handleRedirect = () => {
    redirect("nivel");
  };

  return (
    <div className="fixed z-10 flex flex-col w-full h-full bg-background-50">
      <div className="flex flex-row w-full p-10 pb-4 items-center gap-2">
        <div className="flex flex-row w-full items-center gap-2">
          <img src="/magomeleon.png" className="w-10"></img>
          <h2 className="text-xl text-accent-600">ProgQuest</h2>
        </div>
        {!primeiraVez && (
          <Sair>
            <SairTrigger>
              <button className="flex w-fit-h-fit">
                <span className="material-symbols-outlined aspect-square text-text-900 hover:text-accent-500 rounded-lg p-1 active:bg-accent-700/25 text-[36px]">
                  close
                </span>
              </button>
            </SairTrigger>
            <SairContent caminho={"nivel"} />
          </Sair>
        )}
      </div>
      <main className="flex flex-col md:flex-row w-full h-full p-4">
        <section className="flex flex-col w-full h-1/4 md:w-4/12 md:h-full place-content-center p-4 md:items-center md:ml-16">
          <img
            className="h-full md:h-fit md:mb-24 md:w-3/4 -scale-x-100"
            src="/goku.png"
            alt="Mestre dos Camaleagos"
          />
        </section>
        <section className="flex flex-col w-full h-3/4 md:w-8/12 md:h-full md:px-24 justify-evenly">
          <h3 className="text-xl font-bold self-center">
            Vamos ver em que nível você está!
          </h3>
          <p className="text-justify">
            Reserve um tempo para responder algumas perguntas que nos ajudarão a
            avaliar o seu nível de conhecimento em programação!
            <br />
            <br />
            Esse teste curtinho é um jeito simples e preciso de garantir que
            você vai começar no lugar certo. Vamos ver em que nível você está!
          </p>
          <div className="flex flex-col w-full"></div>
          <button
            onClick={() => {
              router.push("/nivelamento/1");
            }}
            className="p-2 px-4 text-center font-bold text-lg bg-accent-500 rounded-2xl transition shadow-[0_5px_0_0_color(var(--accent-700))] hover:shadow-[0_5px_0_0_color(var(--accent-500))] hover:bg-accent-400 active:translate-y-[5px] active:shadow-none text-white self-end"
          >
            Iniciar Teste de Nível
          </button>
        </section>
      </main>
    </div>
  );
}
