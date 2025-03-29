type ItemType = {
    value:string;
    text:string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    setItem:React.Dispatch<React.SetStateAction<string>>;
    setPage:React.Dispatch<React.SetStateAction<number>>;
    optionsSelect: Array<ItemType>;
  }

const SelectDefault: React.FC<SelectProps> = ({ optionsSelect, setItem, setPage }) => {
    return (
        <select
            onChange={e=>{setItem(e.target.value); setPage(1)}}
            className="py-1 px-3 rounded-full h-10 disabled:opacity-50 bg-buttonColorLeft bg-linear-to-r from-buttonColorLeft to-buttonColorRight cursor-pointer font-normal"
        >
            {optionsSelect.map((item)=>(
                <option value={item.value}>{item.text}</option>
            ))}
        </select>
    )
}

export default SelectDefault