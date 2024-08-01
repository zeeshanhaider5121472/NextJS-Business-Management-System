interface FormItemProps {
  icon: React.ReactElement;
  label: string;
}

const FormItem: React.FC<FormItemProps> = ({ icon, label }) => (
  <div className="flex flex-col items-center p-4 border rounded-lg">
    {icon}
    <span className="mt-2 text-sm">{label}</span>
  </div>
);
const Dropable = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">DrBeen Video Process</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Publish
        </button>
      </div>

      <div className="flex">
        <div className="w-3/4 pr-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-32 flex items-center justify-center">
            <p className="text-gray-500">1. Drop items here</p>
          </div>
        </div>

        <div className="w-1/4">
          <h2 className="mb-4 font-semibold">Drag Items From Here</h2>
          <div className="space-y-4">
            <h3 className="font-medium">Input Field Items</h3>
            <div className="grid grid-cols-2 gap-4">
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Single Line"
              />
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Multi Line"
              />
            </div>

            <h3 className="font-medium">Multiple Select Items</h3>
            <div className="grid grid-cols-2 gap-4">
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Radio Button"
              />
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Check Box"
              />
            </div>

            <h3 className="font-medium">Properties</h3>
            <div className="grid grid-cols-2 gap-4">
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Due Date"
              />
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Status"
              />
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Link"
              />
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Attach File"
              />
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Notes"
              />
              <FormItem
                icon={<div className="w-6 h-6 bg-gray-200"></div>}
                label="Approval"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropable;
