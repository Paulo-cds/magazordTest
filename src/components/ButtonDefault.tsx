interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'submit' | 'reset' | 'button';
    action: ()=> void;
    title: string;
    disabled: boolean;
}

const ButtonDefault: React.FC<ButtonProps> = ({ type,action, title, disabled }) => {
    return (
        <button
            type={type}
            onClick={() => action()}
            disabled={disabled}
            className="w-full h-10 disabled:opacity-50 bg-linear-to-r from-buttonColorLeft to-buttonColorRight rounded cursor-pointer font-normal"
        >
            {title}
        </button>
    )
}

export default ButtonDefault