interface TagProps {
    bg_color: string;
    text_color: string;
    text: string;
}


const Tag = ({ bg_color, text_color, text} : TagProps) => {
    return <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-fit font-semibold p-2 rounded-md ${bg_color} ${text_color}`}>
        {text}
    </div>;
}

export default Tag;