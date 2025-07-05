export function Inputbox({ label, placeHolder, onChange }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder={placeHolder}
          className="w-full px-2 py-1 border rounded border-slate-200"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
