import { useDroppable } from "@dnd-kit/core";
import { Project } from "../DndMainComp";
import Radiobuttons from "./Radiobuttons";
import Singlelinefield from "./Singlelinefield";
import Tasknamefield_comp from "./Tasknamefield_comp";

interface Maindrops_props {
  item: Project["taskslist"][0];
  index: number;
  setComponents: (newArray: Project[]) => void;
  components: Project[];
}

const Maindrops: React.FC<Maindrops_props> = ({
  item,
  index,
  setComponents,
  components,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: index,
  });

  // const style = {
  //   color: isOver ? "green" : undefined,
  //   backgroundColor: isOver ? "lightgreen" : undefined,
  // };

  return (
    <div
      key={item.id}
      ref={setNodeRef}
      // style={style}
      className={`mb-4 p-4 ${isOver ? "bg-blue-100" : "bg-white"}`}
    >
      <Tasknamefield_comp
        key={`taskname-${components[0].id}-${index}`}
        item={item}
        index={index}
      />

      {!item.taskcomponents[0].textfield.disabled && (
        <Singlelinefield
          key={`singleline-${components[0].id}-${index}`}
          item={item}
          index={index}
          setComponents={setComponents}
          components={components}
        />
      )}
      {/* <Radiobtndump /> */}
      {item.taskcomponents[0].radiobutton.disabled == false && (
        <Radiobuttons
          key={`radiobutton-${components[0].id}-${index}`}
          taskindex={index}
          setComponents={setComponents}
          components={components}
        />
      )}
    </div>
  );
};

export default Maindrops;
