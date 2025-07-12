import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


interface ICard2Props {
    img: string;
    title: string;
    description?: string;
    price?: string;
}

const Card2 = (props: ICard2Props) => {
    return (
        <Card className="flex flex-col gap-3 w-3xl max-w-3xs max-h-96 items-center justify-center p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
                src={props.img}
                alt="Monitor"
                width={200}
                height={200}
                className="flex w-32 h-auto object-cover"
            />
            <h3 className="flex flex-1 text-lg text-justify font-semibold"
            style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                >{props.title}</h3>
            <p
                className="text-sm text-muted-foreground line-clamp-2"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {props.description}
            </p>
            <Button className="px-4 py-2 w-full font-medium bg-primary rounded-md text-white hover:bg-primary/70 transition-colors">
                {props.price ? `R$ ${props.price}` : "Comprar"}
            </Button>
        </Card>
    )
};

export default Card2;