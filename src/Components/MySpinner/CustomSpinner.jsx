import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "fuchsia",
};

const CustomSpinner = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <RingLoader
                color={'#2629b7'}
                loading={true}
                cssOverride={override}
                size={200}
            />
        </div>
    );
};

export default CustomSpinner;