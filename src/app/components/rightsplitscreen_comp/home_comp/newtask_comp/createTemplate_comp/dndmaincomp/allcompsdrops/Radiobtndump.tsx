import { useState } from "react";

type Option = {
  id: string;
  label: string;
};

const Radiobtndump = () => {
  const [options, setOptions] = useState<Option[]>([
    { id: "1", label: "Education" },
    { id: "2", label: "Information" },
    { id: "3", label: "Entertainment" },
  ]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const addOption = () => {
    const newOption: Option = {
      id: Date.now().toString(),
      label: "New Option",
    };
    setOptions([...options, newOption]);
    setEditingId(newOption.id);
  };

  const handleEdit = (id: string, newLabel: string) => {
    setOptions(
      options.map((opt) => (opt.id === id ? { ...opt, label: newLabel } : opt))
    );
  };

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setEditingId(id);
  };

  const removeOption = (id: string) => {
    setOptions(options.filter((opt) => opt.id !== id));
    if (selectedOption === id) setSelectedOption(null);
  };

  return (
    <div className="max-w-full ml-16 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Radio Buttons</h2>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        {options.map((option) => (
          <div key={option.id} className="flex items-center mb-2">
            <input
              type="radio"
              id={`option-${option.id}`}
              name="category"
              className="mr-2"
              checked={editingId === option.id}
              onChange={() => handleSelect(option.id)}
            />
            {editingId === option.id ? (
              <input
                type="text"
                value={option.label}
                onChange={(e) => handleEdit(option.id, e.target.value)}
                onBlur={() => setEditingId(null)}
                className="flex-grow px-2 py-1 border rounded"
                autoFocus
              />
            ) : (
              <label
                htmlFor={`option-${option.id}`}
                className="flex-grow cursor-pointer"
                onClick={() => setEditingId(option.id)}
              >
                {option.label}
              </label>
            )}
            <button
              onClick={() => removeOption(option.id)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addOption}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        + Add Option
      </button>
    </div>
  );
};

export default Radiobtndump;
