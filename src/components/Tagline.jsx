import Brackets from "../assets/svg/Brackets.jsx";

const Tagline = ({className,  children}) => {
    return (
        <div className={`tagline flex items-center ${className || ""}`}>
            {Brackets("left")}
            <div className="mx-3 text-n-3">{children}</div>
            {Brackets("right")}
        </div>
    )
}

export  default  Tagline;