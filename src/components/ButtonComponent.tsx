import React from "react";
import { JsxAttributes } from "typescript";

type Props = {
    ref?: React.Ref<any>
} & React.HTMLAttributes<HTMLButtonElement>;

const ButtonComponent = (props: Props) => {
    return (
        <button {...props} />
    )
}

export default ButtonComponent;