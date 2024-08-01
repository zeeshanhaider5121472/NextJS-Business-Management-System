"use client";

import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface TestFieldProps {
  name: string;
  value: number;
}

const TestField: React.FC<TestFieldProps> = ({ name, value }) => {
  console.log("checking TF");

  const textcomp = <div>HI</div>;
  const [, drag] = useDrag(() => ({
    type: "FIELD",
    item: { name, value, textcomp },
  }));

  return (
    <div
      ref={drag as unknown as React.LegacyRef<HTMLDivElement>}
      className="cursor-move border p-4 mb-2"
    >
      {name}
    </div>
  );
};

type ComponentState = {
  groupName: string;
  components: {
    id: string;
    component: React.ReactNode;
    label: string;
  }[];
}[];
interface DropTargetProps {
  name: string;
  setComponents: React.Dispatch<
    React.SetStateAction<
      {
        groupName: string;
        components: {
          id: string;
          component: React.ReactNode;
          label: string;
        }[];
      }[]
    >
  >;
}

const DropTarget: React.FC<DropTargetProps> = ({ name, setComponents }) => {
  console.log("checking DT");

  const [cont, setCont] = useState<number>(0);
  const [, drop] = useDrop(() => ({
    accept: "FIELD",
    drop: async (item: {
      name: string;
      value: number;
      textcomp: React.ReactNode;
    }) => {
      setCont(cont + item.value);
      console.log(`${item.name}${name}${item.value}${item.textcomp}`);

      setComponents((prevGroups) => {
        const newGroups = [...prevGroups];
        newGroups[0].components.push({
          id: "text",
          component: item.textcomp,
          label: "text",
        });
        return newGroups;
      });
    },
  }));

  return (
    <div
      ref={drop as unknown as React.LegacyRef<HTMLDivElement>}
      className="border p-4 mb-2"
    >
      {name}
    </div>
  );
};

const TestingTemplate = () => {
  console.log("checking TT");
  const [components, setComponents] = useState<ComponentState>([
    {
      groupName: "Input Field Items",
      components: [
        {
          id: "singleLine",
          component: (
            <input
              className="p-2 border rounded"
              placeholder="Single Line Input"
            ></input>
          ),
          label: "Single Line",
        },
        {
          id: "multiLine",
          component: <div className="p-2 border rounded">Multiline</div>,
          label: "Multi Line",
        },
      ],
    },
  ]);
  console.log(components);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-row min-w-screen bg-white">
        <div className="flex flex-col w-full">
          <DropTarget name="a" setComponents={setComponents} />
          {components.map((item, mainindex) => (
            <div className="flex flex-col gap-2" key={item.groupName}>
              {item.components.map((component, compindex) => (
                <div key={component.id}>{component.component}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <TestField name="TextField" value={5} />
        </div>
      </div>
    </DndProvider>
  );
};

export default TestingTemplate;
// "use client";

// import React from "react";
// interface TestFieldProps {
//   name: string;
// }
// const TestField: React.FC<TestFieldProps> = ({ name }) => {
//   return <div>{name}</div>;
// };

// const TestingTemplate = () => {
//   return (
//     <div className="flex flex-row min-w-screen bg-white">
//       <div className="flex flex-col w-full">
//         <div>a</div>
//         <div>b</div>
//       </div>
//       <div className="flex flex-col w-full">
//         <TestField name="Haider" />
//         <TestField name="awan" />
//       </div>
//     </div>
//   );
// };

// export default TestingTemplate;

// "use client";
// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// // Define types
// type FieldType = "radiobutton" | "checkbox" | "textfield";

// interface DraggableItemProps {
//   type: FieldType;
//   text: string;
// }

// interface Field {
//   type: FieldType;
// }

// interface Task {
//   id: number;
//   name: string;
//   fields: Field[];
// }

// interface TaskProps extends Task {
//   addField: (taskId: number, fieldType: FieldType) => void;
// }

// // Component for draggable items
// const DraggableItem: React.FC<DraggableItemProps> = ({ type, text }) => {
//   const [, drag] = useDrag<{ type: FieldType; text: string }, unknown, unknown>(
//     () => ({
//       type: "FIELD",
//       item: { type, text },
//     })
//   );

//   return (
//     <div
//       ref={drag as unknown as React.LegacyRef<HTMLDivElement>}
//       className="draggable-item"
//     >
//       {text}
//     </div>
//   );
// };

// // Component for tasks
// const Task: React.FC<TaskProps> = ({ id, name, fields, addField }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "FIELD",
//     drop: (item: { type: FieldType }) => addField(id, item.type),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop as unknown as React.LegacyRef<HTMLDivElement>}
//       className={`task ${isOver ? "task-over" : ""}`}
//     >
//       <h3>{name}</h3>
//       {fields.map((field, index) => (
//         <FormField key={index} type={field.type} />
//       ))}
//     </div>
//   );
// };
// // Component to render form fields
// const FormField: React.FC<{ type: FieldType }> = ({ type }) => {
//   switch (type) {
//     case "radiobutton":
//       return <input type="radio" />;
//     case "checkbox":
//       return <input type="checkbox" />;
//     case "textfield":
//       return <input type="text" />;
//     default:
//       return null;
//   }
// };

// // Main component
// const TestingTemplate: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([
//     { id: 1, name: "Task 1", fields: [] },
//     { id: 2, name: "Task 2", fields: [] },
//   ]);

//   const addField = (taskId: number, fieldType: FieldType) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId
//           ? { ...task, fields: [...task.fields, { type: fieldType }] }
//           : task
//       )
//     );
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="process-manager">
//         <div className="task-area">
//           {tasks.map((task) => (
//             <Task key={task.id} {...task} addField={addField} />
//           ))}
//         </div>
//         <div className="field-types">
//           <DraggableItem type="radiobutton" text="Radio Button" />
//           <DraggableItem type="checkbox" text="Checkbox" />
//           <DraggableItem type="textfield" text="Text Field" />
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default TestingTemplate;
