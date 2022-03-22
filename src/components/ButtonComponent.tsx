import React from "react";
import { JsxAttributes } from "typescript";

type Props = {
    ref?: React.Ref<any>
} & React.HTMLAttributes<HTMLButtonElement>;

const ButtonComponent: React.FC<Props> = (props) => {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}

export default ButtonComponent;