import Image from "next/image";

export default function Perfil(){
    return(
        <div className={`flex w-full h-screen items-center justify-center`}>
            <div className={`flex bg-accent-500 rounded-2xl w-1/2 h-[20vh] space-evenly`}>
                <div className={`flex flex-col space-center justify-center px-10 w-2/3`}>
                </div>
                <div className={`flex w-1/3`}>
                    <Image src={"https://api.iconify.design/material-symbols:account-circle.svg"} classname={`h-[10px]`} width={10} height={10} layout="responsive" objectFit="contain" />
                </div>
            </div>
        </div>
    );
}