import "./button.scss";

interface Props {
    children: string | JSX.Element | JSX.Element[];
    isPrimary?: true | boolean;
    handleOnClick: () => void;
}

export default function Button({children, isPrimary, handleOnClick}: Props) {
  return (
    isPrimary ? (
        <button className="primary-button" onClick={handleOnClick}>
            {children}
        </button>
    ) : (
        <button className="secondary-button">
            {children}
        </button>
    )
  )
}
