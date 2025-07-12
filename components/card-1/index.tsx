import Image from "next/image";

interface ICard1Props {
    img: string;
    title: string;
}

const Card1 = (props: ICard1Props) => {
    return (
        <div className="flex mt-20 hover:text-primary duration-150 cursor-pointer hover:-translate-y-1">
            <div className="flex flex-col w-70 h-30 items-center justify-end gap-2 bg-card p-4 rounded-lg shadow-lg">
                <Image src={props.img} width={300} height={300} alt={props.title} className="flex rounded-full w-30 h-30 border-4 border-background object-cover" />
                <h3 className="text-lg font-semibold">{props.title}</h3>
            </div>
        </div>
    )
}

export default Card1;