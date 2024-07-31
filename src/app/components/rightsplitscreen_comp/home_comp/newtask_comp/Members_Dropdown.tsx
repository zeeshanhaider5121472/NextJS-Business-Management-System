interface Members_DropdownProps {
  selectedMembers: string[];
  setSelectedMembers: (component: string[]) => void;
  remainingMembers: string[];
  setRemainingMembers: (component: string[]) => void;
}

const Members_Dropdown: React.FC<Members_DropdownProps> = ({
  selectedMembers,
  setSelectedMembers,
  remainingMembers,
  setRemainingMembers,
}) => {
  return (
    <div>
      <p className="text-gray-500 mt-4 p-0.5">
        Add members to your process
      </p>

      <select
        className="mt-1 mb-4 px-4 py-2 border-2 border-gray-300 focus:border-none select select-bordered w-full"
        value=""
        onChange={(e) => {
          setSelectedMembers([...selectedMembers, e.target.value]);
          setRemainingMembers(
            remainingMembers.filter((item) => item !== e.target.value)
          );
        }}
      >
        <option value="" disabled>
          Select Members
        </option>
        {remainingMembers.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* delete this later */}
      <ul>
        {selectedMembers.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Members_Dropdown;
