import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const SortableItem = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    ...props.style, // Aplica os estilos passados como props
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const chartStyle = {
    width: "100%", // O gráfico ocupa toda a largura disponível
    height: "100%", // O gráfico ocupa toda a altura disponível
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <h3>{props.name}</h3>
      <div style={chartStyle}>{props.chart}</div>
    </div>
  );
};
