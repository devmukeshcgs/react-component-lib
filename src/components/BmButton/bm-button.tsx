import React from "react";

interface ButtonProps {
    label: string;
}

const BmButton = (props: ButtonProps) => {
    return <button>{props.label}</button>
}

export default BmButton;