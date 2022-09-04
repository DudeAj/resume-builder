import Simple from "./simple/simple";
import Colorful from "./colorful/colorful";
import { useSelector } from "react-redux";
import Peach from "./peach/peach";
import Template1 from "../assets/Template/template1.jpg";
import Template2 from "../assets/Template/template2.jpg";
import Template3 from "../assets/Template/template3.jpg";

export const Templates = [
  {
    id: 1,
    name: "Simple",
    img: Template1,
  },
  {
    id: 2,
    name: "Colorful",
    img: Template2,
  },
  {
    id: 3,
    name: "Peach",
    img: Template3,
  },
];

const SelectedTemplate = (id) => {
  const data = useSelector((state) => state.data);

  const select = Templates.find(item => {
    if(item.id === 4) {
      return item;
    }
  });
  // return select ? select : Templates[0];
  

  switch (id) {
    case 1:
      return {
        id: 1,
        name: "Simple",
        temp: <Simple data={data} />,
        img: Template1,
      };

    case 2:
      return {
        id: 2,
        name: "Colorful",
        temp: <Colorful data={data} />,
        img: Template2,
      };

    case 3:
      return {
        id: 3,
        name: "Peach",
        temp: <Peach data={data} />,
        img: Template3,
      };
    default:
      return {
        id: 1,
        name: "Default",
        temp: <Simple data={data} />,
        img: Template1,
      };
  }
};

export default SelectedTemplate;
