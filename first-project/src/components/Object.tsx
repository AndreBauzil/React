type ObjectProps = {
    text?: string;
}

export function Object(props: ObjectProps) {
    return (
        <p>{props.text}</p>
    )
}
